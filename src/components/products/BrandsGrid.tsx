export default function BrandsGrid() {
  const brands = [
    {
      name: "Square",
      description:
        "Till systems with built-in card processing. Good for single-site operators who want something clean and straightforward.",
    },
    {
      name: "Teya",
      description:
        "Card machines and payments. Competitive rates, reliable kit.",
    },
    {
      name: "Sunmi",
      description:
        "Hardware that punches above its weight. Solid, affordable, works well with multiple platforms.",
    },
    {
      name: "Loyverse",
      description:
        "Free till software that does the job for smaller venues. I pair it with the right card machine.",
    },
    {
      name: "Elavon",
      description:
        "One of the bigger payment processors. Good for businesses with higher transaction volumes.",
    },
    {
      name: "Shift4",
      description:
        "Payments and tech for hospitality. Strong on integration.",
    },
    {
      name: "Liberis / YouLend",
      description:
        "Business funding when you need it. Not a loan shark, not a bank. Revenue-based finance that works with your cash flow.",
    },
    {
      name: "Kuulseats",
      description:
        "Reservation and table management. Connects into the till so front of house runs smoother.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6">
        <span className="section-label section-label-light">
          Brands I Trust
        </span>

        <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[2.5rem] font-medium tracking-tight text-text-dark leading-[1.15] max-w-3xl">
          Vendor-neutral means I pick what&apos;s right, not what pays the most.
        </h2>

        <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
          I&apos;m not tied to one provider. I&apos;ve got relationships with several, and I choose between them based on what your business actually needs. A village pub with one till doesn&apos;t need the same setup as a restaurant doing 200 covers a night.
        </p>

        {/* Brand cards grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              {/* Brand logo placeholder */}
              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-5">
                <span className="font-[family-name:var(--font-heading)] text-xs font-bold text-navy tracking-tight">
                  {brand.name.split(" ")[0].substring(0, 3).toUpperCase()}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text-dark">
                {brand.name}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {brand.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-12 text-base text-text-light leading-relaxed max-w-2xl">
          This list isn&apos;t fixed. New brands earn a place when they prove themselves. Others lose it when they stop delivering. That&apos;s the point of being independent.
        </p>
      </div>
    </section>
  );
}
