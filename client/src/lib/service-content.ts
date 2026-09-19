import { Droplets, Home, Triangle, Square, Building2, Sparkles, Gem } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceSection {
  heading: string;
  body: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceContent {
  slug: string;
  icon: LucideIcon;
  /** Short line used on the services index card. */
  summary: string;
  title: string;
  metaDescription: string;
  lede: string;
  heroImage: string;
  gallery: string[];
  sections: ServiceSection[];
  /** What the customer is actually buying, in plain terms. */
  includes: string[];
  faqs: ServiceFAQ[];
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "pressure-washing": {
    slug: "pressure-washing",
    icon: Droplets,
    summary: "High-pressure cleaning for concrete, masonry and hard surfaces.",
    title: "Pressure Washing in DFW | Driveways, Patios & Hard Surfaces",
    metaDescription:
      "Pressure washing across the DFW metroplex for concrete, brick, pavers and hard surfaces. Surface cleaners for even results, no wand striping. Free quotes.",
    lede:
      "Hard surfaces take real pressure. The skill is knowing which surfaces those are, and backing off everywhere else.",
    heroImage: "curved-concrete-walkway-after",
    gallery: [
      "concrete-walkway-rust-removal",
      "brick-paver-walkway-limestone-border",
      "commercial-walkway-cleaning",
      "brick-wall-soft-wash",
    ],
    sections: [
      {
        heading: "Surface cleaners, not a wand",
        body: [
          "A wand cleans in a narrow stripe, and stripes are what you see when the job is finished and the concrete dries. We run rotary surface cleaners on flat work so the pressure lands evenly across the whole slab.",
          "The wand comes out for edges, corners and detail, where it is controlled against a surface we have already tested.",
        ],
      },
      {
        heading: "Pre-treatment does most of the work",
        body: [
          "Organic growth, oil and rust each respond to a different chemistry. Treating first means the rinse can be gentler, which matters as much on twenty-year-old concrete as it does on stone.",
          "Anything we cannot lift, we will tell you about before we start rather than chasing it with more pressure.",
        ],
      },
    ],
    includes: [
      "Driveways, sidewalks and patios",
      "Brick, pavers and retaining walls",
      "Oil, grease and rust pre-treatment",
      "Plant and landscaping protection",
    ],
    faqs: [
      {
        question: "Will pressure washing damage my concrete?",
        answer:
          "Not at the right pressure with the right tool. Damage usually comes from a narrow high-pressure tip held in one spot, which etches lines into the surface. A surface cleaner spreads the same pressure over a wide path so the result is even.",
      },
      {
        question: "Can you get oil stains out of a driveway?",
        answer:
          "Usually a substantial improvement, sometimes complete removal. Concrete is porous and oil soaks in, so fresh stains come out far better than ones that have been there for years. Heavy stains may need a two-stage degreaser.",
      },
      {
        question: "How long does a driveway take?",
        answer:
          "Most residential driveways are a couple of hours including pre-treatment and dwell time. We will give you a window when we quote.",
      },
    ],
  },

  "house-washing": {
    slug: "house-washing",
    icon: Home,
    summary: "Low-pressure soft washing for siding, stucco, brick and painted surfaces.",
    title: "House Washing in DFW | Soft Wash Siding, Stucco & Brick",
    metaDescription:
      "Soft wash house washing across DFW. Removes algae, mildew and grime from siding, stucco and brick without forcing water behind the cladding. Free quotes.",
    lede:
      "A house is not a driveway. Soft washing cleans the envelope of your home with detergent and volume instead of force.",
    heroImage: "stucco-eave-soft-wash",
    gallery: [
      "stucco-window-trim-cleaning",
      "brick-wall-soft-wash",
      "cedar-siding-restoration",
      "stucco-archway-cleaning",
    ],
    sections: [
      {
        heading: "Why pressure is the wrong tool on a wall",
        body: [
          "High pressure on siding drives water behind the cladding, into weep holes and up under lap joints, where it has no easy way out. It also strips oxidised paint and chalks the finish.",
          "Soft washing applies a cleaning solution at garden-hose pressure, lets it break down the growth, and rinses. The wall never takes a mechanical hit.",
        ],
      },
      {
        heading: "It is a biological problem, not a dirt problem",
        body: [
          "The grey-green film on a north-facing wall is algae, and the black speckling on soffits is usually mildew. Blasting removes what you can see and leaves the organism behind, which is why a pressure-washed house greens up again within months.",
          "Treating it properly kills the growth, so the wall stays clean considerably longer.",
        ],
      },
    ],
    includes: [
      "Vinyl, fibre cement and wood siding",
      "Stucco, brick and stone facades",
      "Soffits, fascia and gutter faces",
      "Eaves, porches and entryways",
    ],
    faqs: [
      {
        question: "Is soft washing safe for my landscaping?",
        answer:
          "Yes, with preparation. Beds and sensitive plantings are pre-wetted and rinsed afterwards, which dilutes anything that reaches them. Tell us about anything particularly precious and we will cover it.",
      },
      {
        question: "How often should a house be washed?",
        answer:
          "Most DFW homes benefit from once a year. North and east elevations hold moisture longest and tend to need it first.",
      },
      {
        question: "Will it strip my paint?",
        answer:
          "Soft washing will not. High-pressure washing can, especially on older or chalking paint, which is one of the main reasons we do not use it on walls.",
      },
    ],
  },

  "roof-cleaning": {
    slug: "roof-cleaning",
    icon: Triangle,
    summary: "Soft wash roof cleaning that removes black streaking without loosening granules.",
    title: "Roof Cleaning in DFW | Soft Wash Algae & Black Streak Removal",
    metaDescription:
      "Roof cleaning across DFW using low-pressure soft washing. Removes black algae streaking from shingles without stripping granules or voiding warranties. Free quotes.",
    lede:
      "Those black streaks are a living organism eating the limestone filler in your shingles. Pressure washing a roof removes the streaks and the shingle with them.",
    heroImage: "gutter-and-roofline-after",
    gallery: [
      "roof-valley-debris-removal",
      "gutter-cleaning-before-after",
      "stucco-eave-soft-wash",
      "brick-and-gutter-cleaning",
    ],
    sections: [
      {
        heading: "What the black streaking actually is",
        body: [
          "Gloeocapsa magma, a blue-green algae that feeds on the limestone filler in asphalt shingles. It spreads downward with runoff, which is why the streaks always run from the ridge toward the gutter.",
          "Left alone it holds moisture against the roof and shortens its life. It is not a cosmetic problem, though it looks like one.",
        ],
      },
      {
        heading: "Low pressure or no pressure",
        body: [
          "Shingle manufacturers and the roofing industry body both specify low-pressure cleaning. High pressure blasts off the granule layer that protects the asphalt underneath, and on many roofs it voids the warranty outright.",
          "We apply a treatment, let it work, and rinse gently. Gutters and downspouts get flushed afterwards, because everything that came off the roof is now in them.",
        ],
      },
    ],
    includes: [
      "Asphalt shingle soft washing",
      "Black streak and algae treatment",
      "Moss and lichen removal",
      "Gutter flush after cleaning",
    ],
    faqs: [
      {
        question: "Will roof cleaning void my shingle warranty?",
        answer:
          "Low-pressure soft washing is the method shingle manufacturers specify, so it should not. High-pressure washing frequently does void warranties, because it strips the protective granules.",
      },
      {
        question: "How long do the results last?",
        answer:
          "Typically several years, depending on shade and tree cover. Roofs under heavy overhang re-colonise faster because they stay damp.",
      },
      {
        question: "Do you walk on the roof?",
        answer:
          "As little as possible. Most of the work is done from ladders and from the ground with the right equipment, which is safer for the roof and for us.",
      },
    ],
  },

  "driveway-concrete-cleaning": {
    slug: "driveway-concrete-cleaning",
    icon: Square,
    summary: "Deep cleaning for driveways, sidewalks and concrete, including rust and oil.",
    title: "Driveway & Concrete Cleaning in DFW | Rust and Oil Removal",
    metaDescription:
      "Driveway and concrete cleaning across DFW. Even surface-cleaner results plus targeted treatment for rust, red clay, oil and grease. Free quotes.",
    lede:
      "Most of what makes a driveway look bad is not dirt. It is rust from sprinklers, red clay, and oil that has soaked in — and each needs its own treatment.",
    heroImage: "concrete-walkway-rust-removal",
    gallery: [
      "curved-concrete-walkway-after",
      "poolside-walkway-rust-removal",
      "garden-path-cleaning",
      "commercial-drive-lane-cleaning",
    ],
    sections: [
      {
        heading: "Rust and red clay are the North Texas signature",
        body: [
          "Iron in irrigation water oxidises on concrete and leaves orange fans wherever the heads throw. Red clay tracks in from beds and soaks into the pores. Neither responds to pressure alone, however long you hold the wand on them.",
          "Both need a rust-specific treatment applied to clean concrete, which is why the general clean happens first and the stain work second.",
        ],
      },
      {
        heading: "Even results across the whole slab",
        body: [
          "Surface cleaners cover flat concrete in overlapping passes so there is no striping and no visible seam where one pass met the next. Edges and control joints are detailed separately.",
          "If a section has been sealed, or previously etched by someone else, we will point it out first — those areas can clean differently and it is better to know before than to explain after.",
        ],
      },
    ],
    includes: [
      "Driveways, aprons and sidewalks",
      "Rust, red clay and battery-acid staining",
      "Oil and grease, single or two-stage",
      "Patios, porches and pool decks",
    ],
    faqs: [
      {
        question: "Can you remove rust stains from concrete?",
        answer:
          "Usually yes, with a rust-specific treatment rather than pressure. Long-standing stains may lighten dramatically rather than disappear entirely, and we will tell you which you are likely to get before we start.",
      },
      {
        question: "Why does my driveway look striped after the last cleaning?",
        answer:
          "That is wand striping — a narrow high-pressure tip cleaned in lines rather than evenly. A surface cleaner pass will usually even it out by bringing the whole slab to the same level of clean.",
      },
      {
        question: "Should I seal my concrete afterwards?",
        answer:
          "It helps on driveways that take oil or heavy sprinkler exposure. Sealing only goes on fully clean, fully dry concrete, so it is a separate visit rather than the same afternoon.",
      },
    ],
  },

  "window-cleaning": {
    slug: "window-cleaning",
    icon: Sparkles,
    summary: "Streak-free exterior window cleaning for homes and storefronts.",
    title: "Window Cleaning in DFW | Streak-Free Homes & Storefronts",
    metaDescription:
      "Exterior window cleaning across DFW for homes and commercial storefronts, including screens, tracks and hard water spotting. Free quotes.",
    lede:
      "Windows are the part of a clean exterior people look through rather than at, which is exactly why the streaks show.",
    heroImage: "stucco-window-trim-cleaning",
    gallery: [
      "brick-arch-window-cleaning",
      "commercial-entry-sidewalk-cleaning",
      "austin-stone-facade-soft-wash",
      "stone-porch-and-patio-cleaning",
    ],
    sections: [
      {
        heading: "Hard water is the DFW problem",
        body: [
          "Sprinkler overspray on glass evaporates and leaves mineral deposits behind. Left long enough those deposits etch into the surface, at which point cleaning will not fully remove them.",
          "Caught early they come off with the right treatment. Adjusting the heads that caused it is the part that stops it coming back.",
        ],
      },
      {
        heading: "Screens, tracks and frames",
        body: [
          "Clean glass behind a dirty screen still looks dirty. Screens are removed and washed separately, and tracks and sills are cleared so nothing washes back down onto the glass the first time it rains.",
        ],
      },
    ],
    includes: [
      "Exterior glass, streak-free",
      "Screen removal and washing",
      "Track and sill clearing",
      "Hard water spot treatment",
    ],
    faqs: [
      {
        question: "Do you clean interior windows too?",
        answer:
          "Exterior is the standard service. Ask when you call if you want interiors included and we will price it in.",
      },
      {
        question: "Can you remove hard water spots?",
        answer:
          "Often, if the minerals have not etched the glass yet. Once etching has happened the damage is in the surface and cleaning will only take it so far.",
      },
      {
        question: "Do you clean storefront windows?",
        answer:
          "Yes, including on a recurring schedule. Most commercial glass is done before opening so there is nobody working around your customers.",
      },
    ],
  },
};

/** Icons for the services index, including the ones with bespoke pages. */
export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "pressure-washing": Droplets,
  "house-washing": Home,
  "roof-cleaning": Triangle,
  "driveway-concrete-cleaning": Square,
  "delicate-stone-cleaning": Gem,
  "commercial-pressure-washing": Building2,
  "window-cleaning": Sparkles,
};

/** Never let a missing entry crash a page - that is how /services went down. */
export const serviceIcon = (slug: string): LucideIcon => SERVICE_ICONS[slug] ?? Droplets;

export const serviceContent = (slug: string) => SERVICE_CONTENT[slug];
