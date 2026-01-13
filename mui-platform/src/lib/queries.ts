import { groq } from "next-sanity";

export const DISCOVER_QUERY = groq`
  *[_type == "contentItem"] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    description,
    type,
    campus,
    theme,
    thumbnail
  }
`;
