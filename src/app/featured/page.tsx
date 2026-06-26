import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { GallerySection } from "@/components/sections/GallerySection";
import { Trophy, Star, Award, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Featured & Achievements",
  description:
    "A showcase of RIKO's accolades, honors, achievements and a visual editorial gallery of our luxurious dining environment.",
};

function Achievements() {
  const awards = [
    {
      icon: Trophy,
      title: "Best New Restaurant of the Year",
      org: "Times Food & Nightlife Awards",
      year: "2026",
      desc: "Recognized as Bengaluru's premier dining destination, bridging authentic Peruvian fire-cooking with modern Indian culinary curiosity.",
    },
    {
      icon: Star,
      title: "5-Star Culinary Heritage Citation",
      org: "Latin-American Gastronomic Association",
      year: "2025",
      desc: "Awarded for exceptional authenticity in sourcing Andean ingredients and executing traditional wood-fire techniques.",
    },
    {
      icon: Award,
      title: "Excellence in Immersive Design",
      org: "Architectural Digest India",
      year: "2025",
      desc: "Honored for the interior design: sculptural clay reliefs, hand-laid stone, and custom warm microcement atmospheres.",
    },
    {
      icon: Compass,
      title: "Top 50 Dining Destinations in India",
      org: "National Food Chronicle",
      year: "2026",
      desc: "Selected among the country's most innovative culinary experiences for our unique multi-sensory Peruvian-Latin philosophy.",
    },
  ];

  const pressQuotes = [
    {
      quote: "RIKO is not just dining; it is a choreographic ceremony of fire, clay, and memory.",
      source: "The Hindu",
      rating: "★★★★★",
    },
    {
      quote:
        "Bengaluru's first true Peruvian experience is a stunning display of sensory precision and open-fire mastery.",
      source: "Vogue India",
      rating: "4.8 / 5",
    },
    {
      quote:
        "From the ceviche's electric acidity to the chuletón's deep smoke, every plate is an act of storytelling.",
      source: "GQ India",
      rating: "Excellent",
    },
  ];

  return (
    <section className="relative pt-32 lg:pt-48 pb-16 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="reveal text-[11px] tracking-[0.5em] uppercase text-accent mb-6">
            ✦ Achievements & Recognition
          </p>
          <h1 className="reveal font-display text-5xl md:text-7xl lg:text-8xl text-sand leading-none">
            Honoring <span className="italic font-serif text-accent">heritage</span>,<br />
            celebrating <span className="italic font-serif">acclaim</span>.
          </h1>
          <p className="reveal mt-8 text-sand/70 max-w-xl mx-auto font-light leading-relaxed">
            We are humbled to be recognized for our dedication to storytelling, design, and
            authentic South American open-flame cooking.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-32">
          {awards.map((a, i) => (
            <div
              key={a.title}
              className="reveal border border-border/80 bg-card/20 backdrop-blur-sm p-8 md:p-12 hover:border-accent/40 transition-colors duration-700 flex flex-col justify-between group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-foreground transition-colors duration-700">
                    <a.icon size={22} strokeWidth={1.2} />
                  </div>
                  <span className="font-serif italic text-accent/80 text-lg">{a.year}</span>
                </div>
                <h3 className="font-display text-3xl text-sand mb-3 group-hover:text-accent transition-colors duration-500">
                  {a.title}
                </h3>
                <p className="text-accent/70 text-xs tracking-widest uppercase mb-6 font-semibold">
                  {a.org}
                </p>
                <p className="text-sand/75 font-light leading-relaxed text-sm md:text-base">
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Press Quotes */}
        <div className="border-t border-border pt-24 pb-12">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-4">In The Press</p>
            <h2 className="font-display text-4xl lg:text-5xl text-sand">
              What the critics are saying
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pressQuotes.map((pq, i) => (
              <div
                key={pq.source}
                className="reveal bg-card/10 border border-border/40 p-8 flex flex-col justify-between"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="font-serif italic text-lg lg:text-xl text-sand/85 leading-relaxed mb-8">
                  &quot;{pq.quote}&quot;
                </p>
                <div className="flex justify-between items-center border-t border-border/40 pt-4">
                  <span className="font-display text-sm tracking-wider uppercase text-sand">
                    {pq.source}
                  </span>
                  <span className="text-accent text-xs tracking-widest uppercase font-semibold">
                    {pq.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FeaturedPage() {
  return (
    <SiteShell>
      <GallerySection />
      <Achievements />
    </SiteShell>
  );
}
