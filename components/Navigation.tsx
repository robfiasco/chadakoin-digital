'use client';

import { useEffect, useState } from 'react';
import BookingButton from '@/components/BookingButton';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'What I Build' },
    { href: '#chadakoin-now', label: 'Chadakoin Now' },
    { href: '#projects', label: 'Projects' },
    { href: '#how-i-work', label: 'How I Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-black/65 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 min-h-[44px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-mark.webp" alt="" width={36} height={36} className="w-9 h-9 rounded-lg" />
            <div>
              <p className="text-studio-text font-display font-bold leading-none">Chadakoin Digital</p>
              <p className="text-studio-muted text-xs font-mono">Product Studio</p>
            </div>
          </a>

          <div className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="py-2.5 text-studio-muted hover:text-studio-text transition-colors">
                {link.label}
              </a>
            ))}
            <BookingButton className="!px-5 !py-2 text-sm" />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-studio-text p-3 -mr-3"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="xl:hidden mt-4 p-4 rounded-xl glass space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-studio-muted hover:text-studio-text transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <BookingButton className="w-full" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
