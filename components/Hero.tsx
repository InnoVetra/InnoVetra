"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-overlay" />
      <motion.div
        className="hero-orb hero-orb-a"
        animate={{ x: [0, 40, 0], y: [0, -28, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-orb hero-orb-b"
        animate={{ x: [0, -32, 0], y: [0, 32, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="container hero-content">
        <p className="eyebrow">AI + DIGITAL TWINS + INFRASTRUCTURE</p>
        <h1>
          Intelligence for<br />
          the <span>built world.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            We help cities, infrastructure operators, and builders understand complex systems,
            anticipate risk, and make faster decisions with AI-powered digital intelligence.
          </p>
          <a className="round-link" href="#solutions" aria-label="Explore solutions">
            <ArrowDownRight size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}
