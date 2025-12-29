export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/70 flex flex-col md:flex-row justify-between gap-6">
        <p>
          © {new Date().getFullYear()} Mic’d Up Initiative. All rights reserved.
        </p>

        <nav className="flex gap-6">
          <a href="/about" className="hover:underline">About</a>
          <a href="/partners" className="hover:underline">Partners</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
