import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Mision = () => {
  return (
    <section className="h-[640px] md:h-[800px] flex-row grid grid-cols-1 justify-center items-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-color-p text-center md:max-w-[640px]">
            ¿Sueñas con una casa a tu medida sin complicaciones? En TecniCo,
            hacemos realidad tus proyectos de construcción en el Valle Central
            de Catamarca. Con nosotros, tendrás la tranquilidad de un
            presupuesto controlado, un avance constante y la calidad que
            esperas, para que puedas disfrutar de tu nuevo hogar sin
            preocupaciones.
          </p>
          <h2 className="text-color-h2 pt-8 ">Nuestra misión</h2>
          <p className="text-color-p text-center mt-6 xl:max-w-[640px]">
            Simplificar la construcción, empoderando a los propietarios a través
            de herramientas innovadoras y un control transparente de cada etapa
            del proyecto.
          </p>
        </div>
        <div className="flex justify-center pt-20">
          <Link
            href="https://wa.me/5493834225785?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20TecniCo"
            target="_blank">
            <Button
              type="submit"
              icon="wsp.svg"
              title="Contáctenos"
              variant="btn_verde"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Mision;
