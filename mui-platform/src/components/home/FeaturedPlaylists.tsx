import Image from "next/image";
import Link from "next/link";

interface Playlist {
  title: string;
  count: string;
  image: string;
  href: string;
}

interface PlaylistsRailProps {
  title: string;
  subtitle?: string;
  playlists: Playlist[];
  viewAllHref?: string;
}

export function PlaylistsRail({
  title,
  subtitle,
  playlists,
  viewAllHref,
}: PlaylistsRailProps) {
  return (
    <section className="bg-black text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        
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
            <Link
              href={viewAllHref}
              className="text-sm underline opacity-80 hover:opacity-100"
            >
              View all
            </Link>
          )}
        </div>

        {/* Horizontal Rail */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {playlists.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group shrink-0 w-64 snap-start"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden bg-white/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </div>

              <h3 className="mt-3 text-sm font-medium leading-snug">
                {item.title}
              </h3>

              <p className="mt-0.5 text-xs text-white/60">
                {item.count}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
