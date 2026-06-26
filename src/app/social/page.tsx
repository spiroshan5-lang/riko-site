import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactSection } from "@/components/sections/ContactSection";
import { Instagram, Play, Heart, MessageCircle, Share2 } from "lucide-react";
import cocktail from "@/assets/cocktail.jpg";
import fire from "@/assets/fire.jpg";
import octopus from "@/assets/dish-octopus.jpg";

function SocialMediaSection() {
  const reels = [
    {
      image: fire,
      title: "Woodfire Theater",
      views: "142K views",
      likes: "12.4K",
      comments: "382",
      tag: "#RikoFire",
    },
    {
      image: cocktail,
      title: "The Smoked Pisco Sour Craft",
      views: "98K views",
      likes: "8.9K",
      comments: "144",
      tag: "#PiscoCraft",
    },
    {
      image: octopus,
      title: "Plating the Pulpo al Carbón",
      views: "230K views",
      likes: "21.1K",
      comments: "512",
      tag: "#ChefPlating",
    },
  ];

  return (
    <section className="relative pt-32 lg:pt-48 pb-12 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="reveal text-[11px] tracking-[0.5em] uppercase text-accent mb-6">
            📷 Social Space
          </p>
          <h1 className="reveal font-display text-5xl md:text-7xl lg:text-8xl text-sand leading-none">
            Follow the <span className="italic font-serif text-accent">rhythm</span>,<br />
            share the <span className="italic font-serif">story</span>.
          </h1>
          <p className="reveal mt-8 text-sand/70 max-w-xl mx-auto font-light leading-relaxed">
            Step behind the scenes. Explore our daily wood-fire preparations, cocktail chemistry,
            and guest stories on social media.
          </p>
        </div>

        {/* Reels Showcase */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl text-sand mb-2">Featured Reels</h2>
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            @riko.experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {reels.map((r, i) => (
            <div
              key={r.title}
              className="reveal relative aspect-[9/16] rounded-xl overflow-hidden border border-border/80 group grain cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Background Image */}
              <Image
                src={r.image}
                alt={r.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-background/30 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>
              </div>

              {/* Views badge top right */}
              <div className="absolute top-4 right-4 bg-background/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-wider text-sand border border-border/40">
                {r.views}
              </div>

              {/* Content Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                <span className="text-accent text-[11px] tracking-widest uppercase mb-1 font-semibold">
                  {r.tag}
                </span>
                <h3 className="font-display text-xl text-sand mb-4 leading-tight">{r.title}</h3>

                {/* Engagement icons */}
                <div className="flex gap-6 border-t border-border/40 pt-4 text-sand/80 text-xs">
                  <div className="flex items-center gap-1.5 hover:text-accent transition-colors">
                    <Heart size={14} />
                    <span>{r.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-accent transition-colors">
                    <MessageCircle size={14} />
                    <span>{r.comments}</span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto hover:text-accent transition-colors">
                    <Share2 size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social media connections */}
        <div className="border-t border-border pt-16 text-center">
          <h2 className="font-display text-3xl text-sand mb-6">
            Connect with us on other platforms
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              {
                icon: Instagram,
                label: "Instagram",
                link: "https://www.instagram.com/riko.experience?igsh=MXJpYmR3dDgzc2tmNQ==",
                handle: "@riko.experience",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.link}
                target={s.link.startsWith("http") ? "_blank" : "_self"}
                rel={s.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 px-6 py-4 border border-border/60 hover:border-accent hover:bg-card/25 transition-all duration-500 group"
              >
                <s.icon
                  size={20}
                  className="text-accent group-hover:scale-110 transition-transform"
                />
                <div className="text-left">
                  <div className="text-[10px] tracking-widest uppercase text-muted-foreground">
                    {s.label}
                  </div>
                  <div className="text-sand text-sm font-medium tracking-wide mt-0.5">
                    {s.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Social Media & Contact",
  description:
    "Stay connected with RIKO. Watch our culinary reels, find our contact information, location, and social channels.",
};

export default function SocialPage() {
  return (
    <SiteShell>
      <SocialMediaSection />
      <ContactSection />
    </SiteShell>
  );
}
