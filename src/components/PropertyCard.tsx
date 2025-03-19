
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

interface PropertyCardProps {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  features: string[];
}

const PropertyCard = ({
  id,
  name,
  location,
  description,
  image,
  features,
}: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-eden-lightGold/50 hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="image-hover-zoom h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-serif text-eden-darkGreen">{name}</h3>
        </div>
        <div className="flex items-center text-sm text-foreground/70 mb-4">
          <MapPin size={16} className="mr-1 text-eden-gold" />
          <span>{location}</span>
        </div>
        <p className="text-foreground/80 text-sm mb-4 flex-grow">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-eden-darkGreen mb-2">Features:</h4>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-eden-paleGreen px-2 py-1 rounded-full text-eden-darkGreen"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <Button variant="outline" className="flex-1">
            Virtual Tour
          </Button>
          <Link to={`/properties/${id}`} className="flex-1">
            <Button className="w-full">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
