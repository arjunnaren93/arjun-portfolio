"use client";

import Link from "next/link";

const posts = [
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

export default function BlogIndex() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem" }}>

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
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
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
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
