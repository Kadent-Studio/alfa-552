# Recaudos de admisión por programa

**Fecha:** 2026-10-12
**Estado:** Aprobado

## Objetivo

Actualizar la información de admisión en la sección «Programas» para que cada aspirante encuentre, dentro de la ficha de su ruta, la lista completa de documentos exigidos por el archivo `RECAUDOS EXIGIDOS PARA ADMISIÓN ( Alumnos ).docx`.

## Alcance

- Actualizar las fichas de Técnico en Mantenimiento Aeronáutico (TMA-552), Tripulante de Cabina (TCP-552) y Despacho de Vuelo (DV-552).
- Mostrar el checklist completo dentro de cada ficha expandida.
- Eliminar de esas fichas las condiciones actuales de examen técnico, inglés y entrevista, porque no aparecen en el documento fuente.
- Incluir el precalificativo médico únicamente en Tripulante de Cabina, donde sí aparece en el documento fuente.
- No cambiar la página Pensum ni otros programas o canales de información.

## Contenido acordado

Cada ficha mostrará:

1. Edad mínima: 17 años para TMA y TCP; 20 años para Despacho de Vuelo.
2. Para aspirantes menores de 18 años en TMA y TCP: autorización firmada por el representante legal y copia de la cédula de ese representante.
3. Copia legible de la cédula de identidad vigente.
4. Copia del título de bachiller o de educación superior, junto con las notas certificadas originales de Educación Media General.
5. Copia del acta de nacimiento.
6. Para Tripulante de Cabina: precalificativo médico.
7. Dos fotografías recientes tamaño carnet, con fondo blanco.
8. Una carpeta marrón tamaño oficio con gancho.

El precalificativo médico solo se mostrará en la ficha TCP-552. La autorización y copia de cédula del representante solo se mostrarán en TMA-552 y TCP-552, para aspirantes menores de 18 años. Cada ficha tendrá una lista completa e independiente; no se inferirán recaudos que no figuren en el DOCX.

## Diseño de interacción

Se conserva el acordeón actual de Programas y su imagen contextual. Al expandir una ficha, modalidad y salida profesional se presentan en una fila de información compacta; debajo se muestra una sección de admisión a ancho completo con los requisitos numerados o marcados como checklist. El formato debe acomodar el texto largo sin comprimirlo en la columna estrecha que hoy ocupa «Requisitos de ingreso».

La sección mantiene el sistema visual de ALFA 552: fondo oscuro, bordes rectos, líneas finas, oro como único acento y etiquetas mono técnicas. La lista debe leerse bien en móvil y escritorio, con jerarquía clara entre edad, documentos y la condición para menores de edad.

## Movimiento

Se conserva la apertura y cierre accesible del acordeón existente. Las transiciones nuevas, si hacen falta, serán breves y discretas, respetarán `prefers-reduced-motion` y no retrasarán la lectura del checklist.

## Datos y fuente

Los datos de recaudos se mantendrán asociados a cada programa en la fuente de datos que alimenta la sección. Se actualizarán las edades discrepantes que hoy aparecen en `components/alfa/data.ts`. El DOCX es la fuente de verdad para este cambio.

## Criterios de aceptación

- Cada uno de los tres programas muestra todos sus recaudos al expandir la ficha.
- TMA y TCP indican edad mínima de 17 años y la documentación adicional para menores de 18.
- Despacho indica edad mínima de 20 años y no muestra una exigencia de representante legal que el DOCX no especifica.
- No aparecen en las fichas las condiciones de examen técnico, inglés o entrevista.
- El precalificativo médico aparece únicamente en la ficha TCP-552.
- La presentación permite leer los requisitos completos en móvil y escritorio y sigue la identidad visual existente.
- Las animaciones respetan la preferencia de movimiento reducido.

## Fuera de alcance

- Cambios a la sección Pensum.
- Cambios a la página de admisión, chatbot, calendario o cohortes.
- Publicar un descargable o transcribir el DOCX como archivo público.
