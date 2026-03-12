export default function WhatYouGet() {
  const cards = [
    {
      icon: (
        <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2 6.75h3m-3 3h3m-6 3h6m-9 1.5h12a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0017.25 4.5H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      heading: "Statement Review",
      body: "I look at what you\u2019re paying, line by line. Most owners have never had anyone actually explain their merchant statement to them. I will.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      heading: "System Check",
      body: "Your till, your card machine, your broadband, your contract terms. I check whether it all works together and where the weak points are.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      heading: "Recommendation",
      body: "If something needs changing, I\u2019ll tell you what, why, and what it\u2019ll cost. If nothing needs changing, I\u2019ll tell you that too.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      heading: "I Stick Around",
      body: "This is where most providers disappear. I don\u2019t. When your system goes down at 8pm on a Saturday, you\u2019ve got my number. One person to call.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[2.5rem] font-medium tracking-tight text-text-dark leading-[1.15]">
          What happens when you work with me.
        </h2>

        {/* 2x2 grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.heading}
              className="rounded-xl p-8 bg-gray-light"
            >
              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text-dark">
                {card.heading}
              </h3>
              <p className="mt-3 text-base text-text-muted leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
