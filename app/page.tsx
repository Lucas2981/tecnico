import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Mision from "@/components/Mision";
import Review from "@/components/Review";
import Price from "@/components/Price";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <Mision />
      <Features />
      {/* <Price /> */}
      <Review />
      <Contact />
      <Faqs />
    </>
  );
}
