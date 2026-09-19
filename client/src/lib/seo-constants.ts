export const SEO_CONSTANTS = {
  BUSINESS_NAME: "DFW Pristine Power Washing",
  PRIMARY_CITY: "Euless, TX",
  SERVICE_AREA_CITIES: [
    { name: "Arlington", state: "TX", slug: "arlington-tx" },
    { name: "Mansfield", state: "TX", slug: "mansfield-tx" },
    { name: "Dallas", state: "TX", slug: "dallas-tx" },
    { name: "Fort Worth", state: "TX", slug: "fort-worth-tx" },
    { name: "Plano", state: "TX", slug: "plano-tx" },
    { name: "Southlake", state: "TX", slug: "southlake-tx" },
    { name: "Grapevine", state: "TX", slug: "grapevine-tx" },
    { name: "Colleyville", state: "TX", slug: "colleyville-tx" },
    { name: "Coppell", state: "TX", slug: "coppell-tx" },
    { name: "Carrollton", state: "TX", slug: "carrollton-tx" },
    { name: "Midlothian", state: "TX", slug: "midlothian-tx" },
    { name: "Waxahachie", state: "TX", slug: "waxahachie-tx" },
    { name: "Burleson", state: "TX", slug: "burleson-tx" },
    { name: "Hurst", state: "TX", slug: "hurst-tx" },
    { name: "Euless", state: "TX", slug: "euless-tx" },
    { name: "Frisco", state: "TX", slug: "frisco-tx" },
    { name: "Irving", state: "TX", slug: "irving-tx" },
    { name: "Keller", state: "TX", slug: "keller-tx" },
    { name: "Addison", state: "TX", slug: "addison-tx" },
    { name: "Bedford", state: "TX", slug: "bedford-tx" },
    { name: "Grand Prairie", state: "TX", slug: "grand-prairie-tx" },
    { name: "Farmers Branch", state: "TX", slug: "farmers-branch-tx" },
    { name: "Richland Hills", state: "TX", slug: "richland-hills-tx" },
    { name: "Las Colinas", state: "TX", slug: "las-colinas-tx" },
    { name: "North Richland Hills", state: "TX", slug: "north-richland-hills-tx" },
    { name: "Cedar Hill", state: "TX", slug: "cedar-hill-tx" },
    { name: "DeSoto", state: "TX", slug: "desoto-tx" },
    { name: "Ennis", state: "TX", slug: "ennis-tx" },
    { name: "Ovilla", state: "TX", slug: "ovilla-tx" },
    { name: "Red Oak", state: "TX", slug: "red-oak-tx" },
    { name: "Venus", state: "TX", slug: "venus-tx" },
  ],
  PRIMARY_SERVICES: [
    {
      name: "Pressure Washing",
      slug: "pressure-washing",
      description: "Professional high-pressure cleaning for all exterior surfaces",
    },
    {
      name: "House Washing (Soft Wash)",
      slug: "house-washing",
      description: "Gentle soft wash cleaning for siding, stucco, and painted surfaces",
    },
    {
      name: "Roof Cleaning",
      slug: "roof-cleaning",
      description: "Safe, effective roof cleaning that protects your shingles",
    },
    {
      name: "Driveway / Concrete Cleaning",
      slug: "driveway-concrete-cleaning",
      description: "Deep cleaning for driveways, sidewalks, and concrete surfaces",
    },
    {
      name: "Delicate Stone Cleaning",
      slug: "delicate-stone-cleaning",
      description:
        "Low-pressure restoration for limestone, Austin stone, flagstone and other soft natural stone",
    },
    {
      name: "Commercial Pressure Washing",
      slug: "commercial-pressure-washing",
      description: "Professional commercial cleaning for businesses and properties",
    },
    {
      name: "Window Cleaning",
      slug: "window-cleaning",
      description: "Streak-free window cleaning for homes and businesses",
    },
  ],
  CONTACT: {
    PHONE: "(817) 585-6388",
    PHONE_RAW: "8175856388",
    EMAIL: "joshua.dfwpristine@gmail.com",
    ACTUAL_EMAIL: "joshua.dfwpristine@gmail.com",
  },
  SITE_URL: "https://dfwpristinepowerwashing.com",
  // Mirrors the Google Business Profile exactly. Do not diverge from the
  // listing: NAP consistency across site / GBP / Facebook is a ranking factor.
  NAP: {
    STREET: "203 Walnut Way",
    CITY: "Euless",
    STATE: "TX",
    ZIP: "76039",
  },
  // Derived from the GBP plus code VW58+64 Euless (~14m precision).
  GEO: {
    LAT: 32.8581,
    LNG: -97.0847,
    PLUS_CODE: "VW58+64 Euless, Texas",
  },
  HOURS: "Open 24 hours",
  SOCIAL: {
    FACEBOOK: "https://www.facebook.com/profile.php?id=61578681147252",
    INSTAGRAM: "",
    // Paste the "Share" link from the Google Business Profile here.
    GOOGLE_BUSINESS: "",
  },
  OWNER: {
    NAME: "Josh Collins",
    YEARS_IN_BUSINESS: "5+",
  },
  CERTIFICATIONS: {
    MINORITY_OWNED: true,
    TRIBAL_CERTIFIED: true,
    CERTIFYING_ORGANIZATION: "Choctaw Nation of Oklahoma",
  },
  ADDITIONAL_KEYWORDS: [
    "Minority Owned Pressure Washing",
    "Choctaw Nation Certified Business",
    "DFW Minority Pressure Washing Company",
    "Tribal Certified Pressure Washing",
    "Minority-Owned Business DFW",
    "Native American Owned Business Texas",
  ],
};

/**
 * Delicate / soft natural stone varieties Joshua works on.
 * Each gets its own page under /services/delicate-stone-cleaning/<slug>.
 * NOTE: the Texas quarry town is spelled "Lueders" - the common misspelling
 * "Leuders" is carried in `alt` so both spellings are covered in copy.
 */
export const STONE_TYPES = [
  {
    name: "Limestone",
    slug: "limestone",
    alt: [],
    blurb:
      "Soft, porous and easily etched. Cleaned at low pressure so the surface is never opened up.",
  },
  {
    name: "Austin Stone",
    slug: "austin-stone",
    alt: [],
    blurb:
      "The cream-coloured Texas limestone on half the homes in the Metroplex. Shows organic staining badly and burns easily under a wand.",
  },
  {
    name: "Flagstone",
    slug: "flagstone",
    alt: [],
    blurb:
      "Irregular sandstone slabs with wide mortar or soil joints that hold moss and algae.",
  },
  {
    name: "Pennsylvania Stone",
    slug: "pennsylvania-stone",
    alt: ["Pennsylvania Bluestone", "Bluestone"],
    blurb:
      "Dense bluestone that spalls and flakes when hit with too much pressure.",
  },
  {
    name: "Lueders Stone",
    slug: "lueders-stone",
    alt: ["Leuders Stone", "Lueders Limestone"],
    blurb:
      "Hard-weathering Texas limestone from the Lueders quarries, common on patios, caps and steps.",
  },
] as const;

/** Look a service up by slug instead of by array index. */
export function getService(slug: string) {
  const service = SEO_CONSTANTS.PRIMARY_SERVICES.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  return service;
}

export const TOP_CITIES_FOR_DISPLAY = [
  "Euless",
  "Bedford",
  "Hurst",
  "Grapevine",
  "Colleyville",
  "Southlake",
  "Irving",
  "Arlington",
  "Keller",
  "Fort Worth",
  "Dallas",
];
