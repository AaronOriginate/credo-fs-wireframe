"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Andy", href: "/about" },
    { label: "Consultancy", href: "/consultancy" },
    { label: "Products", href: "/products" },
    { label: "Reviews", href: "/reviews" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wide text-navy"
          >
            CREDO
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden lg:block">
            <a
              href="/contact"
              className="inline-block bg-yellow text-dark rounded-lg px-6 py-2.5 text-sm font-semibold hover:bg-yellow-hover transition-colors"
            >
              Let&apos;s Have a Chat
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-navy transition-transform ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-navy transition-opacity ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-navy transition-transform ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-navy transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                className="inline-block bg-yellow text-dark rounded-lg px-5 py-2.5 text-sm font-semibold text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Let&apos;s Have a Chat
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
