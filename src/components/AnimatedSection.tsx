
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: "fade-in" | "fade-in-right" | "fade-in-left" | "scale-in";
  delay?: number;
  threshold?: number;
  children: React.ReactNode;
}

const AnimatedSection = ({
  animation = "fade-in",
  delay = 0,
  threshold = 0.2,
  className,
  children,
  ...props
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        isVisible ? `animate-${animation}` : "opacity-0",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
