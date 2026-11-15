"use client";

import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  // A static page in public/ (exported from its own app) rather than a route here.
  staticPage?: boolean;
};

const posts: Post[] = [
  {
    slug: "whos-on-my-bill",
    title: "Who's On My Bill? Where $54 Billion in Higher Electricity Costs Went",
    subtitle: "An interactive data story",
    date: "November 14, 2026",
    readTime: "10 min read",
    tags: ["Data Story", "Energy", "Python", "Data Viz"],
    excerpt:
      "The same electricity now costs US homes $54 billion more a year than in 2021. I traced it through every state, the data center boom and a grid auction most people have never heard of, then built a lookup for your own ZIP code.",
    staticPage: true,
  },
  {
    slug: "airflow-dag-google-sheets",
    title: "Creating a DAG to Schedule a Report to Google Sheets via Airflow",
    subtitle: "A step-by-step guide",
    date: "December 25, 2024",
    readTime: "6 min read",
    tags: ["Airflow", "Python", "Google Sheets", "Redshift"],
    excerpt:
      "A walkthrough of building an Airflow DAG that automates report generation by querying Amazon Redshift and uploading results directly to Google Sheets — using Astronomer and Docker locally.",
  },
];

function PostLink({ post, children }: { post: Post; children: React.ReactNode }) {
  const style = { textDecoration: "none" };
  // Static pages need a full page load; client-side routing only knows app routes.
  if (post.staticPage) {
    return <a href={`/blog/${post.slug}`} style={style}>{children}</a>;
  }
  return <Link href={`/blog/${post.slug}`} style={style}>{children}</Link>;
}

export default function BlogIndex() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Back link */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--gray-500)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "3rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-500)")}
        >
          ← Back to portfolio
        </Link>

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1.25rem",
            }}
          >
            [ Writing ]
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              color: "var(--white)",
              lineHeight: 1.1,
            }}
          >
            Blog
          </h1>
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "1.05rem",
              color: "var(--gray-400)",
              marginTop: "1rem",
              lineHeight: 1.7,
            }}
          >
            Practical guides on data engineering, analytics, and building things that actually ship.
          </p>
        </div>

        {/* Post list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {posts.map((post, i) => (
            <PostLink key={post.slug} post={post}>
              <article
                style={{
                  padding: "2.5rem 0",
                  borderTop: "1px solid var(--gray-800)",
                  borderBottom: i === posts.length - 1 ? "1px solid var(--gray-800)" : "none",
                  transition: "background 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gray-900)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        color: "var(--gray-500)",
                        textTransform: "uppercase",
                      }}
                    >
                      {post.date}
                    </span>
                    <span style={{ color: "var(--gray-700)", fontSize: "0.65rem" }}>·</span>
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        color: "var(--gray-500)",
                        textTransform: "uppercase",
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                      fontWeight: 400,
                      color: "var(--white)",
                      lineHeight: 1.25,
                    }}
                  >
                    {post.title}
                  </h2>

                  <p
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontSize: "0.95rem",
                      color: "var(--gray-400)",
                      lineHeight: 1.7,
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "0.6rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--accent)",
                          border: "1px solid var(--accent-dim)",
                          padding: "0.2rem 0.5rem",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      color: "var(--accent)",
                      marginTop: "0.25rem",
                    }}
                  >
                    Read article →
                  </span>
                </div>
              </article>
            </PostLink>
          ))}
        </div>
      </div>
    </main>
  );
}
