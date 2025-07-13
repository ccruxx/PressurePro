import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import house from "@assets/house.png";
import deck from "@assets/deck.png";
import driveway from "@assets/driveway.jpg";
import fleet from "@assets/fleet.png";
import padcleaning from "@assets/padcleaning.jpg";
import commercialbuilding from "@assets/commercialbuilding.png";

export default function Gallery() {
  const galleryItems = [
    {
      image: padcleaning,
      alt: "Dirty dumpster pad area before pressure washing",
      title: "Trash Pad Cleaning",
      description:
        "Removes grease, grime, and odors from dumpster and trash pad areas, leaving them clean and sanitary.",
      type: "BEFORE",
    },
    {
      image: house,
      alt: "Dirty house exterior before pressure washing",
      title: "House Exterior",
      description:
        "Removes years of dirt, mold, and buildup to restore your home’s exterior and boost curb appeal.",
      type: "BEFORE",
    },
    {
      image: driveway,
      alt: "Clean concrete driveway after pressure washing",
      title: "Concrete Driveway",
      description:
        "Restores the original appearance and instantly boosts curb appeal.",
      type: "AFTER",
    },
    {
      image: deck,
      alt: "Weathered wooden deck before pressure washing",
      title: "Wooden Deck",
      description:
        "Faded wood restored to its natural beauty and ready for staining.",
      type: "BEFORE",
    },
    {
      image: fleet,
      alt: "Fleet vehicle being cleaned with power washing",
      title: "Fleet Washing",
      description:
        "Keeps your commercial vehicles clean and professional-looking while protecting their surfaces.",
      type: "AFTER",
    },
    {
      image: commercialbuilding,
      alt: "Building exterior with dirt and stains before cleaning",
      title: "Commercial Building",
      description:
        "Removes years of buildup and brightens business curb appeal.",
      type: "BEFORE",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Amazing Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the dramatic difference our professional pressure washing
            services can make
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Property?
            </h3>
            <p className="text-gray-600 mb-6">
              Get professional results like these for your home or business.
              Free estimates available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element)
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className="bg-success text-white px-6 py-3 rounded-lg font-semibold hover:bg-success/90"
              >
                <i className="fas fa-calculator mr-2"></i>Get Free Quote
              </Button>
              <Button
                onClick={() => {
                  window.open("tel:+18175856388", "_self");
                }}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary"
              >
                <i className="fas fa-phone mr-2"></i>Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
