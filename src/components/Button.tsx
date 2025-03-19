
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-eden-green disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-eden-green text-eden-gold hover:bg-eden-darkGreen",
      secondary: "bg-eden-gold text-eden-darkGreen hover:bg-eden-green hover:text-eden-gold",
      outline: "border border-eden-gold text-eden-green hover:bg-eden-green hover:text-eden-gold",
      ghost: "bg-transparent hover:bg-eden-paleGreen text-eden-green",
      link: "bg-transparent underline-offset-4 hover:underline text-eden-green p-0 h-auto font-normal",
    };
    
    const sizes = {
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3",
    };
    
    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          variant !== "link" && sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
