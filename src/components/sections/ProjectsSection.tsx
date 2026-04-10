"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
          [ 04 / Projects ]
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.5rem",
                padding: "3rem 0",
                borderBottom: "1px solid var(--gray-800)",
                position: "relative",
                overflow: "hidden",
              }}
              className="group md:grid-cols-[auto_1fr_240px]"
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: "var(--gray-700)",
                  paddingTop: "0.25rem",
                }}
              >
                {project.number}
              </span>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    fontWeight: 400,
                    color: "var(--white)",
                    marginBottom: "0.75rem",
                    transition: "color 0.2s",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    color: "var(--gray-400)",
                    marginBottom: "1.25rem",
                    maxWidth: "520px",
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
                        fontSize: "0.65rem",
                        letterSpacing: "0.08em",
                        color: "var(--gray-600)",
                        border: "1px solid var(--gray-800)",
                        padding: "0.2rem 0.5rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover image placeholder */}
              <div
                style={{
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="md:flex"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  style={{
                    width: "220px",
                    height: "140px",
                    background: "var(--gray-800)",
                    border: "1px solid var(--gray-700)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.65rem",
                      color: "var(--gray-600)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.number}
                  </span>
                </motion.div>
              </div>

              {/* Bottom border line animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: "var(--gray-700)",
                  transformOrigin: "left",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
