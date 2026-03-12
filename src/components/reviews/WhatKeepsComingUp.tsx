const themes = [
  {
    theme: "\u201CEasy to get hold of\u201D",
    note: "Named in 4 out of 6 reviews",
  },
  {
    theme: "\u201CPersonal service\u201D",
    note: "Named in 5 out of 6 reviews",
  },
  {
    theme: "\u201CHe sticks around\u201D",
    note: "Longest customer relationship: 5+ years",
  },
];

export default function WhatKeepsComingUp() {
  return (
    <section className="py-20 lg:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[2.5rem] font-medium tracking-tight text-white leading-[1.15] mb-14">
          What keeps coming up
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {themes.map((item) => (
            <div
              key={item.theme}
              className="bg-white/5 rounded-xl border border-white/10 p-8"
            >
              <p className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-semibold text-white">
                {item.theme}
              </p>
              <p className="mt-3 text-sm text-white/50 font-medium">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
