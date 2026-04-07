"use client";

import { Cursor } from "@/components/consulting-client";
import type { CSSProperties, ReactNode } from "react";

const shellStyle: CSSProperties = {
  backgroundColor: "var(--color-primary)",
  color: "var(--color-ink)",
  fontFamily: "var(--font-main)",
  minHeight: "100vh",
  overflowX: "hidden",
  width: "100%",
  fontSize: "16px",
  lineHeight: "1.4",
  WebkitFontSmoothing: "antialiased",
};

// Hoisted static JSX (rendering-hoist-jsx)
const noiseOverlay = (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 9999,
      opacity: 0.015,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.3' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

export const PageShell = ({ children }: { children: ReactNode }) => {
  return (
    <div style={shellStyle}>
      {noiseOverlay}
      <Cursor />
      {children}
    </div>
  );
};
