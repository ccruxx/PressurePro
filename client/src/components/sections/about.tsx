import JoshPicture from "@assets/JoshPicture.jpg";
import { Leaf, ShieldCheck, Wrench, UserRound } from "lucide-react";
import { SEO_CONSTANTS } from "@/lib/seo-constants";

/**
 * NOTE(joshua): the previous copy claimed "Licensed & Insured", "bonded", and a
 * "100% Satisfaction Guarantee". Texas does not license pressure washing, and
 * bonding and a written guarantee are specific commitments. Reduced to what we
 * can stand behind - restore any of it that he can actually document.
 */
const POINTS = [
  {
    icon: ShieldCheck,
    title: "Fully insured",
    description: "Certificates of insurance available on request.",
  },
  {
    icon: UserRound,
    title: "Owner-operated",
    description: "The person who quotes the job is the person who does it.",
  },
  {
    icon: Wrench,
    title: "Right tool per surface",
    description: "Surface cleaners on flats, soft wash on everything delicate.",
  },
  {
    icon: Leaf,
    title: "Landscaping protected",
    description: "Beds pre-wetted and rinsed, plantings covered where needed.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-gutter py-section">
        <div className="grid items-start gap-gutter lg:grid-cols-2">
          <img
            src={JoshPicture}
            alt={`${SEO_CONSTANTS.OWNER.NAME}, owner of ${SEO_CONSTANTS.BUSINESS_NAME}`}
            loading="lazy"
            decoding="async"
            className="w-full bg-stone-100 object-cover shadow-md"
          />
          <div>
            <p className="text-step--1 font-medium text-ink-faint">
              About
            </p>
            <h2 className="mt-4 max-w-[20ch] text-step-3">
              One person&rsquo;s name is on every job
            </h2>
            <p className="mt-6 max-w-measure text-ink-soft">
              {SEO_CONSTANTS.BUSINESS_NAME} is run by {SEO_CONSTANTS.OWNER.NAME} out of{" "}
              {SEO_CONSTANTS.NAP.CITY}, working across the DFW metroplex. Most of
              what we do is deciding what a surface can take before any water
              touches it &mdash; which is the difference between a clean driveway
              and a scarred one.
            </p>

            <dl className="mt-10 grid gap-x-gutter gap-y-8 sm:grid-cols-2">
              {POINTS.map((point) => (
                <div key={point.title} className="border-t border-stone-300 pt-5">
                  <dt className="flex items-center gap-3 text-step-1 font-medium">
                    <point.icon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    {point.title}
                  </dt>
                  <dd className="mt-2 text-ink-soft">{point.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
