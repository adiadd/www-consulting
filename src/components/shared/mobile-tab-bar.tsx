"use client";

import { useState } from "react";
import { siteLinks } from "@/config/site";
import Link from "next/link";

const TeamIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
  </svg>
);

const BlogIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const ContactIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MobileTabBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`mobile-fab ${open ? "mobile-fab-open" : ""}`}
    >
      {open && (
        <div className="mobile-fab-scrim" onClick={() => setOpen(false)} />
      )}
      <div className="mobile-fab-menu">
        <Link
          href="/team"
          className="mobile-fab-item"
          style={{ "--i": 0 } as React.CSSProperties}
          onClick={() => setOpen(false)}
        >
          <TeamIcon />
          <span>team</span>
        </Link>
        <Link
          href="/blog"
          className="mobile-fab-item"
          style={{ "--i": 1 } as React.CSSProperties}
          onClick={() => setOpen(false)}
        >
          <BlogIcon />
          <span>blog</span>
        </Link>
        <a
          href={siteLinks.calcom}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-fab-item"
          style={{ "--i": 2 } as React.CSSProperties}
          onClick={() => setOpen(false)}
        >
          <ContactIcon />
          <span>contact</span>
        </a>
      </div>
      <button
        className="mobile-fab-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation"
      >
        <span className="mobile-fab-bar" />
        <span className="mobile-fab-bar" />
        <span className="mobile-fab-bar" />
      </button>
      <div className="mobile-fab-pulse" />
    </div>
  );
};
