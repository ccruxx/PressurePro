import { Link } from "wouter";
import { Phone } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import WorkImage from "@/components/work-image";
import { SEO_CONSTANTS, getService } from "@/lib/seo-constants";
import { STONE_CONTENT } from "@/lib/stone-content";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getCityFAQSchema,
} from "@/lib/schema-helpers";

const HUB = "/services/delicate-stone-cleaning";

const HUB_FAQS = [
  {
    question: "What counts as delicate stone?",
    answer:
      "Any natural stone soft or porous enough that standard pressure washing marks it — limestone, Austin stone, flagstone, bluestone and Lueders among them. Concrete and most pavers tolerate pressure that would permanently scar these materials.",
  },
  {
    question: "How do I know if my stone was cleaned badly before?",
    answer:
      "Look for evenly spaced light stripes (wand marks), a sandy or pitted texture where the surface has been eroded, or chalky lighter patches where an acidic cleaner etched the stone. All three are cut into the material and cannot be washed back out.",
  },
  {
    question: "Do you use acid on natural stone?",
    answer:
      "No. Acidic cleaners react with the calcium carbonate in limestone and attack the binder in sandstone. They can lift a stain and dull the surface permanently in the same pass.",
  },
  {
    question: "Will the stain come out completely?",
    answer:
      "Often, but not always. Porous stone absorbs staining below the surface, so deeply set iron or oil may lighten substantially rather than disappear. We would rather tell you that up front than over-promise and blast the surface trying to get there.",
  },
  {
    question: "Do you work on commercial stone too?",
    answer:
      "Yes. Stone entries, lobbies, plazas and building facades get the same low-pressure treatment as a residential patio, scheduled around your operating hours.",
  },
];

export default function DelicateStoneCleaning() {
  const service = getService("delicate-stone-cleaning");

  const schema = [
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: service.name, url: HUB },
    ]),
    getServiceSchema(service.name, service.description),
    getCityFAQSchema("Delicate Stone", HUB_FAQS),
  ];

  return (
    <div className="bg-canvas">
      <SEOHead
        title="Delicate Stone Cleaning in DFW | Limestone, Flagstone & Bluestone"
        description={`Low-pressure cleaning for limestone, Austin stone, flagstone, Pennsylvania bluestone and Lueders stone across the DFW metroplex. No acid washing, no wand marks. Call ${SEO_CONSTANTS.CONTACT.PHONE}.`}
        canonical={HUB}
      />
      <SchemaOrg schema={schema} />
      <Header />

      <main className="min-h-screen pt-header">
        {/* Hero ------------------------------------------------------------- */}
        <section className="relative border-b border-stone-200 bg-surface">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <p className="text-step--1 font-medium text-brand">
              Natural stone
            </p>
            <h1 className="mt-4 max-w-[18ch] text-step-5">
              Delicate stone, cleaned at the pressure it can actually take
            </h1>
            <p className="mt-6 max-w-measure text-step-1 text-ink-soft">
              Limestone, Austin stone, flagstone, bluestone and Lueders are soft,
              porous and acid-sensitive. The equipment that strips a concrete
              driveway will carve wand marks into all five — and that damage does
              not come back out.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={SEO_CONSTANTS.CONTACT.PHONE_TEL}
                className="inline-flex items-center gap-2 bg-brand px-6 py-3 text-step-0 font-medium text-white transition-colors hover:bg-brand-strong"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SEO_CONSTANTS.CONTACT.PHONE}
              </a>
              <span className="text-step--1 text-ink-faint">
                Free assessment before anything touches the stone
              </span>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-gutter pb-section">
            <WorkImage
              slug="flagstone-entry-walk-austin-stone-home"
              priority
              sizes="100vw"
              aspect="aspect-[16/10] md:aspect-[21/9]"
              className="shadow-lg"
            />
          </div>
        </section>

        {/* The five stones --------------------------------------------------- */}
        <section className="mx-auto max-w-7xl px-gutter py-section">
          <h2 className="text-step-3">The stone we specialise in</h2>
          <p className="mt-4 max-w-measure text-ink-soft">
            Each of these behaves differently under water and chemistry. Pick
            yours for the specifics.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {STONE_CONTENT.map((stone) => (
              <article key={stone.slug} className="group">
                <Link href={`${HUB}/${stone.slug}`} data-testid={`card-stone-${stone.slug}`}>
                  <WorkImage
                    slug={stone.heroImage}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    aspect="aspect-[4/5]"
                    className="transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <h3 className="mt-5 text-step-2 group-hover:text-brand">
                    {stone.name}
                  </h3>
                </Link>
                <p className="mt-2 max-w-measure text-ink-soft">{stone.lede}</p>
                <Link
                  href={`${HUB}/${stone.slug}`}
                  className="mt-3 inline-block py-2 text-step--1 font-medium text-brand underline-offset-4 hover:underline"
                >
                  {stone.name} cleaning
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* The three kinds of damage ------------------------------------------ */}
        <section className="border-y border-stone-200 bg-surface-sunken">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <h2 className="text-step-3">Three ways stone gets ruined</h2>
            <p className="mt-4 max-w-measure text-ink-soft">
              All three are permanent. If you can see any of them on your stone,
              it was cleaned by someone treating it like concrete.
            </p>
            <dl className="mt-12 grid gap-x-gutter gap-y-10 md:grid-cols-3">
              {[
                {
                  t: "Wand marks",
                  d: "Evenly spaced lighter stripes where a high-pressure tip was held too close. The stone under each stripe is physically gone.",
                },
                {
                  t: "Pitting",
                  d: "A sandy, rough texture on sandstone and flagstone where pressure broke the binder and released the grain.",
                },
                {
                  t: "Acid etching",
                  d: "Chalky, lighter patches where an acidic cleaner reacted with the limestone. Often worst around pool coping.",
                },
              ].map((item) => (
                <div key={item.t} className="border-t border-stone-300 pt-5">
                  <dt className="text-step-1 font-medium">{item.t}</dt>
                  <dd className="mt-2 max-w-measure text-ink-soft">{item.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* FAQ ----------------------------------------------------------------- */}
        <section className="mx-auto max-w-7xl px-gutter py-section">
          <div className="grid gap-gutter lg:grid-cols-[1fr_1.4fr]">
            <h2 className="text-step-3">Questions</h2>
            <div className="divide-y divide-stone-200">
              {HUB_FAQS.map((faq) => (
                <div key={faq.question} className="py-6 first:pt-0">
                  <h3 className="text-step-1">{faq.question}</h3>
                  <p className="mt-3 max-w-measure text-ink-soft">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA ------------------------------------------------------------------ */}
        <section className="border-t border-stone-200 bg-ink text-white">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <h2 className="max-w-[20ch] text-step-4 text-white">
              Send a photo and we will tell you what your stone actually needs.
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
