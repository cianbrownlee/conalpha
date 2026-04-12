// Modal wrapper for the drawing canvas. Opens on top of the page with a dark overlay.

import { useEffect } from "react";
import DrawingCanvas from "./DrawingCanvas";

export default function DrawingModal({ isOpen, initialImage, glyphLabel, onSave, onClose }) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  /** Clicking the backdrop (not the panel) closes without saving. */
  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  function handleSave(imageData) {
    onSave(imageData);
    onClose();
  }

  const title = glyphLabel ? `Redrawing /${glyphLabel}/` : "New glyph";

  return (
    <div className="drawing-modal" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-label={title}>
      <div className="drawing-modal__panel">
        <div className="drawing-modal__header">
          <h2 className="drawing-modal__title">{title}</h2>
          <button className="drawing-modal__close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* key remounts DrawingCanvas when the target glyph changes */}
        <DrawingCanvas
          key={glyphLabel ?? "new"}
          initialImage={initialImage}
          onSave={handleSave}
          onClear={() => {}}
        />
      </div>
    </div>
  );
}
