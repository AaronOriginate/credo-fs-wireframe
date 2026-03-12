export default function IntegrationExplained() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left -- body text */}
          <div className="w-full lg:w-[60%]">
            <div className="space-y-5 text-lg text-text-muted leading-relaxed">
              <p>
                There&apos;s one thing I look for before I recommend anything: does the till talk to the card machine?
              </p>
              <p>
                That sounds obvious, but most pubs and restaurants run two separate systems from two separate companies. Your till does one thing, your card machine does another, and they don&apos;t share information. When something goes wrong, you ring one company and they say it&apos;s the other one&apos;s problem. You spend half your morning bouncing between two support lines instead of running your business.
              </p>
              <p>
                Every system I recommend has integrated card processing. That means your till and your card machine work together. One system. One set of reports. And when something plays up, you call one person. Me.
              </p>
            </div>
          </div>

          {/* Right -- image placeholder */}
          <div className="w-full lg:w-[40%]">
            <div className="w-full aspect-[4/3] rounded-xl bg-gray-light border-2 border-dashed border-text-light/30 flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium text-text-muted">
                Till and card machine on a pub bar
              </span>
              <span className="text-xs text-text-light">
                Integrated setup, real venue
              </span>
            </div>
          </div>
        </div>

        {/* Yellow rule divider */}
        <div className="mt-16 lg:mt-20 border-b-2 border-yellow" />
      </div>
    </section>
  );
}
