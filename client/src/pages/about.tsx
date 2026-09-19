import { Link } from "wouter";
import { Phone } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import AboutSection from "@/components/sections/about";
import Certification from "@/components/sections/certification";
import Credentials from "@/components/sections/credentials";
import WorkImage from "@/components/work-image";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/schema-helpers";

export default function About() {
  const schema = [
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
    ]),
    getLocalBusinessSchema(),
  ];

  return (
    <div className="bg-canvas">
      <SEOHead
        title={`About ${SEO_CONSTANTS.BUSINESS_NAME} | ${SEO_CONSTANTS.NAP.CITY}, TX`}
        description={`Owner-operated exterior cleaning based in ${SEO_CONSTANTS.NAP.CITY}, TX, serving the DFW metroplex. Soft washing, pressure washing, delicate stone and commercial work.`}
        canonical="/about"
      />
      <SchemaOrg schema={schema} />
      <Header />

      <main className="min-h-screen pt-header">
        <section className="border-b border-stone-200 bg-surface">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <p className="text-step--1 uppercase tracking-[0.18em] text-brand">About</p>
            <h1 className="mt-4 max-w-[20ch] text-step-5">
              Knowing what not to do is most of the job
            </h1>
            <p className="mt-6 max-w-measure text-step-1 text-ink-soft">
              Anyone can rent a pressure washer. The damage that follows &mdash; wand
              marks in limestone, water behind siding, granules stripped off a roof
              &mdash; is permanent, and it is why we spend the first part of every
              job deciding what a surface can actually take.
            </p>
          </div>
          <div className="mx-auto max-w-7xl px-gutter pb-section">
            <WorkImage
              slug="limestone-patio-planters-after"
              priority
              sizes="100vw"
              aspect="aspect-[16/10] md:aspect-[21/9]"
              className="shadow-lg"
            />
          </div>
        </section>

        <Credentials />
        <AboutSection />
        <Certification />

        <section className="border-t border-stone-200 bg-ink text-white">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <h2 className="max-w-[20ch] text-step-4 text-white">
              Free estimates across the Metroplex
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={`tel:${SEO_CONSTANTS.CONTACT.PHONE_RAW}`}
                className="inline-flex items-center gap-2 bg-white px-6 py-3 font-medium text-ink transition-colors hover:bg-stone-100"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SEO_CONSTANTS.CONTACT.PHONE}
              </a>
              <Link href="/services" className="text-white/70 underline-offset-4 hover:text-white hover:underline">
                All services
              </Link>
              <Link href="/gallery" className="text-white/70 underline-offset-4 hover:text-white hover:underline">
                See the work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
