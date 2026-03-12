export default function FullPicture() {
  return (
    <section className="py-20 lg:py-28 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left — text */}
          <div className="w-full lg:w-[60%]">
            <div className="space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                Outside of work, I&apos;ve spent twenty years as a rugby referee
                across twelve countries. Life Member and past Chairman of the
                Bristol Referees Society. If you think dealing with a pub
                landlord whose card machine is down on a Saturday night is
                stressful, try telling a front row they&apos;re not scrummaging
                straight.
              </p>

              <p>
                It teaches you the same thing the Navy did, and the same thing
                running a pub did.
              </p>

              <p className="font-[family-name:var(--font-heading)] text-xl font-medium text-text-dark">
                Make the call. Explain it clearly. Stand by it.
              </p>
            </div>
          </div>

          {/* Right — image placeholder */}
          <div className="w-full lg:w-[40%]">
            <div className="w-full aspect-[4/3] rounded-xl bg-white border-2 border-dashed border-text-light/30 flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium text-text-muted">
                Andy refereeing rugby
              </span>
              <span className="text-xs text-text-light">
                Personal photo from refereeing days
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
