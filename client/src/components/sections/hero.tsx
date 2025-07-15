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
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full relative">
          <iframe
            className="absolute top-0 left-0 w-[177.78%] h-full transform -translate-x-1/2 left-1/2"
            src="https://www.youtube.com/embed/bsdD-WrDcIE?autoplay=1&mute=1&loop=1&playlist=bsdD-WrDcIE&controls=0&modestbranding=1&showinfo=0&rel=0"
            title="DFW Premier Power Washing"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
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
            {/* Fully Insured Badge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-yellow-300 mb-2">✔</div>
              <div className="text-lg font-semibold mb-1">Fully Insured</div>
              <div className="text-sm text-gray-300">
                Peace of mind on every job
              </div>
            </div>

            {/* 5-Star Rating Badge (unchanged) */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-yellow-300 mb-2">5★</div>
              <div className="text-lg font-semibold mb-1">Average Rating</div>
              <div className="text-sm text-gray-300">
                Consistently top-rated service
              </div>
            </div>

            {/* Locally Owned Badge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-yellow-300 mb-2">DFW</div>
              <div className="text-lg font-semibold mb-1">Locally Owned</div>
              <div className="text-sm text-gray-300">
                Proudly serving our neighbors
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
