export type ContentType = "talk" | "playlist";

export interface BaseContent {
  id: string;
  title: string;
  description?: string;
  image: string;
  href: string;
}

export interface TalkContent extends BaseContent {
  type: "talk";
  speaker: string;
  duration: string;
  previewVideo?: string;
}

export interface PlaylistContent extends BaseContent {
  type: "playlist";
  count: string;
}

export type ContentItem = TalkContent | PlaylistContent;
