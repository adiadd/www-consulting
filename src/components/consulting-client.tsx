"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const CURSOR_INTERACTIVE_SELECTOR = "a, button, .service-card";

const cursorDotStyle: CSSProperties = {
  width: "12px",
  height: "12px",
  backgroundColor: "black",
  position: "fixed",
  top: 0,
  left: 0,
  pointerEvents: "none",
  zIndex: 10000,
  mixBlendMode: "overlay",
  borderRadius: "50%",
  transform: "translate(-50%, -50%)",
  transition: "transform 0.1s ease",
};

// Use refs for transient mouse position to avoid re-renders (rule: rerender-use-ref-transient-values)
export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>(cursorDotStyle);
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    // Only show cursor on devices with a fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setHasPointer(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setHasPointer(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!hasPointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(CURSOR_INTERACTIVE_SELECTOR)) {
        setStyle((prev) => ({
          ...prev,
          transform: "translate(-50%, -50%) scale(2.5)",
          mixBlendMode: "difference",
          backgroundColor: "white",
        }));
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement | null;
      if (!relatedTarget?.closest(CURSOR_INTERACTIVE_SELECTOR)) {
        setStyle((prev) => ({
          ...prev,
          transform: "translate(-50%, -50%) scale(1)",
          mixBlendMode: "overlay",
          backgroundColor: "black",
        }));
      }
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [hasPointer]);

  if (!hasPointer) return null;

  return <div ref={cursorRef} style={style} />;
};

const serviceCardBaseStyle: CSSProperties = {
  padding: "3rem 2rem",
  minHeight: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  overflow: "hidden",
  outline: "none",
};

const serviceCardOverlayStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
  pointerEvents: "none",
};

export const ServiceCard = ({
  number,
  title,
  description,
  isLast = false,
}: {
  number: string;
  title: ReactNode;
  description: string;
  isLast?: boolean;
}) => {
  const cardStyle: CSSProperties = {
    ...serviceCardBaseStyle,
    borderRight: isLast ? "none" : "2px solid black",
  };

  return (
    <article className="service-card" style={cardStyle}>
      <div className="service-card-overlay" style={serviceCardOverlayStyle} />
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: "0.875rem",
            marginBottom: "1rem",
            fontFamily: "monospace",
          }}
        >
          {number}
        </div>
        <h3
          style={{
            fontSize: "2.5rem",
            lineHeight: 1,
            marginBottom: "1rem",
          }}
        >
          {title}
        </h3>
      </div>
      <p style={{ marginTop: "auto" }}>{description}</p>
    </article>
  );
};

export const ClientWrapper = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
