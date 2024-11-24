import React from "react";
import Image from "next/image";

const Me = () => {
  return (
    <section className="h-[840px] md:h-[700px] pt-10 md:pt-20 overflow-hidden bg-gris-20 ">
      <div className="padding-container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center gap-y-8 grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-color-h2  max-w">
              Hola! mi nombre es <br className="hidden xm:block" />
              Lucas
            </h2>
            <p className="max-w-xl mt-3 text-color-p text-justify md:mt-8">
              En TecniCo somos tu socio en la construcción. Con nuestra
              experiencia, te brindamos un servicio completo y personalizado
              para tu proyecto. Desde el presupuesto hasta la entrega de llaves,
              te acompañamos en cada paso. ¿Quieres construir con tranquilidad?
              ¡Confía en nosotros!
            </p>

            <p className="mt-4 text-color-h5 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full -bottom-0.5 h-1 bg-verde-10"></span>
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
            <h4 className="text-color-h4 pt-1 md:pt-5">
              #ConstruirAlMenorPrecioPosible.
            </h4>
          </div>

          <div className="relative justify-items-center">
            <div className="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] overflow-hidden border-8 border-verde-10 rounded-full bg-gris-30 shadow-xl hover:shadow-verde-10 ">
              <Image
                className="relative grayscale h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] "
                src="image.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
