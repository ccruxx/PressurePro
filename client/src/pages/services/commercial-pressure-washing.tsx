import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema-helpers";
import { Button } from "@/components/ui/button";

export default function CommercialPressureWashing() {
  const service = SEO_CONSTANTS.PRIMARY_SERVICES[4];
  
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.name, url: `/services/${service.slug}` }
  ]);

  const serviceSchema = getServiceSchema(service.name, service.description);

  return (
    <div className="font-sans bg-slate-50">
      <SEOHead
        title={`${service.name} in DFW (Midlothian) | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Professional commercial pressure washing in DFW. Buildings, parking lots, storefronts, warehouses. Scheduled service, minimal disruption. Call ${SEO_CONSTANTS.CONTACT.PHONE}.`}
        canonical={`/services/${service.slug}`}
      />
      <SchemaOrg schema={[breadcrumbs, serviceSchema]} />
      
      <Header />
      
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-service-title">
              {service.name} in DFW
            </h1>
            <p className="text-xl md:text-2xl text-blue-100" data-testid="text-service-subtitle">
              {service.description}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Commercial Property Cleaning</h2>
              <p className="text-lg text-gray-700 mb-4">
                DFW Pristine Power Washing provides professional commercial pressure washing services for businesses throughout the DFW metro area. We understand that your property's appearance directly impacts your business, which is why we deliver thorough, reliable cleaning with minimal disruption to your operations.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our commercial services include building exteriors, parking lots, loading docks, dumpster pads, sidewalks, storefronts, and more. We work with property managers, business owners, and facility maintenance teams to create customized cleaning schedules that meet your specific needs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Building exterior washing</li>
                <li>Parking lot and garage cleaning</li>
                <li>Storefront and entrance cleaning</li>
                <li>Dumpster pad and loading dock cleaning</li>
                <li>Sidewalk and common area maintenance</li>
                <li>Scheduled recurring service available</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Professional Results, Minimal Disruption</h2>
              <p className="text-lg text-gray-700 mb-4">
                We schedule commercial projects to minimize impact on your business operations. Whether you need after-hours service, weekend work, or flexible scheduling, we accommodate your requirements.
              </p>
              <p className="text-lg text-gray-700">
                Our team is fully insured and trained to work safely around customers, employees, and business operations. We maintain professional standards and communication throughout every project.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Pricing & Free Quotes</h2>
              <p className="text-lg text-gray-700 mb-4">
                Commercial pressure washing is priced based on square footage, surface types, and cleaning frequency. We provide detailed, competitive quotes for one-time cleanings and recurring service contracts.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Contact us to discuss your commercial property's needs and receive a customized proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700" data-testid="button-call">
                  <a href={`tel:${SEO_CONSTANTS.CONTACT.PHONE_RAW}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {SEO_CONSTANTS.CONTACT.PHONE}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" data-testid="button-email">
                  <a href={`mailto:${SEO_CONSTANTS.CONTACT.EMAIL}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Related Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/services/pressure-washing" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-pressure-washing">
                  → Pressure Washing
                </Link>
                <Link href="/services/driveway-concrete-cleaning" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-driveway-cleaning">
                  → Driveway / Concrete Cleaning
                </Link>
                <Link href="/services/window-cleaning" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-window-cleaning">
                  → Window Cleaning
                </Link>
                <Link href="/service-areas" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-service-areas">
                  → View All Service Areas
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Areas We Serve</h2>
              <p className="text-gray-700 mb-4">
                Commercial pressure washing services throughout the entire DFW metro area.
              </p>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <Link href="/service-areas/dallas-tx" className="text-blue-600 hover:text-blue-800" data-testid="link-city-dallas">Dallas</Link>
                <Link href="/service-areas/fort-worth-tx" className="text-blue-600 hover:text-blue-800" data-testid="link-city-fort-worth">Fort Worth</Link>
                <Link href="/service-areas/arlington-tx" className="text-blue-600 hover:text-blue-800" data-testid="link-city-arlington">Arlington</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
