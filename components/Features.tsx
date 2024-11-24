import CardFeutures from "./CardFeutures";

const Features = () => {
  return (
    <section id="servicios" className="py-20">
      <div className="padding-container max-container flex w-full flex-col gap-7 lg:gap-8 xl:px-40">
        <h2 className="text-color-h2 text-center">Servicios</h2>

        <p className="text-color-p pb-5">
          La planificación de una obra es mucho más que una simple lista de
          tareas. Es la columna vertebral de cualquier proyecto de construcción,
          pues garantiza que se cumplan los objetivos en tiempo y forma, dentro
          del presupuesto asignado y con la calidad esperada.
        </p>
        <CardFeutures />
      </div>
    </section>
  );
};

export default Features;
