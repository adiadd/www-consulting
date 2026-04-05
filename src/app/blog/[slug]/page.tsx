import { founder, siteConfig } from "@/config/site";
import { formatBlogDate, getAllPostSlugs, getPostBySlug, getPostModule } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const canonicalUrl = `${siteConfig.url}${post.url}`;
  const socialImage = post.coverImage ?? `${siteConfig.url}/opengraph-image.png`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      tags: post.tags,
      authors: [founder.name],
      images: [
        {
          url: socialImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [socialImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { default: PostBody } = await getPostModule(slug);
  const canonicalUrl = `${siteConfig.url}${post.url}`;
  const socialImage = post.coverImage ?? `${siteConfig.url}/opengraph-image.png`;

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
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    url: canonicalUrl,
    image: socialImage,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      name: founder.name,
      url: founder.website,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <main id="main-content" className="blog-layout">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <article className="blog-article">
        <div className="blog-article-frame">
          <header className="blog-article-header">
            <Link href="/blog" className="blog-back-link">
              back to blog
            </Link>
            <h1 className="blog-article-title">{post.title}</h1>
            <div className="blog-article-meta">
              <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
              <span>{post.readingTimeMinutes} min read</span>
              <span>{founder.name}</span>
            </div>
            <div className="blog-card-tags" aria-label="Tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="blog-prose-shell">
            <div className="blog-prose">
              <PostBody />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
