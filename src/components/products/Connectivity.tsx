export default function Connectivity() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <span className="section-label section-label-light">
          Connectivity
        </span>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left -- text content */}
          <div className="w-full lg:w-[60%]">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[2.5rem] font-medium tracking-tight text-text-dark leading-[1.15]">
              Nine times out of ten, it&apos;s your internet.
            </h2>

            <div className="mt-6 space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                Before I even look at your till or card machine, I ask about your wifi. Most of the tech problems I get called about aren&apos;t hardware or software. They&apos;re connectivity. A dodgy connection drops card payments, freezes your till mid-service, and sends your kitchen printer offline at 7pm on a Friday.
              </p>
              <p>
                I now offer Starlink installations for hospitality venues. It&apos;s fast, it&apos;s reliable, and it solves the problem most people didn&apos;t realise they had.
              </p>
            </div>
          </div>

          {/* Right -- Starlink image placeholder */}
          <div className="w-full lg:w-[40%] flex items-center">
            <div className="w-full max-w-[320px] mx-auto aspect-square rounded-xl bg-gray-light border-2 border-dashed border-text-light/30 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-navy/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-text-muted">
                Starlink dish
              </span>
              <span className="text-xs text-text-light">
                On a pub roof or courtyard
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
