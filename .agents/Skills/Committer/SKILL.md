---
name: committer
description: Commits changes to the repository in a structured way.
---

# Formato de Commits

Esta habilidad define cómo se deben estructurar los mensajes de commit en este repositorio, siguiendo la especificación de **Conventional Commits**.

## Reglas Principales

1. **Título (Primera Línea)**
   - Debe usar el formato: `<tipo>[ámbito opcional]: <descripción>`
   - **Longitud Máxima:** 50 caracteres.
   - **Idioma:** Español.
   - No poner punto final al terminar el título.
   - **Ejemplo:** `feat(ui): agregar botón de ingreso`

2. **Descripción (Cuerpo del Commit)**
   - Debe separarse del título por una línea en blanco.
   - Debe explicar en detalle **qué** cambios se hicieron y **por qué** (el contexto de la decisión).
   - **Idioma:** Español.
   - Se recomienda el uso de viñetas para listar los cambios específicos.

## Tipos Permitidos (`<tipo>`)

- `feat`: Una nueva característica o funcionalidad.
- `fix`: La corrección de un error (bug).
- `docs`: Cambios únicamente en la documentación.
- `style`: Cambios que no afectan el significado del código (espaciado, formato, etc.).
- `refactor`: Un cambio en el código que no corrige un error ni añade funcionalidad (ej. reestructuración de código).
- `perf`: Un cambio en el código que mejora el rendimiento.
- `test`: Adición de pruebas faltantes o mejora de las existentes.
- `chore`: Cambios en el proceso de construcción, tareas de mantenimiento o herramientas auxiliares.

## Ejemplo de un Commit Ideal

```text
feat(auth): implementar panel de usuario

- Se agregó la validación del formulario de preferencias.
- Se conectó el frontend con el nuevo endpoint de perfiles.
- Esta integración es necesaria para permitir a los usuarios personalizar su vista.
```