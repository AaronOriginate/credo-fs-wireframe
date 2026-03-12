export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 text-yellow text-2xl mb-8">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>

          <blockquote className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-medium text-text-dark leading-snug italic">
            &ldquo;The best experience since starting my business in 2016. I always recommend Andy to fellow traders.&rdquo;
          </blockquote>

          <div className="mt-6">
            <span className="text-base font-semibold text-text-dark">
              Ron De La Cruz
            </span>
            <span className="block text-sm text-text-muted mt-1">
              TrustPilot
            </span>
          </div>

          <a
            href="/reviews"
            className="inline-block mt-10 text-base font-semibold text-navy hover:text-navy/80 transition-colors"
          >
            See what other customers say &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
