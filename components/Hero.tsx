import Image from "next/image";
const Hero = () => {
  return (
    <section>
      {/* <div className="hero-home" /> */}
      <div className="bg-ppal h-[680px] md:h-[940px]">
        <div className="container relative z-10 mx-auto grid place-items-center text-center">
          <h2 className="bold-52 lg:bold-88 mt-32 text-gray-100 px-10 py-5">
            Tu proyecto, nuestra pasión
          </h2>
          <h1 className="lg:bold-32 bold-18 mt-6 text-gray-100 px-10 py-5 xl:max-w-[520px]">
            Asesoramiento personalizado en cada etapa de la obra.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
