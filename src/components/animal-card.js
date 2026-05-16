"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function AnimalCard({ animal }) {
  const [imgSrc, setImgSrc] = useState(animal.image);

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface-strong)] shadow-[0_18px_50px_rgba(73,47,21,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(73,47,21,0.12)]">
      
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imgSrc}
          alt={animal.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          onError={() => setImgSrc("/animal-placeholder.svg")}
        />

        <div className="absolute left-4 top-4 rounded-full bg-[rgba(32,22,15,0.82)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
          {animal.category}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            {animal.type} / {animal.breed}
          </p>
          <h3 className="text-2xl font-black leading-tight">
            {animal.name}
          </h3>
        </div>

        <p className="line-clamp-2 text-sm leading-7 text-black/70">
          {animal.description}
        </p>

        {/* Info */}
        <dl className="grid grid-cols-2 gap-3 text-sm text-black/75">
          <div className="rounded-2xl bg-black/5 px-3 py-3">
            <dt className="text-xs uppercase tracking-[0.15em]">Price</dt>
            <dd className="mt-1 text-base font-bold">
              BDT {animal.price.toLocaleString()}
            </dd>
          </div>

          <div className="rounded-2xl bg-black/5 px-3 py-3">
            <dt className="text-xs uppercase tracking-[0.15em]">Weight</dt>
            <dd className="mt-1 text-base font-bold">
              {animal.weight} kg
            </dd>
          </div>

          <div className="rounded-2xl bg-black/5 px-3 py-3">
            <dt className="text-xs uppercase tracking-[0.15em]">Age</dt>
            <dd className="mt-1 text-base font-bold">
              {animal.age} years
            </dd>
          </div>

          <div className="rounded-2xl bg-black/5 px-3 py-3">
            <dt className="text-xs uppercase tracking-[0.15em]">Location</dt>
            <dd className="mt-1 text-base font-bold">
              {animal.location}
            </dd>
          </div>
        </dl>

        {/* Button */}
        <Link
          href={`/details-page/${animal.id}`}
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}