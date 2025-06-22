import { Button } from "@/components/ui/button";

import dfwprestinepowerwashing_com from "@assets/dfwprestinepowerwashing.com.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-primary to-secondary text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Pressure Washing That{' '}
              <span className="text-yellow-300">Transforms</span> Your Property
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Restore your home or business to like-new condition with our expert pressure washing services. 
              Fast, reliable, and guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-success text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-success/90"
              >
                <i className="fas fa-calendar-check mr-2"></i>Schedule Service
              </Button>
              <Button 
                onClick={() => scrollToSection('gallery')}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary"
              >
                <i className="fas fa-play mr-2"></i>View Our Work
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">5★</div>
                <div className="text-sm text-blue-100">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">10+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={dfwprestinepowerwashing_com} 
              alt="Professional pressure washing service in action" 
              className="rounded-lg shadow-2xl w-full"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}
