export default function ProblemValidation() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left — image placeholder */}
          <div className="w-full lg:w-[40%]">
            <div className="w-full aspect-[4/3] rounded-xl bg-gray-light border-2 border-dashed border-text-light/30 flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium text-text-muted">
                Andy reviewing statements
              </span>
              <span className="text-xs text-text-light">
                Across the table, real setting
              </span>
            </div>
          </div>

          {/* Right — text content */}
          <div className="w-full lg:w-[60%]">
            <div className="space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                Three cold calls a week. That&apos;s what most of the pub owners I work with tell me they were getting before we spoke. Always a different company, always the same pitch.
              </p>
              <p>
                One landlord I&apos;ve worked with for five years now had been through three providers in two. Every time, great service until she signed, then nothing. Card machine playing up on a Saturday night and nobody answering the phone.
              </p>
              <p>
                And the statements. They&apos;re designed so you can&apos;t understand them. I&apos;ve sat across the table from owners who&apos;ve been overpaying for years and had no idea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
