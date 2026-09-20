export const site = {
  name: "Laura Flores Hairstylist",
  shortName: "Laura Flores",
  specialty: "Especialista en Colorimetría y Cuidado Capilar",
  location: "Villahermosa, Tabasco",
  instagram: "https://www.instagram.com/laurafloreshairstylist/",
  whatsapp: "https://wa.me/529934189811?text=Hola%20Laura%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita.",
  phone: "+52 993 418 9811",
} as const;

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Enfoque", href: "#enfoque" },
  { label: "Galería", href: "#galeria" },
  { label: "El estudio", href: "#estudio" },
  { label: "Drinks", href: "#drinks" },
] as const;

export const galleryImages = [
  {
    src: "/images/color-detail.jpg",
    alt: "Cabello largo con reflejos cálidos sobre un fondo rosa suave",
    className: "gallery-main",
  },
  {
    src: "/images/portrait.jpg",
    alt: "Retrato con iluminación fría y cálida que evoca el análisis de color",
    className: "gallery-portrait",
  },
  {
    src: "/images/hair-care.jpg",
    alt: "Estilista cuidando el cabello de una clienta durante el lavado",
    className: "gallery-care",
  },
  {
    src: "/images/styling.jpg",
    alt: "Estilista dando forma al cabello de una clienta en un salón luminoso",
    className: "gallery-styling",
  },
] as const;
