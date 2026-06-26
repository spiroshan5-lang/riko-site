"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/hero.jpg";

export function HeroSection() {
  const [showOrderModal, setShowOrderModal] = useState(false);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden grain">
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="RIKO immersive Peruvian-Latin restaurant interior with fire and terracotta walls"
          width={1920}
          height={1280}
          className="w-full h-full object-cover animate-slow-zoom"
        />
        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
        <div className="absolute inset-0 ember-gradient animate-ember" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center max-w-[1500px] w-full mx-auto px-6 lg:px-12 pt-32">
          <div className="max-w-4xl">
            <p className="reveal text-[11px] tracking-[0.5em] uppercase text-accent/90 mb-8 flex items-center gap-4">
              <span className="w-10 h-px bg-accent/60" />
              Bengaluru — UB City
            </p>

            <h1 className="reveal font-display text-[14vw] sm:text-[10vw] lg:text-[8.5vw] leading-[0.95] text-sand mb-4">
              <span className="italic font-serif font-light">Fire.</span>{" "}
              <span className="italic font-serif font-light">Heritage.</span>
              <br />
              <span className="italic font-serif font-light text-accent">Memory.</span>
            </h1>

            <p className="reveal max-w-xl text-base lg:text-lg text-sand/75 leading-relaxed font-light mt-10">
              An immersive Peruvian-Latin experience crafted through fire, story and the quiet
              language of the highlands — Bengaluru&apos;s first true voyage into the soul of South
              America.
            </p>

            <div className="reveal flex flex-wrap items-center gap-5 mt-12">
              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.35em] hover:bg-accent transition-all duration-700"
              >
                View Menu
                <span className="w-6 h-px bg-current transition-all duration-500 group-hover:w-10" />
              </Link>

              <button
                onClick={() => setShowOrderModal(true)}
                className="group inline-flex items-center gap-3 px-8 py-4 border border-sand/30 text-sand text-[11px] uppercase tracking-[0.35em] hover:border-accent hover:text-accent transition-all duration-700 cursor-pointer"
              >
                Order Online
                <span className="w-6 h-px bg-current transition-all duration-500 group-hover:w-10" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showOrderModal && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            onClick={() => setShowOrderModal(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-background border border-border/80 text-sand p-8 rounded-lg max-w-md w-full z-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-accent/20 animate-in fade-in-0 zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setShowOrderModal(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 cursor-pointer transition-opacity hover:opacity-100 focus:outline-none text-sand p-1"
              aria-label="Close"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6">
              <h2 className="font-display text-2xl text-sand tracking-wide">Order RIKO Online</h2>
              <p className="text-accent/80 text-[10px] tracking-wider uppercase mt-2 font-semibold">
                Select your preferred delivery platform
              </p>
            </div>

            <div className="grid gap-4 mt-2">
              <a
                href="https://swiggy.onelink.me/BVRZ?af_dp=swiggydiners%3A%2F%2Fdetails%2F1259452%3Fsource%3Dsharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 border border-border/60 hover:border-accent hover:bg-card/30 transition-all duration-500 group rounded"
              >
                <div>
                  <div className="font-display text-lg text-sand group-hover:text-accent transition-colors">
                    Swiggy
                  </div>
                  <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-1">
                    Delivery & Diners
                  </div>
                </div>
                <span className="text-accent text-[10px] tracking-widest uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Order Now →
                </span>
              </a>

              <a
                href="https://zomato.onelink.me/xqzv/hp4macoq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 border border-border/60 hover:border-accent hover:bg-card/30 transition-all duration-500 group rounded"
              >
                <div>
                  <div className="font-display text-lg text-sand group-hover:text-accent transition-colors">
                    Zomato
                  </div>
                  <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-1">
                    Delivery & Dining
                  </div>
                </div>
                <span className="text-accent text-[10px] tracking-widest uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Order Now →
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
