"use client";

import { useEffect, useRef } from "react";
import { Award, Users, Clock, Star, CheckCircle } from "lucide-react";
import BrandPulseCard from "@/components/ui/schema-card-with-animated-wave-visualizer";
import styles from "./About.module.css";

const achievements = [
  { icon: Award, value: "5+", label: "Years of Excellence" },
  { icon: Users, value: "200+", label: "Satisfied Clients" },
  { icon: CheckCircle, value: "500+", label: "Projects Delivered" },
  { icon: Star, value: "4.9★", label: "Average Rating" },
];

const values = [
  "Pixel-perfect design execution",
  "On-time delivery, every time",
  "Unlimited revisions policy",
  "Direct WhatsApp communication",
  "Affordable, transparent pricing",
];

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.15 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.section}>
      {/* Background elements */}
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />

      <div className={styles.container}>
        {/* Left — text */}
        <div className={styles.left} ref={leftRef}>
          <div className="section-label">
            <Clock size={12} />
            Our Story
          </div>

          <h2 className={`section-title ${styles.heading}`}>
            Crafting Brands With{" "}
            <span className="gradient-text">Passion &amp; Precision</span>
          </h2>

          <p className={styles.para}>
            Chitrakala Graphics Studio was born from a simple belief: every
            business deserves design that truly represents its identity.
            Founded by a team of passionate designers, we've grown from a
            small local studio into a trusted creative partner for 200+
            businesses across India.
          </p>

          <p className={styles.para}>
            We combine bold aesthetics with strategic thinking — every design
            we create is crafted to not just look beautiful, but to convert
            and communicate. From startups to established brands, we treat
            every project as if it were our own.
          </p>

          <ul className={styles.values}>
            {values.map((v) => (
              <li key={v} className={styles.value}>
                <CheckCircle
                  size={16}
                  style={{ color: "#F59E0B", flexShrink: 0 }}
                />
                {v}
              </li>
            ))}
          </ul>

          <div className={styles.ctas}>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20Chitrakala%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="about-cta-whatsapp"
            >
              Chat With Us
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-outline"
              id="about-cta-portfolio"
            >
              See Our Work
            </a>
          </div>
        </div>

        {/* Right — stats + visual */}
        <div className={styles.right} ref={rightRef}>
          {/* Stats grid */}
          <div className={styles.statsGrid}>
            {achievements.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.label}
                  className={styles.statCard}
                  style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  <div className={styles.statIcon}>
                    <Icon size={20} style={{ color: "#F59E0B" }} />
                  </div>
                  <span className={styles.statValue}>{a.value}</span>
                  <span className={styles.statLabel}>{a.label}</span>
                </div>
              );
            })}
          </div>

          {/* BrandPulse animated wave card */}
          <div className={styles.visualCard}>
            <BrandPulseCard />
          </div>
        </div>
      </div>
    </section>
  );
}
