import React from "react";
import Image from "next/image";
import { features } from "@/constants";

const CardFeutures = () => {
  return (
    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 md:max-w-none md:grid-cols-2 md:gap-y-16 py-10 md:py-12 bg-gradient-to-br from-gris-30 to-gris-20 px-6 rounded-xl border-4 border-verde-10">
      {features.map((feature) => (
        <div key={feature.name} className="relative ">
          <div className="relative left-0 -top-5 flex h-12 w-12 items-center justify-center rounded-lg bg-verde-10">
            <Image
              src={feature.icon}
              alt={feature.icon}
              width={24}
              height={24}
            />
          </div>
          <dt className="text-color-h3 pb-5 md:pb-1">{feature.name}</dt>
          <dd className="text-color-p pt-2 md:pt-5 ">{feature.description}</dd>
        </div>
      ))}
    </div>
  );
};

export default CardFeutures;
