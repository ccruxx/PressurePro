import { BadgeCheck, MapPin, ShieldCheck } from "lucide-react";
import { SEO_CONSTANTS } from "@/lib/seo-constants";

/**
 * Credentials band.
 *
 * The earlier version of this drew a circular "seal" in CSS reading
 * CHOCTAW NATION OF OKLAHOMA / CERTIFIED. That is not a graphic anyone issued,
 * and the Choctaw Nation requires prior written permission for use of its
 * names, seal, logos and emblems. So the certification is stated in words -
 * which is a claim about Joshua's status, not a use of their mark.
 *
 * If Joshua has a licensed mark from the certifying body, drop the file into
 * client/public/credentials/ and set CERT_MARK below. It renders automatically.
 */
const CERT_MARK: { src: string; alt: string } | null = null;

export default function Credentials() {
  const { CERTIFICATIONS, NAP } = SEO_CONSTANTS;

  const items = [
    CERTIFICATIONS.MINORITY_OWNED && {
      icon: BadgeCheck,
      label: "Minority-owned business",
      detail: CERTIFICATIONS.TRIBAL_CERTIFIED
        ? `Tribal certified${
            CERTIFICATIONS.CERTIFYING_ORGANIZATION
              ? ` — ${CERTIFICATIONS.CERTIFYING_ORGANIZATION}`
              : ""
          }`
        : "Certified",
    },
    {
      icon: ShieldCheck,
      label: "Fully insured",
      detail: "Certificates available on request",
    },
    {
      icon: MapPin,
      label: "Locally owned",
      detail: `${NAP.CITY}, ${NAP.STATE} — serving all of DFW`,
    },
  ].filter(Boolean) as { icon: typeof BadgeCheck; label: string; detail: string }[];

  return (
    <section
      id="credentials"
      aria-label="Credentials"
      className="border-y border-white/10 bg-ink text-white"
    >
      <div className="mx-auto max-w-7xl px-gutter py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {CERT_MARK && (
            <img
              src={CERT_MARK.src}
              alt={CERT_MARK.alt}
              width={140}
              height={140}
              loading="lazy"
              decoding="async"
              className="h-32 w-auto shrink-0 object-contain"
            />
          )}

          <dl className="grid flex-1 gap-x-gutter gap-y-8 sm:grid-cols-3">
            {items.map((item) => (
              <div key={item.label} className="border-t border-white/20 pt-5">
                <dt className="flex items-center gap-3 font-display text-step-1 text-white">
                  <item.icon className="h-5 w-5 shrink-0 text-white/60" aria-hidden="true" />
                  {item.label}
                </dt>
                <dd className="mt-2 text-step--1 text-white/70">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
