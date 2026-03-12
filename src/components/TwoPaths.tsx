export default function TwoPaths() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6">
        <span className="section-label section-label-light">
          What do you need?
        </span>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Consultancy */}
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-text-dark">
              Need honest advice?
            </h3>
            <p className="mt-4 text-base text-text-muted leading-relaxed">
              I&apos;ll review what you&apos;ve got, tell you if you&apos;re getting a fair deal, and recommend changes only if they&apos;ll genuinely help. Free initial conversation. No strings.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-yellow text-dark rounded-lg px-8 py-4 font-semibold text-base hover:bg-yellow-hover transition-colors"
              >
                Talk to Andy
              </a>
            </div>
          </div>

          {/* Card 2: Products */}
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-text-dark">
              Looking for a new till or card machine?
            </h3>
            <p className="mt-4 text-base text-text-muted leading-relaxed">
              I work with the brands I trust, not the ones that pay the most. Browse the systems I recommend and find out what they&apos;d actually cost you.
            </p>
            <div className="mt-8">
              <a
                href="/products"
                className="inline-block bg-navy text-white rounded-lg px-8 py-4 font-semibold text-base hover:bg-navy-deep transition-colors"
              >
                See products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
