"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "@/components/ui/RevealText";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const photosReady = process.env.NEXT_PUBLIC_PHOTOS_READY === "true";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* Background photo or placeholder */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          y: photoY,
          willChange: "transform",
        }}
      >
        {photosReady ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/photos/hero.jpg"
            alt="Arjun Narendran"
            style={{
              width: "100%",
              height: "110%",
              objectFit: "cover",
              filter: "grayscale(1) contrast(1.1)",
            }}
          />
        ) : (
          /* Placeholder: animated B&W gradient */
          <div
            style={{
              width: "100%",
              height: "110%",
              background:
                "linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 40%, #111 60%, #0a0a0a 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Decorative grid */}
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            {/* Initials placeholder */}
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(6rem, 20vw, 18rem)",
                color: "rgba(255,255,255,0.04)",
                userSelect: "none",
                fontStyle: "italic",
              }}
            >
              AN
            </div>
          </div>
        )}
      </motion.div>

      {/* Dark gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      {/* Text content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1.5rem 5rem",
        }}
      >
        <RevealText
          text="Arjun Narendran"
          tag="h1"
          delay={0.3}
          duration={0.8}
          className=""
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(3rem, 9vw, 8rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            color: "var(--white)",
            marginBottom: "1rem",
          } as React.CSSProperties}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gray-300)",
            }}
          >
            Staff Data Analyst
          </span>
          <span style={{ color: "var(--gray-600)", fontSize: "0.75rem" }}>·</span>
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gray-500)",
            }}
          >
            GoFundMe
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            color: "var(--gray-500)",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "48px",
            background: "var(--gray-500)",
            transformOrigin: "top",
          }}
        />
      </motion.div>
    </section>
  );
}
