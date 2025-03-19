
import { ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-eden-paleGreen/20 px-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-sm border border-eden-lightGold/50 p-8 md:p-12 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-eden-darkGreen mb-4">404</h1>
        <p className="text-xl text-eden-green mb-6">Page Not Found</p>
        <p className="text-foreground/80 mb-10">
          We're sorry, but the page you were looking for doesn't exist. You may have mistyped the address or the page may have been moved.
        </p>
        <Link to="/">
          <Button className="inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
