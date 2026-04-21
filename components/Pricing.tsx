"use client";

import { Check, Zap, Star, MessageCircle } from "lucide-react";
import styles from "./Pricing.module.css";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "₹999",
    tagline: "Perfect for getting started",
    icon: "🌱",
    popular: false,
    features: [
      "Logo Design (2 Concepts)",
      "3 Revisions",
      "High-Res Files (PNG, JPG)",
      "48-Hour Delivery",
      "WhatsApp Support",
    ],
    notIncluded: ["Business Card Design", "Social Media Kit", "Brand Guide"],
    waMsg: "Hi! I'm interested in the Basic Plan (₹999). Please share more details.",
  },
  {
    id: "pro",
    name: "Pro",
    price: "₹2,499",
    tagline: "Best value for small businesses",
    icon: "🚀",
    popular: true,
    features: [
      "Logo Design (4 Concepts)",
      "Unlimited Revisions",
      "All Formats (PNG, JPG, SVG, PDF)",
      "Business Card Design",
      "Social Media Profile Kit",
      "24-Hour Delivery",
      "Priority WhatsApp Support",
    ],
    notIncluded: ["Full Brand Guide", "Stationery Design"],
    waMsg: "Hi! I'm interested in the Pro Plan (₹2,499). Please share more details.",
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹5,999",
    tagline: "Complete brand transformation",
    icon: "👑",
    popular: false,
    features: [
      "Logo Design (6 Concepts)",
      "Unlimited Revisions",
      "Complete Brand Guide",
      "Business Card + Stationery",
      "Social Media Full Kit",
      "Flex/Banner Design",
      "12-Hour Priority Delivery",
      "Personal Brand Consultation",
      "1 Month Post-Delivery Support",
    ],
    notIncluded: [],
    waMsg: "Hi! I'm interested in the Premium Plan (₹5,999). Please share more details.",
  },
];

export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className="section-label">
            💰 Pricing
          </div>
          <h2 className="section-title">
            Transparent Pricing,{" "}
            <span className="gradient-text">No Surprises</span>
          </h2>
          <p className="section-subtitle">
            Choose a plan that fits your business needs. All plans include
            professional design and fast delivery.
          </p>
        </div>

        {/* Plans Grid */}
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
              id={`pricing-plan-${plan.id}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  <Star size={11} />
                  MOST POPULAR
                </div>
              )}

              <div className={styles.cardTop}>
                <div className={styles.planIcon}>{plan.icon}</div>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTagline}>{plan.tagline}</p>
                <div className={styles.priceWrap}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.priceMeta}>one-time</span>
                </div>
              </div>

              <div className={styles.divider} />

              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <Check size={14} className={styles.checkIcon} />
                    <span>{f}</span>
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className={`${styles.featureItem} ${styles.notIncluded}`}>
                    <span className={styles.crossIcon}>—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(plan.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${plan.popular ? "btn-primary" : "btn-outline"} ${styles.planCta}`}
                id={`pricing-cta-${plan.id}`}
              >
                <MessageCircle size={15} />
                Get This Plan
              </a>
            </div>
          ))}
        </div>

        {/* Custom Quote */}
        <div className={styles.customQuote}>
          <Zap size={18} color="#FFD700" />
          <p>
            Need a custom package?{" "}
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I%20need%20a%20custom%20design%20package%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.customLink}
            >
              Get a free custom quote →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
