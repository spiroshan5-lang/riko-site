import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/riko-logo.png";

export function Footer() {
  return (
    <footer className="relative pt-24 pb-10 overflow-hidden border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="absolute inset-0 ember-gradient opacity-60" />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src={logo}
                alt="RIKO"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full ring-1 ring-primary/40"
              />
              <div>
                <div className="font-display text-2xl tracking-[0.3em] text-sand">RIKO</div>
                <div className="text-[10px] tracking-[0.35em] text-muted-foreground mt-1">
                  SOUTH AMERICAN CUISINE
                </div>
              </div>
            </div>
            <p className="font-serif italic text-2xl lg:text-3xl text-sand/85 leading-snug max-w-md">
              Fire, heritage and memory — a Peruvian-Latin voyage in the heart of Bengaluru.
            </p>
            <Link
              href="/reservation"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.35em] hover:bg-accent transition-all duration-700"
            >
              Reserve a Table
            </Link>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] tracking-[0.4em] uppercase text-accent mb-5">Explore</div>
            <ul className="space-y-3 font-light">
              {[
                { label: "Home", to: "/" },
                { label: "Menu", to: "/menu" },
                { label: "Experience", to: "/experience" },
                { label: "Featured", to: "/featured" },
                { label: "Social Media", to: "/social" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.to} className="text-sand/75 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] tracking-[0.4em] uppercase text-accent mb-5">Visit</div>
            <p className="text-sand/75 font-light leading-relaxed">
              UB City, Vittal Mallya Road
              <br />
              Bengaluru, Karnataka 560001
              <br />
              <span className="text-accent">+91 99725 40238</span>
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/riko.experience?igsh=MXJpYmR3dDgzc2tmNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.35em] uppercase text-sand/70 hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="hairline mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} RIKO • Crafted with fire</span>
          <span className="font-serif normal-case tracking-normal italic text-sand/60">
            Bengaluru • UB City
          </span>
        </div>
      </div>
    </footer>
  );
}
