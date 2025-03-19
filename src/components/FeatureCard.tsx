
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg p-6 shadow-sm border border-eden-lightGold/50 hover:shadow-md transition-all duration-300 h-full flex flex-col",
        className
      )}
    >
      <div className="rounded-full bg-eden-lightGold w-14 h-14 flex items-center justify-center mb-4">
        <Icon className="text-eden-green h-7 w-7" />
      </div>
      <h3 className="text-xl font-serif text-eden-darkGreen mb-3">{title}</h3>
      <p className="text-foreground/80 text-sm flex-grow">{description}</p>
    </div>
  );
};

export default FeatureCard;
