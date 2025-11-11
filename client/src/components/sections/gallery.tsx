import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import house from "@assets/people_and_equipment2_1757974664719.jpg";
import deck from "@assets/deck.jpg";
import driveway from "@assets/driveway_1757974664720.jpg";
import fleet from "@assets/fleetwashing.png";
import padcleaning from "@assets/padcleaning2.jpg";
import commercialbuilding from "@assets/commercialbuilding.jpg";

// New transformation images
import commercialWallBefore from "@assets/commercial_wall_cleaning_1757974664719.jpg";
import commercialWallAfter from "@assets/commercial_wall_cleaning2_1757974664719.jpg";
import drivewayBefore from "@assets/driveway_1757974664720.jpg";
import drivewayAfter from "@assets/driveway2_1757974664720.jpg";
import walkwayDeckingBefore from "@assets/walkway_decking_1757974664720.jpg";
import walkwayDeckingAfter from "@assets/walkway_decking2_1757974664720.jpg";

export default function Gallery() {
  // Interactive before/after sliders data
  const beforeAfterSliders = [
    {
      beforeImage: commercialWallBefore,
      afterImage: commercialWallAfter,
      title: "Commercial Wall Cleaning",
      description:
        "Professional stone wall restoration revealing dramatic results",
      beforeAlt: "Dirty commercial stone wall before pressure washing",
      afterAlt: "Clean commercial stone wall after pressure washing",
    },
    {
      beforeImage: drivewayBefore,
      afterImage: drivewayAfter,
      title: "Driveway Transformation",
      description:
        "Complete driveway makeover removing years of stains and grime",
      beforeAlt: "Stained concrete driveway before cleaning",
      afterAlt: "Clean concrete driveway after pressure washing",
    },
    {
      beforeImage: walkwayDeckingBefore,
      afterImage: walkwayDeckingAfter,
      title: "Walkway & Decking Restoration",
      description: "Wooden surfaces restored to their natural beauty",
      beforeAlt: "Weathered wooden decking before cleaning",
      afterAlt: "Restored wooden decking after pressure washing",
    },
  ];

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

        {/* Featured Interactive Before/After Sliders */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Interactive Before & After
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Drag the slider to reveal the incredible transformations. See
              exactly how our professional pressure washing brings properties
              back to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {beforeAfterSliders.map((slider, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <BeforeAfterSlider
                  beforeImage={slider.beforeImage}
                  afterImage={slider.afterImage}
                  beforeAlt={slider.beforeAlt}
                  afterAlt={slider.afterAlt}
                  className="h-80"
                  initialPosition={40}
                  data-testid={`slider-${index}`}
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {slider.title}
                  </h4>
                  <p className="text-gray-600">{slider.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Gallery Images */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            More Amazing Results
          </h3>
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
                  loading="lazy"
                  decoding="async"
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
