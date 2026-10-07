# `projects.json` — Fuente única de verdad del portafolio

Este archivo es **el único lugar** que hay que editar para añadir, quitar o modificar un
proyecto. Las tarjetas de la página principal, las entradas del menú y la página de
detalle se generan automáticamente a partir de él (ver Fases 3 y 4 del roadmap).

## Esquema

`projects.json` es un **array** de objetos. Cada objeto representa un proyecto con los
siguientes campos:

| Campo           | Tipo       | Obligatorio | Descripción |
|-----------------|------------|-------------|-------------|
| `id`            | `string`   | Sí          | Identificador único en `kebab-case`. Se usa en la URL de detalle (`project.html?id=<id>`). No debe repetirse ni contener espacios. |
| `title`         | `string`   | Sí          | Nombre visible del proyecto. |
| `cover`         | `string`   | Sí          | Ruta de la portada, relativa a `src/` (p. ej. `img/LucioGalaxyMain.png`). |
| `tagline`       | `string`   | No          | Frase corta de gancho que se muestra bajo el título en la tarjeta. |
| `tags`          | `string[]` | No          | Etiquetas de tecnologías/roles para chips/filtros. Puede ir vacío `[]`. |
| `description`   | `string`   | Sí          | Descripción del proyecto (sección "Descripción del proyecto"). |
| `process`       | `string`   | Sí          | Contexto de desarrollo y aportación personal (sección "Proceso"). |
| `role`          | `string`   | No          | Resumen breve de tu rol/aportación, derivado de `process`. Útil para mostrarlo destacado. |
| `gallery`       | `string[]` | No          | Rutas de imágenes adicionales (relativas a `src/`). Puede ir vacío `[]`. |
| `externalLink`  | `string`   | No          | URL externa para jugar/ver el proyecto (itch.io, Drive, etc.). |
| `externalLabel` | `string`   | No          | Texto del botón hacia `externalLink`. Por defecto se puede usar "¡Conoce más y prueba el juego!". |
| `featured`      | `boolean`  | No          | Si es `true`, el proyecto puede destacarse (orden/hero). Por defecto `false`. |

## Cómo añadir un proyecto nuevo

1. Copia las imágenes a `src/img/` (los nombres de archivo se usan tal cual en el JSON).
2. Añade un nuevo objeto al array siguiendo el esquema de arriba. Asegúrate de que `id`
   sea único.
3. No hace falta tocar HTML ni CSS: la tarjeta, el menú y la página de detalle se generan
   solos.

## Notas

- Los textos `description` y `process` se migraron **verbatim** desde las antiguas páginas
  `src/projects/*.html` para conservar el contenido original (incluidas sus erratas). Se
  pueden corregir libremente editando este JSON.
- Mantén el JSON válido (sin comas finales). Puedes validarlo con:
  `node -e "require('./src/data/projects.json')"`.
