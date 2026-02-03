import { ClientWrapper, Cursor } from "@/components/consulting-client";
import { Footer } from "@/components/shared/footer";
import { Navigation } from "@/components/shared/navigation";
import { CTAButton } from "@/components/ui/cta-button";
import { FounderImage } from "@/components/ui/founder-image";
import { founder } from "@/config/site";
import type { CSSProperties } from "react";

const customStyles = {
  root: {
    "--color-primary": "#FF4E02",
    "--color-black": "#050505",
    "--color-ink": "#000000",
    "--font-main": "'Helvetica Neue', Helvetica, Arial, sans-serif",
    "--spacing-unit": "1rem",
    "--border-width": "1px",
  } as CSSProperties & Record<string, string>,
  body: {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-ink)",
    fontFamily: "var(--font-main)",
    overflowX: "hidden",
    width: "100vw",
    fontSize: "16px",
    lineHeight: "1.4",
    WebkitFontSmoothing: "antialiased",
  } as CSSProperties,
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

const TeamPageContent = () => {
  return (
    <main id="main-content">
      {/* Hero Section - smaller than homepage */}
      <section
        style={{
          minHeight: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "2rem",
          paddingTop: "8rem",
          position: "relative",
        }}
      >
        <div className="grid-12">
          <div
            style={{
              gridColumn: "1 / 13",
              zIndex: 10,
            }}
          >
            <h1 className="text-hero" style={{ marginBottom: "1rem" }}>
              meet the team
            </h1>
            <p
              style={{
                fontWeight: 600,
                fontSize: "1.125rem",
                maxWidth: "50ch",
              }}
            >
              the people behind agni labs.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section
        style={{
          padding: "4rem 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="grid-12">
          <div
            className="founder-card"
            style={{
              gridColumn: "1 / 13",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "4rem",
              borderTop: "2px solid black",
              borderBottom: "2px solid black",
              padding: "3rem 0",
            }}
          >
            {/* Left side - Image, Name and title */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  border: "2px solid black",
                }}
              >
                <FounderImage src={founder.image} alt={founder.name} />
              </div>
              <div>
                <span
                  className="text-tight-lower"
                  style={{
                    fontSize: "0.875rem",
                    fontFamily: "monospace",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  FOUNDER
                </span>
                <h2
                  className="text-section-heading"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    lineHeight: 1.1,
                  }}
                >
                  {founder.name.toLowerCase()}
                </h2>
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  opacity: 0.8,
                  maxWidth: "30ch",
                }}
              >
                {founder.currentJob}
              </p>
              <CTAButton href={founder.website} external>
                learn more
              </CTAButton>
            </div>

            {/* Right side - Bio */}
            <div
              className="founder-bio"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {founder.bio.map((item, index) => {
                const text = typeof item === 'string' ? item : item.text;
                const isQuote = typeof item === 'object' && item.isQuote;

                if (isQuote) {
                  return (
                    <blockquote key={index} className="founder-quote">
                      {text}
                    </blockquote>
                  );
                }
                return (
                  <p
                    key={index}
                    style={{
                      fontSize: "1.125rem",
                      lineHeight: 1.6,
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      maxWidth: "65ch",
                    }}
                  >
                    {text}
                  </p>
                );
              })}

              {/* Highlights */}
              <div
                style={{
                  marginTop: "1rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                <span
                  className="text-tight-lower"
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                    display: "block",
                    marginBottom: "0.75rem",
                    opacity: 0.6,
                  }}
                >
                  HIGHLIGHTS
                </span>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  {founder.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      style={{
                        fontSize: "0.875rem",
                        padding: "0.5rem 1rem",
                        background: "rgba(0,0,0,0.08)",
                        borderRadius: "2px",
                      }}
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export const TeamPage = () => {
  return (
    <ClientWrapper>
      <div style={{ ...customStyles.root, ...customStyles.body }}>
        {noiseOverlay}
        <Cursor />
        <Navigation />
        <TeamPageContent />
      </div>
    </ClientWrapper>
  );
};
