import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Discover the multi-sensory and fire-led experience at RIKO in Bengaluru. Intimate spaces, ancient culinary methods, and sensory dining.",
};

export default function ExperiencePage() {
  return (
    <SiteShell>
      <ExperienceSection />
    </SiteShell>
  );
}
