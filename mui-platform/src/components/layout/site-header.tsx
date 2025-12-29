"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { navigation } from "@/config/navigation";
import { MegaMenu } from "./mega-menu";

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(label);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 120); // small forgiveness delay
  };

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center">
        
        {/* Brand */}
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight shrink-0"
        >
          Mic’d Up Initiative
          <p className="mt-2 text-neutral-600 max-w-2xl">
        A platform for voices, consciousness, and collective action.
      </p>
        </Link>

        {/* Right Cluster */}
        <div className="ml-auto flex items-center gap-10">
          
          {/* Navigation */}
          <nav className="flex items-center gap-8">
  {navigation.map((nav) => (
    <div
      key={nav.label}
      className="relative"
      onMouseEnter={() => handleEnter(nav.label)}
      onMouseLeave={handleLeave}
    >
      <button
        className={`
          relative text-sm font-medium transition
          ${active === nav.label ? "opacity-100" : "opacity-80 hover:opacity-100"}
          after:absolute after:left-0 after:-bottom-1
          after:h-px after:bg-white after:transition-all
          ${active === nav.label ? "after:w-full" : "after:w-0 hover:after:w-full"}
        `}
        aria-haspopup="true"
        aria-expanded={active === nav.label}
      >
        {nav.label}
      </button>

      {active === nav.label && (
        <MegaMenu
          items={nav.items}
          align={nav.label === "About" ? "right" : "left"}
        />
      )}
    </div>
  ))}
</nav>

          {/* Auth */}
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/signin"
              className="opacity-80 hover:opacity-100 transition"
            >
              Sign In
            </Link>

            <Link
              href="/membership"
              className="px-4 py-1 border border-white/30 rounded-full
                         hover:bg-white hover:text-black transition"
            >
              Membership
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
