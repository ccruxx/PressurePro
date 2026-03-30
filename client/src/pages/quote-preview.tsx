import { Link } from "wouter";
import { Phone } from "lucide-react";
import logoImage from "@assets/logo2.png";
import QuoteCalculator from "@/components/quote/QuoteCalculator";

export default function QuotePreview() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* ── Header ──────────────────────────────────────────────── */}
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

      {/* ── Calculator ──────────────────────────────────────────── */}
      <div className="container mx-auto max-w-3xl px-4 py-10">
        <QuoteCalculator />
      </div>

      {/* ── Trust Badges ─────────────────────────────────────────── */}
      <div className="container mx-auto max-w-3xl px-4 pb-8">
        <div className="grid grid-cols-3 gap-4">
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
