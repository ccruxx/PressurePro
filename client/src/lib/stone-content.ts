import { SEO_CONSTANTS } from "./seo-constants";

export interface StoneFAQ {
  question: string;
  answer: string;
}

export interface StoneContent {
  /** Matches STONE_TYPES[].slug in seo-constants. */
  slug: string;
  name: string;
  /** Spellings and trade names people actually search for. */
  alsoKnownAs: string[];
  title: string;
  metaDescription: string;
  /** One-sentence hook under the H1. */
  lede: string;
  /** Work image slug used as the page's lead photograph. */
  heroImage: string;
  /** Additional work images for the page gallery. */
  gallery: string[];
  /** Why this material needs different handling. */
  material: string[];
  /** What actually goes wrong with it in North Texas. */
  problems: { label: string; detail: string }[];
  /** How it gets cleaned. */
  process: { step: string; detail: string }[];
  faqs: StoneFAQ[];
}

const PHONE = SEO_CONSTANTS.CONTACT.PHONE;

export const STONE_CONTENT: StoneContent[] = [
  {
    slug: "limestone",
    name: "Limestone",
    alsoKnownAs: ["Texas cream limestone", "limestone patio cleaning"],
    title: "Limestone Cleaning in DFW | Low-Pressure Stone Restoration",
    metaDescription:
      "Limestone patios, walkways and steps cleaned at low pressure across DFW. No acid washing, no wand marks. Free quotes — call " +
      PHONE + ".",
    lede:
      "Limestone is soft, porous and unforgiving. Cleaned correctly it comes back bright. Cleaned with a turbo nozzle and an acid wash, the damage does not buff out.",
    heroImage: "limestone-patio-planters-after",
    gallery: [
      "limestone-tile-patio-cleaning",
      "limestone-steps-cleaning",
      "limestone-patio-after-cleaning",
      "limestone-pool-coping-cleaning",
    ],
    material: [
      "Limestone is calcium carbonate — around a 3 on the Mohs scale, softer than the concrete most pressure washing is built around. A tip that leaves concrete untouched will carve visible tracks into limestone.",
      "It is porous, so staining sits below the surface rather than on top of it. Surface blasting removes the stone, not the stain. Dwell time and the right detergent do the work instead.",
      "It reacts with acid. Muriatic and other acidic cleaners will lift a stain and dull the stone permanently in the same pass — the etched patch stays lighter and chalkier than everything around it.",
    ],
    problems: [
      {
        label: "Sprinkler iron staining",
        detail:
          "The most common limestone problem in North Texas. Iron in well and municipal water oxidises on the stone and leaves orange fans wherever the heads throw. It needs a rust-specific treatment, not pressure.",
      },
      {
        label: "Organic growth",
        detail:
          "Black and green films on shaded slabs and north-facing steps. Porous stone holds moisture, and moisture feeds algae.",
      },
      {
        label: "Efflorescence",
        detail:
          "White, chalky bloom pushed up from below by moisture moving through the slab. It returns if the moisture source isn't addressed, so it's worth diagnosing before cleaning.",
      },
      {
        label: "Wand marks from a previous cleaning",
        detail:
          "Evenly spaced light stripes where someone held a high-pressure tip too close. These are cut into the stone and can't be washed out.",
      },
    ],
    process: [
      {
        step: "Identify the stain before touching the stone",
        detail:
          "Rust, organic growth and efflorescence each need a different treatment. Guessing wastes a pass and risks setting the stain.",
      },
      {
        step: "Pre-treat and let it dwell",
        detail:
          "The cleaning agent does the work while the stone sits wet. This is the step that lets us drop the pressure.",
      },
      {
        step: "Low-pressure rinse with a spread pattern",
        detail:
          "Wide fan, consistent distance, no turbo nozzle, no dwelling in one spot. Nothing that leaves a line.",
      },
      {
        step: "Protect the surroundings",
        detail:
          "Planting beds, pool water and adjacent metal all get covered or flushed depending on what we're using.",
      },
    ],
    faqs: [
      {
        question: "Will pressure washing damage my limestone?",
        answer:
          "It will if it's done at concrete pressure. Limestone is soft enough that a high-pressure tip cuts visible tracks into it, and those tracks are permanent. We clean limestone with detergent, dwell time and a low-pressure rinse so the stone is never abraded.",
      },
      {
        question: "Can you remove rust stains from limestone?",
        answer:
          "Usually, yes. Sprinkler iron staining responds to a rust-specific treatment. Because limestone is porous the stain often sits below the surface, so it can take more than one application — and deeply set iron may lighten rather than disappear entirely.",
      },
      {
        question: "Do you use acid on limestone?",
        answer:
          "No. Acidic cleaners etch calcium carbonate. They can take a stain off and leave a dull, chalky patch that's more obvious than what you started with.",
      },
      {
        question: "Should limestone be sealed after cleaning?",
        answer:
          "It's worth considering on horizontal surfaces that take food, drink or heavy sprinkler exposure. Sealing is a separate conversation from cleaning, and it should only go on a surface that's fully clean and fully dry.",
      },
    ],
  },
  {
    slug: "austin-stone",
    name: "Austin Stone",
    alsoKnownAs: ["Texas cream limestone veneer", "Austin chalk"],
    title: "Austin Stone Cleaning in DFW | Soft Wash for Stone Facades",
    metaDescription:
      "Austin stone facades soft washed across DFW — algae streaking, sprinkler staining and mortar haze removed without damaging the stone or joints. Call " +
      PHONE + ".",
    lede:
      "Austin stone is on half the homes in the Metroplex, and it shows every streak. It's also limestone, which means it cleans at low pressure or it doesn't clean at all.",
    heroImage: "austin-stone-home-exterior-cleaning",
    gallery: [
      "austin-stone-facade-soft-wash",
      "stone-chimney-and-facade-cleaning",
      "flagstone-entry-walk-austin-stone-home",
    ],
    material: [
      "\"Austin stone\" is a trade name rather than a geological one. It usually means cream to buff Texas limestone cut as veneer — chopped, ashlar or sawn — and it behaves like limestone because that's what it is.",
      "Veneer work means mortar joints, and mortar is the weak point. A pressure tip held near a joint will scour it out, and repointing a facade costs considerably more than washing one.",
      "It's almost always vertical, so the staining pattern is different from a patio: everything runs downward from the roofline, and everything splashes upward from the ground.",
    ],
    problems: [
      {
        label: "Black streaking below the roofline",
        detail:
          "Algae and airborne grime carried down the face by runoff. Worst on north and east elevations that stay damp longest.",
      },
      {
        label: "The sprinkler line",
        detail:
          "A distinct band of orange or white across the bottom two or three feet where irrigation hits the stone day after day.",
      },
      {
        label: "Mortar haze",
        detail:
          "A cloudy film left from construction that was never properly washed off. Common on newer builds and often mistaken for dirt.",
      },
      {
        label: "Organic growth in shaded corners",
        detail:
          "Green film where landscaping has grown in and cut off airflow — usually a sign the beds need cutting back as well.",
      },
    ],
    process: [
      {
        step: "Work top-down",
        detail:
          "Roofline first, then the field, then the base. Cleaning upward drives dirty water into dry stone and leaves tide lines.",
      },
      {
        step: "Soft wash the field",
        detail:
          "Detergent applied at low pressure and given time to break down the growth, so the rinse never has to be aggressive.",
      },
      {
        step: "Stay off the joints",
        detail:
          "Consistent standoff distance and a wide pattern. No concentrated stream anywhere near mortar.",
      },
      {
        step: "Treat the sprinkler band separately",
        detail:
          "That band is usually iron, not dirt, and it needs its own treatment after the facade is clean.",
      },
    ],
    faqs: [
      {
        question: "What is Austin stone, exactly?",
        answer:
          "It's a trade name for cream-coloured Texas limestone used as veneer. Because it's limestone, it needs the same low-pressure handling as a limestone patio — the fact that it's on a wall doesn't make it harder.",
      },
      {
        question: "Will washing my stone facade damage the mortar?",
        answer:
          "It can, if it's done with high pressure. Mortar is softer than the stone around it and a concentrated stream will scour it out of the joints. We keep a wide pattern and a consistent distance so the joints are never the focus.",
      },
      {
        question: "Why is only one side of my house streaked?",
        answer:
          "North and east elevations hold moisture longest because they get the least direct sun, so algae establishes there first. It isn't a sign that side was built differently.",
      },
      {
        question: "Can you get the orange band off the bottom of my stone?",
        answer:
          "That's almost always iron from sprinkler overspray. It responds to a rust treatment rather than to washing, and it will come back unless the heads are adjusted or the water is treated.",
      },
    ],
  },
  {
    slug: "flagstone",
    name: "Flagstone",
    alsoKnownAs: ["Oklahoma flagstone", "flagstone patio cleaning"],
    title: "Flagstone Cleaning in DFW | Patio, Path & Joint Restoration",
    metaDescription:
      "Flagstone patios and walkways cleaned across DFW — moss and algae out of the joints, no pitting, no lost sand. Free quotes, call " +
      PHONE + ".",
    lede:
      "With flagstone the joints are usually the real job. Moss, algae and weeds live in them, and most of what looks like dirty stone is actually a dirty joint.",
    heroImage: "flagstone-patio-moss-removal",
    gallery: [
      "flagstone-walkway-entry-cleaning",
      "stone-paver-walkway-cleaning",
      "stone-patio-seating-area",
      "flagstone-entry-walk-austin-stone-home",
    ],
    material: [
      "Most flagstone in North Texas is sandstone — Oklahoma flagstone is the common one — laid as irregular slabs with wide joints.",
      "Sandstone is a grain structure held together by a natural binder. Too much pressure doesn't just clean it, it releases grains, and the surface goes from smooth to sandy and pitted.",
      "The joints are either mortar or soil. Mortar joints crack and lose material under pressure; soil joints wash out entirely, which undermines the slabs sitting on them.",
    ],
    problems: [
      {
        label: "Moss and algae in the joints",
        detail:
          "The signature flagstone problem. Joints stay damp after the stone has dried, so growth establishes there and spreads onto the slab edges.",
      },
      {
        label: "Weeds and grass between the slabs",
        detail:
          "Pulling them lifts joint material with the roots. Treating first and cleaning second keeps the joint intact.",
      },
      {
        label: "Failed sealer",
        detail:
          "A white or milky cloudiness across the stone where an old sealer has broken down. This is the sealer, not the stone, and it needs stripping rather than scrubbing.",
      },
      {
        label: "Pitting from a previous cleaning",
        detail:
          "A rough, sandy texture and lightened patches where a turbo nozzle removed the surface grain.",
      },
    ],
    process: [
      {
        step: "Treat the growth before touching it",
        detail:
          "Killing moss and algae first means it releases instead of needing to be blasted out of the joint.",
      },
      {
        step: "Check what the joints are made of",
        detail:
          "Mortar, sand and soil joints each tolerate something different. This determines the pressure for the whole patio.",
      },
      {
        step: "Clean the slabs at low pressure",
        detail:
          "Wide fan, kept moving, worked with the grain of the stone rather than against it.",
      },
      {
        step: "Flush the joints, don't excavate them",
        detail:
          "Enough to clear the growth, not enough to wash out the bedding underneath.",
      },
    ],
    faqs: [
      {
        question: "Can you get moss out of my flagstone joints?",
        answer:
          "Yes, and it's most of what a flagstone clean involves. We treat the growth first so it lets go, then flush the joints at a pressure that clears them without washing out the bedding material underneath.",
      },
      {
        question: "Will cleaning wash the sand out from between my stones?",
        answer:
          "Not the way we do it. Sand and soil joints are the thing most likely to be damaged by a standard pressure wash, so we identify what the joints are made of before choosing a pressure.",
      },
      {
        question: "My flagstone looks cloudy and white. Is that damage?",
        answer:
          "Usually it's a sealer that's broken down rather than damage to the stone. That needs to be stripped rather than cleaned — washing over a failed sealer just cleans the sealer.",
      },
      {
        question: "Why does my flagstone feel rough and sandy now?",
        answer:
          "That's typically pitting from a previous cleaning at too high a pressure. The binder holding the sand grains has been broken and the loose grain is coming away. It can be cleaned safely going forward, but the texture doesn't come back.",
      },
    ],
  },
  {
    slug: "pennsylvania-stone",
    name: "Pennsylvania Stone",
    alsoKnownAs: ["Pennsylvania bluestone", "bluestone", "PA bluestone"],
    title: "Pennsylvania Bluestone Cleaning in DFW | No-Spall Restoration",
    metaDescription:
      "Pennsylvania bluestone patios and coping cleaned across DFW without causing spalling or flaking. Low pressure, no acid. Call " +
      PHONE + " for a free quote.",
    lede:
      "Bluestone looks tough and behaves the opposite. It delaminates in thin sheets, and pressure is the fastest way to start it flaking.",
    heroImage: "stone-patio-seating-area",
    gallery: [
      "limestone-pool-deck-stain-removal",
      "stone-entry-steps-cleaning",
      "garden-path-cleaning",
    ],
    material: [
      "Pennsylvania bluestone is a dense feldspathic sandstone quarried in the north-east, blue-grey through lilac and buff. It arrives in Texas as patio slabs, coping and treads.",
      "It's layered, and those layers separate. Water gets between them, freezes, and lifts a thin sheet off the face — spalling. Once a slab has started, pressure accelerates it.",
      "It's denser than Oklahoma flagstone, so it resists staining better, but the flip side is that trapped moisture has nowhere to go but sideways between the layers.",
    ],
    problems: [
      {
        label: "Spalling and flaking",
        detail:
          "Thin sheets lifting off the surface, usually starting at an edge or a corner. Any cleaning has to work around these rather than across them.",
      },
      {
        label: "Efflorescence",
        detail:
          "A white haze from mineral salts migrating up through the slab. Especially common on bluestone set in a mortar bed.",
      },
      {
        label: "Greying and flattened colour",
        detail:
          "The blues and lilacs going flat and grey under a film of organic growth and grime. Most of that colour is recoverable.",
      },
      {
        label: "Rust from furniture and fixings",
        detail:
          "Metal feet and railing anchors bleeding orange into a dense stone that holds it stubbornly.",
      },
    ],
    process: [
      {
        step: "Survey for delamination first",
        detail:
          "Any slab already lifting gets identified before we start, because pressure will finish what the freeze started.",
      },
      {
        step: "Neutral cleaners only",
        detail:
          "No acid. Acidic products attack the binder and open the layers further.",
      },
      {
        step: "Very low pressure, wide pattern",
        detail:
          "Bluestone cleans on chemistry and dwell time. Pressure is for rinsing, not for cleaning.",
      },
      {
        step: "Dry and reassess",
        detail:
          "Efflorescence and colour both read differently wet. What matters is how the stone looks once it's dry.",
      },
    ],
    faqs: [
      {
        question: "Is bluestone safe to pressure wash?",
        answer:
          "At low pressure, yes. At standard pressure, no — bluestone is layered and a concentrated stream lifts those layers, which is how flaking starts. If a slab is already spalling we work around it rather than over it.",
      },
      {
        question: "What is the white haze on my bluestone?",
        answer:
          "Efflorescence — mineral salts carried to the surface by moisture moving up through the slab. It can be treated, but if the moisture path isn't addressed it tends to come back.",
      },
      {
        question: "Will cleaning bring the blue colour back?",
        answer:
          "Usually a good amount of it. Most of the flat grey appearance is a film of growth and grime sitting on top of the stone rather than the colour itself being gone.",
      },
      {
        question: "Some of my slabs are flaking already. Can you still clean it?",
        answer:
          "Yes, carefully. We identify the affected slabs first and keep pressure off them. Cleaning won't reverse spalling that's already happened, and we'll tell you honestly which slabs are near the end of their life.",
      },
    ],
  },
  {
    slug: "lueders-stone",
    name: "Lueders Stone",
    alsoKnownAs: ["Leuders stone", "Lueders limestone", "Leuders limestone"],
    title: "Lueders Stone Cleaning in DFW | Limestone Coping, Steps & Patios",
    metaDescription:
      "Lueders limestone patios, steps and pool coping cleaned across DFW at low pressure. Iron, pool chemistry and traffic staining. Call " +
      PHONE + ".",
    lede:
      "Lueders is the hard-weathering Texas limestone under half the pool coping and patio caps in the Metroplex — and it still cleans like limestone, not like concrete.",
    heroImage: "limestone-steps-cleaning",
    gallery: [
      "stone-entry-steps-cleaning",
      "limestone-pool-coping-cleaning",
      "limestone-patio-after-cleaning",
      "poolside-walkway-rust-removal",
    ],
    material: [
      "Lueders limestone comes out of the quarries around Lueders in Jones County, Texas. It's often spelled \"Leuders\" — both refer to the same material.",
      "It weathers harder than Austin stone, which is why it ends up as steps, caps, coping and treads where the stone has to take traffic. Harder than Austin stone is not hard: it's still limestone, and still acid-sensitive.",
      "It shows up in two finishes that clean differently. Chopped and rock-face has texture that holds growth in the shadows; honed and sawn shows every wand mark and every etched patch.",
    ],
    problems: [
      {
        label: "Pool chemistry staining",
        detail:
          "Coping takes splash-out all summer. Chlorinated water, salt systems and metal sequestrants all leave marks that read differently from ordinary dirt.",
      },
      {
        label: "Iron and sprinkler staining",
        detail:
          "The same orange fans that hit limestone patios, concentrated wherever irrigation reaches the caps.",
      },
      {
        label: "Traffic darkening on treads",
        detail:
          "Steps take foot traffic and body oils, so the centre of the tread goes grey while the edges stay pale.",
      },
      {
        label: "Etched patches from acid washing",
        detail:
          "Lighter, chalkier areas where someone used an acidic cleaner. Common on coping because pool contractors reach for acid.",
      },
    ],
    process: [
      {
        step: "Separate the pool chemistry from the dirt",
        detail:
          "They look similar and need different treatments. Cleaning the wrong one first wastes the pass.",
      },
      {
        step: "Protect the water",
        detail:
          "Coping work happens next to a pool, so runoff is controlled rather than rinsed straight in.",
      },
      {
        step: "Match pressure to the finish",
        detail:
          "Rock-face texture tolerates a little more than a honed cap does. A honed surface gets the gentlest treatment on the job.",
      },
      {
        step: "Treat iron last",
        detail:
          "Rust treatment goes on clean stone. Applied over grime it reacts with the grime instead.",
      },
    ],
    faqs: [
      {
        question: "Is it spelled Lueders or Leuders?",
        answer:
          "The Texas town the stone is quarried near is Lueders, so that's the standard spelling — but Leuders is used often enough that both refer to the same limestone. If you've been quoted for either, it's the same material.",
      },
      {
        question: "Can you clean Lueders pool coping without hurting the pool?",
        answer:
          "Yes. Coping work is done with runoff controlled so cleaning products aren't rinsed into the water, and we'll coordinate around your pool service if chemistry is being adjusted.",
      },
      {
        question: "My coping has light chalky patches. What are those?",
        answer:
          "Almost always acid etching from a previous cleaning. Acidic products lift a stain and dull the limestone in the same pass. The etched areas can be cleaned but the dulled texture is permanent.",
      },
      {
        question: "Is Lueders stone harder than Austin stone?",
        answer:
          "It weathers better, which is why it's used for steps and caps that take traffic. It's still limestone though — soft enough that high pressure marks it and acid etches it.",
      },
    ],
  },
];

export const stoneContent = (slug: string) => {
  const content = STONE_CONTENT.find((s) => s.slug === slug);
  if (!content) throw new Error(`Unknown stone slug: ${slug}`);
  return content;
};
