"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  function go(dir: number) {
    setDirection(dir);
    setIndex((prev) => (prev + dir + total) % total);
  }

  const t = testimonials[index];

  return (
    <section id="testimonials" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Label */}
        <motion.p
          className="section-label"
          style={{ marginBottom: "3rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          [ 07 / Testimonials ]
        </motion.p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {/* Card */}
          <div style={{ position: "relative", overflow: "hidden", minHeight: "280px" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: "var(--gray-900)",
                  border: "1px solid var(--gray-800)",
                  padding: "2.5rem",
                }}
              >
                {/* Quote mark */}
                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "5rem",
                    lineHeight: 0.8,
                    color: "var(--accent)",
                    marginBottom: "1.5rem",
                    opacity: 0.6,
                  }}
                >
                  &ldquo;
                </div>

                {/* Text */}
                <p
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontSize: "clamp(1rem, 2vw, 1.15rem)",
                    lineHeight: 1.8,
                    color: "var(--gray-300)",
                    marginBottom: "2rem",
                    fontStyle: "italic",
                  }}
                >
                  {t.text}
                </p>

                {/* Attribution */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "var(--accent-dim)",
                      border: "1px solid var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "0.9rem",
                        color: "var(--accent)",
                        fontWeight: 600,
                      }}
                    >
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    {t.linkedin ? (
                      <a
                        href={t.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-geist)",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "var(--white)",
                          textDecoration: "none",
                          borderBottom: "1px solid var(--accent)",
                          paddingBottom: "1px",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--white)")}
                      >
                        {t.name}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: "var(--font-geist)",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "var(--white)",
                        }}
                      >
                        {t.name}
                      </span>
                    )}
                    <p
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.08em",
                        color: "var(--gray-500)",
                        marginTop: "0.2rem",
                      }}
                    >
                      {t.role} · {t.company} · {t.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              style={{
                width: "44px",
                height: "44px",
                border: "1px solid var(--gray-700)",
                background: "transparent",
                color: "var(--gray-300)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--gray-700)";
                e.currentTarget.style.color = "var(--gray-300)";
              }}
            >
              ←
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === index ? "24px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: i === index ? "var(--accent)" : "var(--gray-700)",
                    border: "none",
                    cursor: "pointer",
                    transition: "width 0.3s, background 0.3s",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next"
              style={{
                width: "44px",
                height: "44px",
                border: "1px solid var(--gray-700)",
                background: "transparent",
                color: "var(--gray-300)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--gray-700)";
                e.currentTarget.style.color = "var(--gray-300)";
              }}
            >
              →
            </button>

            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                color: "var(--gray-600)",
                marginLeft: "auto",
              }}
            >
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
