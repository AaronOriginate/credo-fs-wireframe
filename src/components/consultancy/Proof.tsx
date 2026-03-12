export default function Proof() {
  return (
    <section className="py-20 lg:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* TrustPilot stars */}
          <div className="flex justify-center gap-1 text-yellow text-2xl mb-10">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>

          <blockquote className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl xl:text-[2.25rem] font-medium text-white leading-snug">
            &ldquo;He has always been committed to providing me with an excellent service, knowing how my business works. If there&apos;s a better package for me he&apos;ll come in and advise me to change. Peace of mind knowing that if there&apos;s an issue I can call him and it will be rectified very quickly.&rdquo;
          </blockquote>

          <div className="mt-8">
            <span className="text-base font-semibold text-white">
              Sallyann Reed
            </span>
            <span className="block text-sm text-white/50 mt-1">
              Five years as a customer &middot; TrustPilot
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
