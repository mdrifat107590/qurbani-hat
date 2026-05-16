import Link from "next/link";
import { AnimalCard } from "@/components/animal-card";
import { getAnimals } from "@/lib/animals";
import { siteConfig } from "@/lib/site";

export default async function Home() {
  const animals = await getAnimals();
  const featuredAnimals = animals.slice(0, 4);
  const topBreeds = [...new Set(animals.map((animal) => animal.breed))].slice(0, 4);

  return (
    <div className="page-shell space-y-20 py-10 lg:py-16">
      <section className="hero-grid overflow-hidden rounded-4xl border border-(--border) p-5 shadow-[0_30px_100px_rgba(73,47,21,0.14)] lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6 animate__animated animate__fadeInUp">
            <span className="inline-flex rounded-full border border-(--border) bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-(--accent)">
              Modern qurbani marketplace
            </span>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Explore healthy livestock with a smooth booking flow for Qurbani.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-black/70 md:text-lg">
              Browse cows, buffalo, goats, and sheep with clear prices, animal details, and a fast booking route after authentication.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/animals"
                className="rounded-full bg-(--accent) px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-(--accent-strong)"
              >
                Browse Animals
              </Link>
              <Link
                href="/register"
                className="rounded-full border border-(--border) bg-white/75 px-6 py-3.5 text-sm font-semibold transition hover:border-(--accent) hover:text-(--accent)"
              >
                Create Account
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[28px] bg-white/75 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent)">Live market</p>
              <p className="mt-3 text-4xl font-black">{animals.length}</p>
              <p className="mt-2 text-sm text-black/60">Curated animal listings ready for booking.</p>
            </div>
            <div className="rounded-[28px] bg-(--accent) p-5 text-white shadow-lg shadow-[rgba(182,85,46,0.2)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Best for</p>
              <p className="mt-3 text-3xl font-black">Family Qurbani</p>
              <p className="mt-2 text-sm text-white/80">Balanced pricing, clear details, and a responsive browsing experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--accent)">
              Featured animals
            </p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Four selected animals</h2>
          </div>
          <Link href="/animals" className="text-sm font-semibold text-(--accent)">
            View all animals
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel rounded-[30px] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--accent)">Qurbani tips</p>
          <h2 className="mt-2 text-3xl font-black">Simple buyer guidance</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-black/70">
            <p>1. Compare weight, age, and location before choosing an animal.</p>
            <p>2. Check the booking form after login so your contact details stay accurate.</p>
            <p>3. Use the profile page to keep your name and avatar up to date.</p>
            <p>4. Pick a breed that fits your budget and family sharing plan.</p>
          </div>
        </div>

        <div className="glass-panel rounded-[30px] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--green)">Top breeds</p>
          <h2 className="mt-2 text-3xl font-black">Popular picks</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {topBreeds.map((breed) => (
              <div key={breed} className="rounded-[22px] bg-white/75 px-4 py-4">
                <p className="text-sm font-semibold text-black/50">Breed</p>
                <p className="mt-2 text-lg font-black">{breed}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[22px] bg-[linear-gradient(135deg,rgba(182,85,46,0.16),rgba(47,111,87,0.16))] px-4 py-4 text-sm leading-7 text-black/75">
            {siteConfig.name} keeps the layout responsive across mobile, tablet, and desktop with a clean visual style.
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="glass-panel rounded-[28px] p-6">
          <p className="text-4xl font-black text-(--accent)">01</p>
          <p className="mt-4 text-xl font-black">Browse</p>
          <p className="mt-2 text-sm leading-7 text-black/65">Open the catalog and filter the animals by price order.</p>
        </div>
        <div className="glass-panel rounded-[28px] p-6">
          <p className="text-4xl font-black text-(--green)">02</p>
          <p className="mt-4 text-xl font-black">Sign in</p>
          <p className="mt-2 text-sm leading-7 text-black/65">Log in, register, or use Google social sign-in to unlock booking.</p>
        </div>
        <div className="glass-panel rounded-[28px] p-6">
          <p className="text-4xl font-black text-(--accent)">03</p>
          <p className="mt-4 text-xl font-black">Book</p>
          <p className="mt-2 text-sm leading-7 text-black/65">Submit the booking form and get a toast confirmation instantly.</p>
        </div>
      </section>
    </div>
  );
}
