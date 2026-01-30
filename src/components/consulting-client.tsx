"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .service-card")) {
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
      if (!relatedTarget?.closest("a, button, .service-card")) {
        setStyle((prev) => ({
          ...prev,
          transform: "translate(-50%, -50%) scale(1)",
          mixBlendMode: "overlay",
          backgroundColor: "black",
        }));
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div ref={cursorRef} style={style} />;
};

export const ServiceCard = ({
  number,
  title,
  description,
  isLast = false,
}: {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}) => {
  const [isActive, setIsActive] = useState(false);

  const cardStyle: CSSProperties = {
    borderRight: isLast ? "none" : "2px solid black",
    padding: "3rem 2rem",
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "background 0.3s ease",
    position: "relative",
    overflow: "hidden",
    background: isActive ? "black" : "transparent",
    color: isActive
      ? "color-mix(in srgb, var(--color-primary) 80%, white 20%)"
      : "inherit",
    outline: "none",
  };

  const overlayStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
    opacity: isActive ? 1 : 0,
    transition: "opacity 0.3s ease",
    pointerEvents: "none",
  };

  return (
    <div
      className="service-card"
      style={cardStyle}
      tabIndex={0}
      role="article"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    >
      <div style={overlayStyle} />
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
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <p style={{ marginTop: "auto" }}>{description}</p>
    </div>
  );
};

export const ClientWrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      /* Hide scrollbars while allowing scroll */
      html, body {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
      }
      html::-webkit-scrollbar,
      body::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }

      @media (prefers-reduced-motion: no-preference) {
        @keyframes pulse-shadow {
          0% { opacity: 0.8; transform: scaleY(1); }
          100% { opacity: 0.95; transform: scaleY(1.05); }
        }
      }

      @media (prefers-reduced-motion: reduce) {
        @keyframes pulse-shadow {
          0%, 100% { opacity: 0.9; transform: scaleY(1); }
        }
      }

      .skip-link:focus {
        left: 2rem !important;
        top: 2rem !important;
      }

      .nav-link:focus-visible,
      .cta-button:focus-visible,
      .footer-link:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
      }

      .service-card:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: -2px;
      }

      @media (max-width: 768px) {
        .grid-container { display: block !important; }
        .content-block { margin-top: 2rem !important; width: 100% !important; }
        .service-grid { grid-template-columns: 1fr !important; border-bottom: none !important; }
        .service-card { border-right: none !important; border-bottom: 2px solid black !important; }
        .hero-text { font-size: 3.5rem !important; }
        .block-1 { width: 25vw !important; right: 5vw !important; height: 50vh !important; }
        .block-2 { width: 30vw !important; left: 10vw !important; height: 40vh !important; }
        .block-3 { width: 20vw !important; left: 50vw !important; height: 25vh !important; }
        .nav-menu { display: none !important; }
        .footer-grid { display: block !important; }
        .footer-section { margin-bottom: 2rem !important; }
        .footer-bottom { flex-direction: column !important; gap: 0.5rem !important; text-align: center !important; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
};
