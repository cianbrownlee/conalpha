// IPA symbols grouped by category with description and audio play button per symbol.

import { useState } from "react";
import { IPA_CATEGORIES, getSymbolsByCategory } from "../../data/ipa";
import AudioButton from "../shared/AudioButton";

/**
 * Renders the examples array for an IPA entry.
 * Each example's `bold` substring is wrapped in <strong>.
 * Falls back to plain description text if examples is empty.
 */
function renderExamples(entry) {
  if (!entry.examples || entry.examples.length === 0) {
    return <span className="ipa-symbol__desc">{entry.description}</span>;
  }
  return (
    <span className="ipa-symbol__desc">
      {entry.examples.map(({ word, bold }, i) => {
        const idx = word.indexOf(bold);
        if (idx === -1) {
          return (
            <span key={i}>
              {i > 0 ? ", " : ""}
              {word}
            </span>
          );
        }
        return (
          <span key={i}>
            {i > 0 ? ", " : ""}
            {word.slice(0, idx)}
            <strong>{bold}</strong>
            {word.slice(idx + bold.length)}
          </span>
        );
      })}
    </span>
  );
}

export default function IPABrowser({ selectedSymbols, onSelectSymbol, onPlayPhoneme }) {
  const [activeCategory, setActiveCategory] = useState("Vowels");

  const symbols = getSymbolsByCategory(activeCategory);

  return (
    <div className="ipa-browser">
      {/* Category tabs — scroll horizontally on small screens */}
      <div className="ipa-browser__tabs" role="tablist" aria-label="IPA categories">
        {IPA_CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`ipa-browser__tab${activeCategory === cat ? " ipa-browser__tab--active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Symbol grid for the active category */}
      <div className="ipa-browser__symbols" role="tabpanel">
        {symbols.map((entry) => {
          const isSelected = selectedSymbols.includes(entry.symbol);
          return (
            <div
              key={entry.symbol}
              className={`ipa-symbol${isSelected ? " ipa-symbol--selected" : ""}`}
            >
              {/* Main button: selects/deselects this symbol for assignment */}
              <button
                className="ipa-symbol__pick-btn"
                onClick={() => onSelectSymbol(entry.symbol)}
                title={entry.example ? `${entry.description} — ${entry.example}` : entry.description}
                aria-pressed={isSelected}
              >
                <span className="ipa-symbol__char">{entry.symbol}</span>
                {renderExamples(entry)}
              </button>

              <AudioButton
                phoneme={entry.symbol}
                onPlay={onPlayPhoneme}
                isLoading={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
