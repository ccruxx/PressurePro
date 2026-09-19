import { Link } from "wouter";
import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import logoImage from "@assets/logo2.png";
import { SEO_CONSTANTS, STONE_TYPES } from "@/lib/seo-constants";

const STONE_HUB = "/services/delicate-stone-cleaning";

export default function Footer() {
  const year = new Date().getFullYear();
  const { NAP, CONTACT, SOCIAL } = SEO_CONSTANTS;

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-gutter py-section">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand ------------------------------------------------------- */}
          <div className="lg:col-span-1">
            <img
              src={logoImage}
              alt={`${SEO_CONSTANTS.BUSINESS_NAME} logo`}
              width={160}
              height={64}
              loading="lazy"
              decoding="async"
              className="h-16 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-6 max-w-[38ch] text-white/70">
              Soft washing, pressure washing and delicate stone restoration for
              homes and commercial property across Dallas&ndash;Fort Worth.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-step--1">
              {SOCIAL.FACEBOOK && (
                <a
                  href={SOCIAL.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 underline-offset-4 hover:text-white hover:underline"
                  data-testid="facebook-link"
                >
                  Facebook
                </a>
              )}
              {SOCIAL.GOOGLE_BUSINESS && (
                <a
                  href={SOCIAL.GOOGLE_BUSINESS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 underline-offset-4 hover:text-white hover:underline"
                  data-testid="google-business-link"
                >
                  Google Business Profile
                </a>
              )}
            </div>
          </div>

          {/* Services ---------------------------------------------------- */}
          <div>
            <h2 className="font-display text-step-1 text-white">Services</h2>
            <ul className="mt-5 space-y-2.5 text-white/70">
              {SEO_CONSTANTS.PRIMARY_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="underline-offset-4 hover:text-white hover:underline"
                    data-testid={`footer-service-${service.slug}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stone + areas ------------------------------------------------ */}
          <div>
            <h2 className="font-display text-step-1 text-white">Stone we clean</h2>
            <ul className="mt-5 space-y-2.5 text-white/70">
              {STONE_TYPES.map((stone) => (
                <li key={stone.slug}>
                  <Link
                    href={`${STONE_HUB}/${stone.slug}`}
                    className="underline-offset-4 hover:text-white hover:underline"
                    data-testid={`footer-stone-${stone.slug}`}
                  >
                    {stone.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-step-1 text-white">Service areas</h2>
            <ul className="mt-5 space-y-2.5 text-white/70">
              {SEO_CONSTANTS.SERVICE_AREA_CITIES.slice(0, 5).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="underline-offset-4 hover:text-white hover:underline"
                    data-testid={`footer-city-${city.slug}`}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-white underline underline-offset-4 hover:no-underline"
                  data-testid="footer-all-areas"
                >
                  All {SEO_CONSTANTS.SERVICE_AREA_CITIES.length} areas &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* NAP ---------------------------------------------------------- */}
          <div>
            <h2 className="font-display text-step-1 text-white">Contact</h2>
            {/* Matches the Google Business Profile exactly - see seo-constants. */}
            <address className="mt-5 space-y-4 not-italic text-white/70">
              <div className="flex gap-3">
                <Building2 className="mt-1 h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                <div>
                  <div className="text-white">{SEO_CONSTANTS.BUSINESS_NAME}</div>
                  <div>{NAP.STREET}</div>
                  <div>
                    {NAP.CITY}, {NAP.STATE} {NAP.ZIP}
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                <a
                  href={`tel:${CONTACT.PHONE_RAW}`}
                  className="underline-offset-4 hover:text-white hover:underline"
                  data-testid="footer-phone"
                >
                  {CONTACT.PHONE}
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT.EMAIL}`}
                  className="break-all underline-offset-4 hover:text-white hover:underline"
                  data-testid="footer-email"
                >
                  {CONTACT.EMAIL}
                </a>
              </div>
              <div className="flex gap-3">
                <Clock className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                <span>{SEO_CONSTANTS.HOURS}</span>
              </div>
              {SOCIAL.GOOGLE_BUSINESS && (
                <div className="flex gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />
                  <a
                    href={SOCIAL.GOOGLE_BUSINESS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:text-white hover:underline"
                  >
                    Directions and reviews
                  </a>
                </div>
              )}
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-8 text-step--1 text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SEO_CONSTANTS.BUSINESS_NAME}. All rights reserved.
          </p>
          <p>
            Insured &middot; Free estimates &middot; {NAP.CITY}, {NAP.STATE}
          </p>
        </div>
      </div>
    </footer>
  );
}
