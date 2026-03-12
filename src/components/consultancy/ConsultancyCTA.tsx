export default function ConsultancyCTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[2.5rem] xl:text-[3rem] font-medium tracking-tight text-text-dark leading-[1.15]">
            Book a free conversation.
          </h2>

          <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed">
            <p>
              No sales pitch. No commitment. I&apos;ll ask about your setup, have a look at what you&apos;re paying, and give you an honest answer.
            </p>
            <p>
              If there&apos;s something better out there for your business, I&apos;ll find it. If there isn&apos;t, I&apos;ll say so.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-yellow text-dark rounded-lg px-8 py-4 font-semibold text-base hover:bg-yellow-hover transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <p className="mt-6 text-sm text-text-light">
            Call, WhatsApp, or drop me a message. Completely free.
          </p>
        </div>
      </div>
    </section>
  );
}
