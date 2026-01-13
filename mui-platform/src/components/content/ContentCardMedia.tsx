"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ContentItem } from "./types";

export function ContentCardMedia({ item }: { item: ContentItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative aspect-video overflow-hidden"
      onMouseEnter={() => {
        setHovered(true);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        setHovered(false);
        videoRef.current?.pause();
        videoRef.current!.currentTime = 0;
      }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className={`object-cover transition ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {item.type === "talk" && item.previewVideo && (
        <video
          ref={videoRef}
          src={item.previewVideo}
          muted
          playsInline
          className={`absolute inset-0 object-cover transition ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
