"use client";

import { useMemo, useState } from "react";
import { AnimalCard } from "@/components/animal-card";

export function AnimalsClient({ animals }) {
  const [sortOrder, setSortOrder] = useState("low");

  const sortedAnimals = useMemo(() => {
    const nextAnimals = [...animals].sort((left, right) => {
      return sortOrder === "low" ? left.price - right.price : right.price - left.price;
    });

    return nextAnimals;
  }, [animals, sortOrder]);

  return (
    <section className="page-shell space-y-8 py-10 lg:py-16">
      <div className="flex flex-col gap-4 rounded-[30px] border border-(--border) bg-[rgba(255,250,241,0.9)] p-6 shadow-[0_20px_60px_rgba(73,47,21,0.1)] md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--accent)">All animals</p>
          <h1 className="mt-2 text-4xl font-black">Sort by price and explore every listing.</h1>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setSortOrder("low")}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
              sortOrder === "low"
                ? "bg-(--accent) text-white"
                : "border border-(--border) bg-white/80"
            }`}
          >
            Low to High
          </button>
          <button
            type="button"
            onClick={() => setSortOrder("high")}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
              sortOrder === "high"
                ? "bg-(--accent) text-white"
                : "border border-(--border) bg-white/80"
            }`}
          >
            High to Low
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
}