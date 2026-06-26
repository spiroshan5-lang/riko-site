"use client";

import { useState } from "react";
import Image from "next/image";
import cocktail from "@/assets/cocktail.jpg";

export function ReservationsSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="reservations" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={cocktail}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 ember-gradient animate-ember" />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="reveal text-[11px] tracking-[0.5em] uppercase text-accent mb-6">
            — Reservations
          </p>
          <h2 className="reveal font-display text-5xl md:text-7xl lg:text-8xl text-sand leading-[1.02]">
            Reserve your <span className="italic font-serif text-accent">evening</span>.
          </h2>
          <p className="reveal mt-8 text-sand/70 max-w-lg mx-auto font-light leading-relaxed">
            Tables are intimate and limited. We recommend booking in advance to secure your
            preferred time.
          </p>
        </div>

        {sent ? (
          <div className="reveal text-center py-20 border border-border bg-card/40 backdrop-blur-sm">
            <p className="font-serif italic text-3xl text-accent mb-4">Gracias.</p>
            <p className="text-sand/70 max-w-md mx-auto">
              Your request has been received. Our host will confirm your reservation shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="reveal border border-border bg-card/40 backdrop-blur-md p-8 md:p-14 grid md:grid-cols-2 gap-x-10 gap-y-8"
          >
            <Field label="Full Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Date" name="date" type="date" required />
            <SelectField
              label="Time"
              name="time"
              options={[
                "6:30 PM",
                "7:00 PM",
                "7:30 PM",
                "8:00 PM",
                "8:30 PM",
                "9:00 PM",
                "9:30 PM",
              ]}
            />
            <SelectField
              label="Guests"
              name="guests"
              options={["2 Guests", "3 Guests", "4 Guests", "5 Guests", "6 Guests", "7+ Guests"]}
            />
            <div className="md:col-span-2">
              <label className="block text-[10px] tracking-[0.4em] uppercase text-sand/60 mb-3">
                Special Requests
              </label>
              <textarea
                rows={3}
                className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-sand placeholder:text-muted-foreground/60 font-light transition-colors"
                placeholder="Allergies, occasion, anniversary..."
              />
            </div>
            <button
              type="submit"
              className="md:col-span-2 mt-4 group inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.4em] hover:bg-accent transition-all duration-700"
            >
              Request Reservation
              <span className="w-6 h-px bg-current transition-all duration-500 group-hover:w-12" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.4em] uppercase text-sand/60 mb-3">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-sand placeholder:text-muted-foreground/60 font-light transition-colors"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  className = "",
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[10px] tracking-[0.4em] uppercase text-sand/60 mb-3">
        {label}
      </span>
      <select
        name={name}
        className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-sand font-light appearance-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-background text-sand">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
