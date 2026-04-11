"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{ padding: "6rem 0", borderTop: "1px solid var(--gray-800)" }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.p
          className="section-label"
          style={{ marginBottom: "1rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          [ 04 / Projects ]
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 400,
            color: "var(--white)",
            marginBottom: "4rem",
            maxWidth: "500px",
          }}
        >
          Selected work & impact.
        </motion.h2>

        {/* Project rows */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: "2rem",
                padding: "2.5rem 0",
                borderBottom: "1px solid var(--gray-800)",
                cursor: "default",
              }}
              whileHover={{ x: 4 }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  paddingTop: "0.3rem",
                }}
              >
                {project.number}
              </span>

              {/* Content */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                      fontWeight: 400,
                      color: "var(--white)",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    color: "var(--gray-400)",
                    marginBottom: "1.25rem",
                    maxWidth: "680px",
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.62rem",
                        letterSpacing: "0.08em",
                        color: "var(--gray-600)",
                        border: "1px solid var(--gray-800)",
                        padding: "0.2rem 0.55rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
