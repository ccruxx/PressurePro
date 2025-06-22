import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema } from "@shared/schema";

const contactFormSchema = insertContactSubmissionSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      address: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your inquiry!",
        description: "We will contact you soon with your free quote.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error submitting form",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await contactMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "(123) 456-7890"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "info@aquacleanpro.com"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Service Area",
      value: "Metro Area & Surrounding Communities"
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Your Free Quote Today</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your property? Contact us for a free, no-obligation quote
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-50 rounded-xl p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Request Your Quote</h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      {...form.register("firstName")}
                      className="mt-2"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...form.register("lastName")}
                      className="mt-2"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className="mt-2"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...form.register("phone")}
                      className="mt-2"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="service">Service Needed *</Label>
                  <Select onValueChange={(value) => form.setValue("service", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Cleaning</SelectItem>
                      <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                      <SelectItem value="vehicle">Vehicle & Equipment</SelectItem>
                      <SelectItem value="soft-washing">Soft Washing</SelectItem>
                      <SelectItem value="eco-friendly">Eco-Friendly Options</SelectItem>
                      <SelectItem value="emergency">Emergency Services</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.service && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.service.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="address">Property Address</Label>
                  <Input
                    id="address"
                    {...form.register("address")}
                    placeholder="123 Main Street, City, State ZIP"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    placeholder="Tell us about your project, square footage, specific areas needing attention, etc."
                    rows={4}
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-success text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-success/90"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  {isSubmitting ? "Sending..." : "Get Free Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
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
            
            <Card className="bg-primary text-white rounded-xl p-6">
              <CardContent className="p-0">
                <h4 className="text-xl font-semibold mb-4">Emergency Services Available</h4>
                <p className="mb-4">
                  Need immediate assistance? We offer 24/7 emergency pressure washing services for 
                  urgent situations like graffiti removal, oil spills, and disaster cleanup.
                </p>
                <Button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                  <i className="fas fa-exclamation-triangle mr-2"></i>Emergency Service
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
