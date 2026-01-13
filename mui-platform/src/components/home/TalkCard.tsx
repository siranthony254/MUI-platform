import Link from "next/link";

interface TalkCardProps {
  title: string;
  speaker: string;
  duration: string;
  thumbnail: string;
  href: string;
  category?: string;
}

export function TalkCard({
  title,
  speaker,
  duration,
  thumbnail,
  href,
  category,
}: TalkCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl overflow-hidden border border-white/10
                 hover:border-white/20 transition"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-white/5">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition"
        />

        {/* Duration */}
        <span className="absolute bottom-2 right-2 text-xs bg-black/70 px-2 py-0.5 rounded">
          {duration}
        </span>
      </div>

      {/* Meta */}
      <div className="p-4 space-y-1">
        {category && (
          <span className="text-[11px] uppercase tracking-wide text-white/50">
            {category}
          </span>
        )}

        <h3 className="text-sm font-medium leading-snug group-hover:underline">
          {title}
        </h3>

        <p className="text-xs text-white/60">
          {speaker}
        </p>
      </div>
    </Link>
  );
}
