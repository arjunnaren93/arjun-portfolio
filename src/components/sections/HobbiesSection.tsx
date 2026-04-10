"use client";

import { motion } from "framer-motion";
import { hobbies } from "@/lib/data";

export default function HobbiesSection() {
  return (
    <section
      id="hobbies"
      style={{ padding: "8rem 0", borderTop: "1px solid var(--gray-800)" }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.p
          className="section-label"
          style={{ marginBottom: "1rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          [ 05 / Beyond Work ]
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 400,
            color: "var(--white)",
            marginBottom: "4rem",
          }}
        >
          Outside the data.
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1px",
            background: "var(--gray-800)",
          }}
          className="md:grid-cols-2"
        >
          {hobbies.map((hobby, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                padding: "2.5rem",
                background: "var(--gray-950)",
                transition: "background 0.3s",
              }}
              whileHover={{ backgroundColor: "var(--gray-900)" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "var(--white)",
                  marginBottom: "0.75rem",
                }}
              >
                {hobby.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "var(--gray-400)",
                }}
              >
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
