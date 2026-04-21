import { cn } from "@/lib/utils";
import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white/90 placeholder:text-white/30 text-[15px]",
        "backdrop-blur-sm outline-none transition-all duration-200 resize-none",
        "focus:border-violet-500/60 focus:bg-white/8 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.1)]",
        "hover:border-white/20",
        className
      )}
      {...props}
    />
  );
}
