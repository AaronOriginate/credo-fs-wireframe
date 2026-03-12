export default function OtherWays() {
  return (
    <section className="py-16 lg:py-20 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-medium tracking-tight text-text-dark leading-[1.15]">
          Or find me here.
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
          {/* Email */}
          <div>
            <h4 className="text-xs font-semibold text-text-light uppercase tracking-widest mb-3">
              Email
            </h4>
            <a
              href="mailto:andy@credouk.co.uk"
              className="text-base font-medium text-teal hover:text-navy transition-colors"
            >
              andy@credouk.co.uk
            </a>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold text-text-light uppercase tracking-widest mb-3">
              Social
            </h4>
            <ul className="space-y-2.5 text-base text-text-muted">
              <li>
                <a
                  href="#"
                  className="hover:text-teal transition-colors"
                >
                  Instagram &mdash; @credofs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal transition-colors"
                >
                  Facebook &mdash; Credo FS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal transition-colors"
                >
                  LinkedIn &mdash; Andy Miller
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
