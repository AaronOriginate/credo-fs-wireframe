export default function AboutCTA() {
  return (
    <section className="py-20 lg:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[3rem] font-medium tracking-[-2px] text-white leading-[1.12]">
            If you&apos;re not sure whether you&apos;re getting a fair deal,
            let&apos;s find out.
          </h2>

          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            A conversation costs nothing. I&apos;ll look at what you&apos;ve
            got, tell you straight, and if there&apos;s nothing to change,
            I&apos;ll say so.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-yellow text-dark rounded-lg px-10 py-4 font-semibold text-base hover:bg-yellow-hover transition-colors"
          >
            Get in Touch
          </a>

          <p className="mt-5 text-sm text-white/40">
            No sales pitch. No obligation. Just a straight conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
