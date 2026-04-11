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
    <section id="about" style={{ paddingTop: "6rem" }}>
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1.5rem 4rem",
        }}
      >
        {/* Label */}
        <motion.p
          className="section-label"
          style={{ marginBottom: "3rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          [ 01 / About ]
        </motion.p>

        {/* Two column layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
          }}
          className="about-grid"
        >
          {/* Left column: text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ flex: "1", minWidth: 0 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.2,
                color: "var(--white)",
                marginBottom: "2rem",
              }}
            >
              &ldquo;I turn data<br />into decisions.&rdquo;
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "var(--gray-300)",
                }}
              >
                Data Analytics leader with 8+ years of experience driving e-commerce growth
                through actionable insights, customer segmentation, and data-driven strategy.
                Currently at GoFundMe, previously building analytics foundations at Rothy&apos;s,
                Art.com, and Fuelx.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "var(--gray-400)",
                }}
              >
                Expert in leveraging analytics to enhance retention, maximize ROI, and connect
                data to decisions that actually move the needle — from Python pipelines to
                C-suite storytelling.
              </p>
            </div>
          </motion.div>

          {/* Right column: photo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ flex: "0 0 auto", width: "100%", maxWidth: "360px" }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4 / 5",
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
                    objectPosition: "center 20%",
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
