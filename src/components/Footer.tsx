export default function Footer() {
  return (
    <footer className="bg-navy-deep py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top: Logo + strapline */}
        <div className="mb-10">
          <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-wide text-white">
            CREDO
          </span>
          <p className="mt-2 text-sm text-white/40">
            Built on belief. Powered by trust.
          </p>
        </div>

        {/* Grid columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Col 1: Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li>Phone: TBC</li>
              <li>Email: andy@credouk.co.uk</li>
              <li>WhatsApp: TBC</li>
            </ul>
          </div>

          {/* Col 2: Links */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/about" className="text-white/40 hover:text-teal transition-colors">
                  About Andy
                </a>
              </li>
              <li>
                <a href="/consultancy" className="text-white/40 hover:text-teal transition-colors">
                  Consultancy
                </a>
              </li>
              <li>
                <a href="/products" className="text-white/40 hover:text-teal transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-white/40 hover:text-teal transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Social
            </h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li><a href="#" className="hover:text-teal transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-teal transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-teal transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            &copy; 2026 Credo FS
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/25 hover:text-white/40 transition-colors">
              Privacy Policy
            </a>
            <span className="text-xs text-yellow/60">
              &#9733; TrustPilot
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
