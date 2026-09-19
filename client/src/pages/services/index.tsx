import { Link } from "wouter";
import { Phone } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import WorkImage from "@/components/work-image";
import { SEO_CONSTANTS, STONE_TYPES } from "@/lib/seo-constants";
import { serviceIcon, serviceContent } from "@/lib/service-content";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/schema-helpers";

const HERO_BY_SLUG: Record<string, string> = {
  "pressure-washing": "curved-concrete-walkway-after",
  "house-washing": "stucco-eave-soft-wash",
  "roof-cleaning": "gutter-and-roofline-after",
  "driveway-concrete-cleaning": "concrete-walkway-rust-removal",
  "delicate-stone-cleaning": "flagstone-entry-walk-austin-stone-home",
  "commercial-pressure-washing": "truck-stop-fuel-canopy-cleaning",
  "window-cleaning": "stucco-window-trim-cleaning",
};

export default function ServicesIndex() {
  const schema = [
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
    ]),
    getLocalBusinessSchema(),
  ];

  return (
    <div className="bg-canvas">
      <SEOHead
        title={`Pressure Washing & Exterior Cleaning Services in DFW | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Soft washing, pressure washing, roof and gutter cleaning, delicate stone restoration and commercial work across the DFW metroplex. Call ${SEO_CONSTANTS.CONTACT.PHONE} for a free quote.`}
        canonical="/services"
      />
      <SchemaOrg schema={schema} />
      <Header />

      <main className="min-h-screen pt-header">
        <section className="border-b border-stone-200 bg-surface">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <p className="text-step--1 uppercase tracking-[0.18em] text-brand">Services</p>
            <h1 className="mt-4 max-w-[20ch] text-step-5">
              Every surface on the property, cleaned the way it should be
            </h1>
            <p className="mt-6 max-w-measure text-step-1 text-ink-soft">
              Concrete takes pressure. Siding, roofs and natural stone do not. The
              difference between those is most of the job.
            </p>
            <div className="mt-10">
              <a
                href={`tel:${SEO_CONSTANTS.CONTACT.PHONE_RAW}`}
                className="inline-flex items-center gap-2 bg-brand px-6 py-3 text-step-0 font-medium text-white transition-colors hover:bg-brand-strong"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SEO_CONSTANTS.CONTACT.PHONE}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-gutter py-section">
          <div className="grid gap-x-gutter gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {SEO_CONSTANTS.PRIMARY_SERVICES.map((service) => {
              const Icon = serviceIcon(service.slug);
              const content = serviceContent(service.slug);
              return (
                <article key={service.slug} className="group">
                  <Link href={`/services/${service.slug}`} data-testid={`card-service-${service.slug}`}>
                    <WorkImage
                      slug={HERO_BY_SLUG[service.slug] ?? "curved-concrete-walkway-after"}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      aspect="aspect-[4/3]"
                      className="transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <h2 className="mt-5 flex items-center gap-3 text-step-2 group-hover:text-brand">
                      <Icon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                      {service.name}
                    </h2>
                  </Link>
                  <p className="mt-2 max-w-measure text-ink-soft">
                    {content?.summary ?? service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-stone-200 bg-surface-sunken">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <h2 className="text-step-3">Delicate stone, by type</h2>
            <p className="mt-4 max-w-measure text-ink-soft">
              Soft natural stone needs a different approach from everything else on
              this page. Each of these behaves differently under water and chemistry.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {STONE_TYPES.map((stone) => (
                <li key={stone.slug}>
                  <Link
                    href={`/services/delicate-stone-cleaning/${stone.slug}`}
                    className="text-step-1 text-brand underline-offset-4 hover:underline"
                  >
                    {stone.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
