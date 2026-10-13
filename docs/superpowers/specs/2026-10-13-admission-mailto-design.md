# Envío de solicitud de admisión por correo

**Fecha:** 2026-10-13  
**Estado:** Diseño aprobado por el usuario

## Objetivo

Permitir que el visitante envíe su solicitud de admisión a `ventas@alfa552.com` desde su propia aplicación de correo.

## Diseño

Conservar el checklist actual de nombre, correo, teléfono y programa. Al completar los cuatro campos, el botón abrirá un enlace `mailto:` dirigido a `ventas@alfa552.com`, con asunto de solicitud de admisión y los cuatro valores codificados en el cuerpo del mensaje. El botón permanecerá inactivo mientras falte un dato requerido.

La interfaz indicará que el mensaje quedó preparado y que el visitante debe confirmar el envío en su aplicación de correo. No se afirmará que el correo fue recibido, ya que `mailto:` no permite al sitio verificar si el visitante envió el mensaje. El enlace de contacto del pie de página y los datos de contacto existentes no cambian.

## Criterios de aceptación

- Una solicitud completa abre la aplicación de correo predeterminada con destino, asunto y los cuatro datos rellenados.
- Los valores del mensaje se codifican correctamente, incluidos espacios y caracteres acentuados.
- No se abre un correo con datos incompletos.
- La confirmación pide al visitante enviar el mensaje desde su aplicación, sin afirmar que ya se recibió.

## Fuera de alcance

- Envío automático desde el servidor.
- Guardar solicitudes en una base de datos o integrar un proveedor de correo.
- Cambios en el resto de las vías de contacto.
