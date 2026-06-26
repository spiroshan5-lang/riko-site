"use client";

import { useState } from "react";
import Image from "next/image";
import ceviche from "@/assets/dish-ceviche.jpg";
import octopus from "@/assets/dish-octopus.jpg";
import dessert from "@/assets/dish-dessert.jpg";

const categories = [
  {
    id: "ceviches",
    name: "Ceviches",
    image: ceviche,
    items: [
      {
        name: "Clásico de Corvina",
        desc: "Leche de tigre, sweet potato, cancha",
        price: "₹ 1,450",
      },
      { name: "Nikkei Tuna", desc: "Yellowfin, soy-aji, avocado, sesame", price: "₹ 1,650" },
      { name: "Amazónico", desc: "Hearts of palm, plantain, coconut tigre", price: "₹ 1,250" },
    ],
  },
  {
    id: "fire",
    name: "Open Fire",
    image: octopus,
    items: [
      {
        name: "Pulpo al Carbón",
        desc: "Charred octopus, aji amarillo, charred lemon",
        price: "₹ 1,850",
      },
      { name: "Anticucho de Res", desc: "Wood-grilled tenderloin, panca skewer", price: "₹ 2,100" },
      { name: "Chuletón Andino", desc: "Aged tomahawk, smoked huacatay butter", price: "₹ 4,950" },
    ],
  },
  {
    id: "creations",
    name: "Peruvian Creations",
    image: ceviche,
    items: [
      { name: "Ají de Gallina", desc: "Slow-pulled hen, walnut, aji amarillo", price: "₹ 1,550" },
      { name: "Causa Limeña", desc: "Layered potato, crab, rocoto cream", price: "₹ 1,350" },
      { name: "Lomo Saltado", desc: "Wok-fired fillet, soy, criollo", price: "₹ 1,850" },
    ],
  },
  {
    id: "latin",
    name: "Latin Inspired",
    image: octopus,
    items: [
      { name: "Birria Tacos", desc: "Braised short rib, consomé, blue corn", price: "₹ 1,250" },
      { name: "Empanadas Trio", desc: "Beef, mushroom, queso & corn", price: "₹ 950" },
      { name: "Arroz Negro", desc: "Squid ink rice, prawns, lime aioli", price: "₹ 1,650" },
    ],
  },
  {
    id: "desserts",
    name: "Signature Desserts",
    image: dessert,
    items: [
      { name: "Lucuma & Cacao", desc: "Andean lucuma mousse, 72% cocoa, gold", price: "₹ 750" },
      { name: "Suspiro a la Limeña", desc: "Caramel manjar, porto meringue", price: "₹ 700" },
      { name: "Chocolate del Cusco", desc: "Single-origin chocolate, smoked salt", price: "₹ 850" },
    ],
  },
  {
    id: "beverages",
    name: "Curated Beverages",
    image: dessert,
    items: [
      { name: "Pisco Sour Maestro", desc: "Quebranta pisco, lime, angostura mist", price: "₹ 850" },
      { name: "Chicha Morada Spritz", desc: "Purple corn, prosecco, citrus", price: "₹ 950" },
      { name: "Smoked Old Fashioned", desc: "Bourbon, panela, palo santo smoke", price: "₹ 1,050" },
    ],
  },
];

export function MenuSection() {
  const [active, setActive] = useState(categories[0].id);
  const cat = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative py-32 lg:py-48 terracotta-gradient">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="reveal text-[11px] tracking-[0.5em] uppercase text-accent mb-6">
            — The Menu
          </p>
          <h2 className="reveal font-display text-5xl md:text-7xl lg:text-8xl text-sand">
            A <span className="italic font-serif text-accent">tasting</span> of South America.
          </h2>
        </div>

        {/* Category tabs */}
        <div className="reveal flex flex-wrap justify-center gap-x-8 gap-y-3 mb-16 border-y border-border py-6">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`relative text-[11px] uppercase tracking-[0.35em] transition-colors duration-500 ${
                active === c.id ? "text-accent" : "text-sand/60 hover:text-sand"
              }`}
            >
              {c.name}
              {active === c.id && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-px bg-accent" />
              )}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 reveal" key={cat.id + "-img"}>
            <div className="relative aspect-[4/5] overflow-hidden grain">
              <Image
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                width={1200}
                height={1500}
                className="w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-xs tracking-[0.4em] uppercase text-sand/80">
                {cat.name}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8 space-y-2">
            {cat.items.map((it, i) => (
              <div
                key={it.name}
                className="reveal group flex items-baseline gap-6 py-8 border-b border-border last:border-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-2xl lg:text-3xl text-sand group-hover:text-accent transition-colors duration-500">
                    {it.name}
                  </h3>
                  <p className="text-sm lg:text-base text-sand/60 font-light mt-2 leading-relaxed">
                    {it.desc}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-baseline gap-4">
                  <span className="hidden md:block flex-1 w-20 border-b border-dashed border-border/60 mb-2" />
                  <span className="font-serif italic text-xl text-accent">{it.price}</span>
                </div>
              </div>
            ))}
            <p className="reveal pt-10 text-xs text-muted-foreground italic font-serif">
              Menu evolves with season &amp; produce. Please inform your host of any allergies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
