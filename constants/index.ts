import { title } from "process";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "inicio", label: "Inicio" },
  {
    href: "#mision",
    key: "mision",
    label: "Misión",
  },
  { href: "#servicios", key: "servicios", label: "Servicios" },
  { href: "#precios", key: "precios ", label: "Precios " },
  { href: "#contacto", key: "contacto", label: "Contacto" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const features = [
  {
    name: "Cotización Detallada",
    description:
      "¿Sueñas con una nueva casa o una remodelación espectacular? No dejes que los imprevistos arruinen tus planes. Con nuestro servicio de presupuestos personalizados, tendrás el control total de tu proyecto desde el principio.",
    icon: "money.svg",
  },
  {
    name: "Cálculo de Insumos",
    description:
      "¿Construir de manera eficiente y sin contratiempos? Nuestro detalle de insumos te brinda la información que necesitas para optimizar tus compras y evitar pérdidas de tiempo.",
    icon: "list-check.svg",
  },
  {
    name: "Planificación Eficiente",
    description:
      "¿Una construcción sin sobresaltos? Un plan de obra personalizado te brinda la seguridad que necesitas para disfrutar del proceso. Te ofrecemos claridad, control y la certeza de que tu proyecto se realizará a tiempo y dentro de tu presupuesto.",
    icon: "plan.svg",
  },
  {
    name: "Certificación de Avance",
    description:
      "¿Crees que tu albañil te pide demasiado? No dejes que los imprevistos afecten tu presupuesto. Con nuestros certificados de avance, tendrás un control total de tus pagos y podrás disfrutar de la tranquilidad de saber que todo está bajo control.",
    icon: "check.svg",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Más información",
    links: ["Acerca de TecniCo", "Política de Privacidad"],
  },
  {
    title: "Nuestros Servicios",
    links: [
      "Dirección técnica",
      "Cotizaciones",
      "Planificaciones",
      "Certificaciones",
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contáctenos",
  links: [
    { label: "Teléfono contacto", value: "383-422-5785" },
    { label: "Email", value: "lucas298113@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    { icon: "facebook.svg", bg: "bg-facebook" },
    { icon: "instagram.svg", bg: "bg-instagram" },
    { icon: "twitter.svg", bg: "bg-twitter" },
    { icon: "youtube.svg", bg: "bg-youtube" },
  ],
};

export const TESTIMONIALS = [
  {
    image: "/chica-1.jpg",
    name: "Juanita",
    title: "CEO, Company A",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    rating: 5,
  },
  {
    image: "/chica-1.jpg",
    name: "Chica",
    title: "Arquitecta, Company B",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    rating: 4,
  },
  {
    image: "/chica-1.jpg",
    name: "Otra chica",
    title: "CEO, Company A",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    rating: 5,
  },
  {
    image: "/chica-1.jpg",
    name: "Sra. Chica",
    title: "Arquitecta, Company B",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    rating: 4,
  },
];
