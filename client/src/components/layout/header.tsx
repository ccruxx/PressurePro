import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`bg-white fixed w-full top-0 z-50 transition-shadow ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary">
                {/* Pressure washer wand */}
                <rect x="2" y="14" width="20" height="4" rx="2" fill="currentColor" />
                <circle cx="22" cy="16" r="3" fill="currentColor" />
                {/* Water streams */}
                <path d="M22 13 L28 8 M22 16 L30 16 M22 19 L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800 leading-tight">DFW PRISTINE</span>
              <div className="text-sm font-semibold text-primary">POWER WASHING</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
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
              onClick={() => scrollToSection('contact')}
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
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
              <a 
                href="tel:+18175856388" 
                className="text-primary font-semibold"
              >
                <i className="fas fa-phone mr-2"></i>(817) 585-6388
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
