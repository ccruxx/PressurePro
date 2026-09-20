import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import WorkImage from "@/components/work-image";
import { SEO_CONSTANTS } from "@/lib/seo-constants";

const TRUST = [
  { label: "Rated 5.0 on Google", detail: "Across the DFW metroplex" },
  { label: "Fully insured", detail: "Certificates on request" },
  { label: "Free estimates", detail: "Same-week availability" },
  { label: "Locally owned", detail: `${SEO_CONSTANTS.NAP.CITY}, ${SEO_CONSTANTS.NAP.STATE}` },
];

export default function Hero() {
  const scrollToSection = (sectionId: string) =>
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <section id="home" className="relative isolate overflow-hidden bg-ink">
        {/* Single optimised photograph instead of a third-party video embed:
            this is the page's LCP element, so it has to be fast. */}
        <WorkImage
          slug="limestone-steps-cleaning"
          alt="Freshly cleaned limestone steps leading up to a stone home"
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Scrim in two layers: a flat base so contrast holds at every width,
            plus a directional gradient behind the type. Below lg the text
            column runs nearly full-width, so a left-to-right gradient barely
            protects it - that breakpoint gets a bottom-heavy vertical
            gradient instead, matching where the copy actually sits. */}
        <div className="absolute inset-0 bg-ink/40 lg:bg-ink/25" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent lg:bg-gradient-to-r lg:from-ink/70 lg:via-ink/40 lg:to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-gutter pb-12 pt-[calc(var(--header-height)+2.5rem)] sm:pb-section sm:pt-[calc(var(--header-height)+var(--section-y))]">
          <div className="max-w-[46ch]">
            <p className="text-step--1 font-medium text-white/70">
              {SEO_CONSTANTS.NAP.CITY}, {SEO_CONSTANTS.NAP.STATE}, Serving the DFW Metroplex
            </p>

            <h1 className="mt-5 text-step-4 text-white sm:text-step-5">
              Exterior cleaning matched to the surface it&rsquo;s on
            </h1>

            <p className="mt-6 text-step-1 text-white/85">
              Soft washing, pressure washing and delicate stone restoration for homes
              and commercial property across Dallas&ndash;Fort Worth.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href={SEO_CONSTANTS.CONTACT.PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-step-0 font-medium text-ink transition-colors hover:bg-stone-100"
                data-testid="hero-call"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SEO_CONSTANTS.CONTACT.PHONE}
              </a>
              <button
                onClick={() => scrollToSection("gallery")}
                className="inline-flex items-center justify-center gap-2 border border-white/40 px-6 py-3.5 text-step-0 font-medium text-white transition-colors hover:border-white hover:bg-white/10"
                data-testid="hero-see-work"
              >
                See our work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-8 text-step--1 text-white/70">
              Limestone, Austin stone and flagstone?{" "}
              <Link
                href="/services/delicate-stone-cleaning"
                className="text-white underline underline-offset-4 hover:no-underline"
              >
                We clean delicate stone
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Trust bar ---------------------------------------------------------- */}
      <section className="border-b border-stone-200 bg-surface">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-stone-200 px-gutter lg:grid-cols-4">
          {TRUST.map((item) => (
            <div key={item.label} className="bg-surface px-2 py-8 sm:px-6">
              <dt className="font-display text-step-1 text-ink">{item.label}</dt>
              <dd className="mt-1 text-step--1 text-ink-faint">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
