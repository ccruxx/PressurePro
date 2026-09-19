import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import WorkImage from "@/components/work-image";

/**
 * Replaces the old Facebook Reels embed block. Those were three fixed-size
 * third-party iframes that ad blockers and tracking protection routinely
 * kill, leaving empty boxes where the proof should be - and they cost LCP.
 *
 * This sends people to the two highest-value pages instead.
 */
const AREAS = [
  {
    eyebrow: "Delicate stone",
    title: "Limestone, Austin stone, flagstone and bluestone",
    body: "Soft, porous and acid-sensitive. The equipment that strips a driveway carves permanent wand marks into all four.",
    href: "/services/delicate-stone-cleaning",
    cta: "How we clean stone",
    image: "flagstone-patio-moss-removal",
  },
  {
    eyebrow: "Commercial",
    title: "Lots, docks, dumpster pads and fleet",
    body: "Property managers and facility teams across the Metroplex, mostly overnight so the site is dry and open before you are.",
    href: "/services/commercial-pressure-washing",
    cta: "Commercial work",
    image: "warehouse-loading-dock-cleaning",
  },
];

export default function FocusAreas() {
  return (
    <section className="border-y border-stone-200 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-x-gutter gap-y-16 px-gutter py-section lg:grid-cols-2">
        {AREAS.map((area) => (
          <article key={area.href} className="group">
            <Link href={area.href}>
              <WorkImage
                slug={area.image}
                sizes="(min-width: 1024px) 50vw, 100vw"
                aspect="aspect-[3/2]"
                className="transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </Link>
            <p className="mt-6 text-step--1 uppercase tracking-[0.18em] text-brand">
              {area.eyebrow}
            </p>
            <h2 className="mt-3 max-w-[22ch] text-step-2">
              <Link href={area.href} className="group-hover:text-brand">
                {area.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-measure text-ink-soft">{area.body}</p>
            <Link
              href={area.href}
              className="mt-5 inline-flex items-center gap-2 text-step--1 font-medium uppercase tracking-wider text-brand underline-offset-4 hover:underline"
            >
              {area.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
