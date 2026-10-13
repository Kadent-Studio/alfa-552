# Programas, ingresos, pensum y asistente virtual

**Fecha:** 2026-10-13  
**Estado:** Aprobado por el usuario

## Objetivo

Actualizar la información pública de los tres programas de CIA ALFA 552 según las correcciones compartidas, y mantenerla coherente entre la portada, el calendario académico y el asistente virtual.

## Alcance

- Actualizar los datos de Técnico en Mantenimiento Aeronáutico, Tripulante de Cabina y Despacho de Vuelo.
- Mostrar los códigos públicos TMA-01, TDC-01 y DDV-01 sin cambiar identificadores internos que otras partes del sitio necesiten.
- Indicar duración, modalidad presencial, fecha de inicio y capacidad por curso.
- Cambiar la etiqueta «Salida profesional» por «Mercado profesional» en las fichas de los tres programas.
- Reflejar el inicio común del 11 de enero de 2027 y la capacidad de 20 alumnos por curso en las cohortes/calendario y las respuestas del asistente.
- Actualizar la descripción del programa TMA en Bitácora con el texto solicitado.
- En Pensum, quitar la estadística de rutas de formación. Conservar la ruta de Tripulante de Cabina que ya suma 272 horas y conservar Despacho de Vuelo, cuya opción actual aparece como «RAV 141 · DV». Corregir cualquier mención residual incorrecta «DDV 552» sin ocultar la ruta de Despacho.
- Incluir información de los tres programas en el asistente virtual.

## Datos de programa acordados

| Código público | Programa | Duración | Modalidad | Inicio | Capacidad |
| --- | --- | --- | --- | --- | --- |
| TMA-01 | Técnico en Mantenimiento Aeronáutico | 7 meses intensivos | Presencial | 11 de enero de 2027 | 20 alumnos por curso |
| TDC-01 | Tripulante de Cabina | 6 meses | Presencial | 11 de enero de 2027 | 20 alumnos por curso |
| DDV-01 | Despacho de Vuelo | 6 meses | Presencial | 11 de enero de 2027 | 20 alumnos por curso |

Los recaudos de admisión ya publicados para cada programa se conservan. El contenido de mercado profesional también se conserva, salvo la nueva descripción de TMA en Bitácora.

## Diseño de implementación

Mantener las fuentes actuales y hacer cambios acotados donde cada superficie obtiene sus datos. Los códigos públicos se presentan como etiquetas, mientras se preservan los códigos internos usados como claves cuando sea necesario. Las respuestas del asistente deben derivarse de los datos de programa/cohorte para evitar respuestas desactualizadas o duplicadas.

La portada mantiene su acordeón de programas y su estilo actual. Los datos de ingreso se muestran en las fichas y en la sección de cohortes. El calendario registra el inicio para los tres programas con capacidad de 20 alumnos. La selección de Pensum conserva las rutas TMA, Despacho y Tripulante de Cabina; la malla de TDC continúa mostrando 272 horas.

## Criterios de aceptación

- Las tres fichas muestran el código público, duración, modalidad presencial, fecha de inicio y 20 alumnos por curso.
- Las tres fichas muestran «Mercado profesional» y conservan sus requisitos de admisión actuales.
- La portada, calendario y asistente informan el inicio del 11 de enero de 2027 para los tres programas y una capacidad de 20 alumnos por curso.
- La respuesta general del asistente enumera los tres programas; las respuestas específicas incluyen la duración y modalidad vigentes.
- Bitácora presenta la descripción TMA acordada: «Inspecciona, repara y certifica célula, motores y sistemas en aeronaves que estén bajo órdenes de trabajo en organizaciones de mantenimiento y líneas aéreas certificados por la Autoridad Aeronáutica».
- Pensum ya no muestra el indicador de rutas de formación, conserva Tripulante de Cabina con 272 horas y conserva la selección de Despacho de Vuelo sin una etiqueta incorrecta «DDV 552».

## Fuera de alcance

- Cambiar el contenido de las mallas curriculares o inferir horas adicionales.
- Alterar los requisitos de admisión aprobados previamente.
- Cambios de identidad visual o rediseños de las páginas.
- Eliminar la ruta de Despacho de Vuelo del Pensum.
