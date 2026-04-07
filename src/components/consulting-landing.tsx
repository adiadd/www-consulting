import { ServiceCard } from "@/components/consulting-client";
import { CTAButton } from "@/components/ui/cta-button";
import { siteLinks } from "@/config/site";
import type { CSSProperties } from "react";

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
  };

  return (
    <div className={className} style={{ ...baseStyle, ...customStyle }} />
  );
};

export const ConsultingLanding = () => {
  return (
    <main id="main-content">
      <section className="section-hero">
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

        <div className="grid-container grid-12">
          <div
            className="content-block"
            style={{
              gridColumn: "1 / 9",
              zIndex: 10,
              marginTop: "10rem",
            }}
          >
            <h1 className="hero-text text-hero">
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
              agni labs partners with organizations to turn ai
              ambitions into reality. from strategy to real use.
            </p>
            <CTAButton href={siteLinks.calcom} external>
              start the conversation
            </CTAButton>
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
        <div className="grid-12">
          <div style={{ gridColumn: "span 12" }}>
            <h2 className="text-section-heading" style={{ maxWidth: "80%" }}>
              generative ai isn&apos;t just a feature.
              <br />
              it&apos;s a whole new paradigm.
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
            className="text-tight-lower"
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              borderBottom: "2px solid var(--color-ink)",
              paddingBottom: "0.5rem",
              display: "inline-block",
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
            title={<>strategic<br />assessment</>}
            description="we start by understanding you, your business, and your goals. through discussions, we identify real ai use cases that will move your needle."
          />
          <ServiceCard
            number="02 / DESIGN"
            title={<>solution<br />design</>}
            description="whether it's no-code or custom rag pipelines, we work with you to architect ai systems tailored to your specific requirements."
          />
          <ServiceCard
            number="03 / DEPLOY"
            title={<>delivery<br />& handover</>}
            description="we build alongside your team and deliver working systems with clean code and documentation."
            isLast
          />
        </div>
      </section>
    </main>
  );
};
