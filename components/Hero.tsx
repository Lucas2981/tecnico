const Hero = () => {
  return (
    <section id="inicio" className="relative bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-gris-30/40 to-gris-20/50"></div>
      <div className="h-[800px] md:h-[940px] relative mx-auto max-w-screen-xl px-4 sm:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="container relative z-10 mx-auto grid place-items-center text-center">
          <h1 className="text-color-h1 mt-32 px-10 py-5 text-start md:text-center">
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
