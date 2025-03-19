
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

interface FooterProps {
  logo?: string;
}

const Footer = ({ logo }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eden-paleGreen pt-16 pb-8">
      <div className="container-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              {logo ? (
                <img src={logo} alt="Eden" className="h-12" />
              ) : (
                <h2 className="text-3xl font-serif font-medium text-eden-darkGreen">
                  Eden<span className="text-eden-gold">.</span>
                </h2>
              )}
            </Link>
            <p className="text-sm text-foreground/80 max-w-xs">
              Eden Gracious Living offers premium senior living communities that embrace comfort, security, and vibrant community life.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-eden-green text-eden-gold flex items-center justify-center hover:bg-eden-darkGreen transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-eden-green text-eden-gold flex items-center justify-center hover:bg-eden-darkGreen transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-eden-green text-eden-gold flex items-center justify-center hover:bg-eden-darkGreen transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Location Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-medium text-eden-darkGreen">Our Locations</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-eden-gold mt-1 mr-2" />
                <p className="text-sm text-foreground/80">
                  Eden Dehradun, Rajpur Road, Dehradun, Uttarakhand, India
                </p>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="text-eden-gold mt-1 mr-2" />
                <p className="text-sm text-foreground/80">
                  Eden Goa, Candolim Beach Road, North Goa, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-medium text-eden-darkGreen">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="text-eden-gold mr-2" />
                <a href="tel:+919876543210" className="text-sm text-foreground/80 hover:text-eden-green transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-eden-gold mr-2" />
                <a href="mailto:info@edengraciousliving.com" className="text-sm text-foreground/80 hover:text-eden-green transition-colors">
                  info@edengraciousliving.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-medium text-eden-darkGreen">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/about" className="text-sm text-foreground/80 hover:text-eden-green transition-colors">
                About Us
              </Link>
              <Link to="/properties" className="text-sm text-foreground/80 hover:text-eden-green transition-colors">
                Our Properties
              </Link>
              <Link to="/contact" className="text-sm text-foreground/80 hover:text-eden-green transition-colors">
                Contact Us
              </Link>
              <a href="#" className="text-sm text-foreground/80 hover:text-eden-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-foreground/80 hover:text-eden-green transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white rounded-lg p-6 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-serif font-medium text-eden-darkGreen mb-1">
                Stay Updated
              </h3>
              <p className="text-sm text-foreground/80 mb-4 md:mb-0">
                Subscribe to our newsletter for the latest updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-eden-lightGold rounded-md focus:outline-none focus:ring-1 focus:ring-eden-green"
              />
              <Button className="sm:whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-eden-green/20 text-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} Eden Gracious Living. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
