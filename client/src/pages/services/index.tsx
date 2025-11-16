import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/schema-helpers";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Droplets, Home, Triangle, Square, Building2, Sparkles } from "lucide-react";

const serviceIcons = {
  "pressure-washing": Droplets,
  "house-washing": Home,
  "roof-cleaning": Triangle,
  "driveway-concrete-cleaning": Square,
  "commercial-pressure-washing": Building2,
  "window-cleaning": Sparkles
};

export default function ServicesIndex() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" }
  ]);

  const localBusiness = getLocalBusinessSchema();

  return (
    <div className="font-sans bg-slate-50">
      <SEOHead
        title={`Pressure Washing Services in DFW | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Professional pressure washing, house washing, roof cleaning, and more in the DFW area. Free quotes, same-week scheduling. Serving Arlington, Mansfield, Dallas, Fort Worth and all of DFW.`}
        canonical="/services"
      />
      <SchemaOrg schema={[breadcrumbs, localBusiness]} />
      
      <Header />
      
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-page-title">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Professional pressure washing and exterior cleaning for homes and businesses in DFW
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {SEO_CONSTANTS.PRIMARY_SERVICES.map((service) => {
                const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
                return (
                  <Link key={service.slug} href={`/services/${service.slug}`} data-testid={`link-service-${service.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                            <CardDescription className="text-base">
                              {service.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Why Choose DFW Pristine Power Washing?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Equipment</h3>
                  <p className="text-gray-700">
                    We use commercial-grade pressure washers and soft wash systems to deliver superior results on every project.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                  <p className="text-gray-700">
                    {SEO_CONSTANTS.OWNER.YEARS_IN_BUSINESS} years serving the DFW area with consistent 5-star reviews from satisfied customers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Free Quotes</h3>
                  <p className="text-gray-700">
                    Every project starts with a free, detailed quote with no obligation or pressure to commit.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Same-Week Service</h3>
                  <p className="text-gray-700">
                    Most jobs can be scheduled within 2-5 days, weather permitting. We work around your schedule.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Call us today for a free quote: <a href={`tel:${SEO_CONSTANTS.CONTACT.PHONE_RAW}`} className="text-blue-600 font-semibold hover:text-blue-800" data-testid="link-call">{SEO_CONSTANTS.CONTACT.PHONE}</a>
              </p>
              <Link href="/service-areas" className="text-blue-600 hover:text-blue-800 font-medium" data-testid="link-service-areas">
                → View All Service Areas
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
