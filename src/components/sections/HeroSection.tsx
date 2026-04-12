"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: "relative",
        height: "100svh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Background photo with parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-12% 0",
          y: imgY,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=1920&q=85&auto=format"
          alt=""
          aria-hidden="true"
          className="hero-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            filter: "grayscale(0.15) contrast(1.05) brightness(0.55) saturate(0.75)",
            display: "block",
          }}
        />
      </motion.div>

      {/* Multi-layer gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 100%),
            linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.0) 100%)
          `,
        }}
      />

      {/* Top right — availability badge */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        style={{
          position: "absolute",
          top: "5rem",
          right: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.5rem 1rem",
          border: "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          background: "rgba(255,255,255,0.05)",
        }}
      >
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#4ade80",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.8)",
            textTransform: "uppercase",
          }}
        >
          Open to opportunities
        </span>
      </motion.div>

      {/* Main content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 1.5rem 4.5rem",
          maxWidth: "80rem",
          margin: "0 auto",
          left: 0,
          right: 0,
        }}
      >
        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ display: "inline-block", width: "32px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
          Staff Analyst · GoFundMe · Seattle
        </motion.p>

        {/* Name */}
        <div style={{ overflow: "visible", marginBottom: "1.5rem" }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
              fontWeight: 400,
              lineHeight: 1.0,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Arjun<br />Narendran
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.15)",
            marginBottom: "1.5rem",
            transformOrigin: "left",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.5,
              maxWidth: "420px",
            }}
          >
            Data analytics leader with 8+ years turning complex data into decisions that drive real growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
          >
            <a
              href="#projects"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#000",
                background: "var(--accent)",
                padding: "0.75rem 1.5rem",
                textDecoration: "none",
                transition: "background 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
            >
              View Work →
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                background: "transparent",
                padding: "0.75rem 1.5rem",
                border: "1px solid rgba(255,255,255,0.25)",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.color = "rgba(255,255,255,0.85)";
              }}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — bouncing chevron, works on all screen sizes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: "1.75rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ opacity: 0.5, display: "block" }}
        >
          <path
            d="M5 9l7 7 7-7"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
