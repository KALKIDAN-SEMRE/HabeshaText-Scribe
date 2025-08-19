import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 btn-3d",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 btn-3d",
        outline: "border border-card-border glass hover:bg-card-glass hover:text-foreground btn-3d",
        secondary: "bg-gradient-to-r from-secondary to-secondary-glow text-secondary-foreground hover:shadow-lg btn-3d glow-secondary",
        accent: "bg-gradient-to-r from-accent to-accent-glow text-accent-foreground hover:shadow-lg btn-3d glow-accent",
        primary: "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-lg btn-3d glow-primary",
        glass: "glass hover:bg-white/10 text-foreground btn-3d border-white/20",
        ghost: "hover:bg-card-glass hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
