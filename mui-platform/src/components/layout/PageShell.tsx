// src/components/layout/PageShell.tsx
import React from "react";

interface PageShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <main className="bg-black text-white">
      {/* Header */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 space-y-16">
          {children}
        </div>
      </section>
    </main>
  );
}
