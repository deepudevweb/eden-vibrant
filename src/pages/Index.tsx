
import { ArrowRight, Building, Heart, Home, Users } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  const heroImage = "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?q=80&w=2070&auto=format&fit=crop";
  
  const features = [
    {
      title: "Thoughtful Design",
      description: "Spacious residences designed with accessibility, comfort, and aesthetic beauty in mind.",
      icon: Home
    },
    {
      title: "Community Living",
      description: "A vibrant community that fosters meaningful connections and social engagement.",
      icon: Users
    },
    {
      title: "Premium Locations",
      description: "Situated in Dehradun and Goa, offering serene environments with convenient access to amenities.",
      icon: Building
    },
    {
      title: "Comprehensive Care",
      description: "Round-the-clock support and healthcare services for complete peace of mind.",
      icon: Heart
    }
  ];

  const testimonials = [
    {
      quote: "Moving to Eden was the best decision we've made. The community is warm and welcoming, and the facilities are exceptional.",
      author: "Aryan & Meera Sharma",
      role: "Residents since 2021"
    },
    {
      quote: "The peace of mind knowing my mother is in such a beautiful, caring environment has been invaluable. The staff goes above and beyond.",
      author: "Priya Malhotra",
      role: "Family Member"
    },
    {
      quote: "Eden offers the perfect balance of independence and support. I've made wonderful friends and enjoy an active, fulfilling lifestyle.",
      author: "Dr. Rajiv Patel",
      role: "Resident since 2020"
    }
  ];

  return (
    <>
      <Hero
        title="Living Well, Every Step of the Way"
        subtitle="Experience premium living spaces designed for comfort, connection, and care in beautiful Dehradun and Goa."
        backgroundImage={heroImage}
        buttonText="Explore Our Communities"
        buttonLink="/properties"
        showScrollIndicator={true}
      />

      {/* Introduction Section */}
      <section className="py-20 bg-eden-offWhite">
        <div className="container-sm">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Welcome to Eden</span>
              <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                Discover Inspired Living in Dehradun & Goa
              </h2>
              <p className="text-foreground/80">
                Eden Gracious Living offers premium residences designed for those seeking comfort,
                security, and a vibrant community. Our thoughtfully crafted living spaces combine
                modern amenities with serene environments to create the perfect home.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-eden-beige/50">
        <div className="container-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection animation="fade-in-right">
              <div className="rounded-lg overflow-hidden image-hover-zoom">
                <img
                  src="https://images.unsplash.com/photo-1601041318936-0ea0a75fd3b3?q=80&w=2070&auto=format&fit=crop"
                  alt="Senior couple enjoying time outdoors"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="space-y-6">
                <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown">
                  Find Your Perfect Space — Comfort, Connection, and Care Await
                </h2>
                <p className="text-foreground/80">
                  At Eden, we believe that living spaces should enhance your lifestyle. Our communities
                  are designed to provide not just a home, but an experience that supports well-being,
                  fosters connections, and provides the security you desire.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-eden-pink/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-eden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-foreground/80">Thoughtfully designed living spaces with premium amenities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-eden-pink/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-eden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-foreground/80">Vibrant community with social activities and events</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-eden-pink/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-eden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-foreground/80">Comprehensive support services for a worry-free lifestyle</p>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link to="/about">
                    <Button className="group">
                      Learn More About Eden
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Properties Preview */}
      <section className="py-20 bg-white">
        <div className="container-sm">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Our Communities</span>
              <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                Explore Our Premium Locations
              </h2>
              <p className="text-foreground/80">
                Discover our thoughtfully designed communities in Dehradun and Goa,
                each offering a unique living experience in stunning natural surroundings.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Dehradun Property */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-beige/50 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="image-hover-zoom h-64">
                  <img
                    src="https://images.unsplash.com/photo-1623050804066-42bcedb4e81d?q=80&w=2071&auto=format&fit=crop"
                    alt="Eden Dehradun"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-eden-darkBrown mb-2">Eden Dehradun</h3>
                  <p className="text-foreground/80 mb-4 flex-grow">
                    Nestled in the serene foothills of the Himalayas, Eden Dehradun offers a perfect
                    blend of natural beauty and modern comfort. Enjoy panoramic mountain views,
                    lush gardens, and thoughtfully designed living spaces.
                  </p>
                  <Link to="/properties" className="mt-4">
                    <Button className="w-full sm:w-auto">Explore Eden Dehradun</Button>
                  </Link>
                </div>
              </div>

              {/* Goa Property */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-beige/50 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="image-hover-zoom h-64">
                  <img
                    src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop"
                    alt="Eden Goa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-eden-darkBrown mb-2">Eden Goa</h3>
                  <p className="text-foreground/80 mb-4 flex-grow">
                    Experience coastal living at its finest at Eden Goa. Located near the beautiful
                    beaches of North Goa, this community offers resort-style amenities, vibrant social
                    spaces, and elegantly designed residences.
                  </p>
                  <Link to="/properties" className="mt-4">
                    <Button className="w-full sm:w-auto">Explore Eden Goa</Button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-eden-beige/30">
        <div className="container-sm">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                What Our Community Says
              </h2>
              <p className="text-foreground/80">
                Hear from residents and families about their experience with Eden Gracious Living.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-eden-brown text-white">
        <div className="container-sm">
          <AnimatedSection animation="scale-in">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Ready to Discover Your New Home?
              </h2>
              <p className="text-white/90 mb-8">
                Contact us today to schedule a visit or learn more about life at Eden Gracious Living.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button variant="secondary" size="lg">Book a Visit</Button>
                </Link>
                <Link to="/properties">
                  <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-eden-brown">
                    Explore Properties
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
