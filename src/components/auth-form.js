"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "@/components/auth-provider";

export function AuthForm({ mode = "login", nextPath = "/" }) {
  const router = useRouter();
  const { login, register, googleLogin } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isRegister = mode === "register";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      if (isRegister) {
        await register(formData);
        toast.success("Registration complete. Please log in.");
        router.push("/login");
      } else {
        await login({ email: formData.email, password: formData.password });
        toast.success("Logged in successfully.");
        router.push(nextPath || "/");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsSubmitting(true);

    try {
      await googleLogin();
      toast.success("Google login successful.");
      router.push(nextPath || "/");
    } catch (error) {
      toast.error(error.message || "Google sign in failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="page-shell flex min-h-[calc(100vh-220px)] items-center py-14">
      <div className="grid w-full gap-8 rounded-[32px] border border-[var(--border)] bg-[rgba(255,250,241,0.9)] p-4 shadow-[0_30px_80px_rgba(73,47,21,0.1)] lg:grid-cols-[1.1fr_0.9fr] lg:p-5">
        <div className="hero-grid flex flex-col justify-between rounded-[28px] p-8 soft-grid">
          <div className="space-y-5 animate__animated animate__fadeInUp">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              {isRegister ? "Create account" : "Welcome back"}
            </p>
            <h1 className="max-w-lg text-4xl font-black leading-tight md:text-5xl">
              {isRegister
                ? "Join the marketplace and start booking healthy Qurbani animals."
                : "Sign in to browse animals, open details, and place a booking."}
            </h1>
            <p className="max-w-xl text-sm leading-7 text-black/70 md:text-base">
              Manage your account, update your profile, and keep your booking flow fast on mobile or desktop.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] bg-white/70 p-4">
              <p className="text-2xl font-black text-[var(--accent)]">08</p>
              <p className="mt-1 text-sm text-black/65">Premium livestock cards</p>
            </div>
            <div className="rounded-[24px] bg-white/70 p-4">
              <p className="text-2xl font-black text-[var(--green)]">100%</p>
              <p className="mt-1 text-sm text-black/65">Responsive layout</p>
            </div>
            <div className="rounded-[24px] bg-white/70 p-4">
              <p className="text-2xl font-black text-[var(--accent)]">1</p>
              <p className="mt-1 text-sm text-black/65">Booking toast flow</p>
            </div>
          </div>
        </div>

        <form className="space-y-5 rounded-[28px] p-6 md:p-8" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <h2 className="text-3xl font-black">{isRegister ? "Register" : "Login"}</h2>
            <p className="text-sm text-black/60">
              {isRegister
                ? "Register with your name, email, and password."
                : "Enter your email and password to continue."}
            </p>
          </div>

          {isRegister ? (
            <>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
                className="w-full rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 outline-none transition focus:border-[var(--accent)]"
              />
              <input
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                type="url"
                placeholder="Photo URL (optional)"
                className="w-full rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 outline-none transition focus:border-[var(--accent)]"
              />
            </>
          ) : null}

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 outline-none transition focus:border-[var(--accent)]"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 outline-none transition focus:border-[var(--accent)]"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-[var(--accent)] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Please wait..." : isRegister ? "Register" : "Login"}
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isSubmitting}
            className="w-full rounded-full border border-[var(--border)] bg-white/75 px-5 py-3.5 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            Continue with Google
          </button>

          <p className="text-center text-sm text-black/65">
            {isRegister ? "Already have an account?" : "Need an account?"}{" "}
            <Link
              href={isRegister ? "/login" : "/register"}
              className="font-semibold text-[var(--accent)]"
            >
              {isRegister ? "Login" : "Register"}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}