"use client";

import { useState } from "react";
import {
  MessageCircle,
  Share2,
  Send,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import styles from "./CTA.module.css";

export default function CTA() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.message) return;
    setSending(true);
    const text = encodeURIComponent(
      `Hi! I'm ${form.name}.\nContact: ${form.contact}\n\n${form.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");
      setSent(true);
      setSending(false);
      setForm({ name: "", contact: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 400);
  };

  return (
    <section id="contact" className={styles.section}>
      <BackgroundGradientAnimation
        containerClassName={styles.bgWrapper}
        interactive={false}
        size="60%"
        gradientBackgroundStart="rgb(12, 9, 4)"
        gradientBackgroundEnd="rgb(18, 14, 6)"
        firstColor="245, 158, 11"
        secondColor="244, 63, 94"
        thirdColor="251, 146, 60"
        fourthColor="20, 184, 166"
        fifthColor="239, 68, 68"
        blendingValue="hard-light"
      >
        <div className={styles.container}>
          {/* Left */}
          <div className={styles.left}>
            <div className="section-label">
              <MessageCircle size={12} />
              Get In Touch
            </div>

            <h2 className={`section-title ${styles.heading}`}>
              Ready To Build{" "}
              <span className="gradient-text">Your Brand?</span>
            </h2>

            <p className={styles.sub}>
              Tell us about your project and we'll send you a custom quote
              within 2 hours. Free consultation, no obligations.
            </p>

            {/* Contact info */}
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <MessageCircle size={16} style={{ color: "#25D366" }} />
                </div>
                <div>
                  <p className={styles.contactLabel}>WhatsApp</p>
                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactValue}
                  >
                    +91 XXXXXXXXXX
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Share2 size={16} style={{ color: "#EC4899" }} />
                </div>
                <div>
                  <p className={styles.contactLabel}>Instagram</p>
                  <a
                    href="https://instagram.com/chitrakala_graphics_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactValue}
                  >
                    @chitrakala_graphics_studio
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Clock size={16} style={{ color: "#6366F1" }} />
                </div>
                <div>
                  <p className={styles.contactLabel}>Working Hours</p>
                  <p className={styles.contactValue}>Mon–Sat, 9AM – 8PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={styles.formCard}>
            {sent ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>✅</div>
                <h3>Message Sent!</h3>
                <p>We'll reply on WhatsApp within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Send Us a Message</h3>

                <div className={styles.field}>
                  <label className={styles.label}>Your Name *</label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rahul Sharma"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Phone / Email *</label>
                  <Input
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="+91 9876543210 or email@domain.com"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Tell us about your project *</label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="I need a logo + visiting card design for my bakery business..."
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className={styles.submitBtn}
                  id="contact-submit"
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={16} />
                      Send via WhatsApp
                    </>
                  )}
                </button>

                <p className={styles.formNote}>
                  🔒 Your info is shared only via WhatsApp. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
}

// Fix: import Clock locally
function Clock({ size, style }: { size: number; style?: React.CSSProperties }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
