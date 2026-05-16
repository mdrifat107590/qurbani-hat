"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "@/components/auth-provider";

export function BookingForm({ animal, currentUser }) {
  const { user, setUser } = useAuth();
  const activeUser = user || currentUser;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (!activeUser) {
      return;
    }

    setFormData((current) => ({
      ...current,
      name: activeUser.name || current.name,
      email: activeUser.email || current.email,
    }));
  }, [activeUser]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success(`${animal.name} booking request sent successfully.`);
    setFormData({
      name: activeUser?.name || "",
      email: activeUser?.email || "",
      phone: "",
      address: "",
    });

    if (activeUser) {
      setUser(activeUser);
    }
  };

  return (
    <section className="page-shell py-14">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-[rgba(255,250,241,0.9)] shadow-[0_26px_70px_rgba(73,47,21,0.12)]">
          <img
            src={animal.image}
            alt={animal.name}
            onError={(event) => {
              event.currentTarget.src = "/animal-placeholder.svg";
            }}
            className="h-[320px] w-full object-cover"
          />
          <div className="space-y-5 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {animal.type}
              </span>
              <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/70">
                {animal.breed}
              </span>
            </div>
            <h1 className="text-4xl font-black leading-tight">{animal.name}</h1>
            <p className="text-sm leading-7 text-black/70">{animal.description}</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-black/5 px-4 py-3">
                <p className="text-black/55">Price</p>
                <p className="mt-1 text-lg font-bold">BDT {animal.price.toLocaleString()}</p>
              </div>
              <div className="rounded-2xl bg-black/5 px-4 py-3">
                <p className="text-black/55">Location</p>
                <p className="mt-1 text-lg font-bold">{animal.location}</p>
              </div>
            </div>
          </div>
        </article>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-[30px] border border-[var(--border)] bg-[rgba(255,250,241,0.9)] p-6 shadow-[0_26px_70px_rgba(73,47,21,0.12)] md:p-8"
        >
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Booking form
            </p>
            <h2 className="text-3xl font-black">Book this animal</h2>
            <p className="text-sm text-black/60">Fill in your contact details to complete the request.</p>
          </div>

          <div className="grid gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full rounded-2xl border border-[var(--border)] bg-white/85 px-4 py-3 outline-none transition focus:border-[var(--accent)]"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="w-full rounded-2xl border border-[var(--border)] bg-white/85 px-4 py-3 outline-none transition focus:border-[var(--accent)]"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full rounded-2xl border border-[var(--border)] bg-white/85 px-4 py-3 outline-none transition focus:border-[var(--accent)]"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="5"
              placeholder="Address"
              className="w-full rounded-2xl border border-[var(--border)] bg-white/85 px-4 py-3 outline-none transition focus:border-[var(--accent)]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[var(--accent)] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
}