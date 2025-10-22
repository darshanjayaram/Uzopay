import React, { useEffect, useRef, useState } from "react";
import "../Css/LayeredCarousel.css";
import overlayImg from "../assets/Video-overlay.png";

export default function LayeredCarousel({
  images = [],
  interval = 3500,
  fadeDuration = 800,
  width = "100%",
  height = "726px",
  enableOverlay = true, // toggle to quickly test without overlay
}) {
  const [index, setIndex] = useState(0);
  const rootRef = useRef(null);
  const overlayRef = useRef(null);
  const rafRef = useRef(null);
  const ticking = useRef(false);
  const observerRef = useRef(null);

  // auto-advance slides
  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => setIndex((p) => (p + 1) % images.length), interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  // overlay scroll behavior (IntersectionObserver)
  useEffect(() => {
    if (!enableOverlay) return;
    const root = rootRef.current;
    const overlay = overlayRef.current;
    if (!root || !overlay) return;

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    const update = () => {
      ticking.current = false;
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // visible fraction of the element
      const visibleHeight = clamp(Math.min(rect.bottom, vh) - Math.max(rect.top, 0), 0, rect.height || 1);
      const visibleRatio = rect.height > 0 ? visibleHeight / rect.height : 0;

      // proximity of element center to viewport center
      const elemCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;
      const distToCenter = Math.abs(elemCenter - viewportCenter);
      const maxDist = (vh / 2) + (rect.height / 2);
      const proximity = 1 - clamp(distToCenter / maxDist, 0, 1);

      // combine metrics with weights to compute a smooth weight
      const weight = 0.55 * visibleRatio + 0.45 * proximity;

      const minScale = 0.7;
      const maxScale = 2.0;
      const scale = minScale + (maxScale - minScale) * weight;

      const minOpacity = 0.66;
      const maxOpacity = 0.96;
      const opacity = minOpacity + (maxOpacity - minOpacity) * weight;

      overlay.style.transform = `scale(${scale})`;
      overlay.style.opacity = `${opacity}`;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        rafRef.current = requestAnimationFrame(update);
      }
    };

    // Use IntersectionObserver to only attach listeners when element is in view
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e && e.isIntersecting) {
          window.addEventListener("scroll", onScroll, { passive: true });
          window.addEventListener("resize", onScroll);
          // initial update so overlay reflects current position immediately
          onScroll();
        } else {
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
          // reset overlay to base
          overlay.style.transform = "scale(2)";
          overlay.style.opacity = "0.8";
        }
      },
      { root: null, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observerRef.current.observe(root);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enableOverlay]);

  return (
    <section className="py-5">
      <div
        ref={rootRef}
        className="layered-carousel-simple position-relative overflow-hidden"
        style={{ width, height }}
      >
        {enableOverlay && (
          <div
            ref={overlayRef}
            className="carousel-overlay"
            style={{
              backgroundImage: `url(${overlayImg})`,
              transform: "scale(1)",
              opacity: "1",
            }}
            aria-hidden="true"
          />
        )}

        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt || `Slide ${i + 1}`}
            className={`carousel-fade-img ${i === index ? "active" : ""}`}
            style={{ transitionDuration: `${fadeDuration}ms` }}
            draggable="false"
          />
        ))}
      </div>
    </section>
  );
}
