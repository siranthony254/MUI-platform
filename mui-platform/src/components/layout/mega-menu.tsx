"use client";

import Link from "next/link";

interface MenuItem {
  title: string;
  description?: string;
  href: string;
}

export function MegaMenu({
  items,
  align = "left",
}: {
  items: MenuItem[];
  align?: "left" | "right";
}) {
  return (
    <div
      className={`
        absolute top-full mt-4 z-40
        ${align === "right" ? "right-0" : "left-0"}
        w-[180px]
        rounded-2xl
        bg-slate-900 text-slate-100
        border border-slate-800
        shadow-2xl
        backdrop-blur
        animate-mega
      `}
    >
      {/* Caret */}
      <div
        className={`
          absolute -top-2 h-4 w-4 rotate-45
          bg-slate-900
          border-l border-t border-slate-800
          ${align === "right" ? "right-8" : "left-8"}
        `}
      />

      <ul className="relative p-5 space-y-3">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="
                group block rounded-xl px-4 py-3
                transition
                hover:bg-slate-800/60
              "
            >
              <h4 className="text-sm font-medium leading-tight text-slate-100 group-hover:text-amber-400 transition">
                {item.title}
              </h4>

              {item.description && (
                <p className="mt-1 text-xs text-slate-400 leading-snug">
                  {item.description}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
