import Link from "next/link";
import { Avatar } from "@/components/avatar";

export function ProfilePanel({ user }) {
  return (
    <section className="page-shell flex min-h-[calc(100vh-220px)] items-center py-14">
      <div className="grid w-full gap-8 rounded-[32px] border border-[var(--border)] bg-[rgba(255,250,241,0.92)] p-5 shadow-[0_30px_80px_rgba(73,47,21,0.12)] lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
        <div className="rounded-[28px] bg-[linear-gradient(180deg,rgba(182,85,46,0.16),rgba(47,111,87,0.12))] p-8">
          <Avatar
            name={user.name}
            photoURL={user.photoURL}
            className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg"
          />
          <div className="mt-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Logged in profile</p>
            <h1 className="mt-3 text-4xl font-black">{user.name}</h1>
            <p className="mt-3 text-sm text-black/65">{user.email}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[28px] bg-white/70 p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--green)]">My Profile</p>
            <h2 className="text-3xl font-black">Keep your booking identity clean and updated.</h2>
            <p className="max-w-xl text-sm leading-7 text-black/70">
              The profile page shows the current logged-in user data and lets you update your name and photo in one place.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-black/5 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-black/50">Name</p>
              <p className="mt-2 text-base font-semibold">{user.name}</p>
            </div>
            <div className="rounded-2xl bg-black/5 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-black/50">Email</p>
              <p className="mt-2 text-base font-semibold">{user.email}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/my-profile/update"
              className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
            >
              Update Information
            </Link>
            <Link
              href="/animals"
              className="rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Explore Animals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}