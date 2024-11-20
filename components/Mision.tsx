import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Mision = () => {
  return (
    <section
      id="mision"
      className="h-[720px] md:h-[700px] flex w-full flex-col xl:px-40 pt-40 pb-10 bg-gris-20">
      <div className="padding-container max-container flex w-full flex-col gap-14 xl:px-40">
        <div className="flex flex-col items-center">
          <p className="text-color-p text-center md:max-w-[640px]">
            ¿Cansado de buscar albañiles confiables? En TecniCo te ofrecemos un
            servicio completo y personalizado para tu proyecto de construcción.
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
