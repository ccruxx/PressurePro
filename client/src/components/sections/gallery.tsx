import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Dirty concrete driveway before pressure washing",
      title: "Concrete Driveway",
      description: "Oil stains and years of dirt removed, revealing clean concrete underneath.",
      type: "BEFORE"
    },
    {
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Clean concrete driveway after pressure washing",
      title: "Concrete Driveway",
      description: "Professional results that restore the original appearance and add curb appeal.",
      type: "AFTER"
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Weathered wooden deck before pressure washing",
      title: "Wooden Deck",
      description: "Weather-beaten deck restored to its natural beauty and ready for staining.",
      type: "BEFORE"
    },
    {
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Clean wooden deck after pressure washing",
      title: "Wooden Deck",
      description: "Beautiful restoration that extends the life of the deck and enhances outdoor living.",
      type: "AFTER"
    },
    {
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Building exterior with dirt and stains before cleaning",
      title: "Commercial Building",
      description: "Professional cleaning removes years of buildup and improves business appearance.",
      type: "BEFORE"
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Clean building exterior after pressure washing",
      title: "Commercial Building",
      description: "Stunning transformation that enhances property value and customer impression.",
      type: "AFTER"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Amazing Transformations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the dramatic difference our professional pressure washing services can make
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  item.type === 'BEFORE' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-success text-white'
                }`}>
                  {item.type}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary">
            <i className="fas fa-images mr-2"></i>View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
