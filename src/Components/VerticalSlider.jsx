import React, { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "../Css/Steps.css";

/**
 * VerticalSlider (glitter progress up to current tick)
 * Props:
 * - count, value, onChange, showIndicator
 */
export default function VerticalSlider({
  count = 3,
  value = 0,
  onChange = () => {},
  showIndicator = true,
}) {
  const rootRef = useRef(null);
  const railRef = useRef(null);
  const draggingRef = useRef(false);

  const [railRect, setRailRect] = useState(null);
  const [starTopPx, setStarTopPx] = useState(0);
  const [glitterHeightPx, setGlitterHeightPx] = useState(0);

  const updateRect = useCallback(() => {
    if (!railRef.current || !rootRef.current) {
      setRailRect(null);
      return;
    }
    const r = railRef.current.getBoundingClientRect();
    const rootR = rootRef.current.getBoundingClientRect();
    // We'll store both for calculations if needed
    setRailRect({ top: r.top, height: r.height, rootTop: rootR.top });
  }, []);

  useEffect(() => {
    updateRect();
    const ro = new ResizeObserver(() => updateRect());
    if (railRef.current) ro.observe(railRef.current);
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, true);
    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect, true);
      ro.disconnect();
    };
  }, [updateRect]);

  const clientYToIndex = useCallback(
    (clientY) => {
      if (!railRect) return 0;
      let frac = (clientY - railRect.top) / railRect.height;
      frac = Math.max(0, Math.min(1, frac));
      return Math.round(frac * (count - 1));
    },
    [railRect, count]
  );

  // compute starTopPx and glitterHeightPx whenever value or railRect change
  useEffect(() => {
    if (!railRect) {
      setStarTopPx(0);
      setGlitterHeightPx(0);
      return;
    }
    // fraction along the rail for the selected index (0..1)
    const frac = count > 1 ? value / (count - 1) : 0;
    const centerOfTickPx = frac * railRect.height; // relative to rail top
    // centerOfTickPx is pixel offset from rail top; we want star centered there and glitter to fill up to there
    setStarTopPx(centerOfTickPx);
    setGlitterHeightPx(centerOfTickPx);
  }, [value, railRect, count]);

  // pointer drag handling
  useEffect(() => {
    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      const idx = clientYToIndex(e.clientY);
      onChange(idx);
    };
    const onPointerUp = (e) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      const idx = clientYToIndex(e.clientY);
      onChange(idx);
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [clientYToIndex, onChange]);

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    try { e.target.setPointerCapture?.(e.pointerId); } catch {}
    const idx = clientYToIndex(e.clientY);
    onChange(idx);
  };

  const handleRailClick = (e) => {
    const idx = clientYToIndex(e.clientY);
    onChange(idx);
  };

  const thumbTopPercent = count > 1 ? (value / (count - 1)) * 100 : 0;

  // Inline styles for indicator pieces (glitter height, star position)
  const glitterStyle = {
    height: `${glitterHeightPx}px`,
    top: 0,
  };
  const starStyle = {
    transform: `translateY(${starTopPx}px) translateY(-50%) rotate(45deg)`,
  };

  return (
    <div ref={rootRef} className="vs-wrapper d-flex align-items-stretch" style={{ gap: 12 }}>
      {showIndicator && (
        <div className="vs-indicator" aria-hidden="true">
          <div className="vs-indicator-behind" />
          <div className="vs-indicator-only" />
          {/* glitter fills from top down to selected tick */}
          <div className="vs-indicator-glitter" style={glitterStyle} />
          <div className="vs-indicator-star" style={starStyle} />
        </div>
      )}

      <div className="vs-root" role="slider" aria-orientation="vertical">
        <div
          className="vs-rail"
          ref={railRef}
          onPointerDown={(e) => { e.stopPropagation(); handlePointerDown(e); }}
          onClick={(e) => { e.stopPropagation(); handleRailClick(e); }}
        />
        <div className="vs-ticks" aria-hidden="true">
          {Array.from({ length: count }).map((_, i) => {
            const top = count > 1 ? (i / (count - 1)) * 100 : 0;
            return (
              <button
                key={i}
                type="button"
                className={`vs-tick ${i === value ? "active" : ""}`}
                style={{ top: `${top}%` }}
                onClick={(ev) => { ev.stopPropagation(); onChange(i); }}
                aria-label={`Step ${i + 1}`}
              />
            );
          })}
        </div>

        <div className="vs-thumb" style={{ top: `${thumbTopPercent}%` }}>
          <span className="vs-thumb-inner" />
        </div>
      </div>
    </div>
  );
}

VerticalSlider.propTypes = {
  count: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  showIndicator: PropTypes.bool,
};
