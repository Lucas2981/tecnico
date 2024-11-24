const Hero = () => {
  return (
    <section id="inicio" className="relative bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-gris-30/75 to-gris-20/50"></div>
      <div className="h-[700px] md:h-[940px] relative mx-auto max-w-screen-xl px-4 py-1 sm:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="container relative z-10 mx-auto">
          <h1 className="text-color-h1 px-10 pt-36 text-start md:text-center">
            Tu obra, tu sueño, mis números.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
