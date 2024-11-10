import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="border-2 border-orange-600 flexBetween max-container padding-container relative z-30 py-5">
      {/* Logo */}
      <Link href="/">
        {/* <Image src="/casco2.png" alt="Logo" width={32} height={29} /> */}
        <span className="bold-20 text-orange-50">Tecni</span>
        <span className="bold-20 text-blue-500">Co</span>
      </Link>
      {/* Menú */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
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
