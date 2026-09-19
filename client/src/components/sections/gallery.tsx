import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Phone } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import WorkImage from "@/components/work-image";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { WORK_IMAGES, type WorkCategory } from "@/lib/work-images";

import commercialWallBefore from "@assets/commercial_wall_cleaning_1757974664719.jpg";
import commercialWallAfter from "@assets/commercial_wall_cleaning2_1757974664719.jpg";
import drivewayBefore from "@assets/driveway_1757974664720.jpg";
import drivewayAfter from "@assets/driveway2_1757974664720.jpg";
import walkwayDeckingBefore from "@assets/walkway_decking_1757974664720.jpg";
import walkwayDeckingAfter from "@assets/walkway_decking2_1757974664720.jpg";

/** The only genuine two-frame pairs we have; everything else is a composite. */
const SLIDERS = [
  {
    beforeImage: commercialWallBefore,
    afterImage: commercialWallAfter,
    title: "Commercial stone wall",
    description: "Building facade brought back without touching the mortar joints.",
    beforeAlt: "Dirty commercial stone wall before cleaning",
    afterAlt: "Clean commercial stone wall after cleaning",
  },
  {
    beforeImage: drivewayBefore,
    afterImage: drivewayAfter,
    title: "Concrete driveway",
    description: "Years of staining off, with no wand striping left behind.",
    beforeAlt: "Stained concrete driveway before cleaning",
    afterAlt: "Clean concrete driveway after cleaning",
  },
  {
    beforeImage: walkwayDeckingBefore,
    afterImage: walkwayDeckingAfter,
    title: "Walkway and decking",
    description: "Weathered timber back to its natural colour, ready to re-stain.",
    beforeAlt: "Weathered wooden decking before cleaning",
    afterAlt: "Restored wooden decking after cleaning",
  },
];

const FILTERS: { key: WorkCategory | "all"; label: string }[] = [
  { key: "all", label: "Everything" },
  { key: "stone", label: "Delicate stone" },
  { key: "commercial", label: "Commercial" },
  { key: "cedar", label: "Cedar" },
  { key: "brick", label: "Brick" },
  { key: "stucco", label: "Stucco" },
  { key: "concrete", label: "Concrete" },
  { key: "gutter", label: "Roof & gutter" },
];

interface GalleryProps {
  /** Homepage shows a taste; the /gallery page shows everything. */
  limit?: number;
  showSliders?: boolean;
  /** The standalone /gallery page needs this to be the page's h1. */
  headingLevel?: 1 | 2;
}

export default function Gallery({ limit, showSliders = true, headingLevel = 2 }: GalleryProps) {
  const Heading = (headingLevel === 1 ? "h1" : "h2") as "h1" | "h2";
  const [filter, setFilter] = useState<WorkCategory | "all">("all");

  const all = useMemo(
    () =>
      filter === "all"
        ? WORK_IMAGES.filter((i) => i.category !== "fleet")
        : WORK_IMAGES.filter((i) => i.category === filter),
    [filter],
  );
  const images = limit ? all.slice(0, limit) : all;

  return (
    <section id="gallery" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-gutter py-section">
        <p className="text-step--1 uppercase tracking-[0.18em] text-brand">Our work</p>
        <Heading className={`mt-4 max-w-[20ch] ${headingLevel === 1 ? "text-step-5" : "text-step-3"}`}>
          {headingLevel === 1
            ? "Every job, photographed"
            : "Drag the handle. That\u2019s the same slab."}
        </Heading>

        {showSliders && (
        <div className="mt-12 grid gap-x-gutter gap-y-12 lg:grid-cols-3">
          {SLIDERS.map((item) => (
            <figure key={item.title}>
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                beforeAlt={item.beforeAlt}
                afterAlt={item.afterAlt}
              />
              <figcaption className="mt-4">
                <h3 className="text-step-1">{item.title}</h3>
                <p className="mt-1 text-ink-soft">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        )}

        {/* Filterable grid ------------------------------------------------- */}
        <div className="mt-24">
          <h3 className="text-step-2">Browse by surface</h3>
          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter work by surface">
            {FILTERS.map((item) => (
              <button
                key={item.key}
                onClick={() => setFilter(item.key)}
                aria-pressed={filter === item.key}
                className={`border px-4 py-2 text-step--1 transition-colors ${
                  filter === item.key
                    ? "border-ink bg-ink text-white"
                    : "border-stone-300 text-ink-soft hover:border-ink hover:text-ink"
                }`}
                data-testid={`gallery-filter-${item.key}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((image) => (
              <figure key={image.slug} className="overflow-hidden">
                <WorkImage
                  slug={image.slug}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  aspect="aspect-[4/5]"
                  className="transition-transform duration-500 hover:scale-[1.03]"
                />
              </figure>
            ))}
          </div>
          {limit && all.length > images.length ? (
            <Link
              href="/gallery"
              className="mt-8 inline-block text-step--1 font-medium uppercase tracking-wider text-brand underline-offset-4 hover:underline"
            >
              See all {WORK_IMAGES.length} photographs &rarr;
            </Link>
          ) : (
            <p className="mt-6 text-step--1 text-ink-faint">
              {images.length} photograph{images.length === 1 ? "" : "s"} shown.
            </p>
          )}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-6 border-t border-stone-200 pt-10">
          <a
            href={`tel:${SEO_CONSTANTS.CONTACT.PHONE_RAW}`}
            className="inline-flex items-center gap-2 bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-strong"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SEO_CONSTANTS.CONTACT.PHONE}
          </a>
          <Link
            href="/services"
            className="text-ink-soft underline-offset-4 hover:text-brand hover:underline"
          >
            See all services
          </Link>
        </div>
      </div>
    </section>
  );
}
