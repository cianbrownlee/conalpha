/** AlphabetBuilder.jsx — container for the Alphabet Builder tab */
import DrawingCanvas from "./DrawingCanvas";
import GlyphLibrary from "./GlyphLibrary";

export default function AlphabetBuilder({
  activeAlphabet,
  alphabets,
  activeAlphabetId,
  onSwitchAlphabet,
  onCreateAlphabet,
  onRenameAlphabet,
  onDeleteAlphabet,
  onAddGlyph,
  onUpdateGlyphImage,
  onDeleteGlyph,
  onExportActiveAlphabet,
  onExportAllAlphabets,
  onImportAlphabetFile,
}) {
  return (
    <div>
      <p>AlphabetBuilder container — stub</p>
    </div>
  );
}