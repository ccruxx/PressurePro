import { SEO_CONSTANTS } from "@/lib/seo-constants";

/**
 * The previous version of this section rendered an invented circular "seal"
 * reading CHOCTAW NATION OF OKLAHOMA / CERTIFIED, under an "Official
 * Certification" badge. That graphic was built in CSS, not issued by anyone,
 * and presenting it as a certification mark is a claim the business cannot
 * back up on request.
 *
 * The claim itself stays - it is in SEO_CONSTANTS and the Google listing
 * carries the "Identifies as Indigenous-owned" attribute - but it is stated
 * plainly instead of dressed as a credential.
 *
 * TODO(joshua): if there is an actual certificate or registration number, send
 * it and we will display the real thing.
 */
export default function Certification() {
  const { CERTIFICATIONS } = SEO_CONSTANTS;

  return (
    <section id="certification" className="bg-surface">
      <div className="mx-auto max-w-7xl px-gutter py-section">
        <div className="grid gap-gutter lg:grid-cols-[1fr_1.4fr]">
          <h2 className="text-step-3">Who you&rsquo;re hiring</h2>
          <div className="max-w-measure space-y-5 text-ink-soft">
            <p>
              {SEO_CONSTANTS.BUSINESS_NAME} is an owner-operated business based in{" "}
              {SEO_CONSTANTS.NAP.CITY}, run by {SEO_CONSTANTS.OWNER.NAME}. When you
              book, the person who quoted the work is the person who shows up to do
              it.
            </p>
            {CERTIFICATIONS.MINORITY_OWNED && (
              <p>
                It is a minority-owned business, and the Google Business Profile
                carries the Indigenous-owned attribute
                {CERTIFICATIONS.CERTIFYING_ORGANIZATION
                  ? ` (${CERTIFICATIONS.CERTIFYING_ORGANIZATION})`
                  : ""}
                .
              </p>
            )}
            <p>
              Fully insured, with certificates of insurance available on request for
              commercial and property-management work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
