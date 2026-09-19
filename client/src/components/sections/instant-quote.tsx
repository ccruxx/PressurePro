import QuoteCalculator from "@/components/quote/QuoteCalculator";

export default function InstantQuote() {
  return (
    <section id="instant-quote" className="border-y border-stone-200 bg-surface-sunken">
      <div className="mx-auto max-w-3xl px-gutter py-section">
        <div className="mb-12">
          <p className="text-step--1 font-medium text-brand">
            No phone call needed
          </p>
          <h2 className="mt-4 text-step-3">Price it yourself</h2>
          <p className="mt-4 max-w-measure text-ink-soft">
            Pick a service, enter the measurements, and see a real range. Commercial
            and delicate stone are quoted on site, so those route straight to us.
          </p>
        </div>
        <QuoteCalculator />
      </div>
    </section>
  );
}
