export default function WhyCredoExists() {
  return (
    <section className="py-20 lg:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left — text */}
          <div className="w-full lg:w-[65%]">
            <div className="space-y-6 text-lg lg:text-xl text-white/70 leading-relaxed">
              <p>
                For ten years after Whitbread, I worked in merchant services.
                The provider side. I saw how the industry actually works: the
                cold calls, the contracts designed to confuse, the support that
                evaporates the moment the ink dries. Good operators getting a raw
                deal because nobody in the room was on their side.
              </p>

              <p className="text-white">
                I started Credo because I got tired of watching it happen.
              </p>

              <p>
                I&apos;m not a provider. I don&apos;t earn commission from one
                brand. I work with Square, Teya, Sunmi, Elavon, Shift4,
                Loyverse, and others because different businesses need different
                things. My job is to find what&apos;s right for yours, set it
                up, and stick around.
              </p>

              <p className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-medium text-white leading-snug">
                Built on belief. Powered by trust.
              </p>

              <p className="text-white/50">
                That&apos;s not a slogan. It&apos;s how I decide whether to take
                on a piece of work.
              </p>
            </div>
          </div>

          {/* Right — stat card */}
          <div className="w-full lg:w-[35%] flex items-start lg:justify-end">
            <div className="bg-white/5 rounded-xl border border-white/10 p-8 text-center w-full max-w-[300px]">
              <span className="font-[family-name:var(--font-heading)] text-5xl lg:text-6xl font-medium text-yellow">
                70%
              </span>
              <p className="mt-3 text-sm text-white/50 font-medium leading-relaxed">
                of new clients come from referrals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
