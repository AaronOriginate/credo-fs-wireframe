export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 lg:pt-32 lg:pb-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — text */}
          <div className="w-full lg:w-[55%]">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-medium tracking-[-2.3px] text-text-dark leading-[1.08]">
              I&apos;m Andy. I help pub and restaurant owners get a fair deal on their tills and card machines.
            </h1>

            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-xl">
              Independent advice, no commission bias. And one person to call when things go wrong.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <a
                href="/contact"
                className="inline-block bg-yellow text-dark rounded-lg px-8 py-4 font-semibold text-base hover:bg-yellow-hover transition-colors"
              >
                Let&apos;s have a chat
              </a>
              <a
                href="/consultancy"
                className="inline-block bg-navy text-white rounded-lg px-8 py-4 font-semibold text-base hover:bg-navy-deep transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Right — photo placeholder */}
          <div className="w-full lg:w-[45%]">
            <div className="w-full max-w-[440px] mx-auto aspect-[3/4] rounded-xl bg-gray-light border-2 border-dashed border-text-light/30 flex flex-col items-center justify-center gap-3">
              <div className="w-20 h-20 rounded-full bg-navy/10" />
              <span className="text-sm font-semibold text-text-muted">
                Andy&apos;s Photo
              </span>
              <span className="text-xs text-text-light">
                Professional headshot
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
