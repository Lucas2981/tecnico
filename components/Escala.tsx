import Link from "next/link";
import React from "react";
import Image from "next/image";

const Escala = () => {
  return (
    <div
      className="bg-gris-20 border-2 border-verde-10 text-white px-2"
      style={{
        position: "fixed",
        top: "50%",
        left: "3%",
        transform: "translateY(-50%)",
      }}>
      <Link href="/">
        <Image src="/up.svg" alt="logo" width={24} height={24} />
        <span className="hidden xs:block ">xs </span>
        <span className="hidden sm:block">sm </span>
        <span className="hidden md:block">md </span>
        <span className="hidden lg:block">lg </span>
        <span className="hidden xl:block">xl </span>
        <span className="hidden 2xl:block">2xl </span>
        <span className="hidden 3xl:block">3xl </span>
        <span className="hidden 4xl:block">4xl </span>
      </Link>
    </div>
  );
};

export default Escala;
