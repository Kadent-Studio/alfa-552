# Enlace de TikTok en el pie de página

**Fecha:** 2026-10-13  
**Estado:** Aprobado por el usuario

## Objetivo

Añadir el perfil de TikTok de CIA ALFA 552 a los enlaces sociales del sitio.

## Diseño

Agregar `TIKTOK` al arreglo `SOCIAL` de `components/alfa/site-footer.tsx`, junto a Instagram. El enlace será `https://tiktok.com/@alfa552.cia` y se abrirá en una pestaña nueva con `rel="noopener noreferrer"`, siguiendo el patrón existente para enlaces sociales externos.

## Criterio de aceptación

- El pie de página muestra `TIKTOK` en la sección «REDES».
- Al activarlo, abre `https://tiktok.com/@alfa552.cia` en una pestaña nueva.

## Fuera de alcance

- Cambios en el encabezado, otras redes sociales o el diseño visual del pie de página.
