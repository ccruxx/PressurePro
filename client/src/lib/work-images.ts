/**
 * Generated from the Facebook photo export by _triage/curate.py - do not hand-edit.
 * Files live in /images/work/<slug>-<width>.webp and are served from client/public.
 */

export type WorkCategory =
  | "stone"
  | "cedar"
  | "stucco"
  | "brick"
  | "concrete"
  | "gutter"
  | "commercial"
  | "fleet";

export interface WorkImage {
  slug: string;
  category: WorkCategory;
  alt: string;
  /** Rendered widths, ascending. The last entry is the largest available. */
  widths: number[];
  /** Intrinsic size of the source, for width/height attributes (avoids layout shift). */
  width: number;
  height: number;
}

export const WORK_IMAGES: WorkImage[] = [
  {
    slug: "flagstone-entry-walk-austin-stone-home",
    category: "stone",
    alt: "Flagstone entry walkway at an Austin stone home, before and after low-pressure cleaning",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "stone-paver-walkway-cleaning",
    category: "stone",
    alt: "Cut stone paver walkway with planted joints, before and after cleaning",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "flagstone-patio-moss-removal",
    category: "stone",
    alt: "Flagstone patio with moss removed from the joints",
    widths: [640, 1024, 1536],
    width: 1538,
    height: 2048,
  },
  {
    slug: "flagstone-walkway-entry-cleaning",
    category: "stone",
    alt: "Flagstone entry walkway before and after restoration",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "stone-patio-seating-area",
    category: "stone",
    alt: "Large-format stone patio and seating area after cleaning",
    widths: [640, 1024, 1536],
    width: 1538,
    height: 2048,
  },
  {
    slug: "travertine-paver-patio-cleaning",
    category: "stone",
    alt: "Travertine paver patio before and after low-pressure cleaning",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "travertine-patio-rust-stain-removal",
    category: "stone",
    alt: "Travertine patio with rust staining lifted",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "limestone-tile-patio-cleaning",
    category: "stone",
    alt: "Limestone tile patio before and after cleaning",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "poolside-walkway-rust-removal",
    category: "stone",
    alt: "Poolside walkway with orange rust staining removed",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "garden-path-cleaning",
    category: "stone",
    alt: "Garden path before and after low-pressure cleaning",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "limestone-patio-after-cleaning",
    category: "stone",
    alt: "Limestone patio after professional cleaning",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1542,
  },
  {
    slug: "limestone-patio-planters-after",
    category: "stone",
    alt: "Limestone patio and planters after cleaning",
    widths: [640, 1024, 1536],
    width: 1542,
    height: 2048,
  },
  {
    slug: "limestone-pool-coping-cleaning",
    category: "stone",
    alt: "Limestone pool coping before and after cleaning",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1538,
  },
  {
    slug: "limestone-pool-deck-stain-removal",
    category: "stone",
    alt: "Limestone pool deck with leaf staining removed",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1538,
  },
  {
    slug: "limestone-steps-cleaning",
    category: "stone",
    alt: "Limestone steps after low-pressure cleaning",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1542,
  },
  {
    slug: "stone-entry-steps-cleaning",
    category: "stone",
    alt: "Stone entry steps before and after cleaning",
    widths: [640, 1024, 1536],
    width: 1538,
    height: 2048,
  },
  {
    slug: "brick-paver-walkway-limestone-border",
    category: "stone",
    alt: "Brick paver walkway with limestone border, cleaned",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "austin-stone-home-exterior-cleaning",
    category: "stone",
    alt: "Austin stone home exterior before and after soft washing",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "austin-stone-facade-soft-wash",
    category: "stone",
    alt: "Austin stone facade soft washed",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "stone-chimney-and-facade-cleaning",
    category: "stone",
    alt: "Stone chimney and facade before and after cleaning",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "stone-porch-and-patio-cleaning",
    category: "stone",
    alt: "Stone porch and patio before and after cleaning",
    widths: [640, 1024, 1536],
    width: 1538,
    height: 2048,
  },
  {
    slug: "cedar-siding-restoration",
    category: "cedar",
    alt: "Weathered cedar siding restored to natural colour",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "cedar-gate-cleaning",
    category: "cedar",
    alt: "Cedar gate after cleaning",
    widths: [640, 1024, 1536],
    width: 1536,
    height: 2048,
  },
  {
    slug: "cedar-garage-and-soffit-restoration",
    category: "cedar",
    alt: "Cedar garage surround and soffit before and after restoration",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "cedar-garage-door-restoration",
    category: "cedar",
    alt: "Cedar garage door before and after restoration",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "cedar-modern-home-exterior-restoration",
    category: "cedar",
    alt: "Modern cedar-clad home exterior before and after restoration",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "stucco-window-trim-cleaning",
    category: "stucco",
    alt: "Stucco window trim before and after cleaning",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "stucco-eave-soft-wash",
    category: "stucco",
    alt: "Stucco eave and roofline soft washed",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "stucco-archway-cleaning",
    category: "stucco",
    alt: "Stucco archway before and after cleaning",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "brick-and-gutter-cleaning",
    category: "brick",
    alt: "Brick exterior and gutter line before and after cleaning",
    widths: [640, 1024, 1536],
    width: 1538,
    height: 2048,
  },
  {
    slug: "brick-column-soft-wash",
    category: "brick",
    alt: "Brick column before and after soft washing",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1538,
  },
  {
    slug: "brick-porch-ceiling-cleaning",
    category: "brick",
    alt: "Brick porch and painted ceiling before and after cleaning",
    widths: [640, 1024, 1536],
    width: 1538,
    height: 2048,
  },
  {
    slug: "brick-arch-window-cleaning",
    category: "brick",
    alt: "Brick arch and window before and after cleaning",
    widths: [640, 1024, 1536],
    width: 1538,
    height: 2048,
  },
  {
    slug: "brick-wall-soft-wash",
    category: "brick",
    alt: "Brick wall before and after soft washing",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1538,
  },
  {
    slug: "concrete-walkway-rust-removal",
    category: "concrete",
    alt: "Concrete walkway with rust staining removed",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "curved-concrete-walkway-after",
    category: "concrete",
    alt: "Curved concrete walkway after cleaning",
    widths: [640, 1024, 1536],
    width: 1542,
    height: 2048,
  },
  {
    slug: "roof-valley-debris-removal",
    category: "gutter",
    alt: "Roof valley before and after debris removal",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "gutter-cleaning-before-after",
    category: "gutter",
    alt: "Gutter before and after cleaning",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "gutter-and-roofline-after",
    category: "gutter",
    alt: "Gutter and roofline after cleaning",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "downtown-sidewalk-cleaning-night",
    category: "commercial",
    alt: "Downtown sidewalk before and after night cleaning",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1538,
  },
  {
    slug: "storm-sediment-sidewalk-cleaning",
    category: "commercial",
    alt: "Storm sediment removed from a commercial sidewalk",
    widths: [640, 1024, 1536, 1538],
    width: 1538,
    height: 2048,
  },
  {
    slug: "storm-mud-removal-entryway",
    category: "commercial",
    alt: "Mud and sediment removed from a commercial entryway",
    widths: [640, 1024, 1536],
    width: 1538,
    height: 2048,
  },
  {
    slug: "brick-plaza-sediment-removal",
    category: "commercial",
    alt: "Brick plaza before and after sediment removal",
    widths: [640, 1024, 1536],
    width: 1538,
    height: 2048,
  },
  {
    slug: "truck-stop-fuel-island-cleaning",
    category: "commercial",
    alt: "Truck stop fuel island after pressure washing",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1542,
  },
  {
    slug: "truck-stop-fuel-canopy-cleaning",
    category: "commercial",
    alt: "Truck stop fuel canopy and lanes after cleaning",
    widths: [640, 1024, 1536, 1542],
    width: 1542,
    height: 2048,
  },
  {
    slug: "warehouse-loading-dock-cleaning",
    category: "commercial",
    alt: "Warehouse loading dock doors before and after cleaning",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1538,
  },
  {
    slug: "warehouse-dock-apron-cleaning",
    category: "commercial",
    alt: "Warehouse dock apron before and after cleaning",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1538,
  },
  {
    slug: "dumpster-pad-cleaning",
    category: "commercial",
    alt: "Dumpster pad before and after cleaning",
    widths: [640, 1024, 1536],
    width: 1538,
    height: 2048,
  },
  {
    slug: "commercial-drive-lane-cleaning",
    category: "commercial",
    alt: "Commercial drive lane before and after cleaning",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1538,
  },
  {
    slug: "warehouse-parking-apron-cleaning",
    category: "commercial",
    alt: "Warehouse parking apron before and after cleaning",
    widths: [640, 1024, 1536],
    width: 1538,
    height: 2048,
  },
  {
    slug: "parking-lot-cleaning",
    category: "commercial",
    alt: "Commercial parking lot before and after cleaning",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1538,
  },
  {
    slug: "commercial-entry-sidewalk-cleaning",
    category: "commercial",
    alt: "Commercial entry sidewalk before and after cleaning",
    widths: [640, 1024, 1536],
    width: 1538,
    height: 2048,
  },
  {
    slug: "commercial-walkway-cleaning",
    category: "commercial",
    alt: "Commercial walkway before and after cleaning",
    widths: [640, 1024, 1152],
    width: 1152,
    height: 2048,
  },
  {
    slug: "service-truck-on-site",
    category: "fleet",
    alt: "DFW Pristine service truck and surface cleaners on site",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1536,
  },
  {
    slug: "truck-and-trailer-on-site",
    category: "fleet",
    alt: "Branded truck and equipment trailer on a job site",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1542,
  },
  {
    slug: "fleet-washing-truck-stop",
    category: "fleet",
    alt: "Equipment staged at a truck stop for fleet washing",
    widths: [640, 1024, 1536],
    width: 1612,
    height: 720,
  },
  {
    slug: "box-truck-and-equipment",
    category: "fleet",
    alt: "Box truck and pressure washing equipment",
    widths: [640, 1024, 1536],
    width: 2048,
    height: 1542,
  },
];

export const workImagesBy = (category: WorkCategory) =>
  WORK_IMAGES.filter((image) => image.category === category);

export const workImage = (slug: string) => {
  const image = WORK_IMAGES.find((i) => i.slug === slug);
  if (!image) throw new Error(`Unknown work image: ${slug}`);
  return image;
};

/** `src` for the smallest rendered width. */
export const workSrc = (image: WorkImage) =>
  `/images/work/${image.slug}-${image.widths[0]}.webp`;

/** Full `srcSet` so the browser picks the right file for the viewport. */
export const workSrcSet = (image: WorkImage) =>
  image.widths.map((w) => `/images/work/${image.slug}-${w}.webp ${w}w`).join(", ");
