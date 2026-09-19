import { Link } from "wouter";
import { Phone, Mail, Check } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import WorkImage from "@/components/work-image";
import { SEO_CONSTANTS, getService } from "@/lib/seo-constants";
import { serviceContent } from "@/lib/service-content";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getCityFAQSchema,
} from "@/lib/schema-helpers";

/**
 * Shared layout for the standard service pages. Commercial and delicate stone
 * have their own pages because they answer a different buyer.
 */
export default function ServiceDetail({ slug }: { slug: string }) {
  const service = getService(slug);
  const content = serviceContent(slug);
  const url = `/services/${slug}`;

  const schema = [
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: service.name, url },
    ]),
    getServiceSchema(service.name, content.metaDescription),
    getCityFAQSchema(service.name, content.faqs),
  ];

  const siblings = SEO_CONSTANTS.PRIMARY_SERVICES.filter((s) => s.slug !== slug);

  return (
    <div className="bg-canvas">
      <SEOHead
        title={content.title}
        description={content.metaDescription}
        canonical={url}
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
                  <li className="text-ink-soft">{service.name}</li>
                </ol>
              </nav>

              <h1 className="text-step-5">{service.name} in DFW</h1>
              <p className="mt-6 max-w-measure text-step-1 text-ink-soft">{content.lede}</p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={SEO_CONSTANTS.CONTACT.PHONE_TEL}
                  className="inline-flex items-center gap-2 bg-brand px-6 py-3 text-step-0 font-medium text-white transition-colors hover:bg-brand-strong"
                  data-testid="button-call"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {SEO_CONSTANTS.CONTACT.PHONE}
                </a>
                <span className="text-step--1 text-ink-faint">Free quotes across DFW</span>
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

        {/* What's included -------------------------------------------------- */}
        <section className="mx-auto max-w-7xl px-gutter py-section">
          <div className="grid gap-gutter lg:grid-cols-[1fr_1.4fr]">
            <h2 className="text-step-3">What&rsquo;s included</h2>
            <ul className="grid gap-x-gutter gap-y-4 sm:grid-cols-2">
              {content.includes.map((item) => (
                <li key={item} className="flex gap-3 text-ink-soft">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Method ----------------------------------------------------------- */}
        <section className="border-y border-stone-200 bg-surface-sunken">
          <div className="mx-auto max-w-7xl space-y-16 px-gutter py-section">
            {content.sections.map((block) => (
              <div key={block.heading} className="grid gap-gutter lg:grid-cols-[1fr_1.4fr]">
                <h2 className="text-step-3">{block.heading}</h2>
                <div className="max-w-measure space-y-5 text-ink-soft">
                  {block.body.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery ---------------------------------------------------------- */}
        <section className="border-b border-stone-200 bg-surface">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <h2 className="text-step-3">Recent work</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.gallery.map((image) => (
                <figure key={image} className="overflow-hidden">
                  <WorkImage
                    slug={image}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    aspect="aspect-[4/5]"
                    className="transition-transform duration-500 hover:scale-[1.03]"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ --------------------------------------------------------------- */}
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

        {/* Other services + CTA ----------------------------------------------- */}
        <section className="border-t border-stone-200 bg-ink text-white">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <h2 className="text-step-3 text-white">Other services</h2>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {siblings.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-block py-2 text-step-1 text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {item.name}
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
              <a
                href={`mailto:${SEO_CONSTANTS.CONTACT.EMAIL}`}
                className="inline-flex items-center gap-2 py-2 text-white/70 underline-offset-4 hover:text-white hover:underline"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {SEO_CONSTANTS.CONTACT.EMAIL}
              </a>
              <Link
                href="/service-areas"
                className="inline-block py-2 text-white/70 underline-offset-4 hover:text-white hover:underline"
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
