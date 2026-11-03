'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 pb-12 pt-8">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-studio-muted text-sm">© {currentYear} Chadakoin Digital</p>
        <div className="flex items-center gap-6">
          <p className="text-studio-muted text-sm">Custom Software · Jamestown, NY</p>
          <a href="/privacy" className="py-2.5 text-studio-muted text-sm hover:text-studio-text transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
