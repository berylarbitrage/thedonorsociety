import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "bg-card text-foreground placeholder:text-muted focus-visible:outline-ring aria-invalid:border-destructive focus-visible:border-ink flex h-11 w-full min-w-0 rounded-none border border-[#8c857a] px-3 text-base focus-visible:outline-2 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
