import { Link } from "wouter";
import { Phone, Mail, ShieldCheck, Star, PhoneCall } from "lucide-react";
import logoImage from "@assets/logo2.png";
import QuoteCalculator from "@/components/quote/QuoteCalculator";
import SEOHead from "@/components/seo/SEOHead";
import { SEO_CONSTANTS } from "@/lib/seo-constants";

/**
 * Focused quote landing page. It deliberately runs without the site nav so
 * there is one thing to do on the page; everything else uses the same tokens
 * as the rest of the site.
 *
 * The previous version used an off-system blue gradient, emoji trust badges,
 * and a "5-Star Rated" claim with nothing behind it. The rating is now stated
 * the way the testimonials section states it - 5.0 on Google - and links to
 * the listing so it can be checked.
 */
export default function QuotePreview() {
  const { CONTACT, BUSINESS_NAME, SOCIAL } = SEO_CONSTANTS;

  const badges = [
    { icon: ShieldCheck, label: "Fully insured", detail: "Certificates on request" },
    {
      icon: Star,
      label: "5.0 on Google",
      detail: "Every review is public",
      href: SOCIAL.GOOGLE_BUSINESS || undefined,
    },
    { icon: PhoneCall, label: "Free follow-up", detail: "We confirm before any work" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <SEOHead
        title={`Free Pressure Washing Quote | ${BUSINESS_NAME}`}
        description="Get an instant pressure washing price range for your home or business in the DFW area. Pick a service, enter measurements, and see an estimate - no phone call needed."
        canonical="/quote-preview"
      />
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-gutter py-3">
          <Link href="/" className="flex min-h-[44px] items-center">
            <img
              src={logoImage}
              alt={BUSINESS_NAME}
              width={160}
              height={64}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <a
            href={CONTACT.PHONE_TEL}
            className="flex min-h-[44px] items-center gap-2 px-1 font-medium text-brand"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            {CONTACT.PHONE}
          </a>
        </div>
      </header>

      <section className="border-b border-white/10 bg-ink text-white">
        <div className="mx-auto max-w-3xl px-gutter py-14 text-center">
          <p className="font-medium text-white/70">
            Instant estimate &mdash; no commitment required
          </p>
          <h1 className="mt-3 text-step-4 text-white">Get your free quote</h1>
          <p className="mx-auto mt-4 max-w-measure text-step-0 text-white/80">
            Pick the service, enter your measurements, and see a price range right
            here. No phone call needed to get started.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-gutter py-12">
          <QuoteCalculator />
        </div>

        <div className="mx-auto max-w-3xl px-gutter pb-16">
          <ul className="grid gap-4 sm:grid-cols-3">
            {badges.map((badge) => {
              const body = (
                <>
                  <badge.icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  <span className="mt-3 block font-medium text-ink">{badge.label}</span>
                  <span className="mt-1 block text-step--1 text-ink-soft">
                    {badge.detail}
                  </span>
                </>
              );
              return (
                <li
                  key={badge.label}
                  className="rounded-lg border border-stone-200 bg-surface p-5"
                >
                  {badge.href ? (
                    <a
                      href={badge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {body}
                    </a>
                  ) : (
                    body
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <footer className="bg-ink text-white/70">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-gutter py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <a
              href={CONTACT.PHONE_TEL}
              className="flex min-h-[44px] items-center gap-2 font-medium text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {CONTACT.PHONE}
            </a>
            <a
              href={`mailto:${CONTACT.EMAIL}`}
              className="flex min-h-[44px] items-center gap-2 text-white/80"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {CONTACT.EMAIL}
            </a>
          </div>
          <p className="text-step--1 text-white/50">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
