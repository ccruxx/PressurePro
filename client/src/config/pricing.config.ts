// ─── PressurePro Pricing Configuration ───────────────────────────────────────
//
// Edit this file to update all pricing on the quote calculator.
// Changes here automatically reflect in real-time price estimates.
//
// ─────────────────────────────────────────────────────────────────────────────

export const PRICING = {

  // ── Per-service rates ────────────────────────────────────────────────────
  services: {
    "house-wash": {
      ratePerSqFt: 0.20,
      minimum:     225,
    },
    driveway: {
      ratePerSqFt: 0.15,
      minimum:     250,
    },
    "rust-clay-stain": {
      ratePerSqFt: 1.00,
      minimum:     250,
    },
    "gutter-cleaning": {
      ratePerLinearFt: 1.50,
      minimum:         250,
    },
    "deck-patio": {
      ratePerSqFt: 0.25,
      minimum:     225,
    },
    "oil-grease-single": {
      ratePerSqFt: 1.00,
      minimum:     250,
    },
    "oil-grease-two": {
      ratePerSqFt: 2.00,
      minimum:     250,
    },
    fence: {
      ratePerLinearFt: 1.50,
      minimum:         250,
    },
    "concrete-sealing": {
      ratePerSqFt: 2.00,
      minimum:     250,
    },
  },

  // ── Roof soft wash — tiered flat rates ───────────────────────────────────
  roof: {
    under1500:    450,   // ≤ 1,500 sq ft
    r1800to2800:  675,   // 1,800 – 2,800 sq ft
    r3000to4000:  850,   // 3,000 – 4,000 sq ft
    r4200to5000: 1200,   // 4,200 – 5,000 sq ft
    // over 5,000 sq ft → specialized quote required (no price shown)
  },

  // ── Dirt level surcharge multipliers ─────────────────────────────────────
  // Applied on top of the base service price.
  dirtLevel: {
    light:    1.00,  // +0%
    moderate: 1.15,  // +15%
    heavy:    1.30,  // +30%
  },

  // ── Add-on services ───────────────────────────────────────────────────────
  addons: {
    sameWeekScheduling: {
      flat: 25,  // $ flat fee
    },
  },

  // ── Estimate range variance ───────────────────────────────────────────────
  rangeVariance: {
    low:  0.95,  // 5% below subtotal
    high: 1.10,  // 10% above subtotal
  },
};
