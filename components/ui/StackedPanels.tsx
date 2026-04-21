"use client";

import { useRef, useCallback } from "react";
import { motion, useSpring } from "motion/react";

const PANEL_COUNT = 22;
const WAVE_SPRING = { stiffness: 160, damping: 22, mass: 0.6 };
const SCENE_SPRING = { stiffness: 80, damping: 22, mass: 1 };
const Z_SPREAD = 42;
const SIGMA = 2.8;

// Design & branding themed images for Chitrakala Graphics Studio
const PANEL_IMAGES = [
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80", // design workspace
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80", // graphic design
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80", // business cards
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=80", // branding
  "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=400&q=80", // design desk
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&q=80", // logo design
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80", // color palette
  "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&q=80", // digital design
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80", // print materials
  "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&q=80", // mockup
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80", // design tools
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&q=80", // creative
  "https://images.unsplash.com/photo-1611532736576-11f9b2afe6f2?w=400&q=80", // business card
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80", // painting canvas
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80", // chart analytics
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=80", // prototype
  "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=400&q=80", // notebook design
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80", // teamwork
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80", // office creative
  "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?w=400&q=80", // stationery
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", // typography
  "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?w=400&q=80", // creative studio
];

const GRADIENT_OVERLAYS = [
  "linear-gradient(135deg, rgba(0,174,239,0.55) 0%, rgba(0,117,194,0.45) 100%)",
  "linear-gradient(135deg, rgba(123,97,255,0.55) 0%, rgba(0,174,239,0.45) 100%)",
  "linear-gradient(135deg, rgba(0,174,239,0.45) 0%, rgba(123,97,255,0.55) 100%)",
  "linear-gradient(135deg, rgba(0,174,239,0.55) 0%, rgba(0,230,118,0.35) 100%)",
  "linear-gradient(135deg, rgba(123,97,255,0.45) 0%, rgba(0,174,239,0.55) 100%)",
  "linear-gradient(135deg, rgba(0,117,194,0.55) 0%, rgba(123,97,255,0.45) 100%)",
  "linear-gradient(135deg, rgba(0,174,239,0.35) 0%, rgba(0,117,194,0.65) 100%)",
  "linear-gradient(135deg, rgba(123,97,255,0.55) 0%, rgba(76,63,186,0.45) 100%)",
  "linear-gradient(135deg, rgba(0,174,239,0.6) 0%, rgba(0,174,239,0.3) 100%)",
  "linear-gradient(135deg, rgba(76,63,186,0.45) 0%, rgba(0,174,239,0.55) 100%)",
  "linear-gradient(135deg, rgba(0,174,239,0.45) 0%, rgba(0,230,118,0.45) 100%)",
  "linear-gradient(135deg, rgba(123,97,255,0.6) 0%, rgba(0,174,239,0.35) 100%)",
  "linear-gradient(135deg, rgba(0,117,194,0.5) 0%, rgba(123,97,255,0.5) 100%)",
  "linear-gradient(135deg, rgba(0,174,239,0.55) 0%, rgba(0,117,194,0.45) 100%)",
  "linear-gradient(135deg, rgba(123,97,255,0.4) 0%, rgba(0,174,239,0.6) 100%)",
  "linear-gradient(135deg, rgba(0,174,239,0.6) 0%, rgba(123,97,255,0.4) 100%)",
  "linear-gradient(135deg, rgba(76,63,186,0.55) 0%, rgba(0,174,239,0.45) 100%)",
  "linear-gradient(135deg, rgba(0,174,239,0.4) 0%, rgba(0,230,118,0.5) 100%)",
  "linear-gradient(135deg, rgba(123,97,255,0.5) 0%, rgba(0,117,194,0.5) 100%)",
  "linear-gradient(135deg, rgba(0,174,239,0.55) 0%, rgba(76,63,186,0.45) 100%)",
  "linear-gradient(135deg, rgba(0,117,194,0.45) 0%, rgba(0,174,239,0.55) 100%)",
  "linear-gradient(135deg, rgba(123,97,255,0.55) 0%, rgba(0,230,118,0.35) 100%)",
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
      style={{
        position: "absolute",
        borderRadius: "12px",
        pointerEvents: "none",
        overflow: "hidden",
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
      {/* Brand-colored gradient overlay */}
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
            "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.32) 100%)",
        }}
      />
      {/* Border glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          border: `1px solid rgba(255,255,255,${0.08 + t * 0.22})`,
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
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        perspective: "900px",
      }}
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
