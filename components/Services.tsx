"use client";

import { useEffect, useRef } from "react";
import {
  Palette,
  Layers,
  CreditCard,
  Printer,
  Share2,
  Package,
  ArrowRight,
} from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    desc: "Unique, memorable logos crafted to represent your brand's soul. Multiple concepts, unlimited revisions.",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.22)",
    tag: "Most Popular",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    desc: "Complete brand solution — logo, palette, typography, stationery, and brand guidelines.",
    color: "#F43F5E",
    glow: "rgba(244,63,94,0.2)",
    tag: "Premium",
  },
  {
    icon: CreditCard,
    title: "Visiting Cards",
    desc: "Professional business cards with premium finishes — matte, glossy, spot UV, and foil options.",
    color: "#FB923C",
    glow: "rgba(251,146,60,0.22)",
    tag: "Fast Delivery",
  },
  {
    icon: Printer,
    title: "Flex Printing",
    desc: "Large-format banners, standees, hoardings, and flex boards with vibrant print quality.",
    color: "#14B8A6",
    glow: "rgba(20,184,166,0.22)",
    tag: "Bulk Available",
  },
  {
    icon: Share2,
    title: "Social Media",
    desc: "Eye-catching posts, stories, reels covers, and ad creatives that drive engagement.",
    color: "#FCD34D",
    glow: "rgba(252,211,77,0.2)",
    tag: "Trending",
  },
  {
    icon: Package,
    title: "Packaging Design",
    desc: "Product packaging, labels, boxes, and bags that make your product stand out on shelves.",
    color: "#E879F9",
    glow: "rgba(232,121,249,0.2)",
    tag: "Custom",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(`.${styles.card}`);
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className={styles.section} ref={sectionRef}>
      {/* Background glow */}
      <div className={styles.bgGlow} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className="section-label">
            <Palette size={12} />
            What We Do
          </div>
          <h2 className={`section-title gradient-text`}>
            Our Creative Services
          </h2>
          <p className="section-subtitle">
            From concept to print, we deliver end-to-end creative solutions
            that help businesses build a powerful visual identity.
          </p>
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={styles.card}
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              >
                {/* Tag */}
                {s.tag && (
                  <span className={styles.cardTag} style={{ color: s.color }}>
                    {s.tag}
                  </span>
                )}

                {/* Icon */}
                <div
                  className={styles.iconWrap}
                  style={{
                    background: `radial-gradient(circle, ${s.glow} 0%, transparent 70%)`,
                  }}
                >
                  <Icon
                    size={28}
                    style={{ color: s.color }}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>

                <div className={styles.cardFooter}>
                  <a
                    href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I%27m%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    style={{ color: s.color }}
                  >
                    Enquire Now <ArrowRight size={14} />
                  </a>
                  {/* Bottom glow line */}
                  <div
                    className={styles.glowLine}
                    style={{
                      background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
