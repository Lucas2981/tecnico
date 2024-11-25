import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/constants";

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
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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
