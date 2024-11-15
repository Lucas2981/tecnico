import Image from "next/image";
const Hero = () => {
  return (
    <section>
      <div className="bg-sec h-[680px] md:h-[940px]">
        <div className="container relative z-10 mx-auto grid place-items-center text-center">
          <h1 className="text-color-h1 mt-32 px-10 py-5">
            Tu obra, tu sueño, mis números.
          </h1>
          <h4 className="text-color-h4 mt-6 px-10 py-5 md:max-w-[900px]">
            # Tu obra en las mejores manos. Yo me encargo de los números para
            que vos te enfoques en construir
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
