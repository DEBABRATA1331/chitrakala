"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#home" className={styles.logo} onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}>
            <div className={styles.logoIcon}>
              <Sparkles size={14} />
            </div>
            <span className={styles.logoText}>
              Chitra<span className={styles.logoAccent}>kala</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className={styles.desktopNav}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={styles.navLink}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I%20want%20to%20discuss%20a%20design%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
            id="nav-cta"
          >
            Get a Quote
          </a>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="nav-hamburger"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        ref={menuRef}
      >
        <div className={styles.drawerInner}>
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.drawerLink}
              style={{ animationDelay: `${i * 60}ms` }}
              onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I%20want%20to%20discuss%20a%20design%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerCta}
            id="nav-mobile-cta"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
