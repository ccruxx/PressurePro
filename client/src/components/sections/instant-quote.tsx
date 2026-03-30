import QuoteCalculator from "@/components/quote/QuoteCalculator";

export default function InstantQuote() {
  return (
    <section id="instant-quote" className="bg-slate-50 py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            ⚡ No Phone Call Needed
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get an Instant Price Estimate
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Pick your service, enter your measurements, and see a real price range in seconds.
          </p>
        </div>

        <QuoteCalculator />
      </div>
    </section>
  );
}
