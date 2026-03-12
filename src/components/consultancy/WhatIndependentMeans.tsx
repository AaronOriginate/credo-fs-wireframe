export default function WhatIndependentMeans() {
  const partners = [
    "Square",
    "Teya",
    "Sunmi",
    "Elavon",
    "Shift4",
    "Loyverse",
    "Kuulseats",
    "Liberis",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left — text */}
          <div className="w-full lg:w-[55%]">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[2.5rem] xl:text-[3rem] font-medium tracking-tight text-text-dark leading-[1.15]">
              I don&apos;t sell one brand. I find the right one.
            </h2>

            <div className="mt-8 space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                I work with eight different providers &mdash; {partners.join(", ")}. That means when I look at your setup, I&apos;m not trying to push you toward one product. I&apos;m looking for what actually fits your business.
              </p>
              <p>
                If your current system is working well and your rates are fair, I&apos;ll tell you that. I&apos;ve done it before. Not everyone needs to change.
              </p>
              <p>
                But if you&apos;re overpaying, or your till and card machine aren&apos;t talking to each other, or you&apos;re stuck calling two different companies every time something goes wrong, I&apos;ll show you what&apos;s out there and what it would cost.
              </p>
            </div>
          </div>

          {/* Right — partner logos placeholder */}
          <div className="w-full lg:w-[45%]">
            <div className="w-full rounded-xl bg-gray-light border-2 border-dashed border-text-light/30 p-10">
              <span className="block text-xs font-semibold text-text-light uppercase tracking-widest mb-6 text-center">
                Partners
              </span>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner) => (
                  <div
                    key={partner}
                    className="bg-white rounded-lg border border-border p-4 flex items-center justify-center"
                  >
                    <span className="text-sm font-medium text-text-muted">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-text-light text-center">
                Partner logos to be placed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
