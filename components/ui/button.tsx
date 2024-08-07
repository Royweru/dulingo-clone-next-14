import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 uppercase tracking-wide",
  {
    variants: {
      variant: {
        locked:
          " bg-neutral-200 text-primary-foreground hover:bg-neutral-200/900 border-neutral-400 border-b-4 active:border-b-0",
        default:
          "bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500",
        primary:
          "bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0",
        primaryOutline: "bg-white text-sky-500 hover:bg-slate-100",
        secondary:
          "bg-green-400 text-primary-foreground border-green-500 border-2 border-b-4 active:border-b-0 hover:bg-slate-100 text-slate-500",
        secondaryOutline: "bg-white text-green-500 hover:bg-slate-100",
        danger:
          "bg-rose-400 text-primary-foreground border-green-500 border-2 border-b-4 active:border-b-0 hover:bg-slate-100 text-slate-500",
        dangerOutline: "bg-white text-rose-500 hover:bg-slate-100",
        super:
          "bg-indigo-400 text-primary-foreground border-green-500 border-2 border-b-4 active:border-b-0 hover:bg-slate-100 text-slate-500",
        superOutline: "bg-white text-indigo-500 hover:bg-slate-100",
        ghost:
          "bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100 ",
        sidebar:
          "bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100",
        sidebarOutline:
          "bg-sky-500/15 text-sky-500 border-sky-300 border-2 hover:bg-sky-500/20 transition-none",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-8  px-3 text-xs",
        lg: "h-12  px-8",
        icon: "h-9 w-9",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
