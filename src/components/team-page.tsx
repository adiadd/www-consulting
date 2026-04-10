import { CTAButton } from "@/components/ui/cta-button";
import { FounderImage } from "@/components/ui/founder-image";
import { founder } from "@/config/site";

export const TeamPage = () => {
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
              borderTop: "2px solid rgba(255,255,255,0.2)",
              borderBottom: "2px solid rgba(255,255,255,0.2)",
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
                  border: "2px solid rgba(255,255,255,0.2)",
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
                  borderTop: "1px solid rgba(255,255,255,0.2)",
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
                        background: "rgba(255,255,255,0.08)",
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

    </main>
  );
};
