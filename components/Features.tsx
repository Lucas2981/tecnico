import Image from "next/image";
import { features } from "@/constants";

const Features = () => {
  return (
    <section className="bg-sec py-20">
      <div className="container mx-auto md:px-40">
        <h2 className="text-color-h2 text-center">
          Construir al menor precio posible
        </h2>
        <h4 className="text-color-h4 text-center pt-3">
          # Sin pagar por anticipado, ni tarifas extras.
        </h4>
        <p className="text-color-p py-8 ">
          La planificación de una obra es mucho más que una simple lista de
          tareas. Es la columna vertebral de cualquier proyecto de construcción,
          pues garantiza que se cumplan los objetivos en tiempo y forma, dentro
          del presupuesto asignado y con la calidad esperada.
        </p>
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:max-w-none md:grid-cols-2 md:gap-y-16 pt-5 md:pt-10">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-color-h3 pb-5 md:pb-1">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-verde-10">
                  <Image
                    src={feature.icon}
                    alt={feature.icon}
                    width={24}
                    height={24}
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="text-color-p pt-2 md:pt-5 ">
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
