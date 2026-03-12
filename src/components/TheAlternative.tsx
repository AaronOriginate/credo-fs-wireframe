export default function TheAlternative() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-6">
        {/* Large statement heading */}
        <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-[3.5rem] xl:text-[4.5rem] font-medium tracking-[-2px] text-white leading-[1.08] max-w-4xl">
          I don&apos;t work for any till company or card machine provider. I work for you.
        </h2>

        <div className="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left — text */}
          <div className="w-full lg:w-[60%]">
            <p className="text-lg text-white/70 leading-relaxed">
              Twenty years in hospitality. I ran pubs, managed 9,000 Punch Taverns for Whitbread, and sat where you&apos;re sitting with the same contracts and the same nonsense. I started Credo because I got tired of watching good operators get a raw deal.
            </p>

            <a
              href="/about"
              className="inline-block mt-8 text-base font-semibold text-yellow hover:text-yellow-hover transition-colors"
            >
              Read more about my background &rarr;
            </a>
          </div>

          {/* Right — photo + stats */}
          <div className="w-full lg:w-[40%]">
            <div className="w-full max-w-[360px] mx-auto aspect-[4/5] rounded-xl bg-white/5 border-2 border-dashed border-white/20 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/10" />
              <span className="text-sm font-semibold text-white/50">
                Andy in hospitality setting
              </span>
              <span className="text-xs text-white/30">
                Candid / approachable
              </span>
            </div>

            {/* Stat cards */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-[360px] mx-auto">
              <div className="bg-white/5 rounded-lg border border-white/10 p-5 text-center">
                <span className="font-[family-name:var(--font-heading)] text-4xl font-medium text-yellow">
                  30+
                </span>
                <p className="mt-1.5 text-xs text-white/50 font-medium">
                  years in hospitality
                </p>
              </div>
              <div className="bg-white/5 rounded-lg border border-white/10 p-5 text-center">
                <span className="font-[family-name:var(--font-heading)] text-4xl font-medium text-yellow">
                  100%
                </span>
                <p className="mt-1.5 text-xs text-white/50 font-medium">
                  independent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
