
import { Camera, Heart, Image, MessageCircle, Share2, Video } from "lucide-react";

export const DesignTemplate = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-serif text-eden-darkGreen mb-6">Social Media Design Guide</h2>
      
      <section className="mb-8">
        <h3 className="text-xl font-serif text-eden-darkGreen mb-4">Post Formats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-eden-paleGreen rounded-lg flex items-center justify-center">
              <Image className="w-8 h-8 text-eden-darkGreen" />
            </div>
            <span className="text-sm">Square Post</span>
            <span className="text-xs text-eden-darkGreen">1080 x 1080px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-[100px] bg-eden-paleGreen rounded-lg flex items-center justify-center">
              <Camera className="w-8 h-8 text-eden-darkGreen" />
            </div>
            <span className="text-sm">Portrait</span>
            <span className="text-xs text-eden-darkGreen">1080 x 1350px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-[45px] bg-eden-paleGreen rounded-lg flex items-center justify-center">
              <Image className="w-8 h-8 text-eden-darkGreen" />
            </div>
            <span className="text-sm">Landscape</span>
            <span className="text-xs text-eden-darkGreen">1080 x 608px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-[45px] h-20 bg-eden-paleGreen rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-eden-darkGreen" />
            </div>
            <span className="text-sm">Story/Reel</span>
            <span className="text-xs text-eden-darkGreen">1080 x 1920px</span>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-serif text-eden-darkGreen mb-4">Brand Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-eden-gold rounded-lg" />
            <span className="text-sm">Gold</span>
            <span className="text-xs text-eden-darkGreen">#D4B973</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-eden-darkGreen rounded-lg" />
            <span className="text-sm">Dark Green</span>
            <span className="text-xs text-eden-darkGreen">#1A2E22</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-eden-lightGold rounded-lg" />
            <span className="text-sm">Light Gold</span>
            <span className="text-xs text-eden-darkGreen">#E9D9A8</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-eden-paleGreen rounded-lg" />
            <span className="text-sm">Pale Green</span>
            <span className="text-xs text-eden-darkGreen">#F2FCE2</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-serif text-eden-darkGreen mb-4">Post Elements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-eden-paleGreen rounded-lg">
            <h4 className="font-serif text-eden-darkGreen mb-2">Engagement Icons</h4>
            <div className="flex gap-4">
              <Heart className="w-6 h-6 text-eden-darkGreen" />
              <MessageCircle className="w-6 h-6 text-eden-darkGreen" />
              <Share2 className="w-6 h-6 text-eden-darkGreen" />
            </div>
          </div>
          <div className="p-4 bg-eden-paleGreen rounded-lg">
            <h4 className="font-serif text-eden-darkGreen mb-2">Typography</h4>
            <p className="font-serif text-eden-darkGreen mb-1">Playfair Display</p>
            <p className="font-sans text-eden-darkGreen">Inter</p>
          </div>
        </div>
      </section>
    </div>
  );
};
