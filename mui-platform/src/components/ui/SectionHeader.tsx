import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function SectionHeader({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6">
      <div>
        <h2 className="text-2xl font-semibold text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-white/60 max-w-xl">
            {subtitle}
          </p>
        )}
      </div>

      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100"
        >
          {ctaLabel}
        </Link>
      )}
    </div>
  );
}
