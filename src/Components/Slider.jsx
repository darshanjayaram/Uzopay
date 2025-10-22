import React, { useRef, useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";
import "../Css/Slider.css";

/**
 * Slider
 * Properties 
 * - count: number of steps
 * - value: active index
 * - onChange(index)
 * - alignToRef: React ref to DOM element (steps-list). If provided, rail top/bottom align to that element.
 */
export default function Slider({ count = 3, value = 0, onChange = () => {}, alignToRef = null }) {
  const rootRef = useRef(null);
  const railRef = useRef(null);
  const dragging = useRef(false);
  const [railStyle, setRailStyle] = useState({ top: "8px", bottom: "8px" }); // fallback

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // map clientY -> nearest index using rail bounding rect
  const clientYToIndex = useCallback((clientY) => {
    const rail = railRef.current;
    if (!rail) return 0;
    const rect = rail.getBoundingClientRect();
    let frac = (clientY - rect.top) / rect.height;
    frac = clamp(frac, 0, 1);
    const idx = Math.round(frac * (count - 1));
    return idx;
  }, [count]);

  // pointer handlers (dragging)
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onPointerDown = (e) => {
      dragging.current = true;
      try { e.target.setPointerCapture?.(e.pointerId); } catch {}
      const idx = clientYToIndex(e.clientY);
      onChange(idx);
    };

    const onPointerMove = (e) => {
      if (!dragging.current) return;
      const idx = clientYToIndex(e.clientY);
      onChange(idx);
    };

    const onPointerUp = (e) => {
      if (!dragging.current) return;
      dragging.current = false;
      try { e.target.releasePointerCapture?.(e.pointerId); } catch {}
      const idx = clientYToIndex(e.clientY);
      onChange(idx);
    };

    root.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    return () => {
      root.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [clientYToIndex, onChange]);

  // click on rail/jump to index
  const handleRailClick = (e) => {
    const idx = clientYToIndex(e.clientY);
    onChange(idx);
  };

  // keyboard
  const handleKey = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") onChange(clamp(value - 1, 0, count - 1));
    if (e.key === "ArrowDown" || e.key === "ArrowRight") onChange(clamp(value + 1, 0, count - 1));
    if (e.key === "Home") onChange(0);
    if (e.key === "End") onChange(count - 1);
  };

  // compute thumb position %
  const thumbTop = count > 1 ? (value / (count - 1)) * 100 : 0;

  // Measure and align rail to alignToRef (steps-list)
  const computeRailPosition = useCallback(() => {
    const root = rootRef.current;
    const rail = railRef.current;
    const target = alignToRef?.current ?? null;
    if (!root || !rail || !target) {
      // fallback small padding
      setRailStyle({ top: "8px", bottom: "8px" });
      return;
    }
    const rootRect = root.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    // compute top offset of target relative to root
    const topPx = Math.max(0, Math.round(targetRect.top - rootRect.top));
    const bottomPx = Math.max(0, Math.round(rootRect.bottom - targetRect.bottom));

    // add a couple px padding so ticks align visually (tweak if needed)
    setRailStyle({ top: `${topPx}px`, bottom: `${bottomPx}px` });
  }, [alignToRef]);

  useEffect(() => {
    computeRailPosition();
    // recompute on resize and scroll (responsive)
    let ro = null;
    if (alignToRef?.current) {
      ro = new ResizeObserver(() => computeRailPosition());
      ro.observe(alignToRef.current);
    }
    window.addEventListener("resize", computeRailPosition);
    window.addEventListener("scroll", computeRailPosition, true);
    return () => {
      window.removeEventListener("resize", computeRailPosition);
      window.removeEventListener("scroll", computeRailPosition, true);
      if (ro && alignToRef?.current) ro.disconnect();
    };
  }, [computeRailPosition, alignToRef]);

  return (
    <div
      className="sb-slider d-flex align-items-stretch"
      ref={rootRef}
      tabIndex={0}
      role="slider"
      aria-orientation="vertical"
      aria-valuemin={0}
      aria-valuemax={count - 1}
      aria-valuenow={value}
      onKeyDown={handleKey}
      style={{ position: "relative" }}
    >
      <div
        className="sb-rail"
        ref={railRef}
        onPointerDown={handleRailClick}
        style={{ top: railStyle.top, bottom: railStyle.bottom }}
        aria-hidden="true"
      />

      <div className="sb-ticks" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => {
          // compute top percent relative to the rail's usable height:
          // easiest: use percent of full rail (same as thumb calculation)
          const top = count > 1 ? (i / (count - 1)) * 100 : 0;
          return (
            <button
              key={i}
              type="button"
              className={`sb-tick btn p-0 ${i === value ? "active" : ""}`}
              style={{ top: `${top}%` }}
              onClick={(ev) => { ev.stopPropagation(); onChange(i); }}
              aria-label={`Step ${i + 1}`}
            />
          );
        })}
      </div>

      <div
        className="sb-thumb"
        style={{ top: `${thumbTop}%` }}
        aria-hidden="true"
      >
        <span className="sb-thumb-inner" />
      </div>
    </div>
  );
}

Slider.propTypes = {
  count: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  alignToRef: PropTypes.object,
};
