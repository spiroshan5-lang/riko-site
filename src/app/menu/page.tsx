import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { MenuSection } from "@/components/sections/MenuSection";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the fire-led culinary journey of RIKO. Ceviches, wood-grilled meats, signature cocktails, and Peruvian desserts in Bengaluru.",
};

export default function MenuPage() {
  return (
    <SiteShell>
      <MenuSection />
    </SiteShell>
  );
}
