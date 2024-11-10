import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Mision from "@/components/Mision";
import Review from "@/components/Review";
import Price from "@/components/Price";

export default function Home() {
  return (
    <div className="max-container">
      <Hero />
      <Mision />
      <Features />
      <Price />
      <Review />
      <Gallery />
      <Contact />
    </div>
  );
}
