
// Client-safe config (no server env vars)
export const siteLinks = {
  socials: {
    linkedin: "https://linkedin.com/company/agnilabs",
    twitter: "https://x.com/agnilabs",
    github: "https://github.com/agnilabs",
  },
  email: "hello@agnilabs.xyz",
  calcom: "https://cal.com/agnilabs",
};

export const siteConfig = {
  name: "agni labs",
  tagline: "AI consulting, built around you",
  description:
    "agni labs partners with organizations to turn generative ai ambition into reality",
  url: "https://agnilabs.xyz",
  keywords: [
    "AI consulting",
    "generative AI",
    "machine learning",
    "AI integration",
    "AI strategy",
    "agni labs",
  ],
  ...siteLinks,
};
