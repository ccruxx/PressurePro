import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: "fas fa-home",
      title: "Residential Cleaning",
      description: "Complete exterior cleaning for homes including driveways, sidewalks, decks, and siding.",
      features: [
        "Driveway & Sidewalk Cleaning",
        "Deck & Patio Restoration",
        "House Washing",
        "Fence Cleaning"
      ]
    },
    {
      icon: "fas fa-building",
      title: "Commercial Cleaning",
      description: "Professional cleaning services for businesses, storefronts, and commercial properties.",
      features: [
        "Storefront Cleaning",
        "Parking Lot Maintenance",
        "Building Exterior Washing",
        "Loading Dock Cleaning"
      ]
    },
    {
      icon: "fas fa-car",
      title: "Vehicle & Equipment",
      description: "Specialized cleaning for vehicles, heavy equipment, and industrial machinery.",
      features: [
        "Fleet Vehicle Washing",
        "Heavy Equipment Cleaning",
        "Boat & RV Washing",
        "Agricultural Equipment"
      ]
    },
    {
      icon: "fas fa-tint",
      title: "Soft Washing",
      description: "Gentle cleaning solution for delicate surfaces that require special care.",
      features: [
        "Roof Cleaning",
        "Vinyl Siding",
        "Stucco & Brick",
        "Painted Surfaces"
      ]
    },
    {
      icon: "fas fa-leaf",
      title: "Eco-Friendly Options",
      description: "Environmentally safe cleaning solutions that protect your property and surroundings.",
      features: [
        "Biodegradable Detergents",
        "Water Reclamation",
        "Safe for Plants & Pets",
        "EPA Approved Products"
      ]
    },

  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive pressure washing solutions for residential and commercial properties
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-4xl text-primary mb-4">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="fas fa-check text-success mr-2"></i>{feature}
                    </li>
                  ))}
                </ul>
                <button className="text-primary font-semibold hover:text-secondary transition-colors">
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
