import { useState, useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, ChevronDown, AlertCircle, Loader2, Phone } from "lucide-react";
import logoImage from "@assets/logo2.png";

// ─── Types ────────────────────────────────────────────────────────────────────

type ServiceKey =
  | "house-wash"
  | "driveway"
  | "deck-patio"
  | "fence"
  | "roof"
  | "sidewalk";

type DirtLevel = "light" | "moderate" | "heavy";
type RoofSize = "under" | "over";

interface Addons {
  gutterCleaning: boolean;
  gutterLinearFt: string;
  concreteSealing: boolean;
  stainTreatment: boolean;
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

// ─── Service Config ───────────────────────────────────────────────────────────

const SERVICES: {
  key: ServiceKey;
  label: string;
  description: string;
  unit: string;
  icon: string;
}[] = [
  {
    key: "house-wash",
    label: "House Wash",
    description: "Soft wash — safe for all siding types",
    unit: "sq ft",
    icon: "🏠",
  },
  {
    key: "driveway",
    label: "Driveway / Concrete",
    description: "High-pressure concrete cleaning",
    unit: "sq ft",
    icon: "🚗",
  },
  {
    key: "deck-patio",
    label: "Deck / Patio",
    description: "Wood, composite, and stone surfaces",
    unit: "sq ft",
    icon: "🪵",
  },
  {
    key: "fence",
    label: "Fence",
    description: "Wood, vinyl, and metal fencing",
    unit: "linear ft",
    icon: "🔲",
  },
  {
    key: "roof",
    label: "Roof Soft Wash",
    description: "Removes algae, moss, and staining",
    unit: "flat rate",
    icon: "🏡",
  },
  {
    key: "sidewalk",
    label: "Sidewalk / Walkway",
    description: "Entry walks, paths, and borders",
    unit: "sq ft",
    icon: "🚶",
  },
];

const DIRT_LEVELS: { key: DirtLevel; label: string; description: string; multiplier: number }[] =
  [
    { key: "light", label: "Light", description: "Minor dust and grime", multiplier: 1.0 },
    { key: "moderate", label: "Moderate", description: "Visible stains, algae starting", multiplier: 1.15 },
    { key: "heavy", label: "Heavy", description: "Heavy buildup, black streaks", multiplier: 1.3 },
  ];

// ─── Calculation ──────────────────────────────────────────────────────────────

function calcPrice(
  service: ServiceKey | "",
  measurement: string,
  roofSize: RoofSize,
  dirtLevel: DirtLevel,
  addons: Addons
): PriceRange | null {
  if (!service) return null;

  const sqft = parseFloat(measurement) || 0;

  if (service !== "roof" && sqft <= 0) return null;

  const lineItems: LineItem[] = [];
  let basePrice = 0;

  const serviceLabel = SERVICES.find((s) => s.key === service)?.label ?? service;

  switch (service) {
    case "house-wash":
      basePrice = Math.max(0.2 * sqft, 250);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} sq ft)`, amount: basePrice });
      break;
    case "driveway":
      basePrice = Math.max(0.15 * sqft, 89);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} sq ft)`, amount: basePrice });
      break;
    case "deck-patio":
      basePrice = Math.max(0.35 * sqft, 150);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} sq ft)`, amount: basePrice });
      break;
    case "fence":
      basePrice = Math.max(0.25 * sqft, 100);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} linear ft)`, amount: basePrice });
      break;
    case "roof":
      basePrice = roofSize === "under" ? 350 : 600;
      lineItems.push({ label: `${serviceLabel} (${roofSize === "under" ? "under" : "over"} 1,500 sq ft)`, amount: basePrice });
      break;
    case "sidewalk":
      basePrice = Math.max(0.15 * sqft, 75);
      lineItems.push({ label: `${serviceLabel} (${sqft.toLocaleString()} sq ft)`, amount: basePrice });
      break;
  }

  const dirtConfig = DIRT_LEVELS.find((d) => d.key === dirtLevel)!;
  if (dirtConfig.multiplier !== 1.0) {
    const surcharge = basePrice * (dirtConfig.multiplier - 1);
    lineItems.push({ label: `${dirtConfig.label} dirt level surcharge`, amount: surcharge });
    basePrice *= dirtConfig.multiplier;
  }

  let addonsTotal = 0;

  if (addons.gutterCleaning) {
    const gutterFt = parseFloat(addons.gutterLinearFt) || 0;
    if (gutterFt > 0) {
      const cost = 1.5 * gutterFt;
      lineItems.push({ label: `Gutter Cleaning (${gutterFt} linear ft)`, amount: cost });
      addonsTotal += cost;
    }
  }

  if (addons.concreteSealing && sqft > 0 && service !== "fence" && service !== "roof") {
    const cost = 0.5 * sqft;
    lineItems.push({ label: `Concrete Sealing (${sqft.toLocaleString()} sq ft)`, amount: cost });
    addonsTotal += cost;
  }

  if (addons.stainTreatment) {
    lineItems.push({ label: "Stain Treatment", amount: 50 });
    addonsTotal += 50;
  }

  if (addons.sameWeek) {
    lineItems.push({ label: "Same-Week Scheduling", amount: 25 });
    addonsTotal += 25;
  }

  const subtotal = basePrice + addonsTotal;

  return {
    low: Math.floor(subtotal * 0.95),
    high: Math.ceil(subtotal * 1.1),
    subtotal,
    lineItems,
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function QuotePreview() {
  const [selectedService, setSelectedService] = useState<ServiceKey | "">("");
  const [measurement, setMeasurement] = useState("");
  const [roofSize, setRoofSize] = useState<RoofSize>("under");
  const [dirtLevel, setDirtLevel] = useState<DirtLevel>("light");
  const [addons, setAddons] = useState<Addons>({
    gutterCleaning: false,
    gutterLinearFt: "",
    concreteSealing: false,
    stainTreatment: false,
    sameWeek: false,
  });
  const [customer, setCustomer] = useState<CustomerInfo>({ name: "", email: "", phone: "" });
  const [priceRange, setPriceRange] = useState<PriceRange | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const result = calcPrice(selectedService, measurement, roofSize, dirtLevel, addons);
    setPriceRange(result);
  }, [selectedService, measurement, roofSize, dirtLevel, addons]);

  const selectedServiceConfig = SERVICES.find((s) => s.key === selectedService);
  const measurementUnit = selectedServiceConfig?.unit ?? "sq ft";

  function handleAddonToggle(key: keyof Omit<Addons, "gutterLinearFt">) {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!priceRange || !selectedService) return;

    setIsSubmitting(true);
    setSubmitError("");

    const service = SERVICES.find((s) => s.key === selectedService);
    const dirtConfig = DIRT_LEVELS.find((d) => d.key === dirtLevel)!;
    const addonsLabels: string[] = [];
    if (addons.gutterCleaning) addonsLabels.push("Gutter Cleaning");
    if (addons.concreteSealing) addonsLabels.push("Concrete Sealing");
    if (addons.stainTreatment) addonsLabels.push("Stain Treatment");
    if (addons.sameWeek) addonsLabels.push("Same-Week Scheduling");

    const measurementLabel =
      selectedService === "roof"
        ? roofSize === "under"
          ? "Under 1,500 sq ft"
          : "Over 1,500 sq ft"
        : `${parseFloat(measurement).toLocaleString()} ${measurementUnit}`;

    const payload = {
      customer,
      quote: {
        service: service?.label ?? selectedService,
        measurement: measurementLabel,
        dirtLevel: dirtConfig.label,
        addons: addonsLabels,
        lineItems: priceRange.lineItems,
        subtotal: priceRange.subtotal,
        priceLow: priceRange.low,
        priceHigh: priceRange.high,
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

  const canSeePrice = !!priceRange;
  const canSubmit =
    canSeePrice &&
    customer.name.trim() &&
    customer.email.trim() &&
    customer.phone.trim();

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* ── Minimal Header ──────────────────────────────────────── */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <img src={logoImage} alt="DFW Pristine Power Washing" className="h-16 w-auto object-contain" />
          </Link>
          <a
            href="tel:+18175856388"
            className="flex items-center gap-2 text-[hsl(200,85%,42%)] font-semibold text-sm hover:text-[hsl(200,85%,35%)] transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">(817) 585-6388</span>
          </a>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            ⚡ Instant Estimate — No Commitment Required
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Get Your Free Quote
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-xl mx-auto">
            Select your service, enter measurements, and see an instant price range — no phone call needed.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-10 space-y-6">

        {/* ── Step 1: Service Selection ──────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-blue-50 border-b border-blue-100 px-6 py-4 flex items-center gap-3">
            <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">1</span>
            <h2 className="font-semibold text-gray-900 text-lg">Choose Your Service</h2>
          </div>
          <div className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SERVICES.map((s) => (
              <button
                key={s.key}
                onClick={() => {
                  setSelectedService(s.key);
                  setMeasurement("");
                }}
                className={`relative rounded-xl border-2 p-4 text-left transition-all duration-150 hover:border-blue-400 hover:bg-blue-50 focus:outline-none ${
                  selectedService === s.key
                    ? "border-blue-500 bg-blue-50 shadow-sm"
                    : "border-slate-200 bg-white"
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

        {/* ── Step 2: Measurement ────────────────────────────────── */}
        {selectedService && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-blue-50 border-b border-blue-100 px-6 py-4 flex items-center gap-3">
              <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">2</span>
              <h2 className="font-semibold text-gray-900 text-lg">Enter Measurements</h2>
            </div>
            <div className="p-6">
              {selectedService === "roof" ? (
                <div>
                  <p className="text-gray-600 mb-4 text-sm">Select your approximate roof size:</p>
                  <div className="grid grid-cols-2 gap-4">
                    {(["under", "over"] as RoofSize[]).map((size) => (
                      <button
                        key={size}
                        onClick={() => setRoofSize(size)}
                        className={`rounded-xl border-2 p-5 text-center transition-all ${
                          roofSize === size
                            ? "border-blue-500 bg-blue-50"
                            : "border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                      >
                        <div className="text-2xl mb-1">{size === "under" ? "🏘️" : "🏰"}</div>
                        <div className="font-semibold text-gray-900">
                          {size === "under" ? "Under 1,500 sq ft" : "Over 1,500 sq ft"}
                        </div>
                        <div className="text-blue-600 font-bold mt-1">
                          {size === "under" ? "$350" : "$600"}
                        </div>
                      </button>
                    ))}
                  </div>
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
                      className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-lg font-semibold focus:border-blue-500 focus:outline-none transition-colors pr-20"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                      {measurementUnit}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {selectedService === "fence"
                      ? "Tip: measure the total length of fencing to be cleaned."
                      : "Tip: multiply length × width to get square footage."}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Step 3: Dirt Level ─────────────────────────────────── */}
        {selectedService && (selectedService === "roof" || parseFloat(measurement) > 0) && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-blue-50 border-b border-blue-100 px-6 py-4 flex items-center gap-3">
              <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">3</span>
              <h2 className="font-semibold text-gray-900 text-lg">How Dirty Is It?</h2>
            </div>
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
                    {d.multiplier !== 1.0 && (
                      <div className="text-orange-500 text-xs font-semibold mt-1">
                        +{Math.round((d.multiplier - 1) * 100)}%
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Step 4: Add-ons ───────────────────────────────────── */}
        {selectedService && (selectedService === "roof" || parseFloat(measurement) > 0) && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-blue-50 border-b border-blue-100 px-6 py-4 flex items-center gap-3">
              <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">4</span>
              <h2 className="font-semibold text-gray-900 text-lg">Add-On Services <span className="text-gray-400 font-normal text-sm">(optional)</span></h2>
            </div>
            <div className="p-6 space-y-3">
              {/* Gutter Cleaning */}
              <label className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${addons.gutterCleaning ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-blue-200"}`}>
                <input
                  type="checkbox"
                  checked={addons.gutterCleaning}
                  onChange={() => handleAddonToggle("gutterCleaning")}
                  className="mt-0.5 h-4 w-4 accent-blue-600 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-gray-900 text-sm">Gutter Cleaning</span>
                    <span className="text-blue-600 font-bold text-sm ml-2">$1.50/linear ft</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">Clear debris from gutters and downspouts</p>
                  {addons.gutterCleaning && (
                    <div className="mt-3 flex items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        value={addons.gutterLinearFt}
                        onChange={(e) => setAddons((prev) => ({ ...prev, gutterLinearFt: e.target.value }))}
                        placeholder="Linear feet of gutters"
                        className="border-2 border-slate-200 rounded-lg px-3 py-2 text-sm w-48 focus:border-blue-500 focus:outline-none"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <span className="text-gray-400 text-xs">linear ft</span>
                    </div>
                  )}
                </div>
              </label>

              {/* Concrete Sealing — only relevant for sqft services */}
              {selectedService !== "fence" && selectedService !== "roof" && (
                <label className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${addons.concreteSealing ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-blue-200"}`}>
                  <input
                    type="checkbox"
                    checked={addons.concreteSealing}
                    onChange={() => handleAddonToggle("concreteSealing")}
                    className="mt-0.5 h-4 w-4 accent-blue-600 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-gray-900 text-sm">Concrete Sealing</span>
                      <span className="text-blue-600 font-bold text-sm ml-2">$0.50/sq ft</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-0.5">Protect cleaned surfaces from future staining</p>
                  </div>
                </label>
              )}

              {/* Stain Treatment */}
              <label className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${addons.stainTreatment ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-blue-200"}`}>
                <input
                  type="checkbox"
                  checked={addons.stainTreatment}
                  onChange={() => handleAddonToggle("stainTreatment")}
                  className="mt-0.5 h-4 w-4 accent-blue-600 flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-gray-900 text-sm">Stain Treatment</span>
                    <span className="text-blue-600 font-bold text-sm ml-2">+$50 flat</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">Pre-treat rust, oil, or organic stains</p>
                </div>
              </label>

              {/* Same-Week Scheduling */}
              <label className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${addons.sameWeek ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-blue-200"}`}>
                <input
                  type="checkbox"
                  checked={addons.sameWeek}
                  onChange={() => handleAddonToggle("sameWeek")}
                  className="mt-0.5 h-4 w-4 accent-blue-600 flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-gray-900 text-sm">Same-Week Scheduling</span>
                    <span className="text-blue-600 font-bold text-sm ml-2">+$25</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">Priority scheduling within the current week</p>
                </div>
              </label>
            </div>
          </div>
        )}

        {/* ── Live Price Range ───────────────────────────────────── */}
        {canSeePrice && priceRange && (
          <div className="bg-white rounded-2xl shadow-sm border-2 border-green-400 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
              <p className="text-white/80 text-sm font-medium uppercase tracking-wide">Your Estimated Price Range</p>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-white text-4xl font-extrabold">{fmt(priceRange.low)}</span>
                <span className="text-white/70 text-2xl font-light">–</span>
                <span className="text-white text-4xl font-extrabold">{fmt(priceRange.high)}</span>
              </div>
            </div>
            {/* Line Items Breakdown */}
            <div className="p-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">Estimate Breakdown</p>
              <div className="space-y-2">
                {priceRange.lineItems.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-semibold text-gray-900">{fmt(item.amount)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs text-gray-400 italic">Range accounts for on-site variables</span>
                <span className="text-sm font-bold text-gray-500">{fmt(priceRange.low)} – {fmt(priceRange.high)}</span>
              </div>
            </div>
          </div>
        )}

        {/* ── No Price Yet Placeholder ───────────────────────────── */}
        {!canSeePrice && (
          <div className="bg-white rounded-2xl shadow-sm border-2 border-dashed border-slate-200 p-8 text-center">
            <div className="text-4xl mb-3">💲</div>
            <p className="text-gray-500 font-medium">Select a service and enter measurements above to see your instant price range.</p>
          </div>
        )}

        {/* ── Step 5: Email Your Quote ───────────────────────────── */}
        {submitted ? (
          <div className="bg-white rounded-2xl shadow-sm border-2 border-green-300 p-8 text-center">
            <CheckCircle className="h-14 w-14 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Sent!</h3>
            <p className="text-gray-600 mb-1">
              We emailed your itemized estimate to <strong>{customer.email}</strong>.
            </p>
            <p className="text-gray-500 text-sm">Our team will follow up shortly. Questions? Call us at&nbsp;
              <a href="tel:+18175856388" className="text-blue-600 font-semibold">(817) 585-6388</a>.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-blue-50 border-b border-blue-100 px-6 py-4 flex items-center gap-3">
              <span className={`text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${canSeePrice ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-400"}`}>5</span>
              <div>
                <h2 className={`font-semibold text-lg ${canSeePrice ? "text-gray-900" : "text-gray-400"}`}>Email My Quote</h2>
                {!canSeePrice && <p className="text-xs text-gray-400">Complete steps above to unlock</p>}
              </div>
            </div>
            <div className={`p-6 transition-opacity ${canSeePrice ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
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
                      Sending Your Quote…
                    </>
                  ) : (
                    "📧 Email My Quote"
                  )}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ── Disclaimer ────────────────────────────────────────── */}
        <p className="text-center text-xs text-gray-400 italic px-4">
          Final pricing may vary based on site conditions. This is an estimate only. A member of our team will confirm the final price before any work begins.
        </p>

        {/* ── Trust Badges ─────────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-4 pb-4">
          {[
            { icon: "🛡️", label: "Fully Insured" },
            { icon: "⭐", label: "5-Star Rated" },
            { icon: "🤝", label: "Free Follow-Up" },
          ].map((badge) => (
            <div key={badge.label} className="bg-white rounded-xl border border-slate-100 p-4 text-center shadow-sm">
              <div className="text-2xl mb-1">{badge.icon}</div>
              <div className="text-xs font-semibold text-gray-700">{badge.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="bg-gray-800 text-gray-300 py-8 text-center text-sm">
        <p className="mb-1">
          <a href="tel:+18175856388" className="text-blue-400 hover:text-blue-300 font-semibold">(817) 585-6388</a>
          &nbsp;·&nbsp;
          <a href="mailto:info@dfwpristinepowerwashing.com" className="hover:text-white transition-colors">info@dfwpristinepowerwashing.com</a>
        </p>
        <p className="text-gray-500 text-xs mt-2">© {new Date().getFullYear()} DFW Pristine Power Washing. All rights reserved.</p>
      </footer>
    </div>
  );
}
