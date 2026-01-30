import { services, siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF4E02" },
    { media: "(prefers-color-scheme: dark)", color: "#FF4E02" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Agni Labs",
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  sameAs: [
    siteConfig.socials.linkedin,
    siteConfig.socials.twitter,
    siteConfig.socials.github,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York City",
    addressRegion: "NY",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "sales",
    availableLanguage: "English",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Generative AI",
    "Large Language Models",
    "Machine Learning",
    "RAG Pipelines",
    "AI Strategy",
    "AI Integration",
    "LLM Implementation",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "New York City",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
};

const serviceSchemas = services.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  serviceType: service.serviceType,
  provider: {
    "@type": "Organization",
    name: "Agni Labs",
    url: siteConfig.url,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Apple-specific status bar styling */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Microsoft tile color for Windows */}
        <meta name="msapplication-TileColor" content="#FF4E02" />
        <meta name="msapplication-navbutton-color" content="#FF4E02" />
        <link rel="dns-prefetch" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://x.com" />
        <link rel="dns-prefetch" href="https://github.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {serviceSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
