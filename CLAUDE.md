# CLAUDE.md — Contexto del proyecto

Portafolio personal de **Starmise** (Luis), desarrollador de videojuegos. Sitio estático con
estética inspirada en los menús de *Persona 5*. Todo el contenido y la comunicación con el
usuario son **en español**.

- **Sitio en vivo:** https://starmise.github.io/About-Me-Website/
- **Repo:** https://github.com/Starmise/About-Me-Website (público, rama `main`)
- **Copia local del usuario (Windows):** `C:\Users\Lu1sR\Documents\VisualStudioProjects\About-Me-Website`

## Stack

- HTML + SCSS + JavaScript vanilla (módulos ES), empaquetado con **Parcel 2**.
- `@parcel/transformer-sass` para SCSS, `parcel-reporter-static-files-copy` para copiar
  `src/img/` a `dist/img/` tal cual (configurado en `.parcelrc` y `package.json → staticFiles`).
- Sin framework, sin backend, sin dependencias de runtime.

## Comandos

```bash
npm install        # restaura node_modules
npm start          # servidor de desarrollo (http://localhost:1234)
npm run build      # build de producción en dist/
```

Para replicar exactamente el build de producción (rutas relativas):

```bash
npx parcel build src/IndexP3.html src/project.html src/indexMin.html --public-url ./ --no-cache
```

## Estructura

```
src/
  IndexP3.html     Portafolio completo (página principal; en producción se copia a index.html)
  indexMin.html    Versión corta / resumen
  project.html     Página de detalle genérica: project.html?id=<id>
  data/
    projects.json  FUENTE ÚNICA de los proyectos (tarjetas, menú y páginas de detalle)
    README.md      Esquema de projects.json y cómo añadir proyectos
  scripts/
    projects.js    Renderiza tarjetas, submenú y galería en las páginas principales
    project.js     Renderiza la página de detalle a partir del ?id=
    assets.js      Mapea rutas de portadas/galería a URLs procesadas por Parcel
  style/
    main.scss      Punto de entrada; importa los parciales
    _tokens.scss   Variables, colores, mixins (tema Persona 5)
    _base / _layout / _components / _animations / _project .scss
  img/             Imágenes (se copian a dist/img/)
docs/              Notas internas (ROADMAP.md, etc.). Ignorado por git: solo existe en local.
.github/workflows/deploy.yml   Despliegue a GitHub Pages
```

## Añadir o editar un proyecto

1. Copiar imágenes a `src/img/`.
2. Añadir/editar el objeto en `src/data/projects.json` (ver `src/data/README.md` para el
   esquema; `id` en kebab-case y único).
3. Opcional pero recomendable: registrar la portada en `src/scripts/assets.js`
   (`COVER_ASSETS`) para que Parcel la procese con hash. Si no se registra, la ruta
   `img/...` sigue funcionando gracias a la copia estática.
4. Validar el JSON: `node -e "require('./src/data/projects.json')"`.

## Despliegue

- **GitHub Pages vía GitHub Actions** (`.github/workflows/deploy.yml`), source = "GitHub Actions"
  en *Settings → Pages*.
- Se despliega automáticamente en cada push a `main` (también se puede lanzar a mano desde
  *Actions → Deploy to GitHub Pages → Run workflow*, o con
  `gh workflow run deploy.yml -R Starmise/About-Me-Website --ref main`).
- El workflow compila con `--public-url ./` (el sitio vive en el subpath `/About-Me-Website/`,
  así que **las rutas deben ser relativas**; nunca usar rutas que empiecen con `/`) y copia
  `dist/IndexP3.html` a `dist/index.html`.
- Gratis porque el repo es público (Pages en repos privados requiere plan de pago).

## Notas y trampas conocidas

- `dist/`, `.parcel-cache/`, `node_modules/` y `docs/` están en `.gitignore`.
- En la copia local de Windows, `git status` puede mostrar casi todos los archivos como
  modificados: son **solo diferencias de fin de línea (CRLF/LF)**, no cambios reales
  (`git diff --ignore-cr-at-eol` sale vacío). No hacer commit de eso por accidente.
- Si cambian los nombres de las páginas HTML, actualizar también el workflow (lista de
  entradas y el `cp` a `index.html`) y los `scripts` de `package.json`.
- Idea pendiente: renombrar el repo a `Starmise.github.io` para tener la URL corta
  `https://starmise.github.io/` (requeriría ajustar el enlace del README).
