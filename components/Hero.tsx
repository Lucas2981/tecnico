import Image from "next/image";
const Hero = () => {
  return (
    <section className="border-2 border-blue-600 max-container padding-container flex flex-col gap-20 py-10  md:gap-28 lg:py-20 xl:flex-row ">
      {/* <div className="hero-home" /> */}
      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="casco.jpg"
          alt="Logo"
          width={32}
          height={29}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Tu proyecto, nuestra pasión</h1>
        <p className="regular-16 mt-6 text-gray-500 xl:max-w-[520px]">
          Asesoramiento personalizado en cada etapa de la obra.
        </p>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src="casa-plano.jpg"
          width={720}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
