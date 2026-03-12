export default function ProductsHero() {
  return (
    <section className="pt-28 pb-16 lg:pt-32 lg:pb-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <span className="section-label section-label-light">
          Products
        </span>

        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-medium tracking-[-2.3px] text-text-dark leading-[1.08] max-w-4xl">
          I don&apos;t sell systems. I recommend the right one for your business.
        </h1>

        <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
          I work with a handful of brands I actually trust. Here&apos;s what they are and why I chose them.
        </p>
      </div>
    </section>
  );
}
