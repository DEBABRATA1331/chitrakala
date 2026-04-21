"use client";

import { useRef, useCallback } from "react";
import { motion, useSpring } from "motion/react";

const PANEL_COUNT = 22;
const WAVE_SPRING = { stiffness: 160, damping: 22, mass: 0.6 };
const SCENE_SPRING = { stiffness: 80, damping: 22, mass: 1 };
const Z_SPREAD = 42;
const SIGMA = 2.8;

// Curated Unsplash images for a creative graphic design studio
const PANEL_IMAGES = [
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80",
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&q=80",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=80",
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80",
  "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?w=400&q=80",
  "https://images.unsplash.com/photo-1628527304948-0615f410ed84?w=400&q=80",
  "https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=400&q=80",
  "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=400&q=80",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&q=80",
  "https://images.unsplash.com/photo-1603517228224-eb55aa918e7d?w=400&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&q=80",
  "https://images.unsplash.com/photo-1605106702734-205df224ecce?w=400&q=80",
  "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&q=80",
  "https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=400&q=80",
  "https://images.unsplash.com/photo-1557002664-d4dc3dfb3a62?w=400&q=80",
  "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&q=80",
  "https://images.unsplash.com/photo-1602498456745-e9503b30470b?w=400&q=80",
  "https://images.unsplash.com/photo-1527066236128-2ff79f7edcb8?w=400&q=80",
  "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=400&q=80",
];

// Replaced with Studio Ember aesthetic warm gradients (Amber, Rose, Teal, Orange)
const GRADIENT_OVERLAYS = [
  "linear-gradient(135deg, rgba(245,158,11,0.55) 0%, rgba(244,63,94,0.45) 100%)", // Amber to Rose
  "linear-gradient(135deg, rgba(251,146,60,0.55) 0%, rgba(20,184,166,0.45) 100%)", // Orange to Teal
  "linear-gradient(135deg, rgba(244,63,94,0.55) 0%, rgba(251,146,60,0.45) 100%)", // Rose to Orange
  "linear-gradient(135deg, rgba(20,184,166,0.45) 0%, rgba(245,158,11,0.55) 100%)", // Teal to Amber
  "linear-gradient(135deg, rgba(245,158,11,0.60) 0%, rgba(251,146,60,0.40) 100%)", // Amber to Orange
  "linear-gradient(135deg, rgba(252,211,77,0.50) 0%, rgba(244,63,94,0.50) 100%)", // Gold to Rose
  "linear-gradient(135deg, rgba(244,63,94,0.45) 0%, rgba(245,158,11,0.55) 100%)", // Rose to Amber
  "linear-gradient(135deg, rgba(251,146,60,0.45) 0%, rgba(252,211,77,0.55) 100%)", // Orange to Gold
  "linear-gradient(135deg, rgba(20,184,166,0.45) 0%, rgba(244,63,94,0.55) 100%)", // Teal to Rose
  "linear-gradient(135deg, rgba(245,158,11,0.45) 0%, rgba(20,184,166,0.55) 100%)", // Amber to Teal
  "linear-gradient(135deg, rgba(244,63,94,0.55) 0%, rgba(245,158,11,0.45) 100%)", // Rose to Amber
  "linear-gradient(135deg, rgba(252,211,77,0.55) 0%, rgba(251,146,60,0.45) 100%)", // Gold to Orange
  "linear-gradient(135deg, rgba(20,184,166,0.55) 0%, rgba(245,158,11,0.45) 100%)", // Teal to Amber
  "linear-gradient(135deg, rgba(244,63,94,0.45) 0%, rgba(251,146,60,0.55) 100%)", // Rose to Orange
  "linear-gradient(135deg, rgba(251,146,60,0.55) 0%, rgba(245,158,11,0.45) 100%)", // Orange to Amber
  "linear-gradient(135deg, rgba(251,146,60,0.45) 0%, rgba(20,184,166,0.55) 100%)", // Orange to Teal
  "linear-gradient(135deg, rgba(245,158,11,0.55) 0%, rgba(252,211,77,0.45) 100%)", // Amber to Gold
  "linear-gradient(135deg, rgba(244,63,94,0.45) 0%, rgba(20,184,166,0.55) 100%)", // Rose to Teal
  "linear-gradient(135deg, rgba(252,211,77,0.45) 0%, rgba(244,63,94,0.55) 100%)", // Gold to Rose
  "linear-gradient(135deg, rgba(20,184,166,0.45) 0%, rgba(245,158,11,0.55) 100%)", // Teal to Amber
  "linear-gradient(135deg, rgba(244,63,94,0.55) 0%, rgba(251,146,60,0.45) 100%)", // Rose to Orange
  "linear-gradient(135deg, rgba(251,146,60,0.55) 0%, rgba(20,184,166,0.45) 100%)", // Orange to Teal
];

function Panel({
  index,
  total,
  waveY,
  scaleY,
}: {
  index: number;
  total: number;
  waveY: ReturnType<typeof useSpring>;
  scaleY: ReturnType<typeof useSpring>;
}) {
  const t = index / (total - 1);
  const baseZ = (index - (total - 1)) * Z_SPREAD;

  const w = 200 + t * 80;
  const h = 280 + t * 120;

  const opacity = 0.25 + t * 0.75;
  const imageUrl = PANEL_IMAGES[index % PANEL_IMAGES.length];
  const gradient = GRADIENT_OVERLAYS[index % GRADIENT_OVERLAYS.length];

  return (
    <motion.div
      className="absolute rounded-[20px] pointer-events-none overflow-hidden"
      style={{
        width: w,
        height: h,
        marginLeft: -w / 2,
        marginTop: -h / 2,
        translateZ: baseZ,
        y: waveY,
        scaleY,
        transformOrigin: "bottom center",
        opacity,
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Aesthetic gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: gradient,
          mixBlendMode: "multiply",
        }}
      />
      {/* Subtle dark vignette for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.52) 100%)",
        }}
      />
      {/* Border glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          border: `1px solid rgba(245,158,11,${0.1 + t * 0.25})`,
          boxSizing: "border-box",
        }}
      />
    </motion.div>
  );
}

export default function StackedPanels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  const waveYSprings = Array.from({ length: PANEL_COUNT }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSpring(0, WAVE_SPRING)
  );

  const scaleYSprings = Array.from({ length: PANEL_COUNT }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSpring(1, WAVE_SPRING)
  );

  const rotY = useSpring(-42, SCENE_SPRING);
  const rotX = useSpring(18, SCENE_SPRING);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      isHovering.current = true;

      const cx = (e.clientX - rect.left) / rect.width;
      const cy = (e.clientY - rect.top) / rect.height;

      rotY.set(-42 + (cx - 0.5) * 14);
      rotX.set(18 + (cy - 0.5) * -10);

      const cursorCardPos = cx * (PANEL_COUNT - 1);

      waveYSprings.forEach((spring, i) => {
        const dist = Math.abs(i - cursorCardPos);
        const influence = Math.exp(-(dist * dist) / (2 * SIGMA * SIGMA));
        spring.set(-influence * 70);
      });

      scaleYSprings.forEach((spring, i) => {
        const dist = Math.abs(i - cursorCardPos);
        const influence = Math.exp(-(dist * dist) / (2 * SIGMA * SIGMA));
        spring.set(0.35 + influence * 0.65);
      });
    },
    [rotY, rotX, waveYSprings, scaleYSprings]
  );

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    rotY.set(-42);
    rotX.set(18);
    waveYSprings.forEach((s) => s.set(0));
    scaleYSprings.forEach((s) => s.set(1));
  }, [rotY, rotX, waveYSprings, scaleYSprings]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{ perspective: "900px" }}
    >
      <motion.div
        style={{
          rotateY: rotY,
          rotateX: rotX,
          transformStyle: "preserve-3d",
          position: "relative",
          width: 0,
          height: 0,
        }}
      >
        {Array.from({ length: PANEL_COUNT }).map((_, i) => (
          <Panel
            key={i}
            index={i}
            total={PANEL_COUNT}
            waveY={waveYSprings[i]}
            scaleY={scaleYSprings[i]}
          />
        ))}
      </motion.div>
    </div>
  );
}
