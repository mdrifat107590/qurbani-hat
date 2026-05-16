"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "@/components/auth-provider";

export function UpdateForm({ user }) {
  const router = useRouter();
  const { updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user.name,
    photoURL: user.photoURL,
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaving(true);

    try {
      updateProfile(formData);
      toast.success("Profile updated successfully.");
      router.push("/my-profile");
    } catch (error) {
      toast.error(error.message || "Could not update profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="page-shell flex min-h-[calc(100vh-220px)] items-center py-14">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-2xl space-y-5 rounded-[30px] border border-[var(--border)] bg-[rgba(255,250,241,0.94)] p-6 shadow-[0_26px_70px_rgba(73,47,21,0.12)] md:p-8"
      >
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            Update profile
          </p>
          <h1 className="text-3xl font-black">Change your name and photo</h1>
        </div>

        <input
          name="photoURL"
          value={formData.photoURL}
          onChange={handleChange}
          type="url"
          placeholder="Image URL"
          className="w-full rounded-2xl border border-[var(--border)] bg-white/85 px-4 py-3 outline-none transition focus:border-[var(--accent)]"
        />
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          className="w-full rounded-2xl border border-[var(--border)] bg-white/85 px-4 py-3 outline-none transition focus:border-[var(--accent)]"
        />

        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-full bg-[var(--accent)] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {saving ? "Updating..." : "Update Information"}
        </button>
      </form>
    </section>
  );
}