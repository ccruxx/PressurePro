import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {

  const contactInfo = [
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "(817) 585-6388"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "joshuacllns@yahoo.com"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Service Area",
      value: "DFW Metro Area & Surrounding Communities"
    },
    {
      icon: "fas fa-clock",
      title: "Business Hours",
      value: "Mon-Fri: 7:00 AM - 7:00 PM\nSat: 8:00 AM - 6:00 PM\nSun: 9:00 AM - 5:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us Today</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your property? Get in touch for professional pressure washing services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <i className={`${info.icon} text-white`}></i>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{info.title}</div>
                        <div className="text-gray-600 whitespace-pre-line">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Call to Action Card */}
            <div>
              <Card className="bg-primary text-white rounded-xl p-8">
                <CardContent className="p-0">
                  <h4 className="text-2xl font-semibold mb-4">Ready to Get Started?</h4>
                  <p className="mb-6">
                    Contact us today for your free estimate. We'll discuss your needs and provide 
                    a competitive quote for professional pressure washing services.
                  </p>
                  <div className="space-y-4">
                    <Button 
                      onClick={() => window.open('tel:+18175856388', '_self')}
                      className="w-full bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                    >
                      <i className="fas fa-phone mr-2"></i>Call (817) 585-6388
                    </Button>
                    <Button 
                      onClick={() => window.open('mailto:joshuacllns@yahoo.com', '_self')}
                      className="w-full bg-success text-white px-6 py-3 rounded-lg font-semibold hover:bg-success/90"
                    >
                      <i className="fas fa-envelope mr-2"></i>Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
