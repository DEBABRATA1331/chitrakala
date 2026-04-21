"use client";

import { Star, Quote } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Owner, Sharma Electronics",
    rating: 5,
    text: "Chitrakala redesigned our entire brand identity from scratch. The logo, visiting cards, and flex boards all look stunning. Our customers constantly ask who did our branding!",
    avatar: "RS",
    color: "#F59E0B",
    bg: "linear-gradient(135deg, #F59E0B, #B45309)",
  },
  {
    name: "Priya Malhotra",
    role: "Founder, Bloom Café",
    rating: 5,
    text: "Incredibly fast turnaround and the quality exceeded our expectations. Got our social media posts redesigned and the engagement has doubled. Highly recommend!",
    avatar: "PM",
    color: "#F43F5E",
    bg: "linear-gradient(135deg, #F43F5E, #9F1239)",
  },
  {
    name: "Ankit Joshi",
    role: "Director, NeoTech Solutions",
    rating: 5,
    text: "Professional, creative, and always responsive on WhatsApp. They delivered our complete brand identity within 3 days. Worth every rupee!",
    avatar: "AJ",
    color: "#FB923C",
    bg: "linear-gradient(135deg, #FB923C, #C2410C)",
  },
  {
    name: "Sunita Verma",
    role: "MD, Spice Route Restaurant",
    rating: 5,
    text: "The menu design and banner printing they did for us is just gorgeous. The colors are vibrant and print quality is top-notch. 5 stars without hesitation.",
    avatar: "SV",
    color: "#14B8A6",
    bg: "linear-gradient(135deg, #14B8A6, #0F766E)",
  },
  {
    name: "Deepak Nair",
    role: "CEO, Summit Ventures",
    rating: 5,
    text: "We've worked with several agencies but Chitrakala understands the brief better than anyone. The brand guidelines they created are comprehensive and beautiful.",
    avatar: "DN",
    color: "#FCD34D",
    bg: "linear-gradient(135deg, #FCD34D, #D97706)",
  },
  {
    name: "Kavita Reddy",
    role: "Owner, Crystal Jewels",
    rating: 5,
    text: "Amazing packaging design! Our product boxes look so premium now that customers think our products are way more expensive. ROI was immediate.",
    avatar: "KR",
    color: "#E879F9",
    bg: "linear-gradient(135deg, #E879F9, #A21CAF)",
  },
];

// Duplicate for seamless infinite marquee
const all = [...testimonials, ...testimonials];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#FBBF24" color="#FBBF24" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className="section-label">
            <Star size={12} />
            Client Reviews
          </div>
          <h2 className="section-title">
            What Our Clients{" "}
            <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Real words from real clients. We let our work speak for itself.
          </p>
        </div>

        {/* Marquee track */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {all.map((t, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardTop}>
                  <Quote
                    size={24}
                    style={{ color: t.color, opacity: 0.4 }}
                    fill={t.color}
                  />
                  <Stars count={t.rating} />
                </div>

                <p className={styles.text}>"{t.text}"</p>

                <div className={styles.author}>
                  <div
                    className={styles.avatar}
                    style={{ background: t.bg }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className={styles.name}>{t.name}</p>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary badge */}
        <div className={styles.summary}>
          <div className={styles.summaryInner}>
            <div className={styles.summaryStars}>
              <Stars count={5} />
              <span className={styles.summaryRating}>4.9 / 5.0</span>
            </div>
            <span className={styles.summaryText}>
              Based on 100+ verified reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
