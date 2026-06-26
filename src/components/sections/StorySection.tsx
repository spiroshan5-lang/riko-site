import Image from "next/image";
import wall from "@/assets/wall.jpg";
import table from "@/assets/table.jpg";

export function StorySection() {
  return (
    <section id="story" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative aspect-[3/4] overflow-hidden grain">
              <Image
                src={wall}
                alt="Sculptural clay relief wall inspired by Peruvian highlands"
                loading="lazy"
                width={1080}
                height={1500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <p className="reveal text-[11px] tracking-[0.5em] uppercase text-accent mb-8 flex items-center gap-4">
              <span className="w-10 h-px bg-accent/60" />
              Our Story
            </p>
            <h2 className="reveal font-display text-5xl lg:text-7xl leading-[1.02] text-sand mb-10">
              A journey through the <span className="italic font-serif text-accent">soul</span> of
              South America.
            </h2>

            <div className="space-y-6 text-base lg:text-[17px] text-sand/75 leading-relaxed max-w-2xl font-light reveal">
              <p>
                RIKO is rooted in Peru&apos;s geography and its layered cultural memory — Indigenous,
                Spanish, African and Asian threads woven into a single, sensory language of flavour.
              </p>
              <p>
                We cook with fire. We build with clay, stone and microcement. We plate dishes that
                carry the warmth of the highlands and the pulse of Lima&apos;s coast — heritage as
                living, breathing hospitality.
              </p>
              <p className="text-accent/90 font-serif italic text-xl lg:text-2xl pt-4">
                &quot;Every plate is a small act of remembering.&quot;
              </p>
            </div>

            <div className="reveal mt-14 grid grid-cols-3 gap-6 lg:gap-10 max-w-2xl">
              {[
                { n: "01", t: "Heritage", d: "Andean roots" },
                { n: "02", t: "Fire", d: "Open flame craft" },
                { n: "03", t: "Story", d: "Sensory hospitality" },
              ].map((s) => (
                <div key={s.n} className="border-t border-border pt-4">
                  <div className="text-accent text-xs tracking-[0.3em]">{s.n}</div>
                  <div className="font-display text-2xl mt-2 text-sand">{s.t}</div>
                  <div className="text-xs text-muted-foreground tracking-wider mt-1">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* second pairing */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-32 lg:mt-48">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="reveal text-[11px] tracking-[0.5em] uppercase text-accent mb-8 flex items-center gap-4">
              <span className="w-10 h-px bg-accent/60" />
              The Space
            </p>
            <h2 className="reveal font-display text-5xl lg:text-7xl leading-[1.02] text-sand mb-10">
              Crafted in <span className="italic font-serif text-accent">clay,</span> lit by ember.
            </h2>
            <p className="reveal text-base lg:text-[17px] text-sand/75 leading-relaxed font-light max-w-2xl">
              Hand-laid stone, sculptural clay installations and warm microcement surfaces shape an
              interior inspired by Peru&apos;s forests and highlands — intimate, atmospheric, deeply
              tactile.
            </p>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 reveal">
            <div className="relative aspect-[4/5] overflow-hidden grain">
              <Image
                src={table}
                alt="Intimate candlelit dining table with terracotta plates and sculptural clay glasses"
                loading="lazy"
                width={1600}
                height={1100}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
