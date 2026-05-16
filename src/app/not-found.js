import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-shell flex min-h-[calc(100vh-220px)] items-center py-14">
      <div className="mx-auto max-w-2xl rounded-4xl border border-(--border) bg-[rgba(255,250,241,0.94)] p-8 text-center shadow-[0_26px_70px_rgba(73,47,21,0.12)]">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-(--accent)">Not found</p>
        <h1 className="mt-4 text-4xl font-black">The page you are looking for does not exist.</h1>
        <p className="mt-4 text-sm leading-7 text-black/65">
          Return to the home page or browse the animal catalog to continue.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-(--accent) px-5 py-3 text-sm font-semibold text-white">
            Go Home
          </Link>
          <Link href="/animals" className="rounded-full border border-(--border) px-5 py-3 text-sm font-semibold">
            View Animals
          </Link>
        </div>
      </div>
    </section>
  );
}