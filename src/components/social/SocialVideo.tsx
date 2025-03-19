
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Heart, MessageCircle, Share2, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export type SocialVideoFormat = "reel" | "landscape" | "square";

interface SocialVideoProps {
  format?: SocialVideoFormat;
  video: string;
  thumbnail?: string;
  caption: string;
  likes?: number;
  comments?: number;
  className?: string;
}

const formatStyles = {
  reel: "aspect-[9/16]",
  landscape: "aspect-[16/9]",
  square: "aspect-square",
};

export const SocialVideo = ({
  format = "reel",
  video,
  thumbnail,
  caption,
  likes = 0,
  comments = 0,
  className,
}: SocialVideoProps) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className={cn("bg-white rounded-lg overflow-hidden shadow-md", className)}>
      <div className="relative">
        <AspectRatio
          ratio={format === "square" ? 1 : format === "landscape" ? 1.78 : 0.5625}
          className="bg-eden-paleGreen"
        >
          <video
            src={video}
            poster={thumbnail}
            loop
            muted={isMuted}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        </AspectRatio>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
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
