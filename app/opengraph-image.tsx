import { OG_SIZE, renderOgImage } from "@/lib/seo/og-image";

export const alt =
  "CIA ALFA 552 · DONDE TUS SUEÑOS TOMAN VUELO Y SE CONVIERTEN EN TU FUTURO.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage(
    "CIA ALFA 552 · INAC CCIA-89",
    "Centro de Instrucción Aeronáutica",
    "DONDE TUS SUEÑOS TOMAN VUELO Y SE CONVIERTEN EN TU FUTURO."
  );
}
