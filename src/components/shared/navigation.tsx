import { siteLinks } from "@/config/site";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="nav-main" aria-label="Main navigation">
      <Link
        href="#main-content"
        className="skip-link"
        style={{
          position: "absolute",
          left: "-9999px",
          zIndex: 999,
          padding: "1rem",
          background: "black",
          color: "var(--color-primary)",
        }}
      >
        Skip to main content
      </Link>
      <Link href="/" className="nav-logo" aria-label="Agni Labs - Go to homepage">agni labs</Link>
      <div className="nav-menu">
        <Link href="/blog" className="nav-link nav-menu-item">
          blog
        </Link>
        <Link href="/team" className="nav-link nav-menu-item">
          team
        </Link>
        <Link
          href={siteLinks.calcom}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link nav-menu-item"
        >
          contact
        </Link>
      </div>
    </nav>
  );
};
