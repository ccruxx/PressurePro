import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaOrg from "@/components/seo/SchemaOrg";
import WorkImage from "@/components/work-image";
import { SEO_CONSTANTS } from "@/lib/seo-constants";
import { getCityServiceSchema, getBreadcrumbSchema, getCityFAQSchema } from "@/lib/schema-helpers";
import { CITY_LOCAL_CONTENT } from "@/lib/city-content";
import { Button } from "@/components/ui/button";

interface CityPageProps {
  cityName: string;
  stateName: string;
  slug: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const CITY_OVERVIEW_BY_SLUG: Record<string, string> = {
  "arlington-tx": "Arlington homes see constant exposure to traffic film, humidity, and tree pollen that can quickly dull siding, patios, and concrete. In neighborhoods near Lake Arlington, Dalworthington Gardens, and central Arlington, shaded walls and fence lines often develop algae, mold, and other organic growth. Our team uses a blend of soft washing and pressure washing based on each surface, so painted trim, brick, stucco, and stone are cleaned safely while still producing a dramatic before-and-after result.",
  "southlake-tx": "Southlake properties are known for detailed stonework, painted exteriors, and upscale outdoor living spaces that need careful, professional cleaning. Between irrigation overspray, North Texas humidity, and shade from mature trees, many homes in Southlake develop dark roof streaks, green film on patios, and buildup around porches and gutters. We tailor our process to protect premium finishes while removing algae, mold, cobwebs, and stain patterns that lower curb appeal.",
  "grapevine-tx": "Grapevine homes and businesses deal with a mix of lake-area moisture, pollen, and traffic residue from major corridors. This combination creates roof discoloration, patio slick spots, and darkened driveway surfaces over time. Our city-specific process for Grapevine uses targeted pretreatment, controlled pressure washing, and soft washing where needed to remove organic growth and stains while preserving exterior materials and landscaped areas.",
  "plano-tx": "Plano neighborhoods often have HOA standards that require clean, well-maintained exteriors year-round. With frequent irrigation, seasonal storms, and dense tree cover in many subdivisions, homes in Plano can accumulate algae and mold on siding, porches, and north-facing walls. We provide detail-oriented pressure washing and soft wash service that helps homeowners maintain compliance, improve curb appeal, and protect long-term exterior value.",
  "mansfield-tx": "Mansfield's ongoing growth brings a mix of new-build and established homes, both of which collect red clay residue, mildew, and dark staining on concrete. Driveways and patio surfaces often show oil, grease, and rust from routine use, while shaded sides of the house develop organic growth that worsens over time. We help Mansfield homeowners reset their exterior appearance with safe methods and reliable scheduling.",
  "bedford-tx": "Bedford properties in established neighborhoods frequently show signs of weathering from heat, humidity, and tree debris. Over time, roof lines, gutters, porches, and concrete walkways collect algae, mold, cobwebs, and wasp nests. We provide residential-focused power washing and pressure washing in Bedford that restores clean lines and brighter surfaces without overaggressive cleaning techniques.",
  "colleyville-tx": "Colleyville homeowners expect high-quality exterior care, especially for homes with custom masonry, painted trim, and large driveway or patio areas. Local shade patterns, sprinkler overspray, and seasonal pollen can lead to mold, algae, and mineral staining that reduce visual appeal. Our process is built for Colleyville's residential properties, combining gentle chemistry and precise pressure control for safe, noticeable results.",
  "coppell-tx": "Coppell homes face routine buildup from humidity, storm runoff, and neighborhood tree canopy, especially on roof lines, siding, and concrete. Many properties in Coppell also show red clay, rust, and oil staining near driveways and garage approaches. We deliver a residential-first service that removes stubborn grime and organic growth while helping homeowners maintain a clean, polished exterior year-round.",
};

const CITY_NEARBY_BY_SLUG: Record<string, string[]> = {
  "arlington-tx": ["mansfield-tx", "grand-prairie-tx", "fort-worth-tx", "euless-tx", "bedford-tx", "dallas-tx"],
  "southlake-tx": ["grapevine-tx", "colleyville-tx", "keller-tx", "bedford-tx", "euless-tx", "arlington-tx"],
  "grapevine-tx": ["southlake-tx", "colleyville-tx", "coppell-tx", "euless-tx", "bedford-tx", "irving-tx"],
  "plano-tx": ["carrollton-tx", "addison-tx", "farmers-branch-tx", "frisco-tx", "dallas-tx", "coppell-tx"],
  "mansfield-tx": ["arlington-tx", "fort-worth-tx", "burleson-tx", "cedar-hill-tx", "dallas-tx", "grand-prairie-tx"],
  "bedford-tx": ["euless-tx", "hurst-tx", "colleyville-tx", "southlake-tx", "grapevine-tx", "arlington-tx"],
  "colleyville-tx": ["southlake-tx", "grapevine-tx", "bedford-tx", "euless-tx", "keller-tx", "coppell-tx"],
  "coppell-tx": ["grapevine-tx", "irving-tx", "carrollton-tx", "farmers-branch-tx", "addison-tx", "plano-tx"],
};

const CITY_FAQS_BY_SLUG: Record<string, FAQItem[]> = {
  "arlington-tx": [
    {
      question: "How often should Arlington homeowners schedule power washing?",
      answer: "Most Arlington homes benefit from annual house washing and concrete cleaning every 12 to 18 months. Homes with heavy shade, nearby traffic, or frequent sprinkler overspray may need service sooner to control algae, mold, and dark streaking.",
    },
    {
      question: "Can you remove oil and grease from Arlington driveways?",
      answer: "Yes. We pretreat and pressure wash driveway concrete to reduce oil and grease staining, then rinse and neutralize residue. Deep stains can lighten significantly, and many surfaces look close to original after service.",
    },
    {
      question: "Do you clean roofs and gutters safely in Arlington?",
      answer: "Yes. We soft wash roof surfaces to remove algae and organic growth without damaging shingles, and we clean gutter faces to restore a brighter exterior look.",
    },
    {
      question: "Will pressure washing damage painted or delicate surfaces?",
      answer: "No. We choose soft wash methods for delicate materials and controlled pressure for harder surfaces like driveway and patio concrete. Surface safety is part of every job setup.",
    },
    {
      question: "How do I get a quote in Arlington, TX?",
      answer: "Call (817) 585-6388 for a free quote. We provide clear pricing, explain the cleaning plan, and schedule quickly based on weather and availability.",
    },
  ],
  "southlake-tx": [
    {
      question: "Do you handle high-end exterior finishes in Southlake homes?",
      answer: "Yes. We clean stone, painted trim, and custom exterior materials with surface-appropriate methods. Southlake homes often need a careful mix of soft washing and controlled pressure washing.",
    },
    {
      question: "What stains are most common in Southlake?",
      answer: "We frequently remove algae, mold, organic growth, rust from irrigation contact, and red clay residue tracked onto driveway and patio surfaces.",
    },
    {
      question: "Can you clean porch and patio areas before hosting events?",
      answer: "Absolutely. We routinely prep patios, porches, and walkways in Southlake so outdoor spaces look clean, bright, and guest-ready.",
    },
    {
      question: "Do you remove cobwebs and wasp nests during house washing?",
      answer: "Yes. During service we clear cobwebs and remove wasp nests from accessible exterior areas as part of improving the overall finish.",
    },
    {
      question: "How can I schedule service in Southlake, TX?",
      answer: "Call (817) 585-6388 for a free quote and scheduling options. We can usually provide same-week or next-available appointments.",
    },
  ],
  "grapevine-tx": [
    {
      question: "Does Grapevine humidity affect how often I should clean my exterior?",
      answer: "Yes. Moisture and shade can speed up algae and mold growth, especially on north-facing walls and roof sections. Many Grapevine homeowners schedule annual maintenance.",
    },
    {
      question: "Can you pressure wash old concrete in Grapevine?",
      answer: "Yes. We adjust pressure to the condition of each surface and use pretreatments for grime, oil, grease, and red clay so older concrete can be cleaned safely.",
    },
    {
      question: "Do you provide roof cleaning in Grapevine, TX?",
      answer: "Yes. We soft wash roofs to remove black streaks, algae, and organic growth while protecting shingles and surrounding landscaping.",
    },
    {
      question: "What parts of a home do you clean besides driveways?",
      answer: "We clean siding, porches, patios, roof lines, gutters, fences, and other exterior surfaces as part of a complete curb appeal refresh.",
    },
    {
      question: "How do I request a quote in Grapevine?",
      answer: "Call (817) 585-6388 and we will provide a free quote based on your property, surfaces, and stain conditions.",
    },
  ],
  "plano-tx": [
    {
      question: "Can pressure washing help with HOA exterior standards in Plano?",
      answer: "Yes. Regular cleaning helps Plano homeowners maintain a cleaner appearance for siding, driveway concrete, patios, and roof lines, which often supports HOA maintenance expectations.",
    },
    {
      question: "What buildup do you remove most often in Plano neighborhoods?",
      answer: "Common issues include algae, mold, organic growth, cobwebs, wasp nests, rust stains, and red clay tracking on concrete and porch areas.",
    },
    {
      question: "Do you clean both roof and gutters in one visit?",
      answer: "In many cases, yes. We can soft wash roof surfaces and clean gutter faces in the same appointment for a more complete exterior result.",
    },
    {
      question: "Can you remove grease and oil from Plano driveways?",
      answer: "Yes. We pretreat stained sections before pressure washing to break down grease and oil and improve the overall appearance.",
    },
    {
      question: "How do I book power washing in Plano, TX?",
      answer: "Call (817) 585-6388 for a free quote and scheduling. We will recommend the right approach for your exterior surfaces.",
    },
  ],
  "mansfield-tx": [
    {
      question: "Do you clean new-build and older homes in Mansfield?",
      answer: "Yes. We service both new and established properties in Mansfield, adjusting methods based on material type, age, and existing staining.",
    },
    {
      question: "Can you treat red clay and rust stains on Mansfield concrete?",
      answer: "Yes. We apply targeted treatment and pressure washing to reduce red clay, rust, and general weather staining on driveway, patio, and porch concrete.",
    },
    {
      question: "Is roof cleaning in Mansfield done with high pressure?",
      answer: "No. Roof cleaning is performed with a soft wash process designed to remove algae and organic growth without damaging shingles.",
    },
    {
      question: "Do you remove mold and mildew from siding?",
      answer: "Yes. We use house-washing detergents and rinse techniques that remove mold, mildew, and dirt safely from common siding materials.",
    },
    {
      question: "How soon can I get service in Mansfield, TX?",
      answer: "Call (817) 585-6388 for a free quote. Scheduling is typically fast, with appointment timing based on weather and route availability.",
    },
  ],
  "bedford-tx": [
    {
      question: "What Bedford surfaces benefit most from power washing?",
      answer: "Driveways, patios, porches, sidewalks, and siding usually show the biggest visual improvement after cleaning, especially where algae and grime have built up over time.",
    },
    {
      question: "Can you remove cobwebs and wasp nests around eaves and porch areas?",
      answer: "Yes. We clear accessible cobwebs and wasp nests as part of detailed exterior cleaning in Bedford.",
    },
    {
      question: "Do you clean gutters as part of exterior service?",
      answer: "Yes. We clean exterior gutter faces to remove streaks and buildup so your roofline and trim look cleaner and more uniform.",
    },
    {
      question: "Will pressure washing help with oil spots on my Bedford driveway?",
      answer: "Yes. We pretreat and pressure wash stained concrete to improve oil and grease spots and restore a cleaner overall appearance.",
    },
    {
      question: "How do I schedule pressure washing in Bedford, TX?",
      answer: "Call (817) 585-6388 for a free estimate. We will review your property and recommend the best cleaning scope.",
    },
  ],
  "colleyville-tx": [
    {
      question: "Do you offer premium exterior cleaning for larger Colleyville homes?",
      answer: "Yes. We clean larger homes and estates with a staged process covering house washing, driveway and patio cleaning, roof soft washing, and gutter brightening.",
    },
    {
      question: "What stains are common in Colleyville?",
      answer: "We regularly treat algae, mold, organic growth, rust marks from irrigation, and red clay transfer on concrete and porch surfaces.",
    },
    {
      question: "Can you remove grease and oil from decorative concrete?",
      answer: "Yes. We use tailored pretreatment and pressure control to improve oil and grease staining while protecting the surface finish as much as possible.",
    },
    {
      question: "Do you include cobweb and wasp nest removal?",
      answer: "Yes. Accessible cobwebs and wasp nests are removed during service to leave a cleaner, safer-looking exterior.",
    },
    {
      question: "How do I get a quote for power washing in Colleyville, TX?",
      answer: "Call (817) 585-6388 for a free quote. We provide transparent pricing and scheduling options.",
    },
  ],
  "coppell-tx": [
    {
      question: "How often should I wash my exterior in Coppell?",
      answer: "For most Coppell homes, annual house washing and routine concrete cleaning every 12 to 18 months keeps algae, mold, and grime from becoming deeply set.",
    },
    {
      question: "Can you clean driveway and patio stains caused by oil and red clay?",
      answer: "Yes. We pretreat problem areas and pressure wash concrete to reduce oil, grease, red clay, and general dark buildup.",
    },
    {
      question: "Do you clean roof algae and gutter staining in Coppell, TX?",
      answer: "Yes. We soft wash roof surfaces and clean gutter faces to remove black streaks and restore a cleaner roofline.",
    },
    {
      question: "Is your process safe around landscaping and family areas?",
      answer: "Yes. We use surface-appropriate methods and careful rinsing around landscaping, patios, and entry zones.",
    },
    {
      question: "How can I schedule power washing in Coppell?",
      answer: "Call (817) 585-6388 for a free quote and fast scheduling options based on your location and service needs.",
    },
  ],
};

function getDefaultFaqs(cityName: string): FAQItem[] {
  return [
    {
      question: `How often should I schedule pressure washing in ${cityName}?`,
      answer: `Most homes in ${cityName} benefit from annual house washing and routine concrete cleaning every 12 to 18 months, depending on shade, moisture, and staining.`,
    },
    {
      question: `Can you remove oil, grease, rust, and red clay from driveways in ${cityName}?`,
      answer: "Yes. We pretreat stained areas and pressure wash concrete to reduce stubborn driveway and patio staining.",
    },
    {
      question: `Do you soft wash roofs and clean gutters in ${cityName}?`,
      answer: "Yes. Roof cleaning is done with soft wash methods to remove algae and organic growth, and we clean exterior gutter faces for a brighter finish.",
    },
    {
      question: "Is your cleaning process safe for home exteriors?",
      answer: "Yes. We choose the right pressure and detergents for each material, from delicate siding and painted trim to hard concrete surfaces.",
    },
    {
      question: `How do I request a quote in ${cityName}, TX?`,
      answer: "Call (817) 585-6388 for a free quote and scheduling options.",
    },
  ];
}

export default function CityPageTemplate({ cityName, stateName, slug }: CityPageProps) {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: `${cityName}, ${stateName}`, url: `/service-areas/${slug}` },
  ]);

  const cityServiceSchema = getCityServiceSchema(cityName, stateName);
  const faqItems = CITY_FAQS_BY_SLUG[slug] || getDefaultFaqs(cityName);
  const cityFAQSchema = getCityFAQSchema(cityName, faqItems);

  const cityContent = CITY_LOCAL_CONTENT[slug] || {
    localSpecifics: `Properties in ${cityName} require professional pressure washing to combat Texas weather conditions, organic growth, and exterior staining.`,
    nearbyAreas: [],
    projectSnippet: `Recent pressure washing project in ${cityName} restored curb appeal and property value.`,
  };

  const nearbyAreaSlugs =
    CITY_NEARBY_BY_SLUG[slug] ||
    cityContent.nearbyAreas ||
    SEO_CONSTANTS.SERVICE_AREA_CITIES.filter((city) => city.slug !== slug)
      .slice(0, 6)
      .map((city) => city.slug);

  const overview =
    CITY_OVERVIEW_BY_SLUG[slug] ||
    `Homes and businesses in ${cityName} face year-round buildup from dust, humidity, irrigation overspray, and seasonal organic debris. Our professional pressure washing and soft wash process removes grime safely while protecting your exterior materials.`;

  return (
    <div className="bg-canvas">
      <SEOHead
        title={`Pressure Washing in ${cityName}, ${stateName} | ${SEO_CONSTANTS.BUSINESS_NAME}`}
        description={`Pressure washing, soft washing and delicate stone cleaning in ${cityName}, ${stateName}. Driveways, patios, siding, roofs and gutters, plus commercial property. Call ${SEO_CONSTANTS.CONTACT.PHONE}.`}
        canonical={`/service-areas/${slug}`}
      />
      <SchemaOrg schema={[breadcrumbs, cityServiceSchema, cityFAQSchema]} />

      <Header />

      <main className="min-h-screen pt-header">
        {/* Hero ------------------------------------------------------------ */}
        <section className="border-b border-stone-200 bg-surface">
          <div className="mx-auto grid max-w-7xl items-center gap-gutter px-gutter py-section lg:grid-cols-2">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-step--1 text-ink-faint">
                  <li>
                    <Link href="/service-areas" className="hover:text-brand">
                      Service areas
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-ink-soft">
                    {cityName}, {stateName}
                  </li>
                </ol>
              </nav>

              <h1 className="text-step-5" data-testid="heading-city-title">
                Pressure washing in {cityName}, {stateName}
              </h1>
              <p className="mt-6 max-w-measure text-step-1 text-ink-soft">
                Exterior cleaning for homes and commercial property in {cityName},
                from {SEO_CONSTANTS.NAP.CITY}.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${SEO_CONSTANTS.CONTACT.PHONE_RAW}`}
                  className="inline-flex items-center gap-2 bg-brand px-6 py-3 text-step-0 font-medium text-white transition-colors hover:bg-brand-strong"
                  data-testid="button-call"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {SEO_CONSTANTS.CONTACT.PHONE}
                </a>
                <a
                  href={`mailto:${SEO_CONSTANTS.CONTACT.EMAIL}`}
                  className="inline-flex items-center gap-2 border border-stone-300 px-6 py-3 text-step-0 font-medium text-ink transition-colors hover:border-ink"
                  data-testid="button-email"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email us
                </a>
              </div>
            </div>

            <WorkImage
              slug="curved-concrete-walkway-after"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              aspect="aspect-[4/3]"
              className="shadow-lg"
            />
          </div>
        </section>

        {/* Long-form local copy --------------------------------------------- */}
        <section className="mx-auto max-w-7xl px-gutter py-section">
          <div className="grid gap-gutter lg:grid-cols-[1fr_1.4fr]">
            <h2 className="text-step-3">
              Exterior cleaning in {cityName}
            </h2>
            <div className="max-w-measure space-y-5 text-ink-soft">
              <p>
                {SEO_CONSTANTS.BUSINESS_NAME} cleans the surfaces that decide how a
                property in {cityName} looks from the street: driveway concrete,
                patios and porch entries, siding, rooflines and gutter faces. Every
                job starts by working out what the surface can take, because the
                pressure that strips a driveway will scar limestone and force water
                behind siding.
              </p>
              <p>
                The buildup here is predictable: algae and mould in shaded areas,
                rust and red clay on driveways and walkways, oil and grease near
                garages and trash pads. Each responds to different chemistry, and
                treating them properly is what keeps the result even instead of
                patchy.
              </p>
              <p>{overview}</p>
            </div>
          </div>
        </section>

        {/* Local conditions -------------------------------------------------- */}
        <section className="border-y border-stone-200 bg-surface-sunken">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <div className="grid gap-gutter lg:grid-cols-[1fr_1.4fr]">
              <h2 className="text-step-3">What {cityName} throws at a building</h2>
              <div className="max-w-measure space-y-5 text-ink-soft">
                <p>{cityContent.localSpecifics}</p>
                <p>{cityContent.projectSnippet}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services in this city --------------------------------------------- */}
        <section className="mx-auto max-w-7xl px-gutter py-section">
          <h2 className="text-step-3">Services in {cityName}</h2>
          <ul className="mt-8 grid gap-x-gutter gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {SEO_CONSTANTS.PRIMARY_SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-step-1 text-ink-soft underline-offset-4 hover:text-brand hover:underline"
                  data-testid={`city-service-${service.slug}`}
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-stone-200 pt-8">
            <p className="max-w-measure text-ink-soft">
              Limestone, Austin stone or flagstone on the property?{" "}
              <Link
                href="/services/delicate-stone-cleaning"
                className="text-brand underline underline-offset-4 hover:no-underline"
              >
                Delicate stone is cleaned differently
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Nearby ------------------------------------------------------------- */}
        <section className="border-y border-stone-200 bg-surface">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <div className="grid gap-gutter lg:grid-cols-[1fr_1.4fr]">
              <h2 className="flex items-start gap-3 text-step-3">
                <MapPin className="mt-2 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                Nearby areas
              </h2>
              <div>
                <p className="max-w-measure text-ink-soft">
                  If you are near {cityName}, we also serve these communities:
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  {nearbyAreaSlugs.slice(0, 6).map((areaSlug) => {
                    const area = SEO_CONSTANTS.SERVICE_AREA_CITIES.find((c) => c.slug === areaSlug);
                    if (!area) return null;
                    return (
                      <li key={areaSlug}>
                        <Link
                          href={`/service-areas/${areaSlug}`}
                          className="text-step-1 text-ink-soft underline-offset-4 hover:text-brand hover:underline"
                          data-testid={`link-nearby-${areaSlug}`}
                        >
                          {area.name}, {area.state}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href="/service-areas"
                  className="mt-8 inline-block text-step--1 font-medium uppercase tracking-wider text-brand underline-offset-4 hover:underline"
                >
                  All service areas &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ----------------------------------------------------------------- */}
        <section className="mx-auto max-w-7xl px-gutter py-section">
          <div className="grid gap-gutter lg:grid-cols-[1fr_1.4fr]">
            <h2 className="text-step-3">
              Questions from {cityName}
            </h2>
            <div className="divide-y divide-stone-200">
              {faqItems.map((faq, idx) => (
                <div key={idx} className="py-6 first:pt-0">
                  <h3 className="text-step-1">{faq.question}</h3>
                  <p className="mt-3 max-w-measure text-ink-soft">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA ------------------------------------------------------------------ */}
        <section className="border-t border-stone-200 bg-ink text-white">
          <div className="mx-auto max-w-7xl px-gutter py-section">
            <h2 className="max-w-[20ch] text-step-4 text-white">
              Free quote for {cityName}, {stateName}
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={`tel:${SEO_CONSTANTS.CONTACT.PHONE_RAW}`}
                className="inline-flex items-center gap-2 bg-white px-6 py-3 font-medium text-ink transition-colors hover:bg-stone-100"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SEO_CONSTANTS.CONTACT.PHONE}
              </a>
              <a
                href={`mailto:${SEO_CONSTANTS.CONTACT.EMAIL}`}
                className="text-white/70 underline-offset-4 hover:text-white hover:underline"
              >
                {SEO_CONSTANTS.CONTACT.EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
