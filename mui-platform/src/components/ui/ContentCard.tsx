import Image from "next/image";
import Link from "next/link";

interface ContentCardProps {
  title: string;
  description?: string;
  image: string;
  campus?: string;
  theme?: string;
  href: string;
}

export function ContentCard({
  title,
  description,
  image,
  campus,
  theme,
  href,
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-neutral-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition group-hover:scale-105"
        />
      </div>

      {/* Meta */}
      <div className="p-4">
        {/* Tags */}
        {(campus || theme) && (
          <div className="mb-2 flex flex-wrap gap-2 text-xs text-white/60">
            {campus && <span>{campus}</span>}
            {campus && theme && <span>•</span>}
            {theme && <span>{theme}</span>}
          </div>
        )}

        {/* Title */}
        <h3 className="text-sm font-medium leading-snug text-white">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="mt-1 text-xs text-white/60 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
