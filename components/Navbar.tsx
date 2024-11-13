"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flexBetween  z-20 py-5 px-10 shadow-lg  ${
        isScrolled ? "bg-ppal" : "bg-white"
      }`}>
      {/* Logo */}
      <Link href="/">
        <span className="bold-20 text-orange-50">Tecni</span>
        <span className="bold-20 text-blue-500">Co</span>
      </Link>
      {/* Menú */}
      <ul className="container-mx-auto hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`regular-16  flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
              isScrolled ? "text-white" : "text-gray-50"
            }`}>
            {link.label}
          </Link>
        ))}
      </ul>
      {/* Botón */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Log in"
          icon="user.svg"
          variant="btn_dark_green"
        />
      </div>
      {/* Hamburguer */}
      <Image
        src="menu.svg"
        alt="Menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
