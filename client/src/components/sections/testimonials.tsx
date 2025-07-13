import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "DFW Pristine Power Washing completely transformed our driveway! Years of oil stains—gone. It looks brand new. Highly recommend their services.",
      name: "Sarah Mitchell",
      title: "Homeowner",
      initials: "SM",
    },
    {
      rating: 5,
      text: "Professional from start to finish. They showed up on time, worked efficiently, and made our commercial building shine. Great value and great people.",
      name: "Mike Johnson",
      title: "Business Owner",
      initials: "MJ",
    },
    {
      rating: 5,
      text: "They brought our old deck back to life! Friendly crew, top-notch results, and zero hassle. Exceeded our expectations in every way.",
      name: "Robert Taylor",
      title: "Homeowner",
      initials: "RT",
    },
    {
      rating: 5,
      text: "We needed graffiti removed fast. DFW Premier Power Washing responded the same day and took care of everything perfectly. Impressive customer service.",
      name: "Lisa Davis",
      title: "Property Manager",
      initials: "LD",
    },
    {
      rating: 5,
      text: "We have a lot of landscaping, so their eco-friendly option was ideal. No damage to our plants, and everything looks spotless. Highly professional.",
      name: "Jennifer Wilson",
      title: "Homeowner",
      initials: "JW",
    },
    {
      rating: 5,
      text: "Fair pricing, excellent communication, and flawless work. Our fleet vehicles look like they just came off the lot. We’ll definitely keep using them.",
      name: "David Miller",
      title: "Fleet Manager",
      initials: "DM",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers
            across the area
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-50 rounded-xl p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-xl">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
