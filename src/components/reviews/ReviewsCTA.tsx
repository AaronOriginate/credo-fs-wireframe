export default function ReviewsCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[2.5rem] font-medium tracking-tight text-text-dark leading-[1.15]">
            If you&apos;re wondering whether it&apos;s worth a conversation, it is.
          </h2>

          <p className="mt-6 text-lg text-text-muted leading-relaxed">
            No cost. No commitment. I&apos;ll have a look at what you&apos;ve got and give you a straight answer.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-yellow text-dark rounded-lg px-8 py-4 text-base font-semibold hover:bg-yellow-hover transition-colors"
          >
            Get in Touch
          </a>

          <p className="mt-6 text-sm text-text-light">
            Or read the reviews yourself on{" "}
            <a
              href="https://uk.trustpilot.com/review/credouk.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-navy hover:text-navy/80 transition-colors"
            >
              TrustPilot
            </a>{" "}
            first. That&apos;s fine too.
          </p>
        </div>
      </div>
    </section>
  );
}
