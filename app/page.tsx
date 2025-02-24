import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Mision from "@/components/Mision";
import Review from "@/components/Review";
import Faqs from "@/components/Faqs";
import Me from "@/components/Me";

export default function Home() {
  return (
    <>
      <Hero />
      <Mision />
      {/* <Me /> */}
      <Features />
      <Review />
      <Faqs />
      <Contact />
    </>
  );
}
