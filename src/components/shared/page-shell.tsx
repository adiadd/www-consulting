"use client";

import { Cursor } from "@/components/consulting-client";
import type { CSSProperties, ReactNode } from "react";

const shellStyle: CSSProperties = {
  backgroundColor: "#0A0A0A",
  color: "var(--color-ink)",
  fontFamily: "var(--font-main)",
  minHeight: "100vh",
  overflowX: "hidden",
  width: "100%",
  fontSize: "16px",
  lineHeight: "1.4",
  WebkitFontSmoothing: "antialiased",
  display: "flex",
  flexDirection: "column",
};


export const PageShell = ({ children }: { children: ReactNode }) => {
  return (
    <div style={shellStyle}>
      <Cursor />
      {children}
    </div>
  );
};
