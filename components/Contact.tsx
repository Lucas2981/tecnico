"use client";

import React, { useState } from "react";
import Button from "./Button";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
      console.log("Datos del formulario:", { name, email, subject, message });

      if (!response.ok) {
        throw new Error("Error sending email");
      }

      // Handle success
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <section id="contacto" className="pb-20">
      <div className="lg:gap-x-10 md:gap-x-5 mx-auto max-w-screen-sm flex flex-grow  md:items-center">
        <div className="w-full px-4 ">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-color-h2 text-center">Contacto</h2>
            <p className="text-color-p text-start py-10 ">
              ¿Quieres ahorrar tiempo y dinero en tu construcción? Nuestros
              servicios te permiten optimizar recursos y evitar imprevistos.
              ¡Contáctanos y descubrí cómo podemos ayudarte a construir tu
              sueño!
            </p>
          </div>
          <div>
            <div className="items-center justify-center">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg p-4 text-sm shadow-sm"
                />
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Asunto"
                  className="w-full rounded-lg p-4 text-sm"
                />
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg p-4 text-sm"
                  placeholder="Tu mensaje"></textarea>
                <div className="flex items-center justify-end">
                  <Button
                    type="submit"
                    variant="btn_verde_text"
                    title="Enviar"
                    Icon={FiSend}></Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
