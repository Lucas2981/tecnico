import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Me = () => {
  return (
    <section className="h-[750px] md:h-[700px] pt-10 md:pt-20 overflow-hidden bg-gris-20 ">
      <div className="padding-container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center gap-y-8 grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-color-h2  max-w-2xl">
              Hola 👋 Mi nombre es <br className="block sm:hidden" />
              Lucas
            </h2>
            <p className="max-w-xl mt-3 text-color-p text-justify md:mt-8">
              En TecniCo nuestra misión es transformar la experiencia de
              construir. ¿Cuántas veces te has preguntado cuánto cuesta
              realmente un metro cuadrado o dónde encontrar albañiles de
              confianza? En TecniCo te ofrecemos una solución completa y
              personalizada, desde la planificación detallada hasta la ejecución
              de tu proyecto. Con nosotros, podrás construir al menor costo
              posible, sin sacrificar calidad. Simplificamos los procesos y te
              brindamos las herramientas necesarias para que estés al tanto de
              cada etapa de tu obra. ¡Porque construir tu hogar debería ser un
              proceso emocionante y sin complicaciones!
            </p>

            <p className="mt-4 text-xl text-color-h5 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full -bottom-2 h-2 bg-verde-10"></span>
                <span className="relative">¿Tienes una pregunta?</span>
              </span>
              <br className="block sm:hidden" />
              {" Escribeme "}
              <a
                href="https://bit.ly/3ZfEJXS"
                target="_blank"
                title=""
                className="transition-all duration-200 text-verde-10 hover:underline">
                ahora!
              </a>
            </p>
          </div>

          <div className="relative justify-items-center">
            <div className="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] overflow-hidden border-8 border-verde-10 rounded-full bg-gris-30 shadow-xl hover:shadow-verde-10 ">
              <Image
                className="relative grayscale h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] "
                src="/image.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center pt-20">
        <Link href="https://bit.ly/3ZfEJXS" target="_blank">
          <Button
            type="submit"
            icon="wsp.svg"
            title="Escribime ahora"
            variant="btn_verde"
          />
        </Link>
      </div> */}
    </section>
  );
};

export default Me;
