import React from "react";
import Image from "next/image";
import { features } from "@/constants";

const CardFeutures = () => {
  return (
    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 md:max-w-none md:grid-cols-2 md:gap-y-16 lg:gap-x-12 py-10 md:py-12 bg-gradient-to-br from-gris-30 to-gris-20 shadow-lg shadow-gris-30 px-6 rounded-xl border-2 border-verde-10">
      {features.map((feature) => (
        <div key={feature.name} className="relative ">
          <div className="relative left-0 -top-5 flex h-16 w-16 items-center justify-center rounded-lg bg-verde-10">
            <Image
              src={feature.icon}
              alt={feature.icon}
              width={28}
              height={28}
            />
          </div>
          <dt className="text-color-h3 pb-5 md:pb-1">{feature.name}</dt>
          <dd className="text-color-p-g pt-2 md:pt-5 ">
            {feature.description}
          </dd>
        </div>
      ))}
    </div>
  );
};

export default CardFeutures;
