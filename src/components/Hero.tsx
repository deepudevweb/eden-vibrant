
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  showScrollIndicator?: boolean;
  className?: string;
  height?: "full" | "large" | "medium";
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink = "/contact",
  showScrollIndicator = false,
  className,
  height = "full",
}: HeroProps) => {
  const heightClasses = {
    full: "min-h-screen",
    large: "min-h-[85vh]",
    medium: "min-h-[70vh]",
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        heightClasses[height],
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 md:mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {buttonText && (
          <Link to={buttonLink}>
            <Button size="lg" className="mt-2">
              {buttonText}
            </Button>
          </Link>
        )}
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown size={36} />
        </button>
      )}
    </section>
  );
};

export default Hero;
