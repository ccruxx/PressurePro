import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logoImage from "@assets/logo2.png";
import { SEO_CONSTANTS } from "@/lib/seo-constants";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [location] = useLocation();
  const isHomePage = location === "/";
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showAreasDropdown, setShowAreasDropdown] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMobileMenuOpen(false);
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header
      className={`bg-white fixed w-full top-0 z-50 transition-shadow ${isScrolled ? "shadow-lg" : "shadow-md"}`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src={logoImage}
              alt="DFW Pristine Power Washing Logo"
              className="h-28 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1"
                data-testid="nav-services"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </Link>
              {showServicesDropdown && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                  {SEO_CONSTANTS.PRIMARY_SERVICES.map((service) => (
                    <Link 
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                      data-testid={`nav-service-${service.slug}`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setShowAreasDropdown(true)}
              onMouseLeave={() => setShowAreasDropdown(false)}
            >
              <Link 
                href="/service-areas" 
                className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1"
                data-testid="nav-service-areas"
              >
                Service Areas
                <ChevronDown className="h-4 w-4" />
              </Link>
              {showAreasDropdown && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50 max-h-96 overflow-y-auto">
                  {SEO_CONSTANTS.SERVICE_AREA_CITIES.map((city) => (
                    <Link 
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                      data-testid={`nav-city-${city.slug}`}
                    >
                      {city.name}, {city.state}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+18175856388"
              className="hidden md:block text-primary font-semibold"
            >
              <i className="fas fa-phone mr-2"></i>(817) 585-6388
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-success text-white px-6 py-2 rounded-lg font-semibold hover:bg-success/90"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4 pb-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
              <a href="tel:+18175856388" className="text-primary font-semibold">
                <i className="fas fa-phone mr-2"></i>(817) 585-6388
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
