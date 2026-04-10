"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import { contact } from "@/lib/data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: open mailto
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "10rem 0 8rem",
        borderTop: "1px solid var(--gray-800)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.p
          className="section-label"
          style={{ marginBottom: "3rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          [ 06 / Contact ]
        </motion.p>

        <RevealText
          text="Let's work together."
          tag="h2"
          delay={0.1}
          duration={0.8}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "var(--white)",
            marginBottom: "3rem",
          } as React.CSSProperties}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center" }}
        >
          {/* Email copy button */}
          <div style={{ position: "relative" }}>
            <button
              onClick={copyEmail}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                color: "var(--gray-300)",
                background: "none",
                border: "1px solid var(--gray-700)",
                padding: "0.75rem 1.5rem",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--white)";
                e.currentTarget.style.color = "var(--white)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--gray-700)";
                e.currentTarget.style.color = "var(--gray-300)";
              }}
            >
              {contact.email}
            </button>

            {/* Copied toast */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 0.5rem)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--white)",
                    color: "var(--black)",
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    padding: "0.3rem 0.6rem",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                  }}
                >
                  COPIED
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social links */}
          <MagneticButton>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gray-500)",
                textDecoration: "none",
                transition: "color 0.2s",
                display: "inline-block",
                padding: "0.5rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-500)")}
            >
              LinkedIn ↗
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gray-500)",
                textDecoration: "none",
                transition: "color 0.2s",
                display: "inline-block",
                padding: "0.5rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-500)")}
            >
              GitHub ↗
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
