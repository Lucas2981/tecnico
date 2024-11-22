import React from "react";
import CardFaqs from "./CardFaqs";

const Faqs = () => {
  return (
    <section id="preguntas" className="py-24">
      <h2 className="text-color-h2 text-center pb-10 md:pb-20">
        Preguntas frecuentes
      </h2>

      <CardFaqs />
    </section>
  );
};

export default Faqs;
