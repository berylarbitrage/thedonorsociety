import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* Buttons are little pieces of fabric with a dashed stitch sewn just inside. */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[14px] font-sans font-bold transition-[background-color,color,transform] duration-200 focus-visible:outline-3 focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // CTA — thread red with white text and a white stitch
        default:
          "stitched bg-thread text-white [--stitch:rgba(255,255,255,0.85)] hover:bg-thread-deep active:translate-y-px",
        primary:
          "stitched bg-thread text-white [--stitch:rgba(255,255,255,0.85)] hover:bg-thread-deep active:translate-y-px",
        // Fabric button with an ink stitch
        outline:
          "stitched bg-fabric text-ink [--stitch:var(--ink)] hover:bg-white active:translate-y-px",
        // Sage stitch on fabric (secondary on coloured panels)
        sage: "stitched bg-fabric text-ink [--stitch:var(--sage-deep)] hover:bg-white active:translate-y-px",
        ghost: "hover:bg-muted-bg text-foreground",
        destructive: "bg-destructive text-white hover:brightness-110",
        link: "text-primary underline decoration-dashed underline-offset-4 hover:text-ink",
      },
      size: {
        default: "h-12 px-6 text-[0.95rem] [--stitch-inset:5px]",
        sm: "h-10 px-4 text-sm [--stitch-inset:4px] [--stitch-width:1.5px]",
        lg: "h-14 px-8 text-base [--stitch-inset:6px]",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
