import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Mision = () => {
  return (
    <section className="border-2 border-red-500">
      <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center mmb-16 md:mb-0 items-center text-center">
          <p className="regular-16 mt-6 text-orange-50 xl:max-w-[520px]">
            ¿Sueñas con una casa a tu medida sin complicaciones? En TecniCo,
            hacemos realidad tus proyectos de construcción en el Valle Central
            de Catamarca. Con nosotros, tendrás la tranquilidad de un
            presupuesto controlado, un avance constante y la calidad que
            esperas, para que puedas disfrutar de tu nuevo hogar sin
            preocupaciones.
          </p>
          <h2 className="bold-40 pt-8 lg:bold-64 text-gray-90">
            Nuestra misión
          </h2>
          <p className="bold-16 mt-6 text-gray-500 xl:max-w-[520px]">
            Simplificar la construcción, empoderando a los propietarios a través
            de herramientas innovadoras y un control transparente de cada etapa
            del proyecto.
          </p>
        </div>
      </div>
      <div className="flex justify-center flexCenter py-10">
        <Link
          href="https://wa.me/5493834225785?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20TecniCo"
          target="_blank">
          <Button
            type="submit"
            icon="/wsp.svg"
            title="Contáctenos"
            variant="btn_green"
          />
        </Link>
      </div>
    </section>
  );
};
export default Mision;
