import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "AquaClean Pro transformed our driveway from embarrassing to amazing! The oil stains that had been there for years are completely gone. Highly recommend their services.",
      name: "Sarah Mitchell",
      title: "Homeowner",
      initials: "SM"
    },
    {
      rating: 5,
      text: "Professional service from start to finish. They arrived on time, worked efficiently, and our commercial building looks brand new. Great value for money.",
      name: "Mike Johnson",
      title: "Business Owner",
      initials: "MJ"
    },
    {
      rating: 5,
      text: "I was amazed at how they brought our old deck back to life. The team was courteous, professional, and the results exceeded our expectations. Will definitely use again!",
      name: "Robert Taylor",
      title: "Homeowner",
      initials: "RT"
    },
    {
      rating: 5,
      text: "Emergency service when we needed graffiti removed quickly. They responded same day and took care of everything professionally. Excellent customer service!",
      name: "Lisa Davis",
      title: "Property Manager",
      initials: "LD"
    },
    {
      rating: 5,
      text: "The eco-friendly cleaning options were perfect for our property with landscaping. No damage to plants, and the results were fantastic. Truly professional work.",
      name: "Jennifer Wilson",
      title: "Homeowner",
      initials: "JW"
    },
    {
      rating: 5,
      text: "Fair pricing, excellent communication, and outstanding results. Our fleet vehicles look brand new after their service. Will definitely be repeat customers.",
      name: "David Miller",
      title: "Fleet Manager",
      initials: "DM"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across the area
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
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
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
