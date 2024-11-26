import { IconType } from "react-icons";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  Icon?: IconType;
  variant: "btn_verde" | "btn_verde_text";
};

const Button = ({ type, title, Icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 px-4 py-2 ${variant} hover:scale-105`}
      type={type}>
      {Icon && <Icon size={22} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};
export default Button;
