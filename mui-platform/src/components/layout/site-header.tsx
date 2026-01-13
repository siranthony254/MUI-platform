"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { MegaMenu } from "./mega-menu";

/* -----------------------------
   Navigation Structure
------------------------------*/
const NAV_ITEMS = [
  {
    label: "About",
    href: "/About",
    items: [
      {
        title: "Our Story",
        description: "Why universities are our focus",
        href: "/About/OurStory",
      },
      {
        title: "Vision & Mission",
        description: "What Mic’d Up stands for",
        href: "/About/Vision-Mission",
      },
      {
        title: "MUI Leadership",
        description: "Founding directors and governance",
        href: "/About/MUI-Leadership",
      },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    items: [
      {
        title: "Talent & Mentorship",
        description: "Identifying and nurturing voices",
        href: "/Programs/Mentorships",
      },
      {
        title: "Leadership Formation",
        description: "Values-driven leadership development",
        href: "/Programs/Leadership",
      },
      {
        title: "Events & Summits",
        description: "Campus dialogues and convenings",
        href: "/Programs/Events",
      },
    ],
  },
  {
    label: "Research & Insights",
    href: "/research",
    items: [
      {
        title: "Campus Reports",
        description: "Original student-focused research",
        href: "/Research/Reports",
      },
      {
        title: "Youth Trends",
        description: "Emerging voices and movements",
        href: "/Research/Trends",
      },
    ],
  },
  {
    label: "Media",
    href: "/media",
    items: [
      {
        title: "Campus Podcast",
        description: "Long-form campus conversations",
        href: "/Media/Podcast",
      },
      {
        title: "Voices & Stories",
        description: "Narratives from student life",
        href: "/Media/Stories",
      },
      {
        title: "MUC Talks",
        description: "Stage talks and panels",
        href: "/Media/Talks",
      },
      {
        title: "Documentaries",
        description: "Deep-dive visual stories",
        href: "/Media/Documentaries",
      },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    items: [
      {
        title: "Ambassadors",
        description: "Represent Mic’d Up on your campus",
        href: "/Get-involved/Ambassadors",
      },
      {
        title: "Partners",
        description: "Collaborate with the initiative",
        href: "/Get-involved/Partnerships",
      },
      {
        title: "Mentors",
        description: "Guide emerging voices",
        href: "/Get-involved/Mentors",
      },
    ],
  },
];

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(label);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setActive(null), 120);
  };

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center">

        {/* Brand */}
        <Link href="/" className="font-semibold text-lg tracking-tight text-amber-500">
          Mic’d Up Initiative
        </Link>

        {/* Navigation */}
        <nav className="ml-auto flex items-center gap-8">
          {NAV_ITEMS.map((nav) => (
            <div
              key={nav.label}
              className="relative"
              onMouseEnter={() => handleEnter(nav.label)}
              onMouseLeave={handleLeave}
            >
              <Link
                href={nav.href}
                className={`
                  relative text-sm font-medium transition
                  ${active === nav.label ? "text-amber-400" : "text-white/80 hover:text-white"}
                  after:absolute after:left-0 after:-bottom-1
                  after:h-px after:bg-amber-400 after:transition-all
                  ${active === nav.label ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {nav.label}
              </Link>

              {active === nav.label && <MegaMenu items={nav.items} />}
            </div>
          ))}

          {/* Primary CTA */}
          <Link
            href="/mic-the-campus"
            className="ml-4 px-4 py-1.5 text-sm rounded-full
                       border border-amber-400 text-amber-400
                       hover:bg-amber-400 hover:text-black transition"
          >
            Mic the Campus
          </Link>
        </nav>
      </div>
    </header>
  );
}
