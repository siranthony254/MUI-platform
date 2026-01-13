// src/components/talks/TalkPlayer.tsx
"use client";

export function TalkPlayer({ talk }: any) {
  return (
    <div className="relative bg-black">
      <video
        src={talk.videoUrl}
        poster={talk.poster}
        controls
        playsInline
        className="
          w-full max-h-[80vh]
          object-contain
          bg-black
        "
      />
    </div>
  );
}
