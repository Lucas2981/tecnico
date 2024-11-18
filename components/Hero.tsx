import Image from "next/image";
const Hero = () => {
  return (
    <section id="inicio">
      <div className="h-[680px] md:h-[940px]">
        <div className="container relative z-10 mx-auto grid place-items-center text-center">
          <h1 className="text-color-h1 mt-32 px-10 py-5">
            Tu obra, tu sueño, mis números.
          </h1>
          <h4 className="text-color-h4 mt-6 px-10 py-5 md:max-w-[900px]">
            # Cotizaciones detalladas, planificación personalizada y dirección
            técnica.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
