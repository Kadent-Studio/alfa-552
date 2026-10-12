import { OG_SIZE, renderOgImage } from "@/lib/seo/og-image";

export const alt = "CIA ALFA 552 · Centro de Instrucción Aeronáutica";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage(
    "CIA ALFA 552 · INAC CCIA-89",
    "Centro de Instrucción Aeronáutica",
    "Mantenimiento, cabina y despacho de vuelo — bajo las Regulaciones Aeronáuticas Venezolanas"
  );
}
