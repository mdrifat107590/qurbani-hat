import Link from "next/link";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { href: siteConfig.facebookUrl, label: "Facebook" },
  { href: siteConfig.instagramUrl, label: "Instagram" },
  { href: siteConfig.youtubeUrl, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(255,250,241,0.9)]">
      <div className="page-shell grid gap-10 py-14 md:grid-cols-3">
        <section className="space-y-4">
          <h2 className="text-xl font-black">About</h2>
          <p className="max-w-sm text-sm leading-7 text-black/70">
            {siteConfig.name} helps buyers explore healthy livestock for Qurbani with clear pricing,
            booking support, and a smooth mobile-first experience.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black">Contact</h2>
          <div className="space-y-2 text-sm text-black/70">
            <p>{siteConfig.contactEmail}</p>
            <p>{siteConfig.contactPhone}</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black">Social</h2>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-black/80 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}