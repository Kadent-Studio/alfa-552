import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CIA ALFA 552 · Centro de Instrucción Aeronáutica",
    short_name: "CIA ALFA 552",
    description:
      "DONDE TUS SUEÑOS TOMAN VUELO Y SE CONVIERTEN EN TU FUTURO. Formación en mantenimiento aeronáutico, cabina y despacho de vuelo bajo las RAV 141 y 147 · INAC CCIA-89.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0b0d",
    theme_color: "#0a0b0d",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        src: "/apple-icon",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  };
}
