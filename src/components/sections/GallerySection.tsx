import hero from "@/assets/hero.jpg";
import wall from "@/assets/wall.jpg";
import fire from "@/assets/fire.jpg";
import table from "@/assets/table.jpg";
import cocktail from "@/assets/cocktail.jpg";
import interior from "@/assets/interior-wide.jpg";
import ceviche from "@/assets/dish-ceviche.jpg";
import octopus from "@/assets/dish-octopus.jpg";
import dessert from "@/assets/dish-dessert.jpg";
import SocialCards from "@/components/ui/card-fan-carousel";

const CARDS = [
  { imgUrl: interior, alt: "RIKO immersive dining room with clay pendants" },
  { imgUrl: ceviche, alt: "Peruvian ceviche on dark ceramic" },
  { imgUrl: wall, alt: "Sculptural clay relief wall" },
  { imgUrl: fire, alt: "Fire-led cooking at RIKO" },
  { imgUrl: cocktail, alt: "Smoked signature cocktail" },
  { imgUrl: hero, alt: "Terracotta interior with stone fireplace" },
  { imgUrl: octopus, alt: "Charred octopus plate" },
  { imgUrl: table, alt: "Intimate candlelit table" },
  { imgUrl: dessert, alt: "Lucuma chocolate dessert with gold leaf" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="reveal text-[11px] tracking-[0.5em] uppercase text-accent mb-6">
              — Gallery
            </p>
            <h2 className="reveal font-display text-5xl md:text-7xl text-sand max-w-xl leading-[1.02]">
              An <span className="italic font-serif text-accent">editorial</span> of light, clay
              &amp; fire.
            </h2>
          </div>
          <p className="reveal text-sand/60 max-w-sm font-light leading-relaxed">
            Moments from inside RIKO — sculptural interiors, plated heritage and the slow
            choreography of an evening.
          </p>
        </div>

        {/* Carousel section */}
        <div className="reveal w-full flex justify-center mt-8">
          <SocialCards cards={CARDS} />
        </div>
      </div>
    </section>
  );
}

