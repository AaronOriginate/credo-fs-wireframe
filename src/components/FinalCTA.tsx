export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Left — heading + subtext */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-[3.5rem] font-medium tracking-[-2px] text-white leading-[1.08]">
              Let&apos;s have a chat.
            </h2>

            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              No sales pitch. No contract to sign. Just a conversation about what might work for your business.
            </p>

            <p className="mt-4 text-base text-white/40">
              Pick whichever suits you:
            </p>
          </div>

          {/* Right — contact methods */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <a
              href="/contact"
              className="flex items-center gap-4 bg-yellow text-dark rounded-lg px-8 py-5 font-semibold text-base hover:bg-yellow-hover transition-colors"
            >
              <span className="text-xl">&#128172;</span>
              WhatsApp Andy
            </a>
            <a
              href="/contact"
              className="flex items-center gap-4 bg-white/10 text-white rounded-lg px-8 py-5 font-semibold text-base hover:bg-white/20 transition-colors"
            >
              <span className="text-xl">&#128197;</span>
              Book a call
            </a>
            <a
              href="/contact"
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
