export default function ProofWovenIn() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto lg:ml-[8%]">
          <div className="space-y-5 text-lg text-text-muted leading-relaxed">
            <p>
              Sallyann Reed has been a client for five years now. When
              there&apos;s a better deal out there for her business, I let her
              know. When something goes wrong, she calls me. Not a helpline. Not
              a chatbot queue. Me.
            </p>

            <p>
              That&apos;s how it should work. And for most of my clients, it
              does. About 70% of the people I work with came through a
              recommendation from someone I&apos;d already helped. I don&apos;t
              run ads. I don&apos;t cold-call. I just do the work properly and
              let people talk.
            </p>
          </div>

          {/* Quote card */}
          <div className="mt-10 bg-gray-light rounded-xl p-8 lg:p-10 border border-border">
            {/* TrustPilot stars */}
            <div className="flex gap-1 text-yellow text-xl mb-5">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>

            <blockquote className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-medium text-text-dark leading-snug italic">
              &ldquo;Andy always keeps me informed if there&apos;s a better deal
              available. Five years and counting.&rdquo;
            </blockquote>

            <div className="mt-5">
              <span className="text-base font-semibold text-text-dark">
                Sallyann Reed
              </span>
              <span className="block text-sm text-text-muted mt-1">
                TrustPilot
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
