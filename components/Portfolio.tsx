"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Grid, Filter } from "lucide-react";
import styles from "./Portfolio.module.css";

const FILTERS = ["All", "Logos", "Print", "Digital", "Packaging"];

const portfolioItems = [
  {
    id: 1,
    title: "Artisan Coffee Co.",
    category: "Logos",
    tag: "Brand Identity",
    src: "https://picsum.photos/seed/design1/600/700",
    aspect: "tall",
  },
  {
    id: 2,
    title: "Urban Print Campaign",
    category: "Print",
    tag: "Flex Banner",
    src: "https://picsum.photos/seed/design2/600/400",
    aspect: "wide",
  },
  {
    id: 3,
    title: "NeoTech Solutions",
    category: "Logos",
    tag: "Logo Design",
    src: "https://picsum.photos/seed/design3/600/600",
    aspect: "square",
  },
  {
    id: 4,
    title: "Bloom Organics",
    category: "Packaging",
    tag: "Packaging",
    src: "https://picsum.photos/seed/design4/600/750",
    aspect: "tall",
  },
  {
    id: 5,
    title: "Spice Route Restaurant",
    category: "Digital",
    tag: "Social Media",
    src: "https://picsum.photos/seed/design5/600/400",
    aspect: "wide",
  },
  {
    id: 6,
    title: "Crystal Jewels",
    category: "Print",
    tag: "Visiting Card",
    src: "https://picsum.photos/seed/design6/600/600",
    aspect: "square",
  },
  {
    id: 7,
    title: "Summit Ventures",
    category: "Logos",
    tag: "Brand Identity",
    src: "https://picsum.photos/seed/design7/600/700",
    aspect: "tall",
  },
  {
    id: 8,
    title: "Festive Creatives",
    category: "Digital",
    tag: "Social Media",
    src: "https://picsum.photos/seed/design8/600/400",
    aspect: "wide",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll(`.${styles.item}`);
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <section id="portfolio" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className="section-label">
            <Grid size={12} />
            Our Work
          </div>
          <h2 className="section-title">
            Portfolio{" "}
            <span className="gradient-text">Showcase</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A curated selection of our best work across branding, print, and
            digital design.
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className={styles.grid}>
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`${styles.item} ${styles[`aspect${item.aspect.charAt(0).toUpperCase() + item.aspect.slice(1)}`]}`}
              style={{ "--delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span className={styles.overlayTag}>{item.tag}</span>
                <h3 className={styles.overlayTitle}>{item.title}</h3>
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlayBtn}
                >
                  Get Similar →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.gridCta}>
          <p className={styles.ctaText}>Want to see more? Let's build something great together.</p>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I%27d%20like%20to%20start%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            id="portfolio-cta"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
