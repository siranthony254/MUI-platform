"use client";

import Link from "next/link";

interface MenuItem {
  title: string;
  description: string;
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
        absolute top-full mt-3 z-40
        ${align === "right" ? "right-0" : "left-0"}
        'w-70'
        rounded-xl
        bg-black text-white
        border border-white/10
        shadow-xl
        animate-mega
      `}
    >
      {/* Caret */}
      <div
        className={`
          absolute -top-2 h-4 w-4 rotate-45
          bg-black border-l border-t border-white/10
          ${align === "right" ? "right-6" : "left-6"}
        `}
      />

      <ul className="relative p-4 space-y-2">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="
                block rounded-lg px-3 py-2
                transition
                hover:bg-white/5
              "
            >
              <h4 className="text-sm font-medium leading-tight">
                {item.title}
              </h4>
              <p className="mt-0.5 text-xs text-white/70 leading-snug">
                {item.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
