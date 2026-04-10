"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const pill = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
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
          [ 03 / Skills ]
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="md:grid-cols-3"
        >
          {skillCategories.map((cat, i) => (
            <div key={i}>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  color: "var(--gray-600)",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                {cat.label}
              </p>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
              >
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    variants={pill}
                    style={{
                      padding: "0.4rem 0.85rem",
                      border: "1px solid var(--gray-700)",
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.05em",
                      color: "var(--gray-300)",
                      transition: "background 0.2s, color 0.2s, border-color 0.2s",
                    }}
                    whileHover={{
                      backgroundColor: "var(--accent-dim)",
                      color: "var(--accent-light)",
                      borderColor: "var(--accent)",
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
