"use client";

import { useReveal } from "@/hooks/useReveal";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";
import { PageLoader } from "./PageLoader";
import { ScrollProgressBar } from "./ScrollProgressBar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  useReveal();

  return (
    <main className="bg-background text-foreground">
      <PageLoader />
      <ScrollProgressBar />
      <NavigationBar />
      {children}
      <Footer />
    </main>
  );
}
