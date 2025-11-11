import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getCityServiceSchema, getBreadcrumbSchema } from "@/lib/schema-helpers";
import { CITY_LOCAL_CONTENT } from "@/lib/city-content";
import { Button } from "@/components/ui/button";

interface CityPageProps {
  cityName: string;
  stateName: string;
  slug: string;
}

export default function CityPageTemplate({ cityName, stateName, slug }: CityPageProps) {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: `${cityName}, ${stateName}`, url: `/service-areas/${slug}` }
  ]);

  const cityServiceSchema = getCityServiceSchema(cityName, stateName);
  const cityContent = CITY_LOCAL_CONTENT[slug] || {
    localSpecifics: `Properties in ${cityName} require professional pressure washing to combat Texas weather conditions, organic growth, and exterior staining.`,
    nearbyAreas: [],
    projectSnippet: `Recent pressure washing project in ${cityName} restored curb appeal and property value.`
  };

  return (
    <div className="font-sans bg-slate-50">
      <SEOHead
        title={`Pressure Washing in ${cityName} | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Professional pressure washing in ${cityName}, ${stateName}. House washing, roof cleaning, driveway cleaning & more. Free quotes, same-week service. Call ${SEO_CONSTANTS.CONTACT.PHONE}.`}
        canonical={`/service-areas/${slug}`}
      />
      <SchemaOrg schema={[breadcrumbs, cityServiceSchema]} />
      
      <Header />
      
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-city-title">
              Pressure Washing in {cityName}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Professional exterior cleaning services in {cityName}, {stateName}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Professional Pressure Washing Services in {cityName}</h2>
              <p className="text-lg text-gray-700 mb-4">
                DFW Pristine Power Washing serves homeowners and businesses in {cityName} and nearby DFW areas with soft-wash house washing, roof cleaning, and high-pressure concrete cleaning. We remove algae, mildew, rust, and oil stains safely and fast—backed by 5-star reviews and same-week scheduling.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need your home's siding cleaned, black algae streaks removed from your roof, or your driveway restored, we have the equipment and expertise to handle any exterior cleaning project in {cityName}.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Popular in {cityName}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/services/pressure-washing" className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors" data-testid="link-pressure-washing">
                  <div className="text-blue-600 font-medium">→</div>
                  <div>
                    <div className="font-semibold text-gray-900">Pressure Washing</div>
                    <div className="text-sm text-gray-600">High-pressure cleaning for driveways and concrete</div>
                  </div>
                </Link>
                <Link href="/services/house-washing" className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors" data-testid="link-house-washing">
                  <div className="text-blue-600 font-medium">→</div>
                  <div>
                    <div className="font-semibold text-gray-900">House Washing (Soft Wash)</div>
                    <div className="text-sm text-gray-600">Gentle cleaning for siding, stucco, and brick</div>
                  </div>
                </Link>
                <Link href="/services/roof-cleaning" className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors" data-testid="link-roof-cleaning">
                  <div className="text-blue-600 font-medium">→</div>
                  <div>
                    <div className="font-semibold text-gray-900">Roof Cleaning</div>
                    <div className="text-sm text-gray-600">Remove algae streaks and protect your shingles</div>
                  </div>
                </Link>
                <Link href="/services/driveway-concrete-cleaning" className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors" data-testid="link-driveway-cleaning">
                  <div className="text-blue-600 font-medium">→</div>
                  <div>
                    <div className="font-semibold text-gray-900">Driveway / Concrete</div>
                    <div className="text-sm text-gray-600">Oil stain and rust removal from concrete</div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Local Expertise in {cityName}</h2>
              <p className="text-gray-700 mb-4">
                {cityContent.localSpecifics}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Recent Project in {cityName}</h2>
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <p className="text-gray-700 italic">
                  "{cityContent.projectSnippet}"
                </p>
              </div>
              <p className="text-gray-700">
                Our team understands the specific challenges that properties in {cityName} face and adapts our cleaning methods accordingly to deliver safe, effective results.
              </p>
            </div>

            {cityContent.nearbyAreas.length > 0 && (
              <div className="bg-blue-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold mb-4">We Also Serve Nearby Areas</h3>
                <div className="flex flex-wrap gap-4">
                  {cityContent.nearbyAreas.map(areaSlug => {
                    const area = SEO_CONSTANTS.SERVICE_AREA_CITIES.find(c => c.slug === areaSlug);
                    return area ? (
                      <Link 
                        key={areaSlug}
                        href={`/service-areas/${areaSlug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                        data-testid={`link-nearby-${areaSlug}`}
                      >
                        → {area.name}, {area.state}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">FAQ for {cityName}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Do you soft wash roofs in {cityName}?</h3>
                  <p className="text-gray-700">
                    Yes—our soft-wash method protects shingles while removing algae streaks. We never use high-pressure washing on roofs, which can damage shingles and void warranties.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">How fast can you schedule in {cityName}?</h3>
                  <p className="text-gray-700">
                    Most jobs are scheduled within 2–5 days, weather permitting. We work efficiently to minimize disruption to your day.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Are estimates free?</h3>
                  <p className="text-gray-700">
                    Yes—call <a href={`tel:${SEO_CONSTANTS.CONTACT.PHONE_RAW}`} className="text-blue-600 hover:text-blue-800" data-testid="link-call">{SEO_CONSTANTS.CONTACT.PHONE}</a> or email <a href={`mailto:${SEO_CONSTANTS.CONTACT.EMAIL}`} className="text-blue-600 hover:text-blue-800" data-testid="link-email">{SEO_CONSTANTS.CONTACT.EMAIL}</a> for a free, no-obligation quote.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Get a free quote in {cityName}</h2>
              <p className="text-xl mb-6">
                Ready to restore your property's curb appeal?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100" data-testid="button-call">
                  <a href={`tel:${SEO_CONSTANTS.CONTACT.PHONE_RAW}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {SEO_CONSTANTS.CONTACT.PHONE}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700" data-testid="button-email">
                  <a href={`mailto:${SEO_CONSTANTS.CONTACT.EMAIL}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
