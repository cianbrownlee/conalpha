/** Translator.jsx — container for the Translator tab */
import TextInput from "./TextInput";
import ScriptOutput from "./ScriptOutput";

export default function Translator({
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
      <p>Translator container — stub</p>
    </div>
  );
}