import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: "none" | "violet" | "indigo" | "magenta" | "blue";
  hover?: boolean;
}

export function Card({
  className,
  glow = "none",
  hover = true,
  children,
  ...props
}: CardProps) {
  const glowMap = {
    none: "",
    violet: "hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.3),0_20px_40px_rgba(0,0,0,0.4)]",
    indigo: "hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.3),0_20px_40px_rgba(0,0,0,0.4)]",
    magenta: "hover:border-pink-500/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.3),0_20px_40px_rgba(0,0,0,0.4)]",
    blue: "hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.3),0_20px_40px_rgba(0,0,0,0.4)]",
  };

  return (
    <div
      className={cn(
        "bg-white/[0.04] border border-white/[0.08] rounded-2xl backdrop-blur-xl",
        hover && "-translate-y-0 transition-all duration-300",
        hover && "hover:-translate-y-1.5",
        glow !== "none" && glowMap[glow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-0", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}
