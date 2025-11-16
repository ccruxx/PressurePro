import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema-helpers";
import { Button } from "@/components/ui/button";

export default function WindowCleaning() {
  const service = SEO_CONSTANTS.PRIMARY_SERVICES[5];
  
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
        description={`Professional window cleaning in DFW. Streak-free results for homes and businesses. Inside and outside cleaning. Free quotes. Call ${SEO_CONSTANTS.CONTACT.PHONE}.`}
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
              <h2 className="text-3xl font-bold mb-6">Professional Window Cleaning</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our professional window cleaning service delivers crystal-clear, streak-free windows for both residential and commercial properties. We use professional-grade cleaning solutions and techniques to remove dirt, hard water spots, pollen, and other contaminants that obscure your view and reduce natural light.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Clean windows make a dramatic difference in your home or business appearance. Natural light flows in better, views are restored, and your property looks well-maintained. Our technicians are trained to work safely and efficiently, leaving your windows spotless without damage to screens, frames, or sills.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Residential window cleaning (inside and out)</li>
                <li>Commercial storefront and building windows</li>
                <li>Screen cleaning and track cleaning</li>
                <li>Hard water stain removal</li>
                <li>Post-construction window cleaning</li>
                <li>Streak-free guaranteed results</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Residential & Commercial Service</h2>
              <p className="text-lg text-gray-700 mb-4">
                For homeowners, we offer thorough window cleaning that includes both interior and exterior glass, screens, and sills. We work carefully around your home and furnishings.
              </p>
              <p className="text-lg text-gray-700">
                For businesses, clean windows create a positive first impression for customers. We schedule service to minimize disruption and can provide recurring maintenance to keep your property looking its best year-round.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Pricing & Free Quotes</h2>
              <p className="text-lg text-gray-700 mb-4">
                Window cleaning is priced based on the number of windows, accessibility, and whether interior cleaning is included. We provide free, detailed quotes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Most residential homes can be completed in 2-4 hours. Commercial properties vary based on size and scope.
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
                <Link href="/services/pressure-washing" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-pressure-washing">
                  → Pressure Washing
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
                Professional window cleaning throughout the DFW metro area.
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
