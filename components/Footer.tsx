"use client";

import { MessageCircle, Share2, MapPin, Sparkles, Heart } from "lucide-react";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Logo Design",
  "Brand Identity",
  "Visiting Cards",
  "Flex Printing",
  "Social Media",
  "Packaging Design",
];

const socials = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/91XXXXXXXXXX",
    color: "#25D366",
  },
  {
    icon: Share2,
    label: "Instagram",
    href: "https://instagram.com/chitrakala_graphics_studio",
    color: "#EC4899",
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* Top gradient divider */}
      <div className={styles.topDivider} />

      <div className={styles.container}>
        {/* Brand column */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <Sparkles size={14} />
            </div>
            <span className={styles.logoText}>
              Chitra<span className={styles.logoAccent}>kala</span>
            </span>
          </div>

          <p className={styles.brandDesc}>
            Premium creative studio specializing in logo design, brand identity,
            and print solutions. Making businesses unforgettable since 2019.
          </p>

          <div className={styles.socialRow}>
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  style={{ "--glow": `${s.color}44` } as React.CSSProperties}
                  aria-label={s.label}
                >
                  <Icon size={18} style={{ color: s.color }} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(l.href);
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.linkList}>
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#services");
                  }}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <div className={styles.contactItems}>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <MessageCircle size={15} style={{ color: "#25D366" }} />
              <span>+91 XXXXXXXXXX</span>
            </a>
            <a
              href="https://instagram.com/chitrakala_graphics_studio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <Share2 size={15} style={{ color: "#EC4899" }} />
              <span>@chitrakala_graphics_studio</span>
            </a>
            <div className={styles.contactItem}>
              <MapPin size={15} style={{ color: "#6366F1" }} />
              <span>India (Serving nationwide)</span>
            </div>
            <div className={styles.contactItem} style={{ marginTop: 4 }}>
              <span
                style={{
                  fontSize: 11,
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.25)",
                  color: "#4ADE80",
                  padding: "3px 10px",
                  borderRadius: 999,
                  fontWeight: 600,
                }}
              >
                ● Online — Mon–Sat, 9AM–8PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Chitrakala Graphics Studio. All rights
            reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <Heart size={12} fill="#EC4899" color="#EC4899" /> for
            creative brands
          </p>
        </div>
      </div>
    </footer>
  );
}
