
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";

const Contact = () => {
  const heroImage = "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2069&auto=format&fit=crop";
  
  return (
    <>
      <Hero
        title="Let's Connect"
        subtitle="Curious about our communities? We're here to answer your questions and help you discover the perfect Eden residence."
        backgroundImage={heroImage}
        height="large"
      />

      {/* Contact Information */}
      <section className="py-20 bg-eden-offWhite">
        <div className="container-sm">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                We're Here to Help
              </h2>
              <p className="text-foreground/80">
                Whether you're interested in learning more about our communities, scheduling a visit,
                or discussing specific needs, our team is ready to assist you.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-eden-beige/50 text-center">
                <div className="rounded-full bg-eden-beige w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Phone className="text-eden-brown h-7 w-7" />
                </div>
                <h3 className="text-xl font-serif text-eden-darkBrown mb-3">Call Us</h3>
                <p className="text-foreground/80 mb-4">
                  Speak directly with our team for immediate assistance.
                </p>
                <a
                  href="tel:+919876543210"
                  className="text-eden-brown font-medium hover:underline"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-eden-beige/50 text-center">
                <div className="rounded-full bg-eden-beige w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-eden-brown h-7 w-7" />
                </div>
                <h3 className="text-xl font-serif text-eden-darkBrown mb-3">Email Us</h3>
                <p className="text-foreground/80 mb-4">
                  Send us an email and we'll respond within 24 hours.
                </p>
                <a
                  href="mailto:info@edengraciousliving.com"
                  className="text-eden-brown font-medium hover:underline"
                >
                  info@edengraciousliving.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-eden-beige/50 text-center">
                <div className="rounded-full bg-eden-beige w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="text-eden-brown h-7 w-7" />
                </div>
                <h3 className="text-xl font-serif text-eden-darkBrown mb-3">WhatsApp</h3>
                <p className="text-foreground/80 mb-4">
                  Connect with us instantly via WhatsApp for quick queries.
                </p>
                <a
                  href="https://wa.me/919876543210"
                  className="text-eden-brown font-medium hover:underline"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location Cards */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-beige/50">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-eden-brown mr-2" size={20} />
                    <h3 className="text-xl font-serif text-eden-darkBrown">Eden Dehradun</h3>
                  </div>
                  <address className="text-foreground/80 text-sm not-italic mb-4">
                    54 Rajpur Road, Dehradun<br />
                    Uttarakhand, India - 248001
                  </address>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Phone size={16} className="text-eden-brown mr-2" />
                      <a href="tel:+919876543210" className="text-foreground/80 hover:text-eden-brown">
                        +91 98765 43210
                      </a>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail size={16} className="text-eden-brown mr-2" />
                      <a href="mailto:dehradun@edengraciousliving.com" className="text-foreground/80 hover:text-eden-brown">
                        dehradun@edengraciousliving.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-beige/50">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-eden-brown mr-2" size={20} />
                    <h3 className="text-xl font-serif text-eden-darkBrown">Eden Goa</h3>
                  </div>
                  <address className="text-foreground/80 text-sm not-italic mb-4">
                    27 Candolim Beach Road<br />
                    North Goa, India - 403515
                  </address>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Phone size={16} className="text-eden-brown mr-2" />
                      <a href="tel:+919876543210" className="text-foreground/80 hover:text-eden-brown">
                        +91 98765 43210
                      </a>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail size={16} className="text-eden-brown mr-2" />
                      <a href="mailto:goa@edengraciousliving.com" className="text-foreground/80 hover:text-eden-brown">
                        goa@edengraciousliving.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container-sm">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-foreground/80 mb-8">
                  We'd love to hear from you. Fill out the form and our team will get back to you
                  as soon as possible. Whether you have questions about our communities, want to
                  schedule a visit, or need information about availability, we're here to help.
                </p>
                
                <div className="bg-eden-beige/30 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-serif text-eden-darkBrown mb-3">Visiting Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span>By appointment only</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground/80 text-sm">
                  We recommend scheduling a visit in advance to ensure we can provide you with
                  our full attention and a comprehensive tour of our community.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-eden-beige/50">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-eden-beige/20">
        <div className="container-sm">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">Find Us</span>
              <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                Our Locations
              </h2>
              <p className="text-foreground/80">
                Our communities are located in prime areas, offering the perfect balance of
                accessibility and tranquility.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* For demo purposes, using placeholder images instead of actual maps */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-beige/50">
                <div className="h-64 bg-eden-beige/50 flex items-center justify-center">
                  <span className="text-eden-brown">Interactive Map - Dehradun Location</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-serif text-eden-darkBrown">Eden Dehradun</h3>
                  <p className="text-sm text-foreground/80">54 Rajpur Road, Dehradun, Uttarakhand</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-beige/50">
                <div className="h-64 bg-eden-beige/50 flex items-center justify-center">
                  <span className="text-eden-brown">Interactive Map - Goa Location</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-serif text-eden-darkBrown">Eden Goa</h3>
                  <p className="text-sm text-foreground/80">27 Candolim Beach Road, North Goa</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-sm">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-eden-brown text-sm uppercase font-medium tracking-wider">FAQs</span>
              <h2 className="text-3xl md:text-4xl font-serif text-eden-darkBrown mt-3 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-foreground/80">
                Find answers to commonly asked questions about Eden Gracious Living.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-eden-beige/50">
                  <h3 className="text-lg font-serif text-eden-darkBrown mb-2">What amenities are included in the monthly fee?</h3>
                  <p className="text-foreground/80 text-sm">
                    Our monthly fee includes access to all community amenities (wellness center, dining venues, gardens),
                    utilities (except telephone), weekly housekeeping, scheduled transportation, and 24/7 security services.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-eden-beige/50">
                  <h3 className="text-lg font-serif text-eden-darkBrown mb-2">Is healthcare support available?</h3>
                  <p className="text-foreground/80 text-sm">
                    Yes, Eden provides various levels of healthcare support. Our trained staff is available
                    24/7, and we have partnerships with nearby hospitals and specialists. Personalized care
                    plans are available to meet individual needs.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-eden-beige/50">
                  <h3 className="text-lg font-serif text-eden-darkBrown mb-2">Are pets allowed in the residences?</h3>
                  <p className="text-foreground/80 text-sm">
                    Yes, Eden is pet-friendly! We understand that pets are family members too. We allow small
                    to medium-sized pets with a pet deposit and compliance with our pet policy guidelines.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-eden-beige/50">
                  <h3 className="text-lg font-serif text-eden-darkBrown mb-2">Can family members stay overnight?</h3>
                  <p className="text-foreground/80 text-sm">
                    Absolutely! We encourage family visits. Guests can stay in your residence, or for more
                    extended stays, we offer guest accommodations that can be booked in advance for a nominal fee.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;
