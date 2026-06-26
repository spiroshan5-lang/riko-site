import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { ScrollReelTestimonials } from "@/components/ui/scroll-reel-testimonials";

export const metadata: Metadata = {
  title: "RIKO — Peruvian-Latin Cuisine — Bengaluru",
  description:
    "RIKO — Bengaluru's first immersive Peruvian-Latin dining experience at UB City. Fire-led cuisine, sculptural interiors, heritage plating.",
};

const GOOGLE_REVIEWS = [
  {
    quote:
      "The Bomba de Choclo is absolutely outstanding. Authentic Peruvian flavors in the middle of UB City. A true masterpiece.",
    author: "Rohan Sharma (Google Local Guide)",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
    alt: "Portrait of Rohan Sharma",
  },
  {
    quote:
      "Attentive service and a gorgeous terracotta ambiance that makes you feel like you are in South America. The Brazilian Lemonade is a must-try!",
    author: "Priya Nair (Google Maps Reviewer)",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80&auto=format&fit=crop",
    alt: "Portrait of Priya Nair",
  },
  {
    quote:
      "Amazing open-fire grills and highly flavorful ceviches. An exceptional alcohol-free fine dining concept in Bengaluru.",
    author: "Anirudh Sen (Food Critic)",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
    alt: "Portrait of Anirudh Sen",
  },
  {
    quote:
      "The Pulpo al Carbón was perfectly charred. Bengaluru's first real adventure into Peruvian cuisine is a stellar experience.",
    author: "Meera Hegde (Google Maps Reviewer)",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop",
    alt: "Portrait of Meera Hegde",
  },
];

function GoogleReviews() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-card/5 py-24">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center px-6 lg:px-12">
        <div className="mb-16 max-w-2xl text-center">
          <p className="reveal mb-6 text-[11px] uppercase tracking-[0.5em] text-accent">
            ★ Guest Experiences
          </p>
          <h2 className="reveal mb-6 font-display text-4xl leading-none text-sand lg:text-5xl">
            What our diners <span className="font-serif italic text-accent">say</span>
          </h2>
          <p className="reveal text-sm font-light leading-relaxed text-sand/75 md:text-base">
            Read genuine customer reviews from our Google Business page at UB City, Bengaluru.
          </p>
        </div>
        <div className="reveal mt-4 flex w-full justify-center">
          <ScrollReelTestimonials testimonials={GOOGLE_REVIEWS} />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <StorySection />
      <GoogleReviews />
    </SiteShell>
  );
}
