import { getAllPosts, formatBlogDate } from "@/lib/blog";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";

const BLOG_URL = `${siteConfig.url}/blog`;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Field notes on shipping practical AI systems, product decisions, and implementation details.",
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description:
      "Field notes on shipping practical AI systems, product decisions, and implementation details.",
    url: BLOG_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${siteConfig.name}`,
    description:
      "Field notes on shipping practical AI systems, product decisions, and implementation details.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: BLOG_URL,
    },
  ],
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <main id="main-content" className="blog-layout">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="blog-hero">
        <h1 className="blog-title">Blog</h1>
      </section>

      <section className="blog-list-shell" aria-label="Blog posts">
        <div className="blog-list-header"></div>

        <div className="blog-index-grid">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <h2 className="blog-card-title">
                <Link href={post.url}>{post.title}</Link>
              </h2>
              <p className="blog-card-description">{post.description}</p>
              <div className="blog-card-meta">
                <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                <span>{post.readingTimeMinutes} min read</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
