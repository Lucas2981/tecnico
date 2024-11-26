import { BiMath } from "react-icons/bi";
import { FaListCheck } from "react-icons/fa6";
import { LuBarChartHorizontal } from "react-icons/lu";
import { TbZoomMoney } from "react-icons/tb";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "inicio", label: "Inicio" },
  { href: "#servicios", key: "servicios", label: "Servicios" },
  { href: "#preguntas", key: "preguntas ", label: "Preguntas " },
  { href: "#contacto", key: "contacto", label: "Contacto" },
];

// FEATURES SECTION
export const features = [
  {
    name: "Cotización Detallada",
    description:
      "¿Sueñas con una nueva casa o una remodelación espectacular? No dejes que los imprevistos arruinen tus planes. Con nuestro servicio de presupuestos personalizados, tendrás el control total de tu proyecto desde el principio.",
    icon: TbZoomMoney,
  },
  {
    name: "Cálculo de Insumos",
    description:
      "¿Construir de manera eficiente y sin contratiempos? Nuestro detalle de insumos te brinda la información que necesitas para optimizar tus compras y evitar pérdidas de tiempo.",
    icon: BiMath,
  },
  {
    name: "Planificación Eficiente",
    description:
      "¿Una construcción sin sobresaltos? Un plan de obra personalizado te brinda la seguridad que necesitas para disfrutar del proceso. Te ofrecemos claridad, control y la certeza de que tu proyecto se realizará a tiempo y dentro de tu presupuesto.",
    icon: LuBarChartHorizontal,
  },
  {
    name: "Certificación de Avance",
    description:
      "¿Crees que tu albañil te pide demasiado? No dejes que los imprevistos afecten tu presupuesto. Con nuestros certificados de avance, tendrás un control total de tus pagos y podrás disfrutar de la tranquilidad de saber que todo está bajo control.",
    icon: FaListCheck,
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
    image: "/chica-1.avif",
    name: "Carla P.",
    title: "Propietaria",
    testimonial:
      "El quincho quedó increíble. TecniCo es la mejor elección para cualquier proyecto. ¡Súper recomendados!",
    rating: 5,
  },
  {
    image: "/chica-2.avif",
    name: "Andrea P.",
    title: "Propietaria",
    testimonial:
      "Desde el inicio hasta el final, la atención de TecniCo fue impecable. ¡Mi casa es perfecta!",
    rating: 5,
  },
  {
    image: "/chico-3.avif",
    name: "Miguel S.",
    title: "Propietario",
    testimonial:
      "No me preocupé por nada durante la construcción. Me mantuvieron informado en todo momento.",
    rating: 4,
  },
  {
    image: "/chico-2.avif",
    name: "Martin A.",
    title: "Arquitecto, Constructor",
    testimonial:
      "Mi pasión es el diseño y la obra. Delego la parte técnico-administrativa para poder concentrarme en crear espacios únicos.",
    rating: 5,
  },
  {
    image: "/chico-1.avif",
    name: "Gabriel O.",
    title: "Técnico, Constructor",
    testimonial:
      "La claridad en los costos beneficia a todos: mis clientes evitan sorpresas y yo puedo dedicarme a lo que mejor hago. Recomendados!",
    rating: 4,
  },
];

export const FAQS = [
  {
    title: "¿Cuánto cuesta construir una casa?",
    description:
      "El costo de construir una casa varía según su tamaño, diseño y los materiales que elijas. Para darte un presupuesto preciso, analizamos en detalle tus planos y te ofrecemos un desglose completo de los costos. ¡Así podrás planificar tu inversión con tranquilidad!",
  },
  {
    title: "¿Cómo se calcula el presupuesto de una obra?",
    description:
      "Calculamos el presupuesto de tu obra a través de un proceso detallado. Analizamos tus planos y elaboramos un desglose completo de todos los elementos que componen tu proyecto, desde los materiales hasta la mano de obra. Este análisis nos permite determinar el costo exacto de cada tarea y ofrecerte un presupuesto claro y transparente. Nuestro objetivo es brindarte toda la información necesaria para que puedas tomar decisiones informadas sobre tu inversión.",
  },
  {
    title: "¿Cuánto tiempo dura una obra?",
    description:
      "La duración de una obra depende de varios factores, como el tamaño del proyecto, la complejidad del diseño y la disponibilidad de materiales. Te ofrecemos un cronograma detallado para que sepas cuándo podrás disfrutar de tu nueva casa. ¡Nos adaptamos a tus necesidades y plazos!",
  },
  {
    title:
      "¿Puedo realizar cambios en el diseño cuando la construcción está en progreso?",
    description:
      "¡Claro que sí! Somos flexibles y nos adaptamos a tus necesidades. Si deseas realizar cambios durante la construcción, te brindaremos un nuevo presupuesto para que conozcas el impacto en el costo total. ¡Tu satisfacción es nuestra prioridad!",
  },
  {
    title:
      "¿Qué gastos adicionales debo considerar además del costo de la construcción?",
    description:
      "Además del costo de la construcción, debes considerar los permisos municipales y los servicios básicos como agua, luz e internet. En algunos casos, pueden surgir gastos adicionales debido a imprevistos en el terreno o cambios en el diseño. ¡Te mantendremos informado en todo momento! ",
  },
  {
    title: "¿Cuál es su zona de cobertura?",
    description:
      "Nos especializamos en construcciones en el Valle Central de Catamarca. Sin embargo, podemos evaluar proyectos en otras zonas. ¡Consúltanos sin compromiso!",
  },
];
