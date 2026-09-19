import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import WorkImage from "@/components/work-image";
import { SEO_CONSTANTS, getService } from "@/lib/seo-constants";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getCityFAQSchema,
} from "@/lib/schema-helpers";

const SURFACES = [
  {
    title: "Parking lots and drive lanes",
    detail:
      "Tyre marks, oil drips and traffic film across asphalt and concrete, with striping and fire lanes left intact.",
  },
  {
    title: "Loading docks and aprons",
    detail:
      "Dock doors, bumpers and the concrete apron in front of them, where rubber and hydraulic fluid build up fastest.",
  },
  {
    title: "Dumpster pads and service areas",
    detail:
      "Degreasing and sanitising the pad, plus the approach where leakage tracks out into the lot.",
  },
  {
    title: "Fuel islands and canopies",
    detail:
      "Fuel spill residue on the island concrete and grime on canopy decking, worked around live pump lanes.",
  },
  {
    title: "Storefronts, entries and sidewalks",
    detail:
      "Gum, spills and foot traffic film on the walkways customers actually see before they reach the door.",
  },
  {
    title: "Fleet and equipment",
    detail:
      "Trucks, trailers and yard equipment washed on site so vehicles are not out of service for a trip.",
  },
];

const FAQS = [
  {
    question: "Can you work outside our business hours?",
    answer:
      "Yes, and for most commercial work that's the default. Lots, fuel islands and storefronts get cleaned overnight or early morning so there's no disruption to trading and no wet surfaces where your customers walk.",
  },
  {
    question: "How is commercial work priced?",
    answer:
      "By square footage, surface type and how often it recurs. Recurring contracts price lower per visit than one-off cleans because the buildup never gets to the stage that needs heavy treatment.",
  },
  {
    question: "Do you carry insurance for commercial sites?",
    answer:
      "Yes. Certificates of insurance are available on request, and we'll work to your site's requirements for check-in, PPE and access.",
  },
  {
    question: "What about water reclamation and runoff?",
    answer:
      "Sites with drainage restrictions can require reclamation or containment. Tell us what your property's requirements are when you call and we'll build it into the quote rather than discovering it on the day.",
  },
  {
    question: "Can you respond to a storm or a spill on short notice?",
    answer:
      "Where the schedule allows, yes — we've turned around same-day sidewalk and entry cleanups after winter weather when a property had an event the next morning.",
  },
];

export default function CommercialPressureWashing() {
  const service = getService("commercial-pressure-washing");
  const url = `/services/${service.slug}`;

  const schema = [
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: service.name, url },
    ]),
    getServiceSchema(service.name, service.description),
    getCityFAQSchema("Commercial Pressure Washing", FAQS),
  ];

  return (
    <div className="bg-canvas">
      <SEOHead
        title={`Commercial Pressure Washing in DFW | Lots, Docks & Fleet | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Commercial pressure washing across the DFW metroplex — parking lots, loading docks, dumpster pads, fuel islands, storefronts and fleet. Overnight scheduling. Call ${SEO_CONSTANTS.CONTACT.PHONE}.`}
        canonical={url}
      />
      <SchemaOrg schema={schema} />
      <Header />

      <main className="min-h-screen pt-header">
        {/* Hero ------------------------------------------------------------- */}
        <section className="border-b border-stone-200 bg-surface">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <p className="text-step--1 font-medium text-brand">
              Commercial
            </p>
            <h1 className="mt-4 max-w-[20ch] text-step-5">
              Lots, docks and fleet — cleaned while you're closed
            </h1>
            <p className="mt-6 max-w-measure text-step-1 text-ink-soft">
              Property managers and facility teams across the Metroplex use us for
              the surfaces their customers walk on and their trucks sit on. Most of
              it happens overnight, so the site is dry and open before you are.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={SEO_CONSTANTS.CONTACT.PHONE_TEL}
                className="inline-flex items-center gap-2 bg-brand px-6 py-3 text-step-0 font-medium text-white transition-colors hover:bg-brand-strong"
                data-testid="button-call"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SEO_CONSTANTS.CONTACT.PHONE}
              </a>
              <a
                href={`mailto:${SEO_CONSTANTS.CONTACT.EMAIL}`}
                className="inline-flex items-center gap-2 border border-stone-300 px-6 py-3 text-step-0 font-medium text-ink transition-colors hover:border-ink"
                data-testid="button-email"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Request a site quote
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-gutter pb-section">
            <WorkImage
              slug="truck-stop-fuel-canopy-cleaning"
              priority
              sizes="100vw"
              aspect="aspect-[16/10] md:aspect-[21/9]"
              className="shadow-lg"
            />
          </div>
        </section>

        {/* Surfaces ---------------------------------------------------------- */}
        <section className="mx-auto max-w-7xl px-gutter py-section">
          <h2 className="text-step-3">What we clean</h2>
          <dl className="mt-12 grid gap-x-gutter gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {SURFACES.map((item) => (
              <div key={item.title} className="border-t border-stone-300 pt-5">
                <dt className="text-step-1 font-medium">{item.title}</dt>
                <dd className="mt-2 max-w-measure text-ink-soft">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Proof ------------------------------------------------------------- */}
        <section className="border-y border-stone-200 bg-surface-sunken">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <h2 className="text-step-3">Recent commercial work</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "truck-stop-fuel-island-cleaning",
                "warehouse-loading-dock-cleaning",
                "dumpster-pad-cleaning",
                "parking-lot-cleaning",
                "warehouse-dock-apron-cleaning",
                "commercial-entry-sidewalk-cleaning",
              ].map((slug) => (
                <figure key={slug} className="overflow-hidden">
                  <WorkImage
                    slug={slug}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    aspect="aspect-[4/3]"
                    className="transition-transform duration-500 hover:scale-[1.03]"
                  />
                </figure>
              ))}
            </div>

            <figure className="mx-auto mt-16 max-w-measure text-center">
              <blockquote className="font-display text-step-2 leading-snug text-ink">
                &ldquo;Fair pricing, excellent communication, and flawless work. Our
                fleet vehicles look like they just came off the lot.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-step--1 text-ink-faint">
                David Miller, Fleet Manager
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Storm response ----------------------------------------------------- */}
        <section className="mx-auto max-w-7xl px-gutter py-section">
          <div className="grid items-center gap-gutter lg:grid-cols-2">
            <WorkImage
              slug="storm-sediment-sidewalk-cleaning"
              sizes="(min-width: 1024px) 50vw, 100vw"
              aspect="aspect-[4/3]"
              className="shadow-md"
            />
            <div>
              <h2 className="text-step-3">When something goes wrong on short notice</h2>
              <p className="mt-6 max-w-measure text-ink-soft">
                Winter weather, a failed de-icing attempt, a spill before an event —
                these are the calls that can't wait for next Tuesday. Where the
                schedule allows we turn them around the same day, including evenings.
              </p>
              <p className="mt-4 max-w-measure text-ink-soft">
                If your property has an event, an inspection or a visit coming up and
                the site doesn't look right, call rather than email. We'll tell you
                straight away whether we can get there in time.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ ----------------------------------------------------------------- */}
        <section className="border-t border-stone-200 bg-surface">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <div className="grid gap-gutter lg:grid-cols-[1fr_1.4fr]">
              <h2 className="text-step-3">Questions</h2>
              <div className="divide-y divide-stone-200">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="py-6 first:pt-0">
                    <h3 className="text-step-1">{faq.question}</h3>
                    <p className="mt-3 max-w-measure text-ink-soft">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA ------------------------------------------------------------------ */}
        <section className="border-t border-stone-200 bg-ink text-white">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <h2 className="max-w-[22ch] text-step-4 text-white">
              Tell us the square footage and the surface. We&rsquo;ll quote it.
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={SEO_CONSTANTS.CONTACT.PHONE_TEL}
                className="inline-flex items-center gap-2 bg-white px-6 py-3 font-medium text-ink transition-colors hover:bg-stone-100"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SEO_CONSTANTS.CONTACT.PHONE}
              </a>
              <a
                href={`mailto:${SEO_CONSTANTS.CONTACT.EMAIL}`}
                className="text-white/70 underline-offset-4 hover:text-white hover:underline"
              >
                {SEO_CONSTANTS.CONTACT.EMAIL}
              </a>
              <Link
                href="/service-areas"
                className="text-white/70 underline-offset-4 hover:text-white hover:underline"
              >
                Service areas
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
