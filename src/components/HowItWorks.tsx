export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      heading: "We talk",
      body: "You tell me what you\u2019ve got, what\u2019s driving you mad, and what you actually need. It\u2019s free, there\u2019s no commitment, and it\u2019s just a straight conversation.",
    },
    {
      number: "2",
      heading: "I look at your setup",
      body: "Your till, your card machine, your statements, your contract. If you\u2019re overpaying, I\u2019ll show you where. If there\u2019s something better out there, I\u2019ll find it. And if it turns out you\u2019re already sorted, I\u2019ll tell you that too.",
    },
    {
      number: "3",
      heading: "I stick around",
      body: "This is where most providers vanish. I don\u2019t. When your system goes down at 7pm on a Friday, you\u2019ve got my number. One person to call. Not a ticket queue. Me.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[2.5rem] font-medium tracking-tight text-text-dark leading-[1.15]">
          We talk. I look at your setup. I stick around.
        </h2>

        {/* Step cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl p-8 bg-gray-light"
            >
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center mb-5">
                <span className="font-[family-name:var(--font-heading)] text-sm font-semibold text-yellow">
                  {step.number}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text-dark">
                {step.heading}
              </h3>
              <p className="mt-3 text-base text-text-muted leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
