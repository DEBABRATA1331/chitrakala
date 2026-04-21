import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "violet" | "indigo" | "magenta" | "outline";
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-violet-500/10 border border-violet-500/25 text-violet-400",
    violet:
      "bg-violet-500/10 border border-violet-500/25 text-violet-400",
    indigo:
      "bg-indigo-500/10 border border-indigo-500/25 text-indigo-400",
    magenta:
      "bg-pink-500/10 border border-pink-500/25 text-pink-400",
    outline:
      "bg-transparent border border-white/15 text-white/70",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
