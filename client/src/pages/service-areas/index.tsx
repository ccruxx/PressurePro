import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/schema-helpers";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function ServiceAreasIndex() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" }
  ]);

  const localBusiness = getLocalBusinessSchema();

  const northCities = SEO_CONSTANTS.SERVICE_AREA_CITIES.filter(city => 
    ['Plano', 'Frisco', 'Carrollton', 'Farmers Branch', 'Addison'].includes(city.name)
  );

  const centralCities = SEO_CONSTANTS.SERVICE_AREA_CITIES.filter(city => 
    ['Arlington', 'Grand Prairie', 'Irving', 'Dallas', 'Hurst', 'Euless', 'Bedford', 'Las Colinas'].includes(city.name)
  );

  const westCities = SEO_CONSTANTS.SERVICE_AREA_CITIES.filter(city => 
    ['Fort Worth', 'Keller', 'Southlake', 'Grapevine', 'North Richland Hills', 'Richland Hills'].includes(city.name)
  );

  const southCities = SEO_CONSTANTS.SERVICE_AREA_CITIES.filter(city => 
    ['Mansfield', 'Burleson', 'Midlothian', 'Waxahachie', 'Cedar Hill', 'DeSoto', 'Ennis', 'Ovilla', 'Red Oak', 'Venus'].includes(city.name)
  );

  return (
    <div className="font-sans bg-slate-50">
      <SEOHead
        title={`Service Areas - DFW Pressure Washing | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Professional pressure washing serving Arlington, Mansfield, Dallas, Fort Worth, and all of the DFW metro area. Free quotes available.`}
        canonical="/service-areas"
      />
      <SchemaOrg schema={[breadcrumbs, localBusiness]} />
      
      <Header />
      
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-page-title">
              Service Areas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Proudly serving homes and businesses throughout the DFW metro area
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional Pressure Washing Across DFW</h2>
              <p className="text-lg text-gray-700 mb-4">
                DFW Pristine Power Washing provides professional pressure washing, house washing, roof cleaning, and concrete cleaning services throughout the Dallas-Fort Worth metro area. Based in Arlington, we serve homeowners and businesses across northern, central, western, and southern DFW communities.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need residential house washing, commercial building cleaning, or driveway restoration, we deliver the same high-quality service to every city we serve. Call us today for a free quote: <a href={`tel:${SEO_CONSTANTS.CONTACT.PHONE_RAW}`} className="text-blue-600 font-semibold hover:text-blue-800" data-testid="link-call">{SEO_CONSTANTS.CONTACT.PHONE}</a>
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                North DFW
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {northCities.map((city) => (
                  <Link key={city.slug} href={`/service-areas/${city.slug}`} data-testid={`link-city-${city.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Pressure Washing in {city.name}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                Central DFW
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {centralCities.map((city) => (
                  <Link key={city.slug} href={`/service-areas/${city.slug}`} data-testid={`link-city-${city.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Pressure Washing in {city.name}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                West DFW
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {westCities.map((city) => (
                  <Link key={city.slug} href={`/service-areas/${city.slug}`} data-testid={`link-city-${city.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Pressure Washing in {city.name}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                South DFW
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {southCities.map((city) => (
                  <Link key={city.slug} href={`/service-areas/${city.slug}`} data-testid={`link-city-${city.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Pressure Washing in {city.name}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-700 mb-4">
                We offer comprehensive exterior cleaning services in all of our service areas:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {SEO_CONSTANTS.PRIMARY_SERVICES.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="text-blue-600 hover:text-blue-800" data-testid={`link-service-${service.slug}`}>
                    → {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
