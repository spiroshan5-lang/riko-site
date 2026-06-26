import Image from "next/image";
import fire from "@/assets/fire.jpg";

const pillars = [
  {
    n: "I",
    t: "Fire-Led Cuisine",
    d: "Open flame, charcoal embers and patient smoke — the oldest language of cooking, spoken with restraint.",
  },
  {
    n: "II",
    t: "Architectural Intimacy",
    d: "Sculptural clay, raw stone and warm microcement shape a space that breathes with the highlands.",
  },
  {
    n: "III",
    t: "Sensory Hospitality",
    d: "Low light, slow service, layered scents — an evening choreographed like a quiet ceremony.",
  },
  {
    n: "IV",
    t: "Cultural Story",
    d: "Indigenous, Spanish, African and Asian influences plated as one continuous, living narrative.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden">
      {/* Full-bleed fire panel */}
      <div className="relative aspect-[16/9] w-full overflow-hidden grain">
        <Image
          src={fire}
          alt="Open fire cooking with glowing embers at RIKO"
          loading="lazy"
          width={1920}
          height={1100}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        <div className="absolute inset-0 ember-gradient animate-ember" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <p className="reveal text-[11px] tracking-[0.5em] uppercase text-accent mb-8">
              — The Experience
            </p>
            <h2 className="reveal font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.95] text-sand">
              <span className="italic font-serif">Crafted</span> through
              <br />
              <span className="italic font-serif text-accent">fire</span> &amp; story.
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-32 lg:py-48">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p) => (
            <div key={p.n} className="reveal group">
              <div className="flex items-baseline gap-8 mb-6">
                <span className="font-display text-accent text-3xl italic">{p.n}</span>
                <div className="flex-1 h-px bg-border group-hover:bg-accent transition-colors duration-700" />
              </div>
              <h3 className="font-display text-4xl lg:text-5xl text-sand mb-5 leading-tight">
                {p.t}
              </h3>
              <p className="text-sand/70 leading-relaxed font-light text-base lg:text-[17px] max-w-md">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
