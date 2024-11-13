import Image from "next/image";
import { features } from "@/constants";

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-12">
      <div className="max-container padding-container relative">
        <h2 className="text-base/7 font-semibold text-blue-500">
          Construir al menor precio posible
        </h2>
        <p className="bold-32 lg:bold-40">
          Sin pagar por anticipado, ni tarifas extras.
        </p>
        <p className="mt-6 pb-10 md:pb-14 regular-16 text-gray-600">
          La planificación de una obra es mucho más que una simple lista de
          tareas. Es la columna vertebral de cualquier proyecto de construcción,
          pues garantiza que se cumplan los objetivos en tiempo y forma, dentro
          del presupuesto asignado y con la calidad esperada.
        </p>
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:max-w-none md:grid-cols-2 md:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="bold-20 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                  <Image
                    src={feature.icon}
                    alt={feature.icon}
                    width={24}
                    height={24}
                    style={{ filter: "invert(1)" }}
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="regular-16 text-gray-600 pt-2 md:pt-5 ">
                {feature.description}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
