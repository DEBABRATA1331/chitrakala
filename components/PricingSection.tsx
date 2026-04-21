"use client";

import {
  PricingWrapper,
  CardHeading,
  CardPrice,
  CardParagraph,
  CardBadge,
} from "@/components/ui/animated-pricing-cards";
import { Sparkles } from "lucide-react";

const WHATSAPP = "https://wa.me/91XXXXXXXXXX?text=Hi%20Chitrakala%2C%20I%27m%20interested%20in%20your%20services!";

const plans = [
  {
    type: "waves" as const,
    badge: "Most Popular",
    name: "Logo Design",
    price: "₹2,999",
    per: "/project",
    desc: "A bold, memorable logo with multiple concepts, revisions included. Delivered in 48 hours.",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  },
  {
    type: "crosses" as const,
    badge: "Premium",
    name: "Brand Identity",
    price: "₹9,999",
    per: "/package",
    desc: "Logo + colour palette + typography + stationery + brand guidelines. Full identity kit.",
    gradient: "linear-gradient(135deg, #F43F5E 0%, #9F1239 100%)",
  },
  {
    type: "waves" as const,
    badge: "Fast Delivery",
    name: "Print & Flex",
    price: "₹1,499",
    per: "/design",
    desc: "Visiting cards, flex boards, standees, banners — premium print-ready files + vendor support.",
    gradient: "linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)",
  },
  {
    type: "crosses" as const,
    badge: "Trending",
    name: "Social Media",
    price: "₹4,999",
    per: "/month",
    desc: "30 posts + 15 stories + 8 reel covers. Consistent brand voice across Instagram & Facebook.",
    gradient: "linear-gradient(135deg, #FB923C 0%, #C2410C 100%)",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-[120px] px-6 overflow-hidden">
      {/* Warm background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mx-auto mb-6">
            <Sparkles size={12} />
            Transparent Pricing
          </div>
          <h2 className="section-title">
            Studio-Quality Design.{" "}
            <span className="gradient-text italic">Honest Prices.</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            No surprise billings. Pick a service, WhatsApp us, and we get started same day.
          </p>
        </div>

        {/* Cards scroll container */}
        <div className="flex flex-wrap gap-6 justify-center md:flex-row">
          <div className="flex gap-6 overflow-x-auto pb-4 md:pb-0 md:flex-wrap md:justify-center w-full"
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
          {plans.map((plan) => (
            <PricingWrapper
              key={plan.name}
              type={plan.type}
              contactHref={WHATSAPP}
              btnLabel="WhatsApp Us"
              className="shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex-shrink-0"
              style={{ background: plan.gradient, scrollSnapAlign: 'start' } as React.CSSProperties}
            >
              <CardBadge>{plan.badge}</CardBadge>
              <CardHeading>{plan.name}</CardHeading>
              <CardPrice>
                {plan.price}
                <span className="text-[1rem] font-medium opacity-70 ml-1">{plan.per}</span>
              </CardPrice>
              <CardParagraph>{plan.desc}</CardParagraph>
            </PricingWrapper>
          ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center mt-12 text-sm font-medium" style={{ color: "rgba(175,160,144,0.55)", fontFamily: "'DM Sans', sans-serif" }}>
          All prices are exclusive of printing / production costs. Custom packages available on request.
        </p>
      </div>
    </section>
  );
}
