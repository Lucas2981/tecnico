import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/constants";
import { FaStar } from "react-icons/fa6";

const CardTestimonial = () => {
  const randomTestimonials = TESTIMONIALS.sort(() => Math.random() - 0.5).slice(
    0,
    3
  );
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      {randomTestimonials.map((testimonial, index) => (
        <blockquote
          key={testimonial.name}
          className="rounded-2xl bg-gris-20 p-6 shadow-lg shadow-gris-30 sm:p-8 border-2 border-verde-10">
          <div className="">
            <Image
              className="size-20 rounded-full object-cover grayscale"
              src={testimonial.image}
              alt={testimonial.image}
              width={450}
              height={450}
            />
            <div className="flex justify-center gap-0.5 text-verde-10">
              {Array(testimonial.rating)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <p className="text-color-h3 pb-5 md:py-1">{testimonial.name}</p>
            <p className="text-color-p pt-2 md:pt-2 ">{testimonial.title}</p>
            <p className="text-color-p-g pt-2 md:pt-5 ">
              {testimonial.testimonial}
            </p>
          </div>
        </blockquote>
      ))}
    </div>
  );
};
export default CardTestimonial;
