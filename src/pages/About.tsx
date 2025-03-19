import { Heart, Home, MessageSquare, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import { SocialPost } from "@/components/social/SocialPost";
import { SocialCarousel } from "@/components/social/SocialCarousel";
import { DesignTemplate } from "@/components/social/DesignTemplate";
import { Button as UButton } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { SocialVideo } from "@/components/social/SocialVideo";

const About = () => {
  const heroImage = "https://images.unsplash.com/photo-1558627272-bb8ec6197092?q=80&w=2070&auto=format&fit=crop";
  
  const values = [
    {
      title: "Comfort",
      description: "We create living spaces that feel like home, with thoughtful design and premium amenities.",
      icon: Home
    },
    {
      title: "Care",
      description: "Our attentive team ensures residents receive personalized support for their unique needs.",
      icon: Heart
    },
    {
      title: "Community",
      description: "We foster a vibrant social environment where meaningful connections flourish.",
      icon: MessageSquare
    },
    {
      title: "Security",
      description: "Peace of mind comes from knowing our communities provide safety and support.",
      icon: Shield
    }
  ];

  const [activeTab, setActiveTab] = useState("company");

  const samplePosts = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      caption: "Experience luxury living in our beautifully designed spaces. Eden Gracious Living combines elegance with comfort.",
      likes: 124,
      comments: 18
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80",
      caption: "Our properties feature modern designs with traditional touches, creating the perfect balance of contemporary and timeless appeal.",
      likes: 89,
      comments: 7
    },
    {
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      caption: "Discover serenity in our carefully curated living spaces. Each room tells a story of sophistication and comfort.",
      likes: 156,
      comments: 23
    }
  ];

  const sampleVideos = [
    {
      video: "https://videos.ctfassets.net/pdf57t0dnrb6/3WanZhqZtYTc9QZ1SCgj6z/c79825c5204d21a75e37067bb9ad1d14/luxury-living-space.mp4",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      caption: "Experience luxury living at its finest. Take a tour of our elegantly designed spaces.",
      likes: 245,
      comments: 32
    },
    {
      video: "https://videos.ctfassets.net/pdf57t0dnrb6/7ytHqYx3UbdQRBD3kwn4K0/66c3bd84ffdd54e892ec32c0f3de926e/senior-living-lifestyle.mp4",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      caption: "Join our vibrant community and discover a new chapter of life filled with joy and connection.",
      likes: 189,
      comments: 27
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="About Eden Gracious Living"
        subtitle="Creating exceptional living experiences through comfort, care, community, and connection."
        backgroundImage={heroImage}
        height="large"
      />

      {/* Mission Section */}
      <section className="py-20 bg-eden-offWhite">
        <div className="container-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-right">
              <div>
                <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                  Enhancing Lives Through Thoughtful Living Spaces
                </h2>
                <p className="text-foreground/80 mb-6">
                  At Eden Gracious Living, our mission is to create living environments that enhance
                  the quality of life for our residents. We believe that the right living space can
                  transform daily experiences, foster connections, and provide the perfect balance
                  of independence and support.
                </p>
                <p className="text-foreground/80">
                  Founded on principles of dignity, respect, and exceptional service, Eden communities
                  are designed to be more than just places to live—they're places to thrive, connect,
                  and enjoy life to the fullest.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="rounded-lg overflow-hidden shadow-lg image-hover-zoom">
                <img
                  src="https://images.unsplash.com/photo-1588351753197-64d8ab664b39?q=80&w=2070&auto=format&fit=crop"
                  alt="Senior residents enjoying community activities"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-eden-beige/30">
        <div className="container-sm">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Our Core Values</span>
              <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                The Principles That Guide Us
              </h2>
              <p className="text-foreground/80">
                These four core values are at the heart of everything we do at Eden Gracious Living.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <FeatureCard
                  key={index}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-sm">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                  The Eden Journey
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 flex flex-col items-center sm:items-end">
                    <div className="bg-eden-pink text-eden-brown text-sm font-medium py-1 px-3 rounded-full">
                      2010
                    </div>
                    <div className="h-full w-0.5 bg-eden-pink/30 my-2 hidden sm:block"></div>
                  </div>
                  <div className="flex-1 sm:pl-6">
                    <h3 className="text-xl font-serif text-eden-darkBrown mb-2">Our Foundation</h3>
                    <p className="text-foreground/80">
                      Eden Gracious Living was founded with a vision to redefine senior living in India.
                      Recognizing the need for communities that offer both independence and support,
                      our founders set out to create spaces where residents could truly thrive.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 flex flex-col items-center sm:items-end">
                    <div className="bg-eden-pink text-eden-brown text-sm font-medium py-1 px-3 rounded-full">
                      2015
                    </div>
                    <div className="h-full w-0.5 bg-eden-pink/30 my-2 hidden sm:block"></div>
                  </div>
                  <div className="flex-1 sm:pl-6">
                    <h3 className="text-xl font-serif text-eden-darkBrown mb-2">Eden Dehradun</h3>
                    <p className="text-foreground/80">
                      Our first community opened in Dehradun, nestled in the serene foothills of the Himalayas.
                      This property quickly became known for its beautiful surroundings, thoughtful design,
                      and exceptional care.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 flex flex-col items-center sm:items-end">
                    <div className="bg-eden-pink text-eden-brown text-sm font-medium py-1 px-3 rounded-full">
                      2019
                    </div>
                    <div className="h-full w-0.5 bg-eden-pink/30 my-2 hidden sm:block"></div>
                  </div>
                  <div className="flex-1 sm:pl-6">
                    <h3 className="text-xl font-serif text-eden-darkBrown mb-2">Eden Goa</h3>
                    <p className="text-foreground/80">
                      Expanding our vision of premium living, we opened Eden Goa, bringing our unique
                      approach to coastal living. With resort-style amenities and a focus on active
                      lifestyles, Eden Goa offers a different but equally exceptional experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 flex flex-col items-center sm:items-end">
                    <div className="bg-eden-pink text-eden-brown text-sm font-medium py-1 px-3 rounded-full">
                      Today
                    </div>
                  </div>
                  <div className="flex-1 sm:pl-6">
                    <h3 className="text-xl font-serif text-eden-darkBrown mb-2">Looking Ahead</h3>
                    <p className="text-foreground/80">
                      Today, Eden Gracious Living continues to innovate and enhance our communities.
                      Our commitment to excellence, dignity, and quality of life drives everything we do
                      as we look toward a future of continued growth and service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-eden-beige/20">
        <div className="container-sm">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                The People Behind Eden
              </h2>
              <p className="text-foreground/80">
                Our dedicated team brings together expertise in senior care, hospitality,
                and community building to create the Eden experience.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-beige/50 text-center">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop"
                    alt="Ananya Sharma"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-eden-darkBrown mb-1">Ananya Sharma</h3>
                  <p className="text-eden-brown mb-3">Founder & CEO</p>
                  <p className="text-foreground/80 text-sm">
                    With over 20 years of experience in hospitality and senior living,
                    Ananya leads Eden with a passion for creating exceptional communities.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-beige/50 text-center">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
                    alt="Dr. Vikram Mehta"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-eden-darkBrown mb-1">Dr. Vikram Mehta</h3>
                  <p className="text-eden-brown mb-3">Medical Director</p>
                  <p className="text-foreground/80 text-sm">
                    A renowned geriatrician, Dr. Mehta oversees our healthcare services
                    and ensures the highest standards of care for all residents.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-beige/50 text-center">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                    alt="Neha Kapoor"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-eden-darkBrown mb-1">Neha Kapoor</h3>
                  <p className="text-eden-brown mb-3">Community Director</p>
                  <p className="text-foreground/80 text-sm">
                    With a background in hospitality and gerontology, Neha creates vibrant
                    community programs that foster connection and engagement.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-eden-pink/20">
        <div className="container-sm">
          <AnimatedSection animation="scale-in">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-md border border-eden-beige/50 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mb-6">
                Experience the Eden Difference
              </h2>
              <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
                We invite you to visit our communities and see firsthand what makes Eden Gracious Living
                so special. Schedule a tour, join us for a meal, or attend one of our community events.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg">Schedule a Visit</Button>
                </Link>
                <Link to="/properties">
                  <Button variant="outline" size="lg">
                    Explore Our Properties
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-container bg-eden-paleGreen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-eden-darkGreen mb-6">Social Media Showcase</h2>
          <p className="text-eden-darkGreen mb-8 max-w-3xl">
            Experience our social media designs and templates that maintain the elegant Eden Gracious Living brand across platforms.
          </p>

          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="mb-8 bg-white border border-eden-lightGold">
              <TabsTrigger value="posts">Post Formats</TabsTrigger>
              <TabsTrigger value="carousel">Carousel</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="template">Design Guide</TabsTrigger>
            </TabsList>
            
            <TabsContent value="posts" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-serif text-eden-darkGreen">Square (Instagram)</h3>
                  <SocialPost 
                    format="square" 
                    image={samplePosts[0].image}
                    caption={samplePosts[0].caption}
                    likes={samplePosts[0].likes}
                    comments={samplePosts[0].comments}
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-serif text-eden-darkGreen">Portrait</h3>
                  <SocialPost 
                    format="portrait" 
                    image={samplePosts[1].image}
                    caption={samplePosts[1].caption}
                    likes={samplePosts[1].likes}
                    comments={samplePosts[1].comments}
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-serif text-eden-darkGreen">Story</h3>
                  <SocialPost 
                    format="story" 
                    image={samplePosts[2].image}
                    caption={samplePosts[2].caption}
                    likes={samplePosts[2].likes}
                    comments={samplePosts[2].comments}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="carousel">
              <h3 className="text-xl font-serif text-eden-darkGreen mb-4">Carousel Post</h3>
              <SocialCarousel posts={samplePosts} />
            </TabsContent>
            
            <TabsContent value="videos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-serif text-eden-darkGreen">Reel Format</h3>
                  <SocialVideo 
                    format="reel"
                    {...sampleVideos[0]}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-serif text-eden-darkGreen">Square Format</h3>
                  <SocialVideo 
                    format="square"
                    {...sampleVideos[1]}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="template">
              <DesignTemplate />
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 text-center">
            <UButton className="bg-eden-gold hover:bg-eden-darkGold text-eden-darkGreen">
              Download Social Media Templates
            </UButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

