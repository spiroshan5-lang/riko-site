import { MapPin, Phone, Clock, Instagram, Star } from "lucide-react";

export function ContactSection() {
  const cards = [
    {
      icon: MapPin,
      label: "Find Us",
      lines: ["UB City, Vittal Mallya Road", "Bengaluru, Karnataka 560001"],
    },
    {
      icon: Phone,
      label: "Reservations",
      lines: ["+91 99725 40238", "concierge@riko.experience"],
    },
    {
      icon: Clock,
      label: "Hours",
      lines: ["Tue – Sun · 6:30 PM – Late", "Closed Mondays"],
    },
    {
      icon: Instagram,
      label: "Follow",
      lines: ["@riko.experience"],
    },
  ];

  return (
    <section id="contact" className="relative py-32 lg:py-48">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="reveal text-[11px] tracking-[0.5em] uppercase text-accent mb-6">
            — Contact
          </p>
          <h2 className="reveal font-display text-5xl md:text-7xl text-sand leading-[1.02]">
            Come <span className="italic font-serif text-accent">find us</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            {cards.map((c) => (
              <div
                key={c.label}
                className="reveal flex gap-6 p-6 border border-border bg-card/40 backdrop-blur-sm hover:border-accent/60 transition-colors duration-500 group"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-full border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-foreground transition-colors duration-500">
                  <c.icon size={18} strokeWidth={1.2} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.4em] uppercase text-accent mb-2">
                    {c.label}
                  </div>
                  {c.lines.map((l) => (
                    <div key={l} className="text-sand/85 font-light leading-relaxed">
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="reveal flex items-center gap-5 p-6 border border-border bg-card/40 backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-3xl text-accent">4.2</span>
                <Star size={16} strokeWidth={1.2} className="text-accent fill-accent" />
              </div>
              <div>
                <div className="text-sand text-sm">Peruvian Restaurant</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                  Currently Open
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="relative w-full h-full min-h-[480px] overflow-hidden border border-border grain">
              <iframe
                title="RIKO Location"
                src="https://www.google.com/maps?q=UB+City+Bengaluru&output=embed"
                className="absolute inset-0 w-full h-full grayscale-[0.4] contrast-[0.95] sepia-[0.25]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

