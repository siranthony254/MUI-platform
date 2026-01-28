import Image from "next/image";
export default function PageName() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Header */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-4xl font-semibold">Founding Directors</h1>
        <p className="mt-4 text-white/70">
          The leadership team guiding the vision, governance, and strategic
          direction of the Mic’d Up Initiative.
        </p>
      </header>

      {/* Directors Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {DIRECTORS.map((director) => (
          <div
            key={director.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            {/* Photo Placeholder */}
            <div className="mb-5 aspect-square w-full rounded-xl bg-white/10 flex items-center justify-center text-white/40 text-sm">
              <Image
    src={director.photo}
    alt={director.name}
    width={400}
    height={400}
    className="h-full w-full object-cover"
  />
            </div>

            {/* Name */}
            <h3 className="text-lg font-medium">{director.name}</h3>

            {/* Department / Role */}
            <p className="mt-1 text-sm text-amber-400">
              {director.department}
            </p>

            {/* Short Bio */}
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              {director.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------
   Temporary Static Data
   (Replace with backend later)
--------------------------------- */
const DIRECTORS = [
  {
    name: "Director Name",
    department: "Executive Leadership",
    bio: "Provides overall vision and strategic direction for the Mic’d Up Initiative across campuses.",
    photo : "/directors/President.jpg",
  },
  {
    name: "Director Name",
    department: "Programs & Mentorship",
    bio: "Oversees talent development, leadership formation, and campus-based mentorship programs.",
    
  },
  {
    name: "Director Name",
    department: "Media & Storytelling",
    bio: "Leads content strategy, podcasts, talks, and documentary storytelling across platforms.",
  },
  {
    name: "Director Name",
    department: "Research & Insights",
    bio: "Guides campus research, reports, and policy-oriented youth insight initiatives.",
  },
  {
    name: "Director Name",
    department: "Partnerships & Growth",
    bio: "Manages institutional partnerships, sponsorships, and long-term sustainability efforts.",
  },
];
