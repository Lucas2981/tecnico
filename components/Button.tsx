import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_verde" | "btn_verde_text";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 px-4 py-2 ${variant} hover:scale-105`}
      type={type}>
      <label className="bold-16 whitespace-nowrap">{title}</label>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
    </button>
  );
};
export default Button;
