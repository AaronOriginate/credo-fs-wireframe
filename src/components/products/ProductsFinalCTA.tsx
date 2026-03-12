export default function ProductsFinalCTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Left -- heading + subtext */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-[3.5rem] font-medium tracking-[-2px] text-white leading-[1.08]">
              Not sure which system&apos;s right for you?
            </h2>

            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              That&apos;s the whole point of talking to me first. I&apos;ll look at what you&apos;ve got, ask what&apos;s driving you mad, and recommend something that actually fits. No obligation. No cost for the conversation.
            </p>

            <p className="mt-6 text-base text-white/40">
              I&apos;d rather you talked to me before buying anything. That&apos;s how this works best.
            </p>
          </div>

          {/* Right -- contact methods */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-4 bg-yellow text-dark rounded-lg px-8 py-5 font-semibold text-base hover:bg-yellow-hover transition-colors"
            >
              <span className="text-xl">&#128172;</span>
              Message Andy
            </a>
            <a
              href="#"
              className="flex items-center gap-4 bg-white/10 text-white rounded-lg px-8 py-5 font-semibold text-base hover:bg-white/20 transition-colors"
            >
              <span className="text-xl">&#128197;</span>
              Choose a time that works
            </a>
            <a
              href="#"
              className="flex items-center gap-4 bg-white/10 text-white rounded-lg px-8 py-5 font-semibold text-base hover:bg-white/20 transition-colors"
            >
              <span className="text-xl">&#9993;</span>
              Drop me a line
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
