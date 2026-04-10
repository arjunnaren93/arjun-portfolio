"use client";

import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--gray-800)",
        padding: "2rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          color: "var(--gray-500)",
        }}
      >
        © {new Date().getFullYear()} Arjun Narendran
      </span>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "LinkedIn", href: contact.linkedin },
          { label: "GitHub", href: contact.github },
          { label: "Email", href: `mailto:${contact.email}` },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "var(--gray-500)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-500)")}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
