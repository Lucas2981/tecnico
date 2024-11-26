"use client";

import { FAQS } from "@/constants";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const CardFaqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="padding-container max-container flex w-full flex-col xl:px-40 ">
      {FAQS.map((question, index) => (
        <details
          key={question.title}
          className="group border-s-8 border-verde-10 bg-gris-20 p-6 [&_summary::-webkit-details-marker]:hidden mb-4 shadow-lg shadow-gris-30 rounded-br-2xl md:rounded-br-3xl">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={() => handleToggle(index)}>
            {" "}
            <h3 className="text-lg font-medium text-color-h5">
              {question.title}
            </h3>
            <span className="shrink-0 rounded-full bg-verde-10 p-1.5 text-gris-30 sm:p-3">
              {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}{" "}
            </span>
          </summary>
          <p
            className={`mt-4 leading-relaxed text-color-p-g text-justify ${
              activeIndex === index ? "block" : "hidden"
            }`}>
            {question.description}
          </p>
        </details>
      ))}
    </div>
  );
};

export default CardFaqs;
