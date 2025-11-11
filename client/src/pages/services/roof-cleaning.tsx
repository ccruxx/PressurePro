import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema-helpers";
import { Button } from "@/components/ui/button";

export default function RoofCleaning() {
  const service = SEO_CONSTANTS.PRIMARY_SERVICES[2];
  
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
        description={`Professional roof cleaning in DFW. Soft wash method protects shingles while removing algae, moss, and black streaks. Extends roof life. Call ${SEO_CONSTANTS.CONTACT.PHONE}.`}
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
              <h2 className="text-3xl font-bold mb-6">Soft Wash Roof Cleaning</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our roof cleaning service uses a gentle soft wash method specifically designed to protect your shingles while removing harmful algae, moss, and black streaks. Unlike high-pressure washing, which can damage shingles and void warranties, our low-pressure technique safely cleans without risking your roof's integrity.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Those black streaks on your roof aren't just cosmetic—they're caused by Gloeocapsa magma algae that feeds on the limestone in shingles. Left untreated, this algae shortens your roof's lifespan and increases cooling costs by absorbing heat.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Removes algae streaks and moss growth</li>
                <li>Protects shingle granules and extends roof life</li>
                <li>Low-pressure soft wash method</li>
                <li>Safe for all roofing materials</li>
                <li>Improves energy efficiency</li>
                <li>Restores curb appeal and home value</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Why Clean Your Roof?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Regular roof cleaning is an investment in your home's longevity. Algae and moss retain moisture, accelerating shingle deterioration and potentially leading to expensive repairs or premature replacement.
              </p>
              <p className="text-lg text-gray-700">
                A clean roof also improves your home's appearance and can increase property value. Many homeowners are surprised by how much younger their home looks after a professional roof cleaning.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Pricing & Free Quotes</h2>
              <p className="text-lg text-gray-700 mb-4">
                Roof cleaning is priced based on roof size, pitch, and current condition. We provide detailed, transparent quotes at no charge.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Most residential roofs can be cleaned in 2-4 hours, with visible results immediately and continued improvement over the following weeks.
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
                Professional roof cleaning throughout DFW, including Midlothian, Waxahachie, and all surrounding areas.
              </p>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <Link href="/service-areas/midlothian-tx" className="text-blue-600 hover:text-blue-800" data-testid="link-city-midlothian">Midlothian</Link>
                <Link href="/service-areas/waxahachie-tx" className="text-blue-600 hover:text-blue-800" data-testid="link-city-waxahachie">Waxahachie</Link>
                <Link href="/service-areas/mansfield-tx" className="text-blue-600 hover:text-blue-800" data-testid="link-city-mansfield">Mansfield</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
