import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Check, Droplets, Home, Leaf, Route, Trash2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential House Washing",
      description:
        "Low-pressure soft washing for siding, brick, and painted exteriors to remove organic growth without damage.",
      features: [
        "House Washing",
        "Algae, Mold, and Organic Growth Removal",
        "Cobweb and Wasp Nest Knockdown",
        "Safe Soft Wash Methods",
      ],
    },
    {
      icon: Route,
      title: "Driveway, Patio, and Porch Cleaning",
      description:
        "Restore curb appeal with deep concrete and stone cleaning for high-traffic outdoor living areas.",
      features: [
        "Driveway Pressure Washing",
        "Patio and Porch Cleaning",
        "Rust and Red Clay Stain Treatment",
        "Grease and Oil Spot Removal",
      ],
    },
    {
      icon: Droplets,
      title: "Roof and Gutter Exterior Wash",
      description:
        "Gentle roof cleaning and exterior gutter brightening to remove black streaks, algae, and buildup.",
      features: [
        "Soft Wash Roof Cleaning",
        "Black Streak and Algae Removal",
        "Gutter Face Cleaning",
        "Mold and Mildew Treatment",
      ],
    },
    {
      icon: Leaf,
      title: "Eco-Conscious Cleaning Options",
      description:
        "Property-safe detergents and methods designed for homes with landscaping, pets, and children.",
      features: [
        "Biodegradable Cleaning Agents",
        "Surface-Appropriate Pressure Settings",
        "Plant and Lawn Protection",
        "Pet-Friendly Rinse Practices",
      ],
    },
    {
      icon: Building2,
      title: "Commercial Pressure Washing",
      description:
        "Parking lots, loading docks, dumpster pads, storefronts and fleet, scheduled around your operating hours.",
      features: [
        "Parking Lots and Drive Lanes",
        "Loading Docks and Dumpster Pads",
        "Storefronts, Entries and Sidewalks",
        "Recurring Service Contracts",
      ],
    },
    {
      icon: Trash2,
      title: "Problem Area Cleanup",
      description:
        "Targeted treatment for grease zones and heavily stained surfaces where grime and odors build up.",
      features: [
        "Trash Pad Surface Cleaning",
        "Grease Zone Treatment",
        "Oil and Grime Breakdown",
        "Odor-Causing Residue Removal",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Residential Pressure Washing Services in DFW
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our core focus is residential exterior cleaning, with proven pressure
            washing and power washing solutions that restore curb appeal fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div className="mb-4 text-brand">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <Check className="mr-2 inline h-4 w-4 text-brand" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-primary font-semibold hover:text-secondary transition-colors">
                  Learn More <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
