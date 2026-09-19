import { useState, useMemo } from "react";
import { AlertCircle, Building, Building2, Car, Castle, CheckCircle, CircleAlert, CircleDot, Construction, Droplet, Fence, FlaskConical, Fuel, Gem, Home, Leaf, Loader2, ShieldCheck, Sparkles, TreePine, Triangle, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PRICING } from "@/config/pricing.config";
import { SEO_CONSTANTS } from "@/lib/seo-constants";

// ─── Types ────────────────────────────────────────────────────────────────────

type ServiceKey =
  | "house-wash"
  | "driveway"
  | "rust-clay-stain"
  | "gutter-cleaning"
  | "deck-patio"
  | "oil-grease-single"
  | "oil-grease-two"
  | "fence"
  | "concrete-sealing"
  | "roof"
  // Quoted on site rather than by the calculator - see CUSTOM_QUOTE_SERVICES.
  | "commercial"
  | "delicate-stone";

/** Priced on site: surface condition and access vary too much for a calculator. */
const CUSTOM_QUOTE_SERVICES: ServiceKey[] = ["commercial", "delicate-stone"];

type DirtLevel = "light" | "moderate" | "heavy";
type RoofTier = "under1500" | "r1800to2800" | "r3000to4000" | "r4200to5000" | "over5000";

interface Addons {
  sameWeek: boolean;
}

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

interface LineItem {
  label: string;
  amount: number;
}

interface PriceRange {
  low: number;
  high: number;
  subtotal: number;
  lineItems: LineItem[];
}

interface ServiceItem {
  id: string;
  service: ServiceKey;
  measurement: string;
  roofTier: RoofTier;
  dirtLevel: DirtLevel;
  price: PriceRange;
}

// ─── Service Config ───────────────────────────────────────────────────────────

const SERVICES: {
  key: ServiceKey;
  label: string;
  description: string;
  unit: string;
  icon: LucideIcon;
}[] = [
  { key: "house-wash",        label: "House Wash (Soft Wash)",            description: "Safe for all siding types",             unit: "sq ft",     icon: Home },
  { key: "driveway",          label: "Driveway / Concrete",               description: "High-pressure concrete cleaning",        unit: "sq ft",     icon: Car },
  { key: "rust-clay-stain",   label: "Rust / Red Clay Stain Treatment",   description: "Specialized stain removal treatment",    unit: "sq ft",     icon: Droplet },
  { key: "gutter-cleaning",   label: "Gutter Cleaning",                   description: "Clear debris from gutters & downspouts", unit: "linear ft", icon: Leaf },
  { key: "deck-patio",        label: "Deck / Patio",                      description: "Wood, composite, and stone surfaces",    unit: "sq ft",     icon: TreePine },
  { key: "oil-grease-single", label: "Oil/Grease Removal — Single Stage", description: "Single-pass degreaser treatment",        unit: "sq ft",     icon: Fuel },
  { key: "oil-grease-two",    label: "Oil/Grease Removal — Two Stage",    description: "Heavy-duty two-pass degreaser",          unit: "sq ft",     icon: FlaskConical },
  { key: "fence",             label: "Fence",                             description: "Wood, vinyl, and metal fencing",         unit: "linear ft", icon: Fence },
  { key: "concrete-sealing",  label: "Concrete Sealing",                  description: "Protect surfaces from future staining",  unit: "sq ft",     icon: ShieldCheck },
  { key: "roof",              label: "Roof Soft Wash",                    description: "Removes algae, moss, and staining",      unit: "flat rate", icon: Triangle },
  { key: "delicate-stone",    label: "Delicate Stone Cleaning",           description: "Limestone, Austin stone, flagstone, bluestone", unit: "custom quote", icon: Gem },
  { key: "commercial",        label: "Commercial Property",               description: "Lots, docks, storefronts, fleet, sidewalks", unit: "custom quote", icon: Building2 },
];

const DIRT_LEVELS: { key: DirtLevel; icon: LucideIcon; label: string; description: string; multiplier: number }[] = [
  { key: "light",    icon: Sparkles,    label: "Light",    description: "Minor dust and grime",           multiplier: PRICING.dirtLevel.light },
  { key: "moderate", icon: CircleDot,   label: "Moderate", description: "Visible stains, algae starting", multiplier: PRICING.dirtLevel.moderate },
  { key: "heavy",    icon: CircleAlert, label: "Heavy",    description: "Heavy buildup, black streaks",   multiplier: PRICING.dirtLevel.heavy },
];

const ROOF_TIERS: { key: RoofTier; label: string; icon: LucideIcon; price: string }[] = [
  { key: "under1500",   label: "1,500 sq ft & under",  icon: Building, price: `$${PRICING.roof.under1500}` },
  { key: "r1800to2800", label: "1,800 – 2,800 sq ft",  icon: Home, price: `$${PRICING.roof.r1800to2800}` },
  { key: "r3000to4000", label: "3,000 – 4,000 sq ft",  icon: Castle, price: `$${PRICING.roof.r3000to4000}` },
  { key: "r4200to5000", label: "4,200 – 5,000 sq ft",  icon: Construction, price: `$${PRICING.roof.r4200to5000}` },
  { key: "over5000",    label: "Over 5,000 sq ft",      icon: Building2, price: "Specialized Quote" },
];

// ─── Calculation ──────────────────────────────────────────────────────────────

function calcPrice(
  service: ServiceKey | "",
  measurement: string,
  roofTier: RoofTier,
  dirtLevel: DirtLevel,
): PriceRange | null {
  if (!service) return null;
  if (service === "roof" && roofTier === "over5000") return null;
  if (CUSTOM_QUOTE_SERVICES.includes(service)) return null;

  const sqft = parseFloat(measurement) || 0;
  if (service !== "roof" && sqft <= 0) return null;

  const lineItems: LineItem[] = [];
  let basePrice = 0;
  const serviceLabel = SERVICES.find((s) => s.key === service)?.label ?? service;

  switch (service) {
    case "house-wash": {
      const cfg = PRICING.services["house-wash"];
      basePrice = Math.max(cfg.ratePerSqFt * sqft, cfg.minimum);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} sq ft)`, amount: basePrice });
      break;
    }
    case "driveway": {
      const cfg = PRICING.services.driveway;
      basePrice = Math.max(cfg.ratePerSqFt * sqft, cfg.minimum);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} sq ft)`, amount: basePrice });
      break;
    }
    case "rust-clay-stain": {
      const cfg = PRICING.services["rust-clay-stain"];
      basePrice = Math.max(cfg.ratePerSqFt * sqft, cfg.minimum);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} sq ft)`, amount: basePrice });
      break;
    }
    case "gutter-cleaning": {
      const cfg = PRICING.services["gutter-cleaning"];
      basePrice = Math.max(cfg.ratePerLinearFt * sqft, cfg.minimum);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} linear ft)`, amount: basePrice });
      break;
    }
    case "deck-patio": {
      const cfg = PRICING.services["deck-patio"];
      basePrice = Math.max(cfg.ratePerSqFt * sqft, cfg.minimum);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} sq ft)`, amount: basePrice });
      break;
    }
    case "oil-grease-single": {
      const cfg = PRICING.services["oil-grease-single"];
      basePrice = Math.max(cfg.ratePerSqFt * sqft, cfg.minimum);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} sq ft)`, amount: basePrice });
      break;
    }
    case "oil-grease-two": {
      const cfg = PRICING.services["oil-grease-two"];
      basePrice = Math.max(cfg.ratePerSqFt * sqft, cfg.minimum);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} sq ft)`, amount: basePrice });
      break;
    }
    case "fence": {
      const cfg = PRICING.services.fence;
      basePrice = Math.max(cfg.ratePerLinearFt * sqft, cfg.minimum);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} linear ft)`, amount: basePrice });
      break;
    }
    case "concrete-sealing": {
      const cfg = PRICING.services["concrete-sealing"];
      basePrice = Math.max(cfg.ratePerSqFt * sqft, cfg.minimum);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} sq ft)`, amount: basePrice });
      break;
    }
    case "roof": {
      const roofPrices: Record<string, number> = {
        under1500:   PRICING.roof.under1500,
        r1800to2800: PRICING.roof.r1800to2800,
        r3000to4000: PRICING.roof.r3000to4000,
        r4200to5000: PRICING.roof.r4200to5000,
      };
      basePrice = roofPrices[roofTier] ?? 0;
      const tierLabel = ROOF_TIERS.find((t) => t.key === roofTier)?.label ?? "";
      lineItems.push({ label: `${serviceLabel} (${tierLabel})`, amount: basePrice });
      break;
    }
  }

  const dirtConfig = DIRT_LEVELS.find((d) => d.key === dirtLevel)!;
  const surcharge = basePrice * (dirtConfig.multiplier - 1);
  lineItems.push({ label: `${dirtConfig.label} dirt level surcharge (+${Math.round((dirtConfig.multiplier - 1) * 100)}%)`, amount: surcharge });
  basePrice *= dirtConfig.multiplier;

  return {
    low:      Math.floor(basePrice * PRICING.rangeVariance.low),
    high:     Math.ceil(basePrice * PRICING.rangeVariance.high),
    subtotal: basePrice,
    lineItems,
  };
}

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function QuoteCalculator() {
  // Accumulated quote items
  const [items, setItems]                     = useState<ServiceItem[]>([]);

  // Current service being configured
  const [selectedService, setSelectedService] = useState<ServiceKey | "">("");
  const [measurement, setMeasurement]         = useState("");
  const [roofTier, setRoofTier]               = useState<RoofTier>("under1500");
  const [dirtLevel, setDirtLevel]             = useState<DirtLevel>("light");

  // Whole-quote fields
  const [addons, setAddons]                   = useState<Addons>({ sameWeek: false });
  const [customer, setCustomer]               = useState<CustomerInfo>({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted]             = useState(false);
  const [isSubmitting, setIsSubmitting]       = useState(false);
  const [submitError, setSubmitError]         = useState("");

  const isCustomQuote =
    (selectedService === "roof" && roofTier === "over5000") ||
    (!!selectedService && CUSTOM_QUOTE_SERVICES.includes(selectedService));

  const selectedServiceConfig = SERVICES.find((s) => s.key === selectedService);
  const measurementUnit = selectedServiceConfig?.unit ?? "sq ft";
  const measurementReady =
    selectedService && CUSTOM_QUOTE_SERVICES.includes(selectedService)
      ? true
      : selectedService === "roof"
        ? roofTier !== "over5000"
        : parseFloat(measurement) > 0;

  // Price preview for the service currently being configured
  const currentPrice = useMemo(
    () => calcPrice(selectedService, measurement, roofTier, dirtLevel),
    [selectedService, measurement, roofTier, dirtLevel]
  );

  const canAddToQuote = !!currentPrice && !isCustomQuote;

  // Aggregate total across all added items
  const totalPrice = useMemo(() => {
    if (items.length === 0) return null;

    const allLineItems: LineItem[] = [];
    let subtotal = 0;

    for (const item of items) {
      allLineItems.push(...item.price.lineItems);
      subtotal += item.price.subtotal;
    }

    if (addons.sameWeek) {
      const cost = PRICING.addons.sameWeekScheduling.flat;
      allLineItems.push({ label: "Same-Week Scheduling", amount: cost });
      subtotal += cost;
    }

    return {
      low:      Math.floor(subtotal * PRICING.rangeVariance.low),
      high:     Math.ceil(subtotal * PRICING.rangeVariance.high),
      subtotal,
      lineItems: allLineItems,
    };
  }, [items, addons]);

  function handleAddToQuote() {
    if (!currentPrice || !selectedService || isCustomQuote) return;
    setItems((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).slice(2),
        service: selectedService,
        measurement,
        roofTier,
        dirtLevel,
        price: currentPrice,
      },
    ]);
    setSelectedService("");
    setMeasurement("");
    setRoofTier("under1500");
    setDirtLevel("light");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!totalPrice) return;
    setIsSubmitting(true);
    setSubmitError("");

    const payload = {
      customer,
      quote: {
        services: items.map((item) => ({
          service:     SERVICES.find((s) => s.key === item.service)?.label ?? item.service,
          measurement: item.service === "roof"
            ? ROOF_TIERS.find((t) => t.key === item.roofTier)?.label ?? ""
            : `${parseFloat(item.measurement).toLocaleString()} ${SERVICES.find((s) => s.key === item.service)?.unit ?? "sq ft"}`,
          dirtLevel:   DIRT_LEVELS.find((d) => d.key === item.dirtLevel)?.label ?? item.dirtLevel,
        })),
        addons:    addons.sameWeek ? ["Same-Week Scheduling"] : [],
        lineItems: totalPrice.lineItems,
        subtotal:  totalPrice.subtotal,
        priceLow:  totalPrice.low,
        priceHigh: totalPrice.high,
      },
    };

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send quote");
      }
      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const canSubmit = !!totalPrice && customer.name.trim() && customer.email.trim() && customer.phone.trim();

  function StepHeader({ n, label, active }: { n: number | string; label: string; active?: boolean }) {
    return (
      <div className="bg-brand-tint border-b border-stone-200 px-6 py-4 flex items-center gap-3">
        <span className={`text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${active !== false ? "bg-brand text-white" : "bg-stone-200 text-ink-faint"}`}>{n}</span>
        <h2 className={`font-semibold text-lg ${active !== false ? "text-ink" : "text-ink-faint"}`}>{label}</h2>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* ── Quote Summary ────────────────────────────────────────────────── */}
      {items.length > 0 && (
        <div className="bg-surface shadow-sm border border-stone-200 overflow-hidden">
          <div className="bg-brand-tint border-b border-stone-200 px-6 py-4 flex items-center gap-3">
            <span className="text-sm font-bold w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0">✓</span>
            <h2 className="font-semibold text-lg text-ink">
              Quote Items <span className="text-brand font-bold">({items.length})</span>
            </h2>
          </div>
          <div className="divide-y divide-stone-200">
            {items.map((item) => {
              const svc  = SERVICES.find((s) => s.key === item.service)!;
              const dirt = DIRT_LEVELS.find((d) => d.key === item.dirtLevel)!;
              const measurementLabel = item.service === "roof"
                ? ROOF_TIERS.find((t) => t.key === item.roofTier)?.label ?? ""
                : `${parseFloat(item.measurement).toLocaleString()} ${svc.unit}`;
              return (
                <div key={item.id} className="flex items-center gap-4 px-6 py-4">
                  <svc.icon className="h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-ink text-sm leading-tight">{svc.label}</p>
                    <p className="text-ink-faint text-xs mt-0.5">{measurementLabel}, {dirt.label} dirt</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-bold text-ink">{fmt(item.price.low)}–{fmt(item.price.high)}</p>
                  </div>
                  <button
                    onClick={() => setItems((prev) => prev.filter((i) => i.id !== item.id))}
                    className="ml-1 p-1.5 rounded-lg hover:bg-red-50 hover:text-red-500 text-ink-faint transition-colors flex-shrink-0"
                    title="Remove"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Step 1: Choose Service ───────────────────────────────────────── */}
      <div className="bg-surface shadow-sm border border-stone-200 overflow-hidden">
        <StepHeader
          n={items.length === 0 ? 1 : "+"}
          label={items.length === 0 ? "Choose Your Service" : "Add Another Service"}
        />
        <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {SERVICES.map((s) => (
            <button
              key={s.key}
              onClick={() => { setSelectedService(s.key); setMeasurement(""); }}
              className={`relative border-2 p-4 text-left transition-colors duration-150 hover:border-brand hover:bg-brand-tint ${
                selectedService === s.key ? "border-brand bg-brand-tint shadow-sm" : "border-stone-300 bg-surface"
              }`}
            >
              {selectedService === s.key && (
                <CheckCircle className="absolute top-2 right-2 h-4 w-4 text-brand" />
              )}
              <s.icon className="mb-2 h-6 w-6 text-brand" aria-hidden="true" />
              <div className="font-semibold text-ink text-sm leading-tight">{s.label}</div>
              <div className="text-ink-faint text-xs mt-1 leading-tight">{s.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Services we never price from a form: straight to a human ────── */}
      {selectedService && CUSTOM_QUOTE_SERVICES.includes(selectedService) && (
        <div className="bg-surface shadow-sm border border-stone-200 overflow-hidden">
          <StepHeader n={items.length === 0 ? 2 : "\u203a"} label="Free On-Site Estimate" />
          <div className="p-6">
            <p className="text-ink-soft">
              {selectedService === "commercial"
                ? "Commercial pricing depends on square footage, surface type and how often the work recurs \u2014 so it is quoted on site rather than from a form."
                : "Delicate stone is quoted after we see it. The stone type, its finish and what has stained it all change the approach, and guessing a price would mean guessing the method."}
            </p>
            <p className="mt-3 text-ink-soft">
              Tell us what you have and we will give you a real number. Estimates are free.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={SEO_CONSTANTS.CONTACT.PHONE_TEL}
                className="inline-flex items-center justify-center gap-2  bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-strong"
                data-testid="custom-quote-call"
              >
                Call {SEO_CONSTANTS.CONTACT.PHONE}
              </a>
              <a
                href="mailto:joshua.dfwpristine@gmail.com?subject=Estimate%20request"
                className="inline-flex items-center justify-center gap-2  border-2 border-stone-300 px-6 py-3 font-semibold text-ink transition-colors hover:border-brand hover:bg-brand-tint"
                data-testid="custom-quote-email"
              >
                Email for an estimate
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 2: Measurements ────────────────────────────────────────── */}
      {selectedService && !CUSTOM_QUOTE_SERVICES.includes(selectedService) && (
        <div className="bg-surface shadow-sm border border-stone-200 overflow-hidden">
          <StepHeader n={items.length === 0 ? 2 : "›"} label="Enter Measurements" />
          <div className="p-6">
            {selectedService === "roof" ? (
              <div>
                <p className="text-ink-soft mb-4 text-sm">Select your approximate roof size:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {ROOF_TIERS.map((tier) => (
                    <button
                      key={tier.key}
                      onClick={() => setRoofTier(tier.key)}
                      className={`border-2 p-4 text-center transition-colors ${
                        roofTier === tier.key
                          ? "border-brand bg-brand-tint"
                          : "border-stone-300 hover:border-brand hover:bg-brand-tint"
                      }`}
                    >
                      <tier.icon className="mb-1 h-6 w-6 text-brand" aria-hidden="true" />
                      <div className="font-semibold text-ink text-sm leading-tight">{tier.label}</div>
                      <div className={`font-bold mt-1 text-sm ${tier.key === "over5000" ? "text-orange-500" : "text-brand"}`}>
                        {tier.price}
                      </div>
                    </button>
                  ))}
                </div>
                {roofTier === "over5000" && (
                  <div className="mt-4 bg-orange-50 border border-orange-200  px-5 py-4 text-sm text-orange-800">
                    <strong>Large roof — specialized quote required.</strong> Roofs over 5,000 sq ft require an on-site assessment.
                    Please <a href={SEO_CONSTANTS.CONTACT.PHONE_TEL} className="underline font-semibold">call {SEO_CONSTANTS.CONTACT.PHONE}</a> or{" "}
                    <a href="mailto:joshua.dfwpristine@gmail.com?subject=Estimate%20request" className="underline font-semibold">email us</a> for a free estimate.
                  </div>
                )}
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-ink-soft mb-2">
                  Total {measurementUnit === "linear ft" ? "linear footage" : "square footage"} to be cleaned
                </label>
                <div className="relative max-w-xs">
                  <input
                    type="number"
                    min="1"
                    value={measurement}
                    onChange={(e) => setMeasurement(e.target.value)}
                    placeholder={`e.g. ${measurementUnit === "sq ft" ? "2000" : "150"}`}
                    className="w-full border-2 border-stone-300 rounded-lg px-4 py-3 text-lg font-semibold focus:border-brand transition-colors pr-24"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint text-sm font-medium">
                    {measurementUnit}
                  </span>
                </div>
                <p className="text-xs text-ink-faint mt-2">
                  {measurementUnit === "linear ft"
                    ? "Tip: measure the total length to be cleaned."
                    : "Tip: multiply length × width to get square footage."}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Step 3: Dirt Level ──────────────────────────────────────────── */}
      {selectedService && measurementReady && !isCustomQuote && (
        <div className="bg-surface shadow-sm border border-stone-200 overflow-hidden">
          <StepHeader n={items.length === 0 ? 3 : "›"} label="How Dirty Is It?" />
          <div className="p-6">
            <div className="grid grid-cols-3 gap-3">
              {DIRT_LEVELS.map((d) => (
                <button
                  key={d.key}
                  onClick={() => setDirtLevel(d.key)}
                  className={`border-2 p-4 text-center transition-colors ${
                    dirtLevel === d.key
                      ? "border-brand bg-brand-tint"
                      : "border-stone-300 hover:border-brand hover:bg-brand-tint"
                  }`}
                >
                  <d.icon className="mx-auto mb-1 h-5 w-5 text-brand" aria-hidden="true" />
                  <div className="font-semibold text-ink text-sm">{d.label}</div>
                  <div className="text-ink-faint text-xs mt-1">{d.description}</div>
                  <div className="text-orange-500 text-xs font-semibold mt-1">
                    +{Math.round((d.multiplier - 1) * 100)}%
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-5">
              <button
                onClick={handleAddToQuote}
                disabled={!canAddToQuote}
                className="w-full bg-brand hover:bg-brand-strong disabled:bg-stone-200 disabled:text-ink-faint disabled:cursor-not-allowed text-white font-bold py-3 px-6  text-base transition-colors"
              >
                {currentPrice
                  ? `+ Add to Quote (${fmt(currentPrice.low)}–${fmt(currentPrice.high)})`
                  : "+ Add to Quote"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Add-on Services ─────────────────────────────────────────────── */}
      {items.length > 0 && (
        <div className="bg-surface shadow-sm border border-stone-200 overflow-hidden">
          <StepHeader n={2} label="Add-On Services" />
          <div className="p-6">
            <label className={`flex items-start gap-4 p-4 border-2 cursor-pointer transition-colors ${addons.sameWeek ? "border-brand bg-brand-tint" : "border-stone-300 hover:border-brand"}`}>
              <input
                type="checkbox"
                checked={addons.sameWeek}
                onChange={() => setAddons((prev) => ({ ...prev, sameWeek: !prev.sameWeek }))}
                className="mt-0.5 h-4 w-4 accent-[hsl(var(--brand))] flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-ink text-sm">Same-Week Scheduling</span>
                  <span className="text-brand font-bold text-sm ml-2">+{fmt(PRICING.addons.sameWeekScheduling.flat)}</span>
                </div>
                <p className="text-ink-faint text-xs mt-0.5">Priority scheduling within the current week</p>
              </div>
            </label>
          </div>
        </div>
      )}

      {/* ── Total Price Range ────────────────────────────────────────────── */}
      {totalPrice && (
        <div className="bg-surface shadow-sm border border-stone-200 overflow-hidden">
          <div className="bg-ink px-6 py-5">
            <p className="text-white/70 text-sm font-medium">
              Total estimated price range · {items.length} {items.length === 1 ? "service" : "services"}
            </p>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="font-display text-white text-step-4 font-semibold">{fmt(totalPrice.low)}</span>
              <span className="text-white/60 text-2xl">–</span>
              <span className="font-display text-white text-step-4 font-semibold">{fmt(totalPrice.high)}</span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-sm font-semibold text-ink-soft mb-3">Full Breakdown</p>
            <div className="space-y-2">
              {totalPrice.lineItems.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <span className="text-ink-soft">{item.label}</span>
                  <span className="font-semibold text-ink">{fmt(item.amount)}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-stone-200 flex justify-between items-center">
              <span className="text-xs text-ink-faint italic">Range accounts for on-site variables</span>
              <span className="text-sm font-bold text-ink-faint">{fmt(totalPrice.low)} – {fmt(totalPrice.high)}</span>
            </div>
          </div>
        </div>
      )}

      {/* ── No Price Yet Placeholder ─────────────────────────────────────── */}
      {!totalPrice && !isCustomQuote && (
        <div className="bg-surface shadow-sm border-2 border-dashed border-stone-300 p-8 text-center">
          
          <p className="text-ink-faint font-medium">Select a service, enter measurements, and click "Add to Quote" to build your estimate.</p>
        </div>
      )}

      {/* ── Email Quote Form ─────────────────────────────────────────────── */}
      {submitted ? (
        <div className="bg-surface shadow-sm border border-success/40 p-8 text-center">
          <CheckCircle className="h-14 w-14 text-success mx-auto mb-4" aria-hidden="true" />
          <h3 className="text-xl font-bold text-ink mb-2">Quote Sent!</h3>
          <p className="text-ink-soft mb-1">
            We emailed your itemized estimate to <strong>{customer.email}</strong>.
          </p>
          <p className="text-ink-faint text-sm">
            Our team will follow up shortly. Questions? Call us at&nbsp;
            <a href={SEO_CONSTANTS.CONTACT.PHONE_TEL} className="text-brand font-semibold">{SEO_CONSTANTS.CONTACT.PHONE}</a>.
          </p>
        </div>
      ) : isCustomQuote && items.length === 0 ? null : (
        /* Someone on a custom-quote service has nothing to email until they add
           a priced item, so this form would only read "unlock" at them. */
        <div className="bg-surface shadow-sm border border-stone-200 overflow-hidden">
          <StepHeader n={3} label="Email My Quote" active={!!totalPrice} />
          {!totalPrice && (
            <p className="px-6 pb-2 text-xs text-ink-faint bg-brand-tint border-b border-stone-200">
              Add at least one service above to unlock
            </p>
          )}
          <div className={`p-6 transition-opacity ${totalPrice ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
            <p className="text-ink-soft text-sm mb-5">
              Enter your info and we'll email you a full itemized quote — plus our team will follow up to confirm details.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-ink-soft mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={customer.name}
                    onChange={(e) => setCustomer((p) => ({ ...p, name: e.target.value }))}
                    placeholder="John Smith"
                    className="w-full border-2 border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:border-brand transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-soft mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={customer.phone}
                    onChange={(e) => setCustomer((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="(817) 555-0100"
                    className="w-full border-2 border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:border-brand transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-soft mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  value={customer.email}
                  onChange={(e) => setCustomer((p) => ({ ...p, email: e.target.value }))}
                  placeholder="john@example.com"
                  className="w-full border-2 border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:border-brand transition-colors"
                />
              </div>

              {submitError && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className="flex w-full items-center justify-center gap-2 bg-success px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-success-strong disabled:cursor-not-allowed disabled:bg-stone-200 disabled:text-ink-faint"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : ( "Email My Quote"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── Disclaimer ──────────────────────────────────────────────────── */}
      <p className="text-center text-xs text-ink-faint italic px-4">
        Final pricing may vary based on site conditions. This is an estimate only. A member of our team will confirm the final price before any work begins.
      </p>
    </div>
  );
}
