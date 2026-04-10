"use client";

import { motion } from "framer-motion";
import { jobs } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{ padding: "8rem 0", borderTop: "1px solid var(--gray-800)" }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.p
          className="section-label"
          style={{ marginBottom: "4rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          [ 02 / Experience ]
        </motion.p>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "1px",
              background: "var(--gray-800)",
              display: "none",
            }}
            className="md:block"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.5rem",
                  padding: "3rem 0",
                  borderBottom: "1px solid var(--gray-800)",
                }}
                className="md:grid-cols-[200px_1fr] md:pl-8"
              >
                {/* Left: meta */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      color: "var(--gray-500)",
                    }}
                  >
                    {job.period}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      color: "var(--gray-600)",
                    }}
                  >
                    {job.location}
                  </span>
                  {job.current && (
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "0.5rem",
                        padding: "0.2rem 0.5rem",
                        border: "1px solid var(--gray-600)",
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        color: "var(--gray-400)",
                        width: "fit-content",
                      }}
                    >
                      CURRENT
                    </span>
                  )}
                </div>

                {/* Right: content */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      fontWeight: 400,
                      color: "var(--white)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {job.company}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      color: "var(--gray-500)",
                      textTransform: "uppercase",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {job.role}
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          fontFamily: "var(--font-geist)",
                          fontSize: "0.95rem",
                          lineHeight: 1.65,
                          color: "var(--gray-400)",
                        }}
                      >
                        <span style={{ color: "var(--gray-700)", flexShrink: 0, marginTop: "0.15rem" }}>—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
