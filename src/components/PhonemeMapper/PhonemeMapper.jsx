/** PhonemeMapper.jsx — container for the Phoneme Mapper tab */
import IPABrowser from "./IPABrowser";
import CharacterBrowser from "./CharacterBrowser";
import MappingPanel from "./MappingPanel";

export default function PhonemeMapper({
  activeAlphabet,
  alphabets,
  activeAlphabetId,
  onSwitchAlphabet,
  onCreateAlphabet,
  onRenameAlphabet,
  onDeleteAlphabet,
  onUpdateGlyphPhonemes,
  onExportActiveAlphabet,
  onExportAllAlphabets,
  onImportAlphabetFile,
}) {
  return (
    <div>
      <p>PhonemeMapper container — stub</p>
    </div>
  );
}