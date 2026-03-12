export default function HospitalityYears() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left — text */}
          <div className="w-full lg:w-[60%]">
            <div className="space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                I came ashore and landed in hospitality. Twenty years with
                Whitbread. Started as a Regional Sales Manager, worked my way to
                Account Director looking after the Punch Taverns estate.
                That&apos;s roughly 9,000 pubs. Nine thousand landlords, nine
                thousand different setups, nine thousand opinions on what works
                and what doesn&apos;t. I completed the first company-sponsored
                MBA while I was there, helped shape commercial strategy at HQ,
                and somewhere along the way got Bristol Rugby a sponsorship deal.
              </p>

              <p>
                Then I ran my own pubs, bars, and restaurants. Stood behind the
                bar. Dealt with the Friday night card machine crash. Opened the
                statement on Monday morning and thought: how is it possible that
                nobody can explain this to me in plain English?
              </p>

              <p className="font-[family-name:var(--font-heading)] text-xl font-medium text-text-dark">
                That question never really went away.
              </p>
            </div>
          </div>

          {/* Right — image placeholder */}
          <div className="w-full lg:w-[40%]">
            <div className="w-full aspect-[4/3] rounded-xl bg-gray-light border-2 border-dashed border-text-light/30 flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium text-text-muted">
                Andy in hospitality setting
              </span>
              <span className="text-xs text-text-light">
                Whitbread years or running his own pubs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
