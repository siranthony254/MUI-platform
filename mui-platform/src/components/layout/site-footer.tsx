// src/components/layout/site-footer.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        
        {/* Identity */}
        <div>
          <h3 className="text-white font-semibold">
            Mic’d Up Initiative
          </h3>
          <p className="mt-3 leading-relaxed">
            A youth-driven platform amplifying authentic campus voices,
            cultivating leadership, and shaping responsible cultural influence.
          </p>
          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} Mic’d Up Initiative
          </p>
        </div>

        {/* Programs & Media */}
        <div>
          <h4 className="text-white font-medium mb-3">
            Programs & Media
          </h4>
          <ul className="space-y-2">
            <li><Link href="/programs/talent" className="hover:underline">Talent & Mentorship</Link></li>
            <li><Link href="/programs/leadership" className="hover:underline">Leadership Formation</Link></li>
            <li><Link href="/media/podcast" className="hover:underline">Campus Podcast</Link></li>
            <li><Link href="/media/talks" className="hover:underline">Campus Talks</Link></li>
            <li><Link href="/media/stories" className="hover:underline">Voices & Stories</Link></li>
          </ul>
        </div>

        {/* Research & Governance */}
        <div>
          <h4 className="text-white font-medium mb-3">
            Research & Governance
          </h4>
          <ul className="space-y-2">
            <li><Link href="/research/campus-reports" className="hover:underline">Campus Reports</Link></li>
            <li><Link href="/research/policy" className="hover:underline">Policy Briefs</Link></li>
            <li><Link href="/research/trends" className="hover:underline">Youth Trends</Link></li>
            <li><Link href="/governance" className="hover:underline">Governance & Ethics</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact & Updates */}
        <div>
          <h4 className="text-white font-medium mb-3">
            Stay Connected
          </h4>
          <p className="mb-3">
            Receive campus insights, stories, and research updates.
          </p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="
                w-full rounded-md px-3 py-2
                bg-white/10 border border-white/20
                text-white placeholder:text-white/50
                focus:outline-none focus:border-white
              "
            />
            <button
              type="submit"
              className="
                px-4 py-2 rounded-md
                bg-white text-black
                text-sm font-medium
                hover:bg-neutral-200 transition
              "
            >
              Join
            </button>
          </form>

          <div className="mt-4 flex gap-4 text-xs">
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/get-involved" className="hover:underline">Get Involved</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
