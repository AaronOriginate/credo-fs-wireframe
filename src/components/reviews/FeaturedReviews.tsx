const reviews = [
  {
    name: "Ron De La Cruz",
    date: "December 2025",
    text: "The best experience since starting my business in 2016. I always recommend Andy to fellow traders. When he said he\u2019d be around for any further assistance, boy he wasn\u2019t kidding, at a drop of a hat he will be there to help you with any issues. Other companies in the past are very difficult to contact and Andy gives a very professional and personal service.",
  },
  {
    name: "Sallyann Reed",
    date: "December 2025",
    text: "He has always been committed to providing me with an excellent service, knowing how my business works. If there\u2019s a better package for me he\u2019ll come in and advise me to change. Peace of mind knowing that if there\u2019s an issue I can call him and it will be rectified very quickly. If you need reliability and an honest Merchant advisor who has your best interest at heart you won\u2019t go wrong putting your trust in Andy Miller.",
  },
  {
    name: "Tomas Jenkins",
    date: "December 2025",
    text: "He was not pushy and just gave me the facts. It\u2019s a much more solid machine than Sumup. I had a problem once and Andy was easy to get hold of to help \u2014 unlike Sumup.",
  },
  {
    name: "George",
    date: "January 2026",
    text: "Credouk made the Epos transition for us smooth and have always been on hand to sort out minor teething problems. Very generous with their time and we very much appreciate the personal touch.",
  },
  {
    name: "E L",
    date: "February 2026",
    text: "He helped us set up our card machine and change the till from EPOS smoothly and quickly. The whole process was easy, professional, and stress-free.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-yellow text-lg">
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
      <span>&#9733;</span>
    </div>
  );
}

export default function FeaturedReviews() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-14 lg:gap-20">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="border-b border-border pb-14 lg:pb-20 last:border-b-0 last:pb-0"
            >
              <Stars />

              <blockquote className="mt-6 font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-medium text-text-dark leading-snug italic">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="mt-6">
                <span className="text-base font-semibold text-text-dark">
                  {review.name}
                </span>
                <span className="block text-sm text-text-muted mt-1">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
