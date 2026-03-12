export default function Opening() {
  return (
    <section className="pt-28 pb-16 lg:pt-32 lg:pb-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — text */}
          <div className="w-full lg:w-[55%]">
            <div className="space-y-6 text-xl lg:text-2xl text-text-dark leading-relaxed">
              <p>
                There&apos;s a moment I keep coming back to. I&apos;m
                twenty-three, navigating a container ship through a typhoon off
                the coast of Japan, and the only thing between us and the rocks
                is a compass, a chart, and whether I&apos;d done my job
                properly.
              </p>

              <p className="text-lg text-text-muted leading-relaxed">
                The Merchant Navy teaches you something that sticks. When it
                matters, people don&apos;t want a system. They want a person who
                knows what they&apos;re doing and picks up the phone.
              </p>
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
                Merchant Navy era or professional portrait
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
