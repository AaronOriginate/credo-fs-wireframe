export default function Opening() {
  return (
    <section className="pt-28 pb-16 lg:pt-32 lg:pb-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left — text */}
          <div className="w-full lg:w-[55%]">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-medium tracking-[-2.3px] text-text-dark leading-[1.08]">
              Your card machine provider isn&apos;t losing sleep over what they charge you.
            </h1>

            <div className="mt-8 space-y-5 text-lg text-text-muted leading-relaxed max-w-xl">
              <p>
                Last year I sat down with a restaurant owner in Bristol who was convinced she was getting a fair deal. Her provider had told her so. I asked if I could look at her statements.
              </p>
              <p>
                She was paying 2.9% on every card transaction. For a venue turning over &pound;15,000 a month in card sales, that&apos;s &pound;435 a month in card charges. I moved her to a setup charging 1.1%. Her new monthly cost: &pound;165. That&apos;s &pound;270 a month back in her pocket. Over &pound;3,200 a year.
              </p>
              <p>
                She&apos;d been overpaying for three years. Nobody had told her. Why would they?
              </p>
            </div>
          </div>

          {/* Right — photo placeholder */}
          <div className="w-full lg:w-[45%]">
            <div className="w-full max-w-[440px] mx-auto aspect-[3/4] rounded-xl bg-gray-light border-2 border-dashed border-text-light/30 flex flex-col items-center justify-center gap-3">
              <div className="w-20 h-20 rounded-full bg-navy/10" />
              <span className="text-sm font-semibold text-text-muted">
                Andy reviewing a statement
              </span>
              <span className="text-xs text-text-light">
                Across the table, real setting
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
