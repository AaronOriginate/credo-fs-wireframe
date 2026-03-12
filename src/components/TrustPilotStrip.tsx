export default function TrustPilotStrip() {
  return (
    <section className="bg-gray-light py-4">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-center gap-3">
        <div className="flex gap-0.5 text-yellow text-lg">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
        </div>
        <span className="text-sm font-semibold text-navy">
          Rated 5 stars on TrustPilot
        </span>
        <span className="text-xs text-text-muted hidden sm:inline">
          &middot; 6 reviews
        </span>
      </div>
    </section>
  );
}
