"use client";

export default function ContactForm() {
  return (
    <section id="contact-form" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-lg mx-auto lg:mx-0">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-[2.5rem] font-medium tracking-tight text-text-dark leading-[1.15]">
            Tell me a bit about yourself.
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 space-y-6"
          >
            {/* Your name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text-dark mb-1.5"
              >
                Your name <span className="text-teal">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-colors"
              />
            </div>

            {/* Business type */}
            <div>
              <label
                htmlFor="venue"
                className="block text-sm font-medium text-text-dark mb-1.5"
              >
                What kind of venue do you run?{" "}
                <span className="text-teal">*</span>
              </label>
              <select
                id="venue"
                name="venue"
                required
                defaultValue=""
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-text-dark focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-colors"
              >
                <option value="" disabled>
                  Select your venue type
                </option>
                <option value="pub">Pub</option>
                <option value="restaurant">Restaurant</option>
                <option value="cafe">Cafe</option>
                <option value="bar">Bar</option>
                <option value="club">Club</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* What are you looking for? */}
            <div>
              <label
                htmlFor="looking-for"
                className="block text-sm font-medium text-text-dark mb-1.5"
              >
                What are you looking for?
              </label>
              <select
                id="looking-for"
                name="looking-for"
                defaultValue=""
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-text-dark focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-colors"
              >
                <option value="" disabled>
                  Choose an option
                </option>
                <option value="review">Review of my current setup</option>
                <option value="till">New till system</option>
                <option value="card-machine">New card machine</option>
                <option value="not-sure">Not sure yet</option>
                <option value="something-else">Something else</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-dark mb-1.5"
              >
                Anything you&apos;d like me to know before we chat?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me a bit about your business, what's working, what isn't..."
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-colors resize-y"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-dark mb-1.5"
              >
                Your email <span className="text-teal">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-colors"
              />
            </div>

            {/* Phone (optional) */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-text-dark mb-1.5"
              >
                Phone number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="07xxx xxx xxx"
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-yellow text-dark rounded-lg px-8 py-4 text-base font-semibold hover:bg-yellow-hover transition-colors"
            >
              Send Message
            </button>

            <p className="text-sm text-text-light text-center">
              I&apos;ll get back to you personally. No auto-replies, no mailing
              list.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
