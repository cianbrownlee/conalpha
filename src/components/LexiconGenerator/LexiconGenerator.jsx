/** LexiconGenerator.jsx — container for the Lexicon Generator tab */
import LanguageSelector from "./LanguageSelector";
import WordGrid from "./WordGrid";

export default function LexiconGenerator({
  activeAlphabet,
  alphabets,
  activeAlphabetId,
  onSwitchAlphabet,
  onCreateAlphabet,
  onRenameAlphabet,
  onDeleteAlphabet,
  findGlyphByPhoneme,
  onExportActiveAlphabet,
  onExportAllAlphabets,
  onImportAlphabetFile,
}) {
  return (
    <div>
      <p>LexiconGenerator container — stub</p>
    </div>
  );
}