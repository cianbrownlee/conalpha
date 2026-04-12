// Grid of large glyph cards for one alphabet section. Each card shows the glyph
// image and its phoneme label. Hover reveals Redraw and Delete controls.
// Cards can be reordered by dragging — drop between cards to insert at that position.

import { useRef, useState } from "react";
import GlyphRenderer from "../shared/GlyphRenderer";

export default function GlyphLibrary({ glyphs, alphabetId, onSelectGlyph, onDeleteGlyph, onAddGlyph, onReorderGlyphs }) {
  const dragSrcId = useRef(null);
  const [draggingId, setDraggingId] = useState(null);
  const [dropTarget, setDropTarget] = useState(null);

  function handleDragStart(glyphId) {
    dragSrcId.current = glyphId;
    setDraggingId(glyphId);
  }

  function handleDragOver(e, glyphId) {
    e.preventDefault();
    if (!dragSrcId.current || dragSrcId.current === glyphId) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const before = e.clientX < rect.left + rect.width / 2;
    setDropTarget(prev =>
      prev?.id === glyphId && prev?.before === before ? prev : { id: glyphId, before }
    );
  }

  function handleDragLeave(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDropTarget(null);
    }
  }

  function handleDrop(targetGlyphId) {
    if (!dragSrcId.current || dragSrcId.current === targetGlyphId) {
      reset();
      return;
    }
    const srcIdx = glyphs.findIndex(g => g.id === dragSrcId.current);
    const reordered = [...glyphs];
    const [moved] = reordered.splice(srcIdx, 1);
    const newDstIdx = reordered.findIndex(g => g.id === targetGlyphId);
    const insertIdx = dropTarget?.before ? newDstIdx : newDstIdx + 1;
    reordered.splice(insertIdx, 0, moved);
    onReorderGlyphs(alphabetId, reordered);
    reset();
  }

  function handleDragEnd() {
    reset();
  }

  function reset() {
    dragSrcId.current = null;
    setDraggingId(null);
    setDropTarget(null);
  }

  return (
    <div className="glyph-library">
      <div className="glyph-library__grid">
        {glyphs.map((glyph) => {
          const isDragging    = draggingId === glyph.id;
          const isDropBefore  = dropTarget?.id === glyph.id && dropTarget.before;
          const isDropAfter   = dropTarget?.id === glyph.id && !dropTarget.before;

          return (
            <div
              key={glyph.id}
              className={[
                "glyph-card",
                isDragging   ? "glyph-card--dragging"     : "",
                isDropBefore ? "glyph-card--drop-before"  : "",
                isDropAfter  ? "glyph-card--drop-after"   : "",
              ].filter(Boolean).join(" ")}
              draggable
              onDragStart={() => handleDragStart(glyph.id)}
              onDragOver={(e) => handleDragOver(e, glyph.id)}
              onDragLeave={handleDragLeave}
              onDrop={() => handleDrop(glyph.id)}
              onDragEnd={handleDragEnd}
            >
              <div className="glyph-card__image-area">
                <GlyphRenderer glyph={glyph} phoneme={glyph.label || "?"} size={80} />

                <div className="glyph-card__overlay">
                  <button
                    className="button button--ghost button--small"
                    onClick={() => onSelectGlyph(glyph.id)}
                  >
                    Redraw
                  </button>
                  <button
                    className="button button--ghost button--small button--danger"
                    onClick={() => onDeleteGlyph(glyph.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="glyph-card__label">
                {glyph.label ? `/${glyph.label}/` : <span className="glyph-card__label--unmapped">unmapped</span>}
              </div>
            </div>
          );
        })}

        {/* Add glyph card — always last, not draggable */}
        <button className="glyph-card glyph-card--add" onClick={onAddGlyph} title="Draw a new glyph">
          <span className="glyph-card__add-icon">+</span>
          <span className="glyph-card__add-label">Add glyph</span>
        </button>
      </div>
    </div>
  );
}
