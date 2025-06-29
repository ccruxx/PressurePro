import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import house from "@assets/house.png";
import deck from "@assets/deck.png";
import driveway from "@assets/driveway.jpg";
import fleet from "@assets/fleet.png";
import commercialbuilding from "@assets/commercialbuilding.png";

export default function Gallery() {
  const galleryItems = [
    {
      image: house,
      alt: "Dirty concrete driveway before pressure washing",
      title: "Concrete Driveway",
      description:
        "Oil stains and years of dirt removed, revealing clean concrete underneath.",
      type: "BEFORE",
    },
    {
      image: deck,
      alt: "Clean concrete driveway after pressure washing",
      title: "Concrete Driveway",
      description:
        "Professional results that restore the original appearance and add curb appeal.",
      type: "AFTER",
    },
    {
      image: driveway,
      alt: "Weathered wooden deck before pressure washing",
      title: "Wooden Deck",
      description:
        "Weather-beaten deck restored to its natural beauty and ready for staining.",
      type: "BEFORE",
    },
    {
      image: fleet,
      alt: "Clean wooden deck after pressure washing",
      title: "Wooden Deck",
      description:
        "Beautiful restoration that extends the life of the deck and enhances outdoor living.",
      type: "AFTER",
    },
    {
      image: commercialbuilding,
      alt: "Building exterior with dirt and stains before cleaning",
      title: "Commercial Building",
      description:
        "Professional cleaning removes years of buildup and improves business appearance.",
      type: "BEFORE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Clean building exterior after pressure washing",
      title: "Commercial Building",
      description:
        "Stunning transformation that enhances property value and customer impression.",
      type: "AFTER",
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
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Transform Your Property?</h3>
            <p className="text-gray-600 mb-6">
              Get professional results like these for your home or business. Free estimates available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-success text-white px-6 py-3 rounded-lg font-semibold hover:bg-success/90"
              >
                <i className="fas fa-calculator mr-2"></i>Get Free Quote
              </Button>
              <Button 
                onClick={() => {
                  window.open('tel:+1234567890', '_self');
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
