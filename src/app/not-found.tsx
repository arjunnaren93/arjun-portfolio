import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          color: "var(--gray-600)",
          textTransform: "uppercase",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2rem, 6vw, 4rem)",
          fontWeight: 400,
          fontStyle: "italic",
          color: "var(--white)",
        }}
      >
        Page not found.
      </h1>
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--gray-400)",
          textDecoration: "none",
          border: "1px solid var(--gray-700)",
          padding: "0.6rem 1.2rem",
          transition: "color 0.2s, border-color 0.2s",
        }}
      >
        ← Back home
      </Link>
    </main>
  );
}
