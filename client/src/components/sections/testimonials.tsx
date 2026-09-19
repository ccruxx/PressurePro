import { Star } from "lucide-react";
import { SEO_CONSTANTS } from "@/lib/seo-constants";

/**
 * Reviews shown here are real, named reviews from the Google Business Profile,
 * with a link so anyone can verify them.
 *
 * The previous version of this section carried six testimonials under generic
 * names (Sarah Mitchell, Mike Johnson, Robert Taylor, Lisa Davis, Jennifer
 * Wilson) that do not correspond to any reviewer on the live listing. Those
 * have been removed. Do not reinstate a quote that cannot be pointed at.
 *
 * TODO(joshua): confirm the wording below matches the reviews verbatim before
 * this goes to production - transcribed from the listing, not copy-pasted.
 */
const REVIEWS = [
  {
    text: "Joshua was on time! He cleaned and power washed our walkways, patio, driveway, and sidewalks! We are so pleased with his work! He restored our areas to their original look! He went above and beyond by also cleaning our stones along our flowerbeds and our walls on our porch!",
    name: "Shelia Cheatham-Martin",
    context: "Walkways, patio and driveway",
  },
  {
    text: "Joshua absolutely saved us after attempts to de-ice our office sidewalk during Winter Storm Fern turned into a mud pit. We spoke first around 4pm and he was power washing and removing dirt by 6:30pm. He made a miracle happen for us.",
    name: "Sonya Wierzowiecki",
    context: "Commercial sidewalk, same-day",
  },
  {
    text: "From the time I contacted this company, through getting a quote and booking the appointment, Joshua was very helpful and professional.",
    name: "AnneMarie Brewer",
    context: "Whole-home clean",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-stone-200 bg-surface-sunken">
      <div className="mx-auto max-w-7xl px-gutter py-section">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-step-3">What customers say</h2>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-brand" aria-hidden="true" />
                ))}
              </span>
              <span className="text-ink-soft">5.0 on Google</span>
            </div>
          </div>
          {SEO_CONSTANTS.SOCIAL.GOOGLE_BUSINESS && (
            <a
              href={SEO_CONSTANTS.SOCIAL.GOOGLE_BUSINESS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 text-step--1 font-medium text-brand underline-offset-4 hover:underline"
            >
              Read every review
            </a>
          )}
        </div>

        <div className="mt-12 grid gap-x-gutter gap-y-10 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure key={review.name} className="border-t border-stone-300 pt-6">
              <blockquote className="text-ink-soft">&ldquo;{review.text}&rdquo;</blockquote>
              <figcaption className="mt-5">
                <div className="font-medium text-ink">{review.name}</div>
                <div className="text-step--1 text-ink-faint">{review.context}, via Google</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
