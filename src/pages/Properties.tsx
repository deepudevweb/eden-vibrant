
import { Download, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";

const Properties = () => {
  const heroImage = "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop";
  
  const properties = [
    {
      id: "dehradun",
      name: "Eden Dehradun",
      location: "Rajpur Road, Dehradun, Uttarakhand",
      description: "Nestled in the serene foothills of the Himalayas, Eden Dehradun offers a perfect blend of natural beauty and modern comfort with panoramic mountain views.",
      image: "https://images.unsplash.com/photo-1623050804066-42bcedb4e81d?q=80&w=2071&auto=format&fit=crop",
      features: ["Mountain Views", "Lush Gardens", "Wellness Center", "Gourmet Dining", "24/7 Support"]
    },
    {
      id: "goa",
      name: "Eden Goa",
      location: "Candolim Beach Road, North Goa",
      description: "Experience coastal living at its finest at Eden Goa, located near the beautiful beaches of North Goa with resort-style amenities and elegant designs.",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop",
      features: ["Beach Access", "Swimming Pool", "Seaside Dining", "Yoga Pavilion", "Concierge Services"]
    }
  ];

  const residenceTypes = [
    {
      type: "One-Bedroom Suite",
      size: "750-900 sq. ft.",
      description: "Perfect for individuals seeking a comfortable, manageable space with all essential amenities.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
    },
    {
      type: "Two-Bedroom Residence",
      size: "1100-1300 sq. ft.",
      description: "Ideal for those wanting extra space for hobbies, guests, or a home office, with separate living areas.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      type: "Premium Villa",
      size: "1500-1800 sq. ft.",
      description: "Our most spacious option, featuring private outdoor areas and premium finishes throughout.",
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Hero
        title="Our Communities"
        subtitle="Discover Eden's premium living spaces in Dehradun and Goa, each offering a unique experience in stunning natural surroundings."
        backgroundImage={heroImage}
        height="large"
      />

      {/* Properties Overview */}
      <section className="py-20 bg-eden-offWhite">
        <div className="container-sm">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Explore</span>
              <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                Find Your Perfect Space
              </h2>
              <p className="text-foreground/80">
                Eden Gracious Living offers premium communities in two of India's most beautiful destinations.
                Each location provides a unique living experience while maintaining our commitment to comfort,
                care, and community.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  name={property.name}
                  location={property.location}
                  description={property.description}
                  image={property.image}
                  features={property.features}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Residence Types */}
      <section className="py-20 bg-eden-beige/30">
        <div className="container-sm">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Residences</span>
              <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                Thoughtfully Designed Living Spaces
              </h2>
              <p className="text-foreground/80">
                Our residences are available in various layouts and sizes to accommodate different
                preferences and needs, all featuring premium finishes and thoughtful design.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {residenceTypes.map((residence, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-beige/50 h-full flex flex-col">
                  <div className="image-hover-zoom h-48">
                    <img
                      src={residence.image}
                      alt={residence.type}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-serif text-eden-darkBrown mb-1">{residence.type}</h3>
                    <p className="text-eden-brown text-sm mb-3">{residence.size}</p>
                    <p className="text-foreground/80 text-sm">{residence.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-white">
        <div className="container-sm">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Amenities</span>
                <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                  Exceptional Features & Services
                </h2>
                <p className="text-foreground/80 mb-6">
                  At Eden Gracious Living, we offer a comprehensive range of amenities designed
                  to enhance daily life and provide convenience, comfort, and enrichment.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-eden-pink/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-eden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-foreground/80">Wellness Center & Spa</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-eden-pink/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-eden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-foreground/80">Fine Dining Restaurant</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-eden-pink/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-eden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-foreground/80">Library & Reading Room</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-eden-pink/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-eden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-foreground/80">Fitness Center</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-eden-pink/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-eden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-foreground/80">Landscaped Gardens</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-eden-pink/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-eden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-foreground/80">24/7 Security Services</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-eden-pink/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-eden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-foreground/80">Social Activity Spaces</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-eden-pink/30 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-eden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-foreground/80">Concierge Services</p>
                  </div>
                </div>
                
                <Button>
                  <Download size={16} className="mr-2" />
                  Download Full Amenities List
                </Button>
              </div>
              
              <AnimatedSection animation="fade-in-left" delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden image-hover-zoom">
                    <img
                      src="https://media.istockphoto.com/id/1312587759/photo/beautiful-elegant-female-sitting-in-armchair-and-getting-intravenous-vitamin-drip-treatment.jpg?s=612x612&w=0&k=20&c=2YBoCXDJvcH6m7SruUVpBRhKZSmJMY4LCSYStq7sgJI="
                      alt="Wellness Center"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden image-hover-zoom">
                    <img
                      src="https://static8.depositphotos.com/1004999/859/i/450/depositphotos_8596234-stock-photo-summer-landscape-with-green-grass.jpg"
                      alt="Garden View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden image-hover-zoom">
                    <img
                      src="https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=2070&auto=format&fit=crop"
                      alt="Fine Dining"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden image-hover-zoom">
                    <img
                      src="https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop"
                      alt="Library"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-20 bg-eden-beige/50">
        <div className="container-sm">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Locations</span>
              <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                Prime Destinations
              </h2>
              <p className="text-foreground/80">
                Our communities are strategically located in some of India's most beautiful and
                vibrant areas, offering the perfect balance of serenity and accessibility.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Dehradun Location */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-beige/50">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-eden-brown mr-2" />
                    <h3 className="text-xl font-serif text-eden-darkBrown">Dehradun</h3>
                  </div>
                  <p className="text-foreground/80 text-sm mb-4">
                    Eden Dehradun is located in the tranquil foothills of the Himalayas, offering
                    clean air, beautiful scenery, and a pleasant climate year-round. The property
                    is conveniently situated just 20 minutes from the city center.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <span className="font-medium mr-2">Nearby attractions:</span>
                      <span className="text-foreground/80">Robber's Cave, Sahastradhara, Mindrolling Monastery</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-medium mr-2">Medical facilities:</span>
                      <span className="text-foreground/80">Max Hospital (10 min), Doon Hospital (15 min)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-medium mr-2">Transportation:</span>
                      <span className="text-foreground/80">Jolly Grant Airport (30 min), Dehradun Railway Station (20 min)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Goa Location */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-beige/50">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-eden-brown mr-2" />
                    <h3 className="text-xl font-serif text-eden-darkBrown">Goa</h3>
                  </div>
                  <p className="text-foreground/80 text-sm mb-4">
                    Eden Goa is situated in North Goa, near the beautiful Candolim Beach.
                    This coastal location offers the perfect blend of seaside tranquility and
                    access to Goa's vibrant culture and amenities.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <span className="font-medium mr-2">Nearby attractions:</span>
                      <span className="text-foreground/80">Candolim Beach, Fort Aguada, Sinquerim Beach</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-medium mr-2">Medical facilities:</span>
                      <span className="text-foreground/80">Healthway Hospital (15 min), Manipal Hospital (20 min)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-medium mr-2">Transportation:</span>
                      <span className="text-foreground/80">Dabolim Airport (45 min), Thivim Railway Station (30 min)</span>
                    </div>
                  </div>
                </div>
              </div>
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
                Ready to Experience Eden?
              </h2>
              <p className="text-white/90 mb-8">
                Schedule a visit to one of our communities or request more information about our residences and amenities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button variant="secondary" size="lg">Schedule a Visit</Button>
                </Link>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-eden-brown">
                  Download Brochure
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Properties;
