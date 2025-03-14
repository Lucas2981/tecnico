import Image from "next/image";
import casa_plano from "../public/casa_plano.avif";

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-cover bg-center bg-no-repeat ">
      <div className="absolute inset-0 bg-gradient-to-r from-gris-30/75 to-gris-20/50 z-10"></div>
      <div className="h-screen relative mx-auto max-w-screen-4xl px-4 py-2 sm:py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <Image
          className="absolute inset-0 object-cover object-center grayscale"
          src={casa_plano}
          alt="casa"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />

        <div className="container max-w-7xl relative z-10 mx-auto">
          <h1 className="text-color-h1 px-10 pt-40 md:pt-20 text-start">
            <span className="text-start bold-40 lg:bold-88 text-white">
              Tecni
            </span>
            <span className="bold-40 lg:bold-88 text-verde-10">Co</span>.
            <br /> Construcción y reformas en Catamarca
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
