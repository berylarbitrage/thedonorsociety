import * as React from "react";
import { cn } from "@/lib/utils";

const tones = {
  neutral: "bg-muted-bg text-foreground",
  success: "bg-sage-soft text-accent",
  warn: "bg-accent-soft text-foreground",
  danger: "bg-destructive/10 text-destructive",
} as const;

export function Badge({
  tone = "neutral",
  className,
  ...props
}: React.ComponentProps<"span"> & { tone?: keyof typeof tones }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-dashed border-current/40 px-2.5 py-0.5 font-sans text-xs font-bold",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
