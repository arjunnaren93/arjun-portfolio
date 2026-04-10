"use client";

import { motion } from "framer-motion";
import { marqueeItems } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutSection() {
  const photosReady = process.env.NEXT_PUBLIC_PHOTOS_READY === "true";
  const marquee = [...marqueeItems, ...marqueeItems];

  return (
    <section id="about" style={{ paddingTop: "8rem", paddingBottom: "0" }}>
      {/* Section content */}
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
        }}
        className="md:grid-cols-2"
      >
        {/* Left: pull quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="section-label" style={{ marginBottom: "2rem" }}>
            [ 01 / About ]
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.2,
              color: "var(--white)",
            }}
          >
            &ldquo;I turn data<br />into decisions.&rdquo;
          </h2>
        </motion.div>

        {/* Right: bio + photo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--gray-300)",
              }}
            >
              I&apos;m a Staff Data Analyst at GoFundMe, where I help millions of people
              fundraise more effectively. I specialise in turning messy, complex datasets
              into clear narratives that drive product decisions.
            </p>
            <p
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--gray-400)",
              }}
            >
              With a background spanning product analytics, machine learning, and data
              engineering, I sit at the intersection of technical depth and business
              strategy — making sure the right people have the right information at the
              right time.
            </p>
          </div>

          {/* Photo */}
          <div
            style={{
              width: "100%",
              maxWidth: "320px",
              aspectRatio: "1",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {photosReady ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/photos/about.jpg"
                alt="Arjun Narendran"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(1) contrast(1.1)",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "var(--gray-800)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--gray-700)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "4rem",
                    color: "var(--gray-600)",
                    fontStyle: "italic",
                  }}
                >
                  AN
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div
        style={{
          borderTop: "1px solid var(--gray-800)",
          borderBottom: "1px solid var(--gray-800)",
          padding: "1.2rem 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div className="animate-marquee" style={{ display: "inline-flex", gap: "3rem" }}>
          {marquee.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                color: "var(--gray-600)",
                textTransform: "uppercase",
              }}
            >
              {item}
              <span style={{ marginLeft: "3rem", color: "var(--gray-700)" }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
