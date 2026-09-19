import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SEO_CONSTANTS } from "@/lib/seo-constants";

export default function Contact() {
  const { CONTACT, NAP } = SEO_CONSTANTS;

  return (
    <section id="contact" className="border-t border-stone-200 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-gutter py-section">
        <div className="grid gap-gutter lg:grid-cols-2">
          <div>
            <h2 className="max-w-[18ch] text-step-4 text-white">
              Tell us the surface. We&rsquo;ll tell you what it needs.
            </h2>
            <p className="mt-6 max-w-measure text-white/70">
              Free estimates across the metroplex, for homes and commercial property.
              If it is urgent &mdash; an event, an inspection, a storm &mdash; call
              rather than email and we will tell you straight away whether we can get
              there in time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={CONTACT.PHONE_TEL}
                className="inline-flex items-center gap-2 bg-white px-6 py-3.5 font-medium text-ink transition-colors hover:bg-stone-100"
                data-testid="contact-call"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {CONTACT.PHONE}
              </a>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="inline-flex items-center gap-2 border border-white/40 px-6 py-3.5 font-medium text-white transition-colors hover:border-white hover:bg-white/10"
                data-testid="contact-email"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email us
              </a>
            </div>
          </div>

          <dl className="space-y-8 lg:pl-gutter">
            <div className="flex gap-4 border-t border-white/15 pt-6">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-white/50" aria-hidden="true" />
              <div>
                <dt className="text-white">Phone</dt>
                <dd className="mt-1 text-white/70">{CONTACT.PHONE}</dd>
              </div>
            </div>
            <div className="flex gap-4 border-t border-white/15 pt-6">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-white/50" aria-hidden="true" />
              <div>
                <dt className="text-white">Email</dt>
                <dd className="mt-1 break-all text-white/70">{CONTACT.EMAIL}</dd>
              </div>
            </div>
            <div className="flex gap-4 border-t border-white/15 pt-6">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-white/50" aria-hidden="true" />
              <div>
                <dt className="text-white">Based in</dt>
                <dd className="mt-1 text-white/70">
                  {NAP.STREET}, {NAP.CITY}, {NAP.STATE} {NAP.ZIP}
                </dd>
              </div>
            </div>
            <div className="flex gap-4 border-t border-white/15 pt-6">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-white/50" aria-hidden="true" />
              <div>
                <dt className="text-white">Hours</dt>
                <dd className="mt-1 text-white/70">{SEO_CONSTANTS.HOURS}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
