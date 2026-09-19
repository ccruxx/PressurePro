import { Link } from "wouter";
import WorkImage from "@/components/work-image";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { serviceIcon, serviceContent } from "@/lib/service-content";

const HERO_BY_SLUG: Record<string, string> = {
  "pressure-washing": "curved-concrete-walkway-after",
  "house-washing": "stucco-eave-soft-wash",
  "roof-cleaning": "gutter-and-roofline-after",
  "driveway-concrete-cleaning": "concrete-walkway-rust-removal",
  "delicate-stone-cleaning": "flagstone-entry-walk-austin-stone-home",
  "commercial-pressure-washing": "truck-stop-fuel-canopy-cleaning",
  "window-cleaning": "stucco-window-trim-cleaning",
};

const FALLBACK: Record<string, string> = {
  "delicate-stone-cleaning":
    "Limestone, Austin stone, flagstone and bluestone, cleaned at low pressure.",
  "commercial-pressure-washing":
    "Lots, docks, dumpster pads, storefronts and fleet, scheduled around your hours.",
};

export default function Services() {
  return (
    <section id="services" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-gutter py-section">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-step--1 font-medium text-brand">Services</p>
            <h2 className="mt-4 max-w-[22ch] text-step-3">
              Concrete takes pressure. Almost nothing else does.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-block py-2 text-step--1 font-medium text-brand underline-offset-4 hover:underline"
          >
            All services
          </Link>
        </div>

        <div className="mt-14 grid gap-x-gutter gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {SEO_CONSTANTS.PRIMARY_SERVICES.map((service) => {
            const Icon = serviceIcon(service.slug);
            const summary =
              serviceContent(service.slug)?.summary ??
              FALLBACK[service.slug] ??
              service.description;
            return (
              <article key={service.slug} className="group">
                <Link href={`/services/${service.slug}`} data-testid={`home-service-${service.slug}`}>
                  <WorkImage
                    slug={HERO_BY_SLUG[service.slug] ?? "curved-concrete-walkway-after"}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    aspect="aspect-[4/3]"
                    className="transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <h3 className="mt-5 flex items-center gap-3 text-step-2 group-hover:text-brand">
                    <Icon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    {service.name}
                  </h3>
                </Link>
                <p className="mt-2 max-w-measure text-ink-soft">{summary}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
