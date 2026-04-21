"use client";

import StackedPanels from "@/components/ui/stacked-panels-cursor-interactive-component";
import { MousePointerClick } from "lucide-react";

export default function InteractiveCanvas() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-[#0C0904] flex flex-col items-center justify-center border-y border-[rgba(245,158,11,0.06)]">
      {/* Warm noise and grid background matching Studio Ember theme */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)"
        }}
      />

      {/* Floating Header */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <div className="section-label !mb-0 !bg-transparent backdrop-blur-md">
          <MousePointerClick size={12} />
          Interactive Portfolio
        </div>
        <h3 className="font-display font-bold text-xl md:text-2xl text-[#FAF7F2] tracking-tight text-center">
          Experience Our <span className="gradient-text italic">Craft</span>
        </h3>
      </div>

      <div className="w-full h-full" style={{ contain: "layout" }}>
        <StackedPanels />
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-6 py-2.5 rounded-full bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.15)] backdrop-blur-md">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59e0b] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f59e0b]"></span>
        </span>
        <p className="text-[11px] tracking-[0.2em] font-bold uppercase text-[#F59E0B] font-body select-none">
          Move cursor to explore
        </p>
      </div>
    </section>
  );
}
