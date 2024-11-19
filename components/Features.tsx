import CardFeutures from "./CardFeutures";

const Features = () => {
  return (
    <section id="servicios" className="py-20">
      <div className="padding-container max-container flex w-full flex-col gap-14 xl:px-40">
        <h2 className="text-color-h2 text-center">
          Construir al menor precio posible
        </h2>
        <h4 className="text-color-h4 text-center pt-3">
          # Sin pagar por anticipado, ni tarifas extras.
        </h4>
        <p className="text-color-p">
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
