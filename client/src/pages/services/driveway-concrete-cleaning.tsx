import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema-helpers";
import { Button } from "@/components/ui/button";

export default function DrivewayConcreteCleaning() {
  const service = SEO_CONSTANTS.PRIMARY_SERVICES[3];
  
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
        description={`Professional driveway and concrete cleaning in DFW. Remove oil stains, rust, algae, and tire marks. Restore curb appeal. Free quotes. Call ${SEO_CONSTANTS.CONTACT.PHONE}.`}
        canonical={`/services/${service.slug}`}
      />
      <SchemaOrg schema={[breadcrumbs, serviceSchema]} />
      
      <Header />
      
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-service-title">
              Driveway & Concrete Cleaning in DFW
            </h1>
            <p className="text-xl md:text-2xl text-blue-100" data-testid="text-service-subtitle">
              {service.description}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Professional Concrete Cleaning</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our driveway and concrete cleaning service uses high-pressure washing to remove years of built-up dirt, oil stains, tire marks, rust, algae, and other stubborn contaminants. We transform dull, stained concrete back to its original appearance, dramatically improving your property's curb appeal.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Whether it's a residential driveway, patio, sidewalk, or commercial parking lot, we have the equipment and expertise to handle any concrete cleaning project. Our commercial-grade pressure washers deliver the power needed for deep cleaning while our trained technicians ensure no damage to the surface.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Driveway pressure washing and restoration</li>
                <li>Sidewalk and walkway cleaning</li>
                <li>Patio and outdoor entertainment area cleaning</li>
                <li>Pool deck cleaning</li>
                <li>Oil stain and rust removal</li>
                <li>Black algae and mold removal</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Dramatic Before & After Results</h2>
              <p className="text-lg text-gray-700 mb-4">
                Concrete in the DFW area faces harsh conditions: intense sun, humidity, oil drips, and organic growth. Our cleaning process removes all surface contaminants, revealing the clean concrete underneath.
              </p>
              <p className="text-lg text-gray-700">
                Most homeowners are amazed at the transformation. A professional concrete cleaning can make your home look years younger and significantly boost curb appeal—perfect before listing your home for sale or simply maintaining your property's value.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Pricing & Free Quotes</h2>
              <p className="text-lg text-gray-700 mb-4">
                Driveway and concrete cleaning is priced based on square footage and the severity of staining. We provide free, detailed quotes with no pressure to commit.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Most residential driveways can be cleaned in 1-3 hours. We complete the work efficiently so you can enjoy your restored concrete right away.
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
                <Link href="/services/house-washing" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-house-washing">
                  → House Washing
                </Link>
                <Link href="/services/commercial-pressure-washing" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-commercial">
                  → Commercial Cleaning
                </Link>
                <Link href="/service-areas" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-service-areas">
                  → View All Service Areas
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Areas We Serve</h2>
              <p className="text-gray-700 mb-4">
                Professional driveway and concrete cleaning throughout the DFW metro area.
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
