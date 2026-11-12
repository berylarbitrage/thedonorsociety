import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-card border-border rounded-3xl border p-6 shadow-[0_14px_30px_-24px_rgba(60,42,42,0.45)] md:p-8",
        className,
      )}
      {...props}
    />
  );
}
export function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn("text-2xl", className)} {...props} />;
}
