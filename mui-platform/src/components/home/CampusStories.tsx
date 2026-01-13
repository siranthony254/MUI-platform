import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    title: "How one university sparked a culture of dialogue",
    author: "MUI Editorial",
    image: "/campus-1.jpg",
    href: "/stories/campus-dialogue",
  },
  {
    title: "From silence to stage: student voices rising",
    author: "Campus Desk",
    image: "/campus-2.jpg",
    href: "/stories/student-voices",
  },
  {
    title: "When art becomes activism on campus",
    author: "Creative Team",
    image: "/campus-3.jpg",
    href: "/stories/art-activism",
  },
];

export function CampusStories() {
  return (
    <section className="bg-grey">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10">
          Campus Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link
              key={story.title}
              href={story.href}
              className="group"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={600}
                  height={450}
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <h3 className="mt-4 text-base font-medium text-black leading-snug">
                {story.title}
              </h3>

              <p className="mt-1 text-xs text-neutral-600">
                {story.author}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
