import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(200, 85%, 55%) 0%, hsl(190, 80%, 60%) 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full relative bg-blue-600">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8cGF0aCBkPSJNMCAwaDYwdjYwSDBoLTYweiIvPgo8L2c+CjwvZz4KPHN2Zz4=')]"></div>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            DFW's Premier <span className="text-yellow-300">Power Washing</span>{" "}
            Professionals
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Transform your property with our expert pressure washing services.
            Professional results that exceed expectations, every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => window.open("tel:+18175856388", "_self")}
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
            >
              <i className="fas fa-phone mr-2"></i>Call (817) 585-6388
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors"
            >
              <i className="fas fa-list mr-2"></i>Our Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                500+
              </div>
              <div className="text-lg font-semibold mb-1">Happy Customers</div>
              <div className="text-sm text-gray-300">
                Satisfied clients across DFW
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-yellow-300 mb-2">5★</div>
              <div className="text-lg font-semibold mb-1">Average Rating</div>
              <div className="text-sm text-gray-300">
                Consistently top-rated service
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-yellow-300 mb-2">10+</div>
              <div className="text-lg font-semibold mb-1">Years Experience</div>
              <div className="text-sm text-gray-300">
                Professional expertise
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className="animate-bounce cursor-pointer"
          onClick={() => scrollToSection("services")}
        >
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
