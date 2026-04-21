"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import styles from "./Hero.module.css";

const words = ["Logos", "Brands", "Cards", "Banners", "Identity"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % words.length);
        setVisible(true);
      }, 350);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={styles.heroSection}>
      <BackgroundGradientAnimation
        containerClassName={styles.bgWrapper}
        className={styles.bgContent}
        interactive={true}
        size="70%"
        gradientBackgroundStart="rgb(12, 9, 4)"
        gradientBackgroundEnd="rgb(20, 16, 8)"
        firstColor="245, 158, 11"
        secondColor="244, 63, 94"
        thirdColor="251, 146, 60"
        fourthColor="20, 184, 166"
        fifthColor="239, 68, 68"
        pointerColor="245, 158, 11"
        blendingValue="hard-light"
      >
        {/* Noise texture */}
        <div className={styles.noise} />

        {/* Grid overlay */}
        <div className={styles.grid} />

        {/* Center content */}
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <Sparkles size={12} />
            <span>Creative Design &amp; Printing Studio</span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            <span className={styles.headLine1}>We Design</span>
            <span className={styles.headLine2}>
              <span
                className={`${styles.animatedWord} ${
                  visible ? styles.wordVisible : styles.wordHidden
                }`}
              >
                {words[wordIdx]}
              </span>
            </span>
            <span className={styles.headLine3}>
              That Make{" "}
              <span className={styles.headlineAccent}>Impact</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className={styles.subtext}>
            End-to-end branding &amp; printing solutions — from your first logo
            to a complete brand identity. Fast delivery. Premium quality.
          </p>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I%27d%20like%20a%20quote%20for%20a%20design%20project."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
              id="hero-cta-whatsapp"
            >
              <MessageCircle size={18} />
              Get a Free Quote
            </a>
            <button
              className={styles.ctaSecondary}
              onClick={scrollToServices}
              id="hero-cta-services"
            >
              View Our Work
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Projects Done</span>
            </div>
            <div className={styles.statSep} />
            <div className={styles.stat}>
              <span className={styles.statNum}>200+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statSep} />
            <div className={styles.stat}>
              <span className={styles.statNum}>5 ★</span>
              <span className={styles.statLabel}>Avg Rating</span>
            </div>
            <div className={styles.statSep} />
            <div className={styles.stat}>
              <span className={styles.statNum}>48h</span>
              <span className={styles.statLabel}>Delivery</span>
            </div>
          </div>

          {/* Trust pills */}
          <div className={styles.pills}>
            <span className={styles.pill}>⚡ Fast Turnaround</span>
            <span className={styles.pill}>💎 Premium Quality</span>
            <span className={styles.pill}>✅ Free Revisions</span>
            <span className={styles.pill}>📱 WhatsApp Support</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <button className={styles.scrollIndicator} onClick={scrollToServices} aria-label="Scroll down">
          <div className={styles.scrollDot} />
          <ChevronDown size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
        </button>
      </BackgroundGradientAnimation>
    </section>
  );
}
