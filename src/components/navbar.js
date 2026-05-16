"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { Avatar } from "@/components/avatar";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/animals", label: "All Animals" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(252,246,236,0.84)] backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-sm font-bold text-white shadow-lg shadow-[rgba(182,85,46,0.28)]">
            QH
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-black tracking-[0.18em] uppercase text-[var(--foreground)]">
              {siteConfig.name}
            </span>
            <span className="text-xs text-black/55">Livestock marketplace</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition hover:text-[var(--accent)] ${
                pathname === item.href ? "text-[var(--accent)]" : "text-[var(--foreground)]/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <Link href="/my-profile" className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-white/70 px-3 py-2">
                <Avatar name={user.name} photoURL={user.photoURL} className="h-9 w-9 rounded-full object-cover" />
                <span className="text-sm font-semibold">{user.name}</span>
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>

      <div className={`${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-t border-[var(--border)] bg-[rgba(252,246,236,0.96)] transition-all duration-300 md:hidden`}>
        <div className="page-shell flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                  pathname === item.href
                    ? "bg-[var(--accent)] text-white"
                    : "bg-white/70 text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {user ? (
            <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/70 px-4 py-3">
              <Link href="/my-profile" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <Avatar name={user.name} photoURL={user.photoURL} className="h-10 w-10 rounded-full object-cover" />
                <span className="text-sm font-semibold">{user.name}</span>
              </Link>
              <button type="button" onClick={handleLogout} className="text-sm font-semibold text-[var(--accent)]">
                Logout
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-center text-sm font-semibold"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}