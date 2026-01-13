import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentCard } from "@/components/ui/ContentCard";

export function TalksGrid({ talks }: { talks: any[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader
        title="Campus Talks"
        subtitle="Ideas shaping campus culture and leadership"
        ctaLabel="View all"
        ctaHref="/media/talks"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {talks.map((talk) => (
          <ContentCard
            key={talk.id}
            title={talk.title}
            description={talk.description}
            image={talk.image}
            campus={talk.campus}
            theme={talk.theme}
            href={talk.href}
          />
        ))}
      </div>
    </section>
  );
}
