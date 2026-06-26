"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/riko-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/experience", label: "Experience" },
  { to: "/featured", label: "Featured" },
  { to: "/social", label: "Social Media" },
];

export function NavigationBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-xl bg-background/55 border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={logo}
            alt="RIKO South American Cuisine"
            width={56}
            height={56}
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover ring-1 ring-primary/40 shadow-[0_0_30px_-8px_oklch(0.72_0.20_55/0.6)] transition-transform duration-700 group-hover:scale-105"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-xl tracking-[0.3em] text-sand">RIKO</span>
            <span className="text-[10px] tracking-[0.35em] text-muted-foreground mt-1">
              SOUTH AMERICAN CUISINE
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                href={l.to}
                className={`relative text-[12px] uppercase tracking-[0.25em] hover:text-accent transition-colors duration-500 font-light ${pathname === l.to ? "text-accent" : "text-sand/80"}`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/reservation"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.3em] border border-primary/60 text-sand hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Reserve
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-sand p-2"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-px bg-sand transition-transform ${open ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-sand transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-sand transition-transform ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-700 ease-in-out bg-background/95 backdrop-blur-xl ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <ul className="px-8 py-8 space-y-5">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                onClick={() => setOpen(false)}
                href={l.to}
                className={`block text-lg font-display tracking-wide hover:text-accent ${pathname === l.to ? "text-accent" : "text-sand"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/reservation"
              onClick={() => setOpen(false)}
              className="inline-block mt-4 px-6 py-3 text-xs uppercase tracking-[0.3em] border border-primary text-sand"
            >
              Reserve a Table
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
