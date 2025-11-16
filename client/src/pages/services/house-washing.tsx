import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema-helpers";
import { Button } from "@/components/ui/button";

export default function HouseWashing() {
  const service = SEO_CONSTANTS.PRIMARY_SERVICES[1];
  
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.name, url: `/services/${service.slug}` }
  ]);

  const serviceSchema = getServiceSchema(service.name, service.description);

  return (
    <div className="font-sans bg-slate-50">
      <SEOHead
        title={`${service.name} in DFW (Arlington) | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Professional soft wash house washing in DFW. Safe for siding, stucco, brick, and painted surfaces. Removes algae, mold, and mildew. Free quotes. Call ${SEO_CONSTANTS.CONTACT.PHONE}.`}
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
              <h2 className="text-3xl font-bold mb-6">Soft Wash Method</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our soft wash house washing uses low-pressure water combined with specialized cleaning solutions to safely clean your home's exterior. This method is perfect for vinyl siding, stucco, brick, painted wood, and other delicate surfaces that could be damaged by high-pressure washing.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The soft wash technique removes algae, mold, mildew, dirt, and organic stains without the risk of forcing water behind siding or damaging paint and finishes. The cleaning solution continues working after we leave, providing longer-lasting results than pressure washing alone.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Safe for all siding types (vinyl, stucco, brick, wood)</li>
                <li>Removes black algae streaks and green mold</li>
                <li>Protects paint and exterior finishes</li>
                <li>Longer-lasting results than pressure washing</li>
                <li>Eco-friendly cleaning solutions</li>
                <li>No damage to landscaping</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Before & After Transformations</h2>
              <p className="text-lg text-gray-700 mb-4">
                Houses in the DFW area are constantly exposed to humidity, pollen, and organic growth. Our soft wash service restores your home's exterior to like-new condition, dramatically improving curb appeal and protecting your investment.
              </p>
              <p className="text-lg text-gray-700">
                Most houses show visible results within hours, with continued improvement over the next few days as the cleaning solution breaks down remaining organic matter.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Pricing & Free Quotes</h2>
              <p className="text-lg text-gray-700 mb-4">
                House washing pricing is based on square footage and the condition of your home's exterior. We provide free, detailed quotes with no obligation.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Most homes can be completely washed in 2-4 hours. We work efficiently to minimize disruption to your day.
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
                <Link href="/services/roof-cleaning" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-roof-cleaning">
                  → Roof Cleaning
                </Link>
                <Link href="/services/window-cleaning" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-window-cleaning">
                  → Window Cleaning
                </Link>
                <Link href="/services/pressure-washing" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-pressure-washing">
                  → Pressure Washing
                </Link>
                <Link href="/service-areas" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-service-areas">
                  → View All Service Areas
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Areas We Serve</h2>
              <p className="text-gray-700 mb-4">
                Based in Arlington, we proudly serve Dallas, Fort Worth, Mansfield, Plano, and the entire DFW metro area.
              </p>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <Link href="/service-areas/arlington-tx" className="text-blue-600 hover:text-blue-800" data-testid="link-city-arlington">Arlington</Link>
                <Link href="/service-areas/dallas-tx" className="text-blue-600 hover:text-blue-800" data-testid="link-city-dallas">Dallas</Link>
                <Link href="/service-areas/fort-worth-tx" className="text-blue-600 hover:text-blue-800" data-testid="link-city-fort-worth">Fort Worth</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
