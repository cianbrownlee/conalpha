// Unicode writing system picker and character grid showing phonetic interpretations.

import { useState } from "react";
import { UNICODE_ALPHABETS } from "../../data/unicodeAlphabets";
import { getIPAEntry } from "../../data/ipa";
import AudioButton from "../shared/AudioButton";

/**
 * Renders the examples array for an IPA entry with bolded sound substrings.
 * Falls back to the entry's description text if no examples exist.
 */
function renderExamples(entry) {
  if (!entry) return null;
  if (!entry.examples || entry.examples.length === 0) {
    return (
      <span className="char-entry__phoneme-examples">{entry.description}</span>
    );
  }
  return (
    <span className="char-entry__phoneme-examples">
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

export default function CharacterBrowser({
  selectedAlphabetId,
  selectedSymbols,
  onSelectAlphabet,
  onSelectPhonemes,
  onPlayPhoneme,
}) {
  // Which character card is expanded to show its phoneme options
  const [expandedChar, setExpandedChar] = useState(null);

  const activeSystem =
    UNICODE_ALPHABETS.find((a) => a.id === selectedAlphabetId) ?? UNICODE_ALPHABETS[0];

  /** Collapses the expanded card when the user switches writing systems. */
  function handleSelectSystem(id) {
    setExpandedChar(null);
    onSelectAlphabet(id);
  }

  /** Clicking a character toggles its phoneme list open/closed. */
  function handleToggleChar(char) {
    // Opening a different character — clear staged phonemes so the old highlight goes away
    if (expandedChar !== char) onSelectPhonemes([]);
    setExpandedChar((prev) => (prev === char ? null : char));
  }

  /** Selecting a phoneme from the list fires onSelectPhonemes and collapses the card. */
  function handlePickPhoneme(phoneme) {
    onSelectPhonemes([phoneme], phoneme);
    setExpandedChar(null);
  }

  // Find the expanded character's full entry for rendering the panel
  const expandedEntry = expandedChar
    ? activeSystem.characters.find((c) => c.char === expandedChar) ?? null
    : null;

  return (
    <div className="character-browser">
      <p className="character-browser__system-label">Writing System</p>
      <select
        className="character-browser__system-select"
        value={activeSystem.id}
        onChange={(e) => handleSelectSystem(e.target.value)}
        aria-label="Writing system"
      >
        {UNICODE_ALPHABETS.map((system) => (
          <option key={system.id} value={system.id}>
            {system.name} — {system.region}
          </option>
        ))}
      </select>

      <div className="character-browser__grid">
        {activeSystem.characters.map((charEntry) => {
          const isExpanded = expandedChar === charEntry.char;
          // A character is "mapped" if any of its phonemes are currently selected
          const isMapped = charEntry.phonemes.some((p) => selectedSymbols.includes(p));

          return (
            <div
              key={charEntry.char}
              className={`char-entry${isMapped ? " char-entry--mapped" : ""}${isExpanded ? " char-entry--expanded" : ""}`}
            >
              <button
                className="char-entry__char-btn"
                onClick={() => handleToggleChar(charEntry.char)}
                title={charEntry.phonemes.join(", ")}
                aria-expanded={isExpanded}
              >
                {charEntry.char}
              </button>
            </div>
          );
        })}
      </div>

      {/* Full-width phoneme panel renders below the grid — never clipped */}
      {expandedEntry && (
        <div className="char-entry__phoneme-panel">
          <div className="char-entry__phoneme-panel-header">
            <span className="char-entry__phoneme-panel-char">{expandedChar}</span>
            <button
              className="char-entry__phoneme-panel-close"
              onClick={() => setExpandedChar(null)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="char-entry__phoneme-panel-list">
            {expandedEntry.phonemes.map((phoneme) => {
              const isSelected = selectedSymbols.includes(phoneme);
              const isDefault = phoneme === expandedEntry.defaultPhoneme;
              const ipaEntry = getIPAEntry(phoneme);
              return (
                <div
                  key={phoneme}
                  className={`char-entry__phoneme-row${isSelected ? " char-entry__phoneme-row--selected" : ""}`}
                >
                  <button
                    className="char-entry__phoneme-pick"
                    onClick={() => handlePickPhoneme(phoneme)}
                    aria-pressed={isSelected}
                  >
                    <span className="char-entry__phoneme-symbol">/{phoneme}/</span>
                    {isDefault && (
                      <span className="char-entry__phoneme-default-mark" title="Most common reading">
                        ★
                      </span>
                    )}
                    {renderExamples(ipaEntry)}
                  </button>
                  <AudioButton phoneme={phoneme} onPlay={onPlayPhoneme} isLoading={false} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
