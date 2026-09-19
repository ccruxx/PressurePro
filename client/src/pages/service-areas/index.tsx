import { Link } from "wouter";
import { Phone } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import WorkImage from "@/components/work-image";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/schema-helpers";

export default function ServiceAreasIndex() {
  const cities = SEO_CONSTANTS.SERVICE_AREA_CITIES;
  const schema = [
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Service Areas", url: "/service-areas" },
    ]),
    getLocalBusinessSchema(),
  ];

  return (
    <div className="bg-canvas">
      <SEOHead
        title={`Service Areas | Pressure Washing Across DFW | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Pressure washing, soft washing and delicate stone cleaning across ${cities.length} cities in the DFW metroplex, from ${SEO_CONSTANTS.NAP.CITY}. Call ${SEO_CONSTANTS.CONTACT.PHONE}.`}
        canonical="/service-areas"
      />
      <SchemaOrg schema={schema} />
      <Header />

      <main className="min-h-screen pt-header">
        <section className="border-b border-stone-200 bg-surface">
          <div className="mx-auto grid max-w-7xl items-center gap-gutter px-gutter py-section lg:grid-cols-2">
            <div>
              <p className="text-step--1 font-medium text-brand">
                Service areas
              </p>
              <h1 className="mt-4 max-w-[18ch] text-step-5">
                {cities.length} cities across the Metroplex
              </h1>
              <p className="mt-6 max-w-measure text-step-1 text-ink-soft">
                Based at {SEO_CONSTANTS.NAP.STREET}, {SEO_CONSTANTS.NAP.CITY}, and
                working outward across Dallas&ndash;Fort Worth for homes and
                commercial property alike.
              </p>
              <div className="mt-10">
                <a
                  href={SEO_CONSTANTS.CONTACT.PHONE_TEL}
                  className="inline-flex items-center gap-2 bg-brand px-6 py-3 text-step-0 font-medium text-white transition-colors hover:bg-brand-strong"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {SEO_CONSTANTS.CONTACT.PHONE}
                </a>
              </div>
            </div>
            <WorkImage
              slug="austin-stone-home-exterior-cleaning"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              aspect="aspect-[4/3]"
              className="shadow-lg"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-gutter py-section">
          <h2 className="text-step-3">Every city we serve</h2>
          <ul className="mt-10 grid gap-x-gutter gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <li key={city.slug} className="border-t border-stone-200 pt-4">
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="inline-block py-2 text-step-1 text-ink-soft underline-offset-4 hover:text-brand hover:underline"
                  data-testid={`area-${city.slug}`}
                >
                  {city.name}, {city.state}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-measure text-ink-soft">
            Not listed? Call anyway &mdash; if it is a reasonable drive we will
            usually say yes.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
