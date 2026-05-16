export default function Loading() {
  return (
    <div className="page-shell py-10 lg:py-16">
      <div className="space-y-6 rounded-[30px] border border-[var(--border)] bg-[rgba(255,250,241,0.9)] p-6 shadow-[0_20px_60px_rgba(73,47,21,0.1)]">
        <div className="h-5 w-40 animate-pulse rounded-full bg-black/10" />
        <div className="h-12 w-full animate-pulse rounded-3xl bg-black/10" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-[420px] animate-pulse rounded-[28px] bg-black/10" />
          ))}
        </div>
      </div>
    </div>
  );
}