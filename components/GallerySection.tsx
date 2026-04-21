"use client";

import {
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/components/ui/cta-section-with-gallery";
import { Sparkles } from "lucide-react";

// Beautiful Unsplash images for a creative studio layout
const IMAGES = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop", // Branding mockups
  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2000&auto=format&fit=crop", // Digital art creation
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop", // Graphic design tools
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2000&auto=format&fit=crop", // Creative teamwork
];

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden py-[120px] px-6">
      {/* Warm Background blobs matching the Studio Ember theme */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left Side: Staggered Content */}
        <ContainerStagger>
          <ContainerAnimated className="mb-6 block">
            <div className="section-label">
              <Sparkles size={12} />
              Innovate & Grow
            </div>
          </ContainerAnimated>
          
          <ContainerAnimated className="section-title mb-6" style={{ fontSize: 'clamp(36px, 4vw, 48px)' }}>
            Design That Defies <br/> <span className="gradient-text italic font-black">Expectations</span>
          </ContainerAnimated>
          
          <ContainerAnimated className="section-subtitle mb-10">
            Transform your brand's potential through striking visual identities
            and strategic assets. We help businesses adapt, evolve, and stand out
            in today's crowded marketplace.
          </ContainerAnimated>
          
          <ContainerAnimated>
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary shadow-glow-gold"
            >
              Start Your Project
            </a>
          </ContainerAnimated>
        </ContainerStagger>

        {/* Right Side: Animated Gallery Grid */}
        <GalleryGrid className="relative z-10 w-full md:max-w-md ml-auto">
          {IMAGES.map((imageUrl, index) => (
            <GalleryGridCell 
              index={index} 
              key={index}
              className="border border-[rgba(245,158,11,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] group"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                className="size-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                src={imageUrl}
                alt={`Studio work ${index + 1}`}
              />
            </GalleryGridCell>
          ))}
        </GalleryGrid>
      </div>
    </section>
  );
}
