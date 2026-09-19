import { Link } from "wouter";
import { SEO_CONSTANTS, TOP_CITIES_FOR_DISPLAY } from "@/lib/seo-constants";

export default function ServingCities() {
  const bySlug = new Map(SEO_CONSTANTS.SERVICE_AREA_CITIES.map((c) => [c.name, c.slug]));

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-7xl px-gutter py-section">
        <div className="grid gap-gutter lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-step-3">Where we work</h2>
            <p className="mt-4 max-w-measure text-ink-soft">
              Based in {SEO_CONSTANTS.NAP.CITY}, working across the DFW metroplex.
            </p>
          </div>
          <div>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {TOP_CITIES_FOR_DISPLAY.map((name) => {
                const slug = bySlug.get(name);
                return (
                  <li key={name}>
                    {slug ? (
                      <Link
                        href={`/service-areas/${slug}`}
                        className="inline-block py-2 text-step-1 text-ink-soft underline-offset-4 hover:text-brand hover:underline"
                      >
                        {name}
                      </Link>
                    ) : (
                      <span className="text-step-1 text-ink-soft">{name}</span>
                    )}
                  </li>
                );
              })}
            </ul>
            <Link
              href="/service-areas"
              className="mt-8 inline-block text-step--1 font-medium text-brand underline-offset-4 hover:underline"
            >
              All {SEO_CONSTANTS.SERVICE_AREA_CITIES.length} service areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
