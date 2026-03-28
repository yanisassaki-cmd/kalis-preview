import { AboutSection } from "../components/AboutSection";
import { BlogTeaser } from "../components/BlogTeaser";
import { BrandValues } from "../components/BrandValues";
import { EventsScroll } from "../components/EventsScroll";
import { Hero } from "../components/Hero";
import { InstagramGrid } from "../components/InstagramGrid";
import { KalisBoxFeature } from "../components/KalisBoxFeature";
import { Marquee } from "../components/Marquee";
import { ProductGrid } from "../components/ProductGrid";
import { Testimonials } from "../components/Testimonials";

export function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProductGrid />
      <KalisBoxFeature />
      <BrandValues />
      <AboutSection />
      <EventsScroll />
      <Testimonials />
      <BlogTeaser />
      <InstagramGrid />
    </>
  );
}
