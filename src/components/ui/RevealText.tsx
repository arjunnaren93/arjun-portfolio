"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface RevealTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function RevealText({
  text,
  className = "",
  style,
  delay = 0,
  duration = 0.6,
  tag: Tag = "p",
}: RevealTextProps) {
  const prefersReduced = usePrefersReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const word: Variants = {
    hidden: { y: prefersReduced ? 0 : "110%", opacity: prefersReduced ? 1 : 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Tag className={className} style={style}>
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}
      >
        {words.map((w, i) => (
          <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
            <motion.span variants={word} style={{ display: "inline-block" }}>
              {w}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
