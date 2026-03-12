export default function ContactMethods() {
  return (
    <section className="py-16 lg:py-20 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: WhatsApp */}
          <div className="rounded-xl p-8 bg-white">
            <span className="text-3xl" role="img" aria-label="WhatsApp">
              &#128172;
            </span>
            <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-semibold text-text-dark">
              Send me a WhatsApp
            </h3>
            <p className="mt-3 text-base text-text-muted leading-relaxed">
              Quickest way to reach me. Say hello, ask a question, send me a
              photo of your till receipt. Whatever&apos;s on your mind.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-yellow text-dark rounded-lg px-6 py-3 text-sm font-semibold hover:bg-yellow-hover transition-colors"
            >
              Message Andy on WhatsApp
            </a>
          </div>

          {/* Card 2: Book a Call */}
          <div className="rounded-xl p-8 bg-white">
            <span className="text-3xl" role="img" aria-label="Calendar">
              &#128197;
            </span>
            <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-semibold text-text-dark">
              Book a time that suits you
            </h3>
            <p className="mt-3 text-base text-text-muted leading-relaxed">
              Pick a slot that works for your schedule. Fifteen minutes, no
              agenda, no obligation. You talk, I listen.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-navy text-white rounded-lg px-6 py-3 text-sm font-semibold hover:bg-navy-deep transition-colors"
            >
              Choose a Time
            </a>
          </div>

          {/* Card 3: Contact Form */}
          <div className="rounded-xl p-8 bg-white">
            <span className="text-3xl" role="img" aria-label="Envelope">
              &#9993;
            </span>
            <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-semibold text-text-dark">
              Drop me a message
            </h3>
            <p className="mt-3 text-base text-text-muted leading-relaxed">
              Fill in the form below and I&apos;ll get back to you. If you can
              tell me a bit about your business, it helps me come prepared.
            </p>
            <a
              href="#contact-form"
              className="mt-6 inline-block text-sm font-semibold text-teal hover:text-navy transition-colors"
            >
              Jump to the form &darr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
