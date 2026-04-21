"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${visible ? styles.wrapperVisible : ""}`}
    >
      {/* Tooltip bubble */}
      {expanded && (
        <div className={styles.bubble}>
          <button
            className={styles.bubbleClose}
            onClick={() => setExpanded(false)}
            aria-label="Close"
          >
            <X size={12} />
          </button>
          <p className={styles.bubbleText}>
            👋 Hi there! Need a design quote?
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I%27d%20like%20a%20free%20quote%20for%20a%20design%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bubbleBtn}
            id="whatsapp-floating-cta"
          >
            Chat on WhatsApp →
          </a>
        </div>
      )}

      {/* FAB button */}
      <button
        className={styles.fab}
        onClick={() => setExpanded(!expanded)}
        aria-label="WhatsApp Chat"
        id="whatsapp-fab"
      >
        <div className={styles.ring} />
        <div className={styles.ring2} />
        <MessageCircle size={26} fill="white" color="white" />
      </button>
    </div>
  );
}
