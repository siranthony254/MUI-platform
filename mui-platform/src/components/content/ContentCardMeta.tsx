import { ContentItem } from "./types";

export function ContentCardMeta({ item }: { item: ContentItem }) {
  return (
    <div className="p-3">
      <h3 className="text-sm font-medium leading-tight">
        {item.title}
      </h3>

      {item.type === "talk" && (
        <p className="mt-1 text-xs text-white/60">
          {item.speaker} · {item.duration}
        </p>
      )}

      {item.type === "playlist" && (
        <p className="mt-1 text-xs text-white/60">
          {item.count}
        </p>
      )}
    </div>
  );
}
