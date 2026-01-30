import { ClientWrapper, Cursor, ServiceCard } from "@/components/consulting-client";
import { siteLinks } from "@/config/site";
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
  noiseOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 9999,
    opacity: 0.015,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.3' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  } as CSSProperties,
};

const Navigation = () => {
  const navStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 100,
    mixBlendMode: "difference",
    color: "white",
  };

  const logoStyle: CSSProperties = {
    fontSize: "1.25rem",
    fontWeight: 700,
    letterSpacing: "-0.05em",
  };

  const menuItemStyle: CSSProperties = {
    fontSize: "0.875rem",
    marginLeft: "2rem",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <nav style={navStyle} aria-label="Main navigation">
      <a
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
      </a>
      <div style={logoStyle}>agni labs</div>
      <div className="nav-menu">
        <a
          href={siteLinks.calcom}
          target="_blank"
          rel="noopener noreferrer"
          style={menuItemStyle}
          className="nav-link"
        >
          contact
        </a>
      </div>
    </nav>
  );
};

const ShadowConstruct = ({
  className,
  style: customStyle,
}: {
  className?: string;
  style?: CSSProperties;
}) => {
  const baseStyle: CSSProperties = {
    position: "absolute",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
    zIndex: 1,
    pointerEvents: "none",
    animation: "pulse-shadow 10s infinite alternate ease-in-out",
  };

  return (
    <div className={className} style={{ ...baseStyle, ...customStyle }} />
  );
};

const ConsultingLandingContent = () => {
  const heroSectionStyle: CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem",
    position: "relative",
  };

  const gridContainerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gap: "1rem",
    padding: 0,
    position: "relative",
  };

  const heroTextStyle: CSSProperties = {
    fontSize: "clamp(3rem, 8vw, 9rem)",
    lineHeight: 0.9,
    marginBottom: "2rem",
    position: "relative",
    zIndex: 10,
    fontWeight: 600,
    letterSpacing: "-0.04em",
    textTransform: "lowercase",
  };

  const btnPrimaryStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "black",
    color: "var(--color-primary)",
    padding: "1.5rem 2rem",
    textDecoration: "none",
    fontWeight: 700,
    textTransform: "lowercase",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    marginTop: "2rem",
    fontSize: "1.25rem",
    minWidth: "200px",
  };

  return (
    <main id="main-content">
      <section style={heroSectionStyle}>
        <ShadowConstruct
          className="block-1"
          style={{
            top: 0,
            right: "10vw",
            width: "20vw",
            height: "60vh",
          }}
        />
        <ShadowConstruct
          className="block-2"
          style={{
            bottom: 0,
            left: "15vw",
            width: "25vw",
            height: "50vh",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
          }}
        />
        <ShadowConstruct
          className="block-3"
          style={{
            top: "20vh",
            left: "45vw",
            width: "15vw",
            height: "30vh",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)",
          }}
        />

        <div className="grid-container" style={gridContainerStyle}>
          <div
            className="content-block"
            style={{
              gridColumn: "1 / 9",
              zIndex: 10,
              marginTop: "10rem",
            }}
          >
            <h1 className="hero-text" style={heroTextStyle}>
              discover
              <br />
              design
              <br />
              deploy
            </h1>
          </div>

          <div
            className="content-block"
            style={{
              gridColumn: "9 / 13",
              alignSelf: "end",
              marginBottom: "1rem",
              zIndex: 10,
              marginTop: "10rem",
            }}
          >
            <p
              style={{
                fontWeight: 600,
                fontSize: "1.125rem",
                maxWidth: "35ch",
              }}
            >
              agni labs partners with organizations to turn generative ai
              ambition into reality. from strategy to real use.
            </p>
            <a
              href={siteLinks.calcom}
              target="_blank"
              rel="noopener noreferrer"
              style={btnPrimaryStyle}
              className="cta-button"
            >
              start the conversation
              <span style={{ marginLeft: "1rem" }}>→</span>
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "6rem 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={gridContainerStyle}>
          <div style={{ gridColumn: "span 12" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                maxWidth: "80%",
                lineHeight: 1.1,
                fontWeight: 600,
                letterSpacing: "-0.04em",
                textTransform: "lowercase",
              }}
            >
              generative ai isn&apos;t a feature.
              <br />
              it&apos;s a new way to build.
            </h2>
          </div>
          <div style={{ gridColumn: "7 / 13", marginTop: "4rem" }}>
            <p
              style={{
                fontSize: "1.125rem",
                maxWidth: "50ch",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              we work alongside your team, assessing readiness, identifying high-impact use cases, and
              engineering implementations that can move from prototype to production.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{
          padding: "4rem 2rem",
          background: "var(--color-primary)",
          position: "relative",
          zIndex: 20,
          borderTop: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <span
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              borderBottom: "2px solid var(--color-ink)",
              paddingBottom: "0.5rem",
              display: "inline-block",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              textTransform: "lowercase",
            }}
          >
            core competencies
          </span>
        </div>

        <div
          className="service-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          }}
        >
          <ServiceCard
            number="01 / DISCOVER"
            title="strategic<br />assessment"
            description="we start by understanding you, your business, and your goals. through discussions, we identify real ai use cases that will move you needle."
          />
          <ServiceCard
            number="02 / DESIGN"
            title="solution<br />design"
            description="whether it's no-code or custom rag pipelines, we work with you to architect ai systems tailored to your specific requirements."
          />
          <ServiceCard
            number="03 / DEPLOY"
            title="delivery<br />& handover"
            description="we build alongside your team and deliver working systems with clean code and documentation. you keep full ownership of everything we create together."
            isLast
          />
        </div>
      </section>

      <footer
        style={{
          background: "black",
          color: "var(--color-primary)",
          padding: "4rem 2rem",
          marginTop: "4rem",
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "2rem",
          }}
        >
          <div className="footer-section" style={{ gridColumn: "span 6" }}>
            <h2
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                textTransform: "lowercase",
              }}
            >
              agni labs
            </h2>
            <p
              style={{
                opacity: 0.7,
                maxWidth: "350px",
                fontSize: "1.125rem",
              }}
            >
              we help teams build real things with ai
            </p>
          </div>
          <div className="footer-section" style={{ gridColumn: "span 3" }}>
            <h4
              style={{
                fontWeight: 600,
                letterSpacing: "-0.04em",
                textTransform: "lowercase",
              }}
            >
              Social
            </h4>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <a
                href={siteLinks.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{
                  margin: 0,
                  color: "var(--color-primary)",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                LinkedIn
              </a>
              <a
                href={siteLinks.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{
                  margin: 0,
                  color: "var(--color-primary)",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                Twitter / X
              </a>
              <a
                href={siteLinks.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{
                  margin: 0,
                  color: "var(--color-primary)",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="footer-section" style={{ gridColumn: "span 3" }}>
            <h4
              style={{
                fontWeight: 600,
                letterSpacing: "-0.04em",
                textTransform: "lowercase",
              }}
            >
              Inquiries
            </h4>
            <br />
            <a
              href={`mailto:${siteLinks.email}`}
              className="footer-link"
              style={{
                color: "var(--color-primary)",
                textDecoration: "none",
                fontSize: "1.25rem",
              }}
            >
              {siteLinks.email}
            </a>
          </div>
          <div
            className="footer-bottom"
            style={{
              gridColumn: "span 12",
              marginTop: "4rem",
              borderTop: "1px solid #333",
              paddingTop: "1rem",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.75rem",
              opacity: 0.5,
            }}
          >
            <span>© {new Date().getFullYear()} AGNI LABS</span>
            <span>NEW YORK CITY</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export const ConsultingLanding = () => {
  return (
    <ClientWrapper>
      <div style={{ ...customStyles.root, ...customStyles.body }}>
        <div style={customStyles.noiseOverlay} />
        <Cursor />
        <Navigation />
        <ConsultingLandingContent />
      </div>
    </ClientWrapper>
  );
};
