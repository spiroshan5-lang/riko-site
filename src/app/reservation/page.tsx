import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { ReservationsSection } from "@/components/sections/ReservationsSection";

export const metadata: Metadata = {
  title: "Reservation",
  description:
    "Book a table for your immersive dining experience at RIKO in UB City, Bengaluru. Fire counter seating, chef's tastings, and private dining requests.",
};

export default function ReservationPage() {
  return (
    <SiteShell>
      <ReservationsSection />
    </SiteShell>
  );
}
