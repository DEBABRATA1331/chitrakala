"use client";

import React, { useEffect, useRef } from "react";

export default function BrandPulseCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    // Wave lines that simulate brand "frequency"
    const waveData = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.018 + 0.008,
    }));

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }

    function updateData() {
      waveData.forEach((d) => {
        if (Math.random() < 0.008) d.targetValue = Math.random() * 0.7 + 0.1;
        d.value += (d.targetValue - d.value) * d.speed;
      });
    }

    function draw() {
      if (!canvas || !ctx) return;
      const W = canvas.width / Math.min(window.devicePixelRatio, 2);
      const H = canvas.height / Math.min(window.devicePixelRatio, 2);

      // Warm dark background
      ctx.fillStyle = "#0C0904";
      ctx.fillRect(0, 0, W, H);

      waveData.forEach((d, i) => {
        const freq = d.value * 7;
        ctx.beginPath();
        for (let x = 0; x < W; x++) {
          const nx = (x / W) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py =
            Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
          const y = (py + 1) * (H / 2);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        // Studio Ember: amber → rose spectrum across waves
        const t = i / 7;
        const r = 245;
        const g = Math.round(158 - t * 95); // 158 (amber) → 63 (rose)
        const b = Math.round(11 + t * 83);  // 11 (amber) → 94 (rose)
        const alpha = 0.45 + t * 0.35;

        ctx.lineWidth = 0.8 + i * 0.28;
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.35)`;
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    }

    function animate() {
      time += 0.018;
      updateData();
      draw();
      animId = requestAnimationFrame(animate);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    animate();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        height: "220px",
        border: "1px solid rgba(245,158,11,0.15)",
        animation: "float 6s ease-in-out infinite",
      }}
    >
      {/* Animated canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Glass overlay content */}
      <div
        className="absolute inset-0 z-10 p-5 flex flex-col justify-between"
        style={{ background: "rgba(12,9,4,0.35)", backdropFilter: "blur(2px)" }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[2px] uppercase"
            style={{
              background: "rgba(245,158,11,0.12)",
              border: "1px solid rgba(245,158,11,0.3)",
              color: "#F59E0B",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Brand Pulse
          </span>
          <span
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold"
            style={{
              background: "rgba(20,184,166,0.1)",
              border: "1px solid rgba(20,184,166,0.25)",
              color: "#14B8A6",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse inline-block" />
            Live
          </span>
        </div>

        {/* Bottom row */}
        <div>
          <p
            className="text-[13px] font-bold mb-1"
            style={{ color: "#FAF7F2", fontFamily: "'Syne', sans-serif" }}
          >
            Brand Identity Frequency
          </p>
          <p
            className="text-[11px] leading-relaxed"
            style={{ color: "rgba(250,247,242,0.6)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Visual consistency, recall & resonance — tracked in real-time.
          </p>
        </div>
      </div>
    </div>
  );
}
