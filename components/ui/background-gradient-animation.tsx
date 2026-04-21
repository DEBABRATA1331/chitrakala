"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}

export function BackgroundGradientAnimation({
  gradientBackgroundStart = "rgb(6, 6, 15)",
  gradientBackgroundEnd = "rgb(12, 11, 29)",
  firstColor = "99, 102, 241",
  secondColor = "139, 92, 246",
  thirdColor = "236, 72, 153",
  fourthColor = "59, 130, 246",
  fifthColor = "168, 85, 247",
  pointerColor = "139, 92, 246",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: BackgroundGradientAnimationProps) {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const curPos = useRef({ x: 0, y: 0 });
  const tgPos = useRef({ x: 0, y: 0 });
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  const animate = useCallback(() => {
    if (!interactiveRef.current) return;
    curPos.current.x += (tgPos.current.x - curPos.current.x) / 20;
    curPos.current.y += (tgPos.current.y - curPos.current.y) / 20;
    interactiveRef.current.style.transform = `translate(${Math.round(
      curPos.current.x
    )}px, ${Math.round(curPos.current.y)}px)`;
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (interactive) {
      rafRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [interactive, animate]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.parentElement!.getBoundingClientRect();
    tgPos.current = {
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    };
  };

  const blobStyle = (
    color: string,
    animName: string,
    duration: string,
    origin?: string,
    reverse?: boolean
  ): React.CSSProperties => ({
    position: "absolute",
    borderRadius: "50%",
    width: size,
    height: size,
    top: `calc(50% - ${parseInt(size) / 2}%)`,
    left: `calc(50% - ${parseInt(size) / 2}%)`,
    background: `radial-gradient(circle at center, rgba(${color}, 0.8) 0%, rgba(${color}, 0) 50%)`,
    mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
    animation: `${animName} ${duration} ease infinite${reverse ? " reverse" : ""}`,
    transformOrigin: origin ?? "center center",
  });

  return (
    <div
      className={cn("relative overflow-hidden", containerClassName)}
      onMouseMove={interactive ? handleMouseMove : undefined}
      style={{
        background: `linear-gradient(135deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
      }}
    >
      {/* SVG goo filter */}
      <svg className="absolute h-0 w-0">
        <defs>
          <filter id="bg-goo-filter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Animated blobs */}
      <div
        className="absolute inset-0"
        style={{
          filter: isSafari
            ? "blur(40px)"
            : "url(#bg-goo-filter) blur(40px)",
        }}
      >
        <div style={blobStyle(firstColor, "move-blob-1", "14s")} />
        <div
          style={blobStyle(
            secondColor,
            "move-blob-2",
            "18s",
            "calc(50% - 400px) center"
          )}
        />
        <div
          style={blobStyle(
            thirdColor,
            "move-blob-3",
            "22s",
            "calc(50% + 400px) center"
          )}
        />
        <div
          style={blobStyle(
            fourthColor,
            "move-blob-1",
            "26s",
            "calc(50% - 200px) calc(50% + 200px)",
            true
          )}
        />
        <div
          style={blobStyle(
            fifthColor,
            "move-blob-2",
            "30s",
            "calc(50% + 200px) calc(50% - 200px)"
          )}
        />

        {/* Mouse-following blob */}
        {interactive && (
          <div
            ref={interactiveRef}
            style={{
              position: "absolute",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              top: "-50%",
              left: "-50%",
              background: `radial-gradient(circle at center, rgba(${pointerColor}, 0.5) 0%, rgba(${pointerColor}, 0) 50%)`,
              mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
