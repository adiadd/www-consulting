
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

export const services = [
  {
    name: "Discover - Strategic Assessment",
    description:
      "We start by understanding your business and goals. Through discussions, we identify real AI use cases that will move the needle.",
    serviceType: "AI Strategy Consulting",
  },
  {
    name: "Design - Solution Architecture",
    description:
      "Whether it's no-code or custom RAG pipelines, we architect AI systems tailored to your specific requirements.",
    serviceType: "AI Solution Design",
  },
  {
    name: "Deploy - Delivery & Handover",
    description:
      "We build alongside your team and deliver working systems with clean code and documentation. You keep full ownership of everything we create together.",
    serviceType: "AI Implementation",
  },
];

export const founder = {
  name: "Aditya Addepalli",
  role: "Founder",
  image: "https://trqxlmj192.ufs.sh/f/X8OJl8spEec6xJjMjatSiGCBM5jFqU1aVkrZeHdlRXQOgAYu",
  currentJob: "Software Engineer, Gen AI at Amazon Web Services",
  education: {
    undergrad: "BBA Management Information Systems, UT Austin",
    undergradCert: "Certificate in Computer Science, UT Austin",
    grad: "MS Computer Science, Georgia Tech (3.9 GPA, May 2026)",
  },
  location: "NYC",
  website: "https://adiadd.xyz",
  github: "https://github.com/adiadd",
  linkedin: "https://linkedin.com/in/adiadd",
  email: "adi.addepalli@gmail.com",
  bio: [
    { text: "During the day, Aditya works to help organizations, from the NBA to Fortune 500 companies, figure out how AI can actually help them. He's helped teams automate tedious workflows, surface buried knowledge, and make better decisions faster.", isQuote: false },
    { text: "Before AWS, Aditya built and ran his own startup with 5,000+ monthly active users. He knows what it's like to wear many hats and make technology work with limited resources. He started agni labs to bring that same resourcefulness to organizations doing meaningful work, whether you're a nonprofit, foundation, or company with a mission.", isQuote: false },
  ],
  highlights: [
    "Eagle Scout",
    "6x AWS Certified",
  ],
  certifications: [
    "AWS Solutions Architect Professional",
    "AWS Security Professional",
    "AWS Solutions Architect Associate",
    "AWS Developer Associate",
    "AWS AI Practitioner",
    "AWS Cloud Practitioner",
  ],
  expertise: [
    "AI assistants & chatbots",
    "Document search & knowledge bases",
    "Workflow automation",
    "Data analysis & insights",
    "Cloud infrastructure (AWS)",
    "Custom software development",
  ],
  interests: ["AI", "Gaming", "Basketball", "Anime", "Open Source"],
};

export const siteConfig = {
  name: "agni labs",
  tagline: "AI consulting, built around you",
  description:
    "agni labs partners with organizations to turn generative ai ambition into reality",
  url: "https://agnilabs.xyz",
  keywords: [
    // Core services
    "AI consulting",
    "generative AI",
    "machine learning",
    "AI integration",
    "AI strategy",
    "agni labs",
    // Long-tail keywords
    "AI consulting for startups",
    "enterprise AI integration",
    "generative AI implementation",
    "AI readiness assessment",
    "RAG pipeline development",
    "LLM integration services",
    "AI prototype to production",
    "custom AI solutions",
    // Location-based
    "AI consulting NYC",
    "AI consultants New York",
    "generative AI consulting New York City",
  ],
  ...siteLinks,
};
