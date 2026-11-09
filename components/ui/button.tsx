import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-sans font-medium uppercase tracking-[0.2em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // CTA — ink with ivory text
        default: "bg-ink text-ivory border border-ink hover:bg-[#2b2a27] hover:border-[#2b2a27]",
        primary: "bg-ink text-ivory border border-ink hover:bg-[#2b2a27]",
        outline: "border border-ink text-ink bg-transparent hover:bg-ink hover:text-ivory",
        // For use on black bands
        ivory: "bg-ivory text-ink border border-ivory hover:bg-transparent hover:text-ivory",
        "outline-ivory":
          "border border-ivory/70 text-ivory bg-transparent hover:bg-ivory hover:text-ink hover:border-ivory",
        ghost: "hover:bg-muted-bg text-foreground tracking-normal normal-case",
        destructive: "bg-destructive text-white hover:brightness-110",
        link: "text-primary underline underline-offset-4 decoration-gold hover:decoration-ink",
      },
      size: {
        default: "h-11 px-6 text-[0.72rem]",
        sm: "h-9 px-4 text-[0.68rem]",
        lg: "h-13 px-9 text-[0.75rem]",
        icon: "size-10",
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
