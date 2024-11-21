import React from "react";
import CardTestimonial from "./CardTestimonial";

const Review = () => {
  return (
    <div>
      <section id="testimonios">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-color-h2 text-center pb-10">
            Reseñas de nuestros clientes
          </h2>
          <CardTestimonial />
        </div>
      </section>
    </div>
  );
};

export default Review;
