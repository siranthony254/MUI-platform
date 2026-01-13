export default function Loading() {
  return (
    <div className="bg-black text-white">
      <div className="aspect-video bg-neutral-900 animate-pulse" />

      <div className="mx-auto max-w-5xl px-6 py-10 space-y-4">
        <div className="h-8 w-3/4 bg-neutral-800 rounded animate-pulse" />
        <div className="h-4 w-full bg-neutral-800 rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-neutral-800 rounded animate-pulse" />
      </div>
    </div>
  );
}
