import Link from "next/link";
import React from "react";
import Image from "next/image";

const Escala = () => {
  return (
    <div
      className="bg-gris-20 border-4 border-verde-10 text-white p-1 rounded-full xs:block hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden"
      style={{
        position: "fixed",
        bottom: "1%",
        left: "80%",
        transform: "translateY(-50%)",
      }}>
      <Link
        href="/"
        className="xs:block hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden">
        <Image src="up.svg" alt="logo" width={24} height={24} />
        {/* <span className="hidden xs:block ">xs </span>
        <span className="hidden sm:block">sm </span>
        <span className="hidden md:block">md </span>
        <span className="hidden lg:block">lg </span>
        <span className="hidden xl:block">xl </span>
        <span className="hidden 2xl:block">2xl </span>
        <span className="hidden 3xl:block">3xl </span>
        <span className="hidden 4xl:block">4xl </span> */}
      </Link>
    </div>
  );
};

export default Escala;
