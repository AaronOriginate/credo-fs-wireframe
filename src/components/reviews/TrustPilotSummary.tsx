export default function TrustPilotSummary() {
  return (
    <section className="py-16 lg:py-20 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-md mx-auto text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 text-yellow text-3xl mb-4">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>

          {/* Rating */}
          <p className="font-[family-name:var(--font-heading)] text-5xl lg:text-6xl font-medium tracking-tight text-text-dark">
            5.0
          </p>
          <p className="mt-2 text-base text-text-muted">
            out of 5
          </p>

          {/* Review count */}
          <p className="mt-4 text-lg font-medium text-text-dark">
            6 reviews on TrustPilot
          </p>

          {/* Link */}
          <a
            href="https://uk.trustpilot.com/review/credouk.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-base font-semibold text-navy hover:text-navy/80 transition-colors"
          >
            Read them on TrustPilot &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
