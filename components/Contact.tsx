import React from "react";
import Button from "./Button";
// import { handleForm } from "../app/action";

const Contact = () => {
  return (
    <section id="contacto" className="pb-20">
      <div className="lg:gap-x-10 md:gap-x-5 mx-auto max-w-screen-sm flex flex-grow  md:items-center">
        <div className="w-full px-4 ">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-color-h2 text-center">Contacto</h1>
            <p className="text-color-p text-start py-10 ">
              ¿Quieres ahorrar tiempo y dinero en tu construcción? Nuestros
              servicios te permiten optimizar recursos y evitar imprevistos.
              ¡Contáctanos y descubrí cómo podemos ayudarte a construir tu
              sueño!
            </p>
          </div>
          <div>
            <div className="items-center justify-center">
              <form
                action=""
                // method="POST"
                className="flex flex-col space-y-5">
                {/* mx-auto mb-0 mt-8 max-w-md space-y-4 */}
                <input
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-lg p-4 text-sm shadow-sm"
                />
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    className="w-full rounded-lg p-4 text-sm shadow-sm "
                    placeholder="Tu correo electrónico"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
                <input
                  name="asunto"
                  type="text"
                  placeholder="Asunto"
                  className="w-full rounded-lg p-4 text-sm"
                />
                <textarea
                  name="message"
                  className="w-full rounded-lg p-4 text-sm"
                  placeholder="Tu mensaje"></textarea>
                <div className="flex items-center justify-end">
                  <Button
                    type="submit"
                    variant="btn_verde_text"
                    title="Enviar"></Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="relative ">
          <Image
            alt="Imagen de ejemplo"
            src="/send-email.jpg"
            className="bg-cover grayscale sm:rounded-r-3xl shadow-lg shadow-gris-30"
            style={{
              objectFit: "cover",
            }}
            width={1100}
            height={500}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
