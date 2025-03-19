
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export type SocialPostFormat = "square" | "portrait" | "landscape" | "story" | "carousel";

interface SocialPostProps {
  format?: SocialPostFormat;
  image: string;
  caption: string;
  likes?: number;
  comments?: number;
  className?: string;
}

const formatStyles = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/9]",
  story: "aspect-[9/16]",
  carousel: "aspect-square",
};

export const SocialPost = ({
  format = "square",
  image,
  caption,
  likes = 0,
  comments = 0,
  className,
}: SocialPostProps) => {
  return (
    <div className={cn("bg-white rounded-lg overflow-hidden shadow-md", className)}>
      <AspectRatio
        ratio={format === "square" ? 1 : format === "portrait" ? 0.8 : format === "landscape" ? 1.78 : 0.5625}
        className="bg-eden-paleGreen"
      >
        <img 
          src={image} 
          alt={caption}
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <button className="flex items-center gap-1 text-eden-darkGreen hover:text-eden-gold transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-sm">{likes}</span>
          </button>
          <button className="flex items-center gap-1 text-eden-darkGreen hover:text-eden-gold transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{comments}</span>
          </button>
          <button className="ml-auto text-eden-darkGreen hover:text-eden-gold transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-eden-darkGreen line-clamp-2">{caption}</p>
      </div>
    </div>
  );
};
