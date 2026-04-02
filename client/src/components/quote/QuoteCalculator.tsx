import { useState, useMemo } from "react";
import { CheckCircle, AlertCircle, Loader2, X } from "lucide-react";
import { PRICING } from "@/config/pricing.config";

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
  | "roof";

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
  icon: string;
}[] = [
  { key: "house-wash",        label: "House Wash (Soft Wash)",            description: "Safe for all siding types",             unit: "sq ft",     icon: "🏠" },
  { key: "driveway",          label: "Driveway / Concrete",               description: "High-pressure concrete cleaning",        unit: "sq ft",     icon: "🚗" },
  { key: "rust-clay-stain",   label: "Rust / Red Clay Stain Treatment",   description: "Specialized stain removal treatment",    unit: "sq ft",     icon: "🟤" },
  { key: "gutter-cleaning",   label: "Gutter Cleaning",                   description: "Clear debris from gutters & downspouts", unit: "linear ft", icon: "🍂" },
  { key: "deck-patio",        label: "Deck / Patio",                      description: "Wood, composite, and stone surfaces",    unit: "sq ft",     icon: "🪵" },
  { key: "oil-grease-single", label: "Oil/Grease Removal — Single Stage", description: "Single-pass degreaser treatment",        unit: "sq ft",     icon: "🛢️" },
  { key: "oil-grease-two",    label: "Oil/Grease Removal — Two Stage",    description: "Heavy-duty two-pass degreaser",          unit: "sq ft",     icon: "⚗️" },
  { key: "fence",             label: "Fence",                             description: "Wood, vinyl, and metal fencing",         unit: "linear ft", icon: "🔲" },
  { key: "concrete-sealing",  label: "Concrete Sealing",                  description: "Protect surfaces from future staining",  unit: "sq ft",     icon: "🛡️" },
  { key: "roof",              label: "Roof Soft Wash",                    description: "Removes algae, moss, and staining",      unit: "flat rate", icon: "🏡" },
];

const DIRT_LEVELS: { key: DirtLevel; label: string; description: string; multiplier: number }[] = [
  { key: "light",    label: "Light",    description: "Minor dust and grime",           multiplier: PRICING.dirtLevel.light },
  { key: "moderate", label: "Moderate", description: "Visible stains, algae starting", multiplier: PRICING.dirtLevel.moderate },
  { key: "heavy",    label: "Heavy",    description: "Heavy buildup, black streaks",   multiplier: PRICING.dirtLevel.heavy },
];

const ROOF_TIERS: { key: RoofTier; label: string; icon: string; price: string }[] = [
  { key: "under1500",   label: "1,500 sq ft & under",  icon: "🏘️", price: `$${PRICING.roof.under1500}` },
  { key: "r1800to2800", label: "1,800 – 2,800 sq ft",  icon: "🏠", price: `$${PRICING.roof.r1800to2800}` },
  { key: "r3000to4000", label: "3,000 – 4,000 sq ft",  icon: "🏰", price: `$${PRICING.roof.r3000to4000}` },
  { key: "r4200to5000", label: "4,200 – 5,000 sq ft",  icon: "🏗️", price: `$${PRICING.roof.r4200to5000}` },
  { key: "over5000",    label: "Over 5,000 sq ft",      icon: "🏢", price: "Specialized Quote" },
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

  const isCustomQuote = selectedService === "roof" && roofTier === "over5000";

  const selectedServiceConfig = SERVICES.find((s) => s.key === selectedService);
  const measurementUnit = selectedServiceConfig?.unit ?? "sq ft";
  const measurementReady = selectedService === "roof"
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
      <div className="bg-blue-50 border-b border-blue-100 px-6 py-4 flex items-center gap-3">
        <span className={`text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${active !== false ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-400"}`}>{n}</span>
        <h2 className={`font-semibold text-lg ${active !== false ? "text-gray-900" : "text-gray-400"}`}>{label}</h2>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* ── Quote Summary ────────────────────────────────────────────────── */}
      {items.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-blue-50 border-b border-blue-100 px-6 py-4 flex items-center gap-3">
            <span className="text-sm font-bold w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">✓</span>
            <h2 className="font-semibold text-lg text-gray-900">
              Quote Items <span className="text-blue-600 font-bold">({items.length})</span>
            </h2>
          </div>
          <div className="divide-y divide-slate-100">
            {items.map((item) => {
              const svc  = SERVICES.find((s) => s.key === item.service)!;
              const dirt = DIRT_LEVELS.find((d) => d.key === item.dirtLevel)!;
              const measurementLabel = item.service === "roof"
                ? ROOF_TIERS.find((t) => t.key === item.roofTier)?.label ?? ""
                : `${parseFloat(item.measurement).toLocaleString()} ${svc.unit}`;
              return (
                <div key={item.id} className="flex items-center gap-4 px-6 py-4">
                  <span className="text-2xl flex-shrink-0">{svc.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm leading-tight">{svc.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{measurementLabel} · {dirt.label} dirt</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-bold text-gray-800">{fmt(item.price.low)}–{fmt(item.price.high)}</p>
                  </div>
                  <button
                    onClick={() => setItems((prev) => prev.filter((i) => i.id !== item.id))}
                    className="ml-1 p-1.5 rounded-lg hover:bg-red-50 hover:text-red-500 text-slate-400 transition-colors flex-shrink-0"
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
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <StepHeader
          n={items.length === 0 ? 1 : "+"}
          label={items.length === 0 ? "Choose Your Service" : "Add Another Service"}
        />
        <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {SERVICES.map((s) => (
            <button
              key={s.key}
              onClick={() => { setSelectedService(s.key); setMeasurement(""); }}
              className={`relative rounded-xl border-2 p-4 text-left transition-all duration-150 hover:border-blue-400 hover:bg-blue-50 focus:outline-none ${
                selectedService === s.key ? "border-blue-500 bg-blue-50 shadow-sm" : "border-slate-200 bg-white"
              }`}
            >
              {selectedService === s.key && (
                <CheckCircle className="absolute top-2 right-2 h-4 w-4 text-blue-500" />
              )}
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-semibold text-gray-900 text-sm leading-tight">{s.label}</div>
              <div className="text-gray-500 text-xs mt-1 leading-tight">{s.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Step 2: Measurements ────────────────────────────────────────── */}
      {selectedService && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <StepHeader n={items.length === 0 ? 2 : "›"} label="Enter Measurements" />
          <div className="p-6">
            {selectedService === "roof" ? (
              <div>
                <p className="text-gray-600 mb-4 text-sm">Select your approximate roof size:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {ROOF_TIERS.map((tier) => (
                    <button
                      key={tier.key}
                      onClick={() => setRoofTier(tier.key)}
                      className={`rounded-xl border-2 p-4 text-center transition-all ${
                        roofTier === tier.key
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                      }`}
                    >
                      <div className="text-2xl mb-1">{tier.icon}</div>
                      <div className="font-semibold text-gray-900 text-sm leading-tight">{tier.label}</div>
                      <div className={`font-bold mt-1 text-sm ${tier.key === "over5000" ? "text-orange-500" : "text-blue-600"}`}>
                        {tier.price}
                      </div>
                    </button>
                  ))}
                </div>
                {roofTier === "over5000" && (
                  <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl px-5 py-4 text-sm text-orange-800">
                    <strong>Large roof — specialized quote required.</strong> Roofs over 5,000 sq ft require an on-site assessment.
                    Please <a href="tel:+18175856388" className="underline font-semibold">call us at (817) 585-6388</a> or
                    fill out the contact form below for a free estimate.
                  </div>
                )}
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total {measurementUnit === "linear ft" ? "linear footage" : "square footage"} to be cleaned
                </label>
                <div className="relative max-w-xs">
                  <input
                    type="number"
                    min="1"
                    value={measurement}
                    onChange={(e) => setMeasurement(e.target.value)}
                    placeholder={`e.g. ${measurementUnit === "sq ft" ? "2000" : "150"}`}
                    className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-lg font-semibold focus:border-blue-500 focus:outline-none transition-colors pr-24"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                    {measurementUnit}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-2">
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
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <StepHeader n={items.length === 0 ? 3 : "›"} label="How Dirty Is It?" />
          <div className="p-6">
            <div className="grid grid-cols-3 gap-3">
              {DIRT_LEVELS.map((d) => (
                <button
                  key={d.key}
                  onClick={() => setDirtLevel(d.key)}
                  className={`rounded-xl border-2 p-4 text-center transition-all ${
                    dirtLevel === d.key
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  <div className="text-xl mb-1">
                    {d.key === "light" ? "✨" : d.key === "moderate" ? "🟡" : "🔴"}
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">{d.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{d.description}</div>
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
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl text-base transition-colors"
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
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <StepHeader n={2} label="Add-On Services" />
          <div className="p-6">
            <label className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${addons.sameWeek ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-blue-200"}`}>
              <input
                type="checkbox"
                checked={addons.sameWeek}
                onChange={() => setAddons((prev) => ({ ...prev, sameWeek: !prev.sameWeek }))}
                className="mt-0.5 h-4 w-4 accent-blue-600 flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-gray-900 text-sm">Same-Week Scheduling</span>
                  <span className="text-blue-600 font-bold text-sm ml-2">+{fmt(PRICING.addons.sameWeekScheduling.flat)}</span>
                </div>
                <p className="text-gray-500 text-xs mt-0.5">Priority scheduling within the current week</p>
              </div>
            </label>
          </div>
        </div>
      )}

      {/* ── Total Price Range ────────────────────────────────────────────── */}
      {totalPrice && (
        <div className="bg-white rounded-2xl shadow-sm border-2 border-green-400 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
            <p className="text-white/80 text-sm font-medium uppercase tracking-wide">
              Total Estimated Price Range · {items.length} {items.length === 1 ? "service" : "services"}
            </p>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="text-white text-4xl font-extrabold">{fmt(totalPrice.low)}</span>
              <span className="text-white/70 text-2xl font-light">–</span>
              <span className="text-white text-4xl font-extrabold">{fmt(totalPrice.high)}</span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">Full Breakdown</p>
            <div className="space-y-2">
              {totalPrice.lineItems.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-semibold text-gray-900">{fmt(item.amount)}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs text-gray-400 italic">Range accounts for on-site variables</span>
              <span className="text-sm font-bold text-gray-500">{fmt(totalPrice.low)} – {fmt(totalPrice.high)}</span>
            </div>
          </div>
        </div>
      )}

      {/* ── No Price Yet Placeholder ─────────────────────────────────────── */}
      {!totalPrice && !isCustomQuote && (
        <div className="bg-white rounded-2xl shadow-sm border-2 border-dashed border-slate-200 p-8 text-center">
          <div className="text-4xl mb-3">💲</div>
          <p className="text-gray-500 font-medium">Select a service, enter measurements, and click "Add to Quote" to build your estimate.</p>
        </div>
      )}

      {/* ── Email Quote Form ─────────────────────────────────────────────── */}
      {submitted ? (
        <div className="bg-white rounded-2xl shadow-sm border-2 border-green-300 p-8 text-center">
          <CheckCircle className="h-14 w-14 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Sent!</h3>
          <p className="text-gray-600 mb-1">
            We emailed your itemized estimate to <strong>{customer.email}</strong>.
          </p>
          <p className="text-gray-500 text-sm">
            Our team will follow up shortly. Questions? Call us at&nbsp;
            <a href="tel:+18175856388" className="text-blue-600 font-semibold">(817) 585-6388</a>.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <StepHeader n={3} label="Email My Quote" active={!!totalPrice} />
          {!totalPrice && (
            <p className="px-6 pb-2 text-xs text-gray-400 bg-blue-50 border-b border-blue-100">
              Add at least one service above to unlock
            </p>
          )}
          <div className={`p-6 transition-opacity ${totalPrice ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
            <p className="text-gray-600 text-sm mb-5">
              Enter your info and we'll email you a full itemized quote — plus our team will follow up to confirm details.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={customer.name}
                    onChange={(e) => setCustomer((p) => ({ ...p, name: e.target.value }))}
                    placeholder="John Smith"
                    className="w-full border-2 border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={customer.phone}
                    onChange={(e) => setCustomer((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="(817) 555-0100"
                    className="w-full border-2 border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  value={customer.email}
                  onChange={(e) => setCustomer((p) => ({ ...p, email: e.target.value }))}
                  placeholder="john@example.com"
                  className="w-full border-2 border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none transition-colors"
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
                className="w-full bg-[hsl(142,76%,36%)] hover:bg-[hsl(142,76%,32%)] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-xl text-base transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "📧 Email My Quote"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── Disclaimer ──────────────────────────────────────────────────── */}
      <p className="text-center text-xs text-gray-400 italic px-4">
        Final pricing may vary based on site conditions. This is an estimate only. A member of our team will confirm the final price before any work begins.
      </p>
    </div>
  );
}
