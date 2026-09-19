import { Link, useRoute } from "wouter";
import { Phone } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import WorkImage from "@/components/work-image";
import NotFound from "@/pages/not-found";
import { SEO_CONSTANTS, STONE_TYPES, getService } from "@/lib/seo-constants";
import { STONE_CONTENT } from "@/lib/stone-content";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getCityFAQSchema,
} from "@/lib/schema-helpers";

const HUB = "/services/delicate-stone-cleaning";

export default function StoneDetail() {
  const [, params] = useRoute(`${HUB}/:stone`);
  const content = STONE_CONTENT.find((s) => s.slug === params?.stone);

  if (!content) return <NotFound />;

  const parent = getService("delicate-stone-cleaning");
  const siblings = STONE_TYPES.filter((s) => s.slug !== content.slug);

  const schema = [
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: parent.name, url: HUB },
      { name: `${content.name} Cleaning`, url: `${HUB}/${content.slug}` },
    ]),
    getServiceSchema(`${content.name} Cleaning`, content.metaDescription),
    getCityFAQSchema(content.name, content.faqs),
  ];

  return (
    <div className="bg-canvas">
      <SEOHead
        title={content.title}
        description={content.metaDescription}
        canonical={`${HUB}/${content.slug}`}
      />
      <SchemaOrg schema={schema} />
      <Header />

      <main className="min-h-screen pt-header">
        {/* Hero ------------------------------------------------------------ */}
        <section className="border-b border-stone-200 bg-surface">
          <div className="mx-auto grid max-w-7xl items-center gap-gutter px-gutter py-section lg:grid-cols-2">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-step--1 text-ink-faint">
                  <li>
                    <Link href="/services" className="hover:text-brand">
                      Services
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href={HUB} className="hover:text-brand">
                      Delicate Stone
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-ink-soft">{content.name}</li>
                </ol>
              </nav>

              <h1 className="text-step-5">{content.name} Cleaning in DFW</h1>
              <p className="mt-6 max-w-measure text-step-1 text-ink-soft">
                {content.lede}
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
                <span className="text-step--1 text-ink-faint">
                  Free quotes across the DFW metroplex
                </span>
              </div>
            </div>

            <WorkImage
              slug={content.heroImage}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              aspect="aspect-[4/5] lg:aspect-[4/3]"
              className="shadow-lg"
            />
          </div>
        </section>

        {/* Why the material is different ------------------------------------ */}
        <section className="mx-auto max-w-7xl px-gutter py-section">
          <div className="grid gap-gutter lg:grid-cols-[1fr_1.4fr]">
            <h2 className="text-step-3">
              Why {content.name.toLowerCase()} needs different handling
            </h2>
            <div className="max-w-measure space-y-5 text-step-0 text-ink-soft">
              {content.material.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* What goes wrong --------------------------------------------------- */}
        <section className="border-y border-stone-200 bg-surface-sunken">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <h2 className="text-step-3">
              What we see on {content.name.toLowerCase()} in North Texas
            </h2>
            <dl className="mt-10 grid gap-x-gutter gap-y-8 sm:grid-cols-2">
              {content.problems.map((problem) => (
                <div key={problem.label} className="border-t border-stone-300 pt-5">
                  <dt className="text-step-1 font-medium text-ink">
                    {problem.label}
                  </dt>
                  <dd className="mt-2 max-w-measure text-ink-soft">
                    {problem.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Process ----------------------------------------------------------- */}
        <section className="mx-auto max-w-7xl px-gutter py-section">
          <h2 className="text-step-3">How we clean it</h2>
          <ol className="mt-10 grid gap-x-gutter gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {content.process.map((item, i) => (
              <li key={item.step}>
                <span className="font-display text-step-2 text-stone-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-step-1">{item.step}</h3>
                <p className="mt-2 text-ink-soft">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Gallery ----------------------------------------------------------- */}
        {content.gallery.length > 0 && (
          <section className="border-t border-stone-200 bg-surface">
            <div className="mx-auto max-w-7xl px-gutter py-section">
              <h2 className="text-step-3">{content.name} work</h2>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {content.gallery.map((slug) => (
                  <figure key={slug} className="overflow-hidden">
                    <WorkImage
                      slug={slug}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      aspect="aspect-[3/4]"
                      className="transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ ---------------------------------------------------------------- */}
        <section className="mx-auto max-w-7xl px-gutter py-section">
          <div className="grid gap-gutter lg:grid-cols-[1fr_1.4fr]">
            <h2 className="text-step-3">Questions</h2>
            <div className="divide-y divide-stone-200">
              {content.faqs.map((faq) => (
                <div key={faq.question} className="py-6 first:pt-0">
                  <h3 className="text-step-1">{faq.question}</h3>
                  <p className="mt-3 max-w-measure text-ink-soft">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sibling stones + CTA ------------------------------------------------ */}
        <section className="border-t border-stone-200 bg-ink text-white">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <h2 className="text-step-3 text-white">Other stone we work on</h2>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {siblings.map((stone) => (
                <li key={stone.slug}>
                  <Link
                    href={`${HUB}/${stone.slug}`}
                    className="inline-block py-2 text-step-1 text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                    data-testid={`link-stone-${stone.slug}`}
                  >
                    {stone.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/15 pt-10">
              <a
                href={SEO_CONSTANTS.CONTACT.PHONE_TEL}
                className="inline-flex items-center gap-2 bg-white px-6 py-3 font-medium text-ink transition-colors hover:bg-stone-100"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SEO_CONSTANTS.CONTACT.PHONE}
              </a>
              <Link href={HUB} className="inline-block py-2 text-white/70 underline-offset-4 hover:text-white hover:underline">
                All delicate stone services
              </Link>
              <Link href="/service-areas" className="inline-block py-2 text-white/70 underline-offset-4 hover:text-white hover:underline">
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
