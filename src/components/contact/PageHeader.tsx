export default function PageHeader() {
  return (
    <section className="pt-28 pb-16 lg:pt-32 lg:pb-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-[3.5rem] font-medium tracking-[-2px] text-text-dark leading-[1.08]">
            Drop me a line. Or a WhatsApp. Whatever works.
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-text-muted leading-relaxed">
            No sales pitch. No contract to sign. Just a conversation about what
            might work for your business.
          </p>

          <p className="mt-4 text-base text-text-muted leading-relaxed">
            I answer personally. Not a call centre, not a ticket system.
            You&apos;ll hear back from me, usually within a few hours.
          </p>
        </div>
      </div>
    </section>
  );
}
