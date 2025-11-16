import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema-helpers";
import { Button } from "@/components/ui/button";

export default function PressureWashing() {
  const service = SEO_CONSTANTS.PRIMARY_SERVICES[0];
  
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
        description={`Professional ${service.name.toLowerCase()} services in the DFW area. ${service.description}. Free quotes, same-week scheduling. Call ${SEO_CONSTANTS.CONTACT.PHONE}.`}
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
              <h2 className="text-3xl font-bold mb-6">What We Do</h2>
              <p className="text-lg text-gray-700 mb-4">
                At DFW Pristine Power Washing, our professional pressure washing services remove dirt, grime, mold, mildew, and stains from all exterior surfaces. We use commercial-grade equipment and proven techniques to restore your property's curb appeal safely and effectively.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our high-pressure cleaning is perfect for concrete driveways, sidewalks, patios, parking lots, and other hard surfaces. We adjust pressure levels based on the surface material to ensure effective cleaning without damage.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Driveway and sidewalk cleaning</li>
                <li>Parking lot and commercial surface cleaning</li>
                <li>Deck and fence cleaning</li>
                <li>Patio and outdoor living area cleaning</li>
                <li>Building exterior pressure washing</li>
                <li>Oil stain and rust removal</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Before & After Results</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our pressure washing services deliver dramatic transformations. Whether it's a stained driveway covered in oil spots, algae-covered concrete, or weather-worn surfaces, we restore them to like-new condition.
              </p>
              <p className="text-lg text-gray-700">
                Every job includes a free inspection and quote. We'll assess your property and recommend the best cleaning approach for optimal results.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Pricing & Free Quotes</h2>
              <p className="text-lg text-gray-700 mb-4">
                We offer competitive, transparent pricing with no hidden fees. Every project starts with a free, no-obligation quote. Our pricing is based on square footage, surface condition, and specific cleaning requirements.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Most residential driveways can be cleaned in 1-3 hours. Commercial projects are scheduled to minimize disruption to your business operations.
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
                <Link href="/services/house-washing" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-house-washing">
                  → House Washing (Soft Wash)
                </Link>
                <Link href="/services/driveway-concrete-cleaning" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-driveway-cleaning">
                  → Driveway / Concrete Cleaning
                </Link>
                <Link href="/services/commercial-pressure-washing" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-commercial">
                  → Commercial Pressure Washing
                </Link>
                <Link href="/service-areas" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-service-areas">
                  → View All Service Areas
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Areas We Serve</h2>
              <p className="text-gray-700 mb-4">
                We proudly serve Midlothian, Waxahachie, Cedar Hill, and the entire DFW metro area.
              </p>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <Link href="/service-areas/midlothian-tx" className="text-blue-600 hover:text-blue-800" data-testid="link-city-midlothian">Midlothian</Link>
                <Link href="/service-areas/waxahachie-tx" className="text-blue-600 hover:text-blue-800" data-testid="link-city-waxahachie">Waxahachie</Link>
                <Link href="/service-areas/cedar-hill-tx" className="text-blue-600 hover:text-blue-800" data-testid="link-city-cedar-hill">Cedar Hill</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
