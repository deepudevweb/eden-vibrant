
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SocialPost, SocialPostFormat } from "./SocialPost";

interface SocialCarouselProps {
  posts: {
    image: string;
    caption: string;
    likes?: number;
    comments?: number;
  }[];
  format?: SocialPostFormat;
}

export const SocialCarousel = ({ posts, format = "square" }: SocialCarouselProps) => {
  return (
    <Carousel className="w-full max-w-md mx-auto relative">
      <CarouselContent>
        {posts.map((post, index) => (
          <CarouselItem key={index}>
            <SocialPost {...post} format={format} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
    </Carousel>
  );
};
