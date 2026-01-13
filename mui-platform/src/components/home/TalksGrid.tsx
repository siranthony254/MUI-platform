   import { TalkCard } from "./TalkCard";

interface TalksGridProps {
  title: string;
  subtitle?: string;
  talks: any[]; // replace with Talk[] if you have the type
  viewAllHref?: string;
}

export function TalksGrid({
  title,
  subtitle,
  talks,
  viewAllHref,
}: TalksGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      
      {/* Section Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>

          {subtitle && (
            <p className="mt-1 text-sm text-white/60">
              {subtitle}
            </p>
          )}
        </div>

        {viewAllHref && (
          <a
            href={viewAllHref}
            className="text-sm underline opacity-80 hover:opacity-100"
          >
            View all
          </a>
        )}
      </div>

      {/* Grid */}
      <div
        className="
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {talks.map((talk) => (
          <TalkCard
            key={talk.id}
            {...talk}
          />
        ))}
      </div>
    </section>
  );
}
