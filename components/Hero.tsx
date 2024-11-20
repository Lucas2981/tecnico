import Image from "next/image";
const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative bg-[url('/casa-plano.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/50 xs:from-gray-900/95 xs:to-gray-900/25 ltr:xs:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="h-[800px] md:h-[940px] relative mx-auto max-w-screen-xl px-4 sm:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="container relative z-10 mx-auto grid place-items-center text-center">
          <h1 className="text-color-h1 mt-32 px-10 py-5">
            Tu obra, tu sueño, mis números.
          </h1>
          <h4 className="text-color-h4 mt-6 px-10 py-5 md:max-w-[900px]">
            # Cotizaciones precisas, planificación detallada, insumos necesarios
            y certificación de tareas para tu obra en Catamarca.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
