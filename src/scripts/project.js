/* Plantilla única de detalle: lee ?id= y renderiza el proyecto desde projects.json */

import projects from "../data/projects.json";
import { asset } from "./assets.js";

/* Entrada del submenú de navegación (igual que en projects.js) */
function renderMenuItem(project) {
  return `<li><a href="project.html?id=${project.id}"><span>${project.title}</span></a></li>`;
}

/* Carrusel de la galería del proyecto (reutiliza .p5-carousel) */
function setupCarousel(root, images) {
  const slides = images
    .map((src) => `<div class="p5-carousel__slide"><img src="${asset(src)}" alt="Imagen de galería"></div>`)
    .join("");
  const dots = images
    .map((_, i) => `<button class="p5-carousel__dot" data-index="${i}" aria-label="Ir a la imagen ${i + 1}"></button>`)
    .join("");

  root.innerHTML = `
    <div class="p5-carousel__track">${slides}</div>
    <button class="p5-carousel__btn is-prev" aria-label="Anterior">&#8249;</button>
    <button class="p5-carousel__btn is-next" aria-label="Siguiente">&#8250;</button>
    <div class="p5-carousel__dots">${dots}</div>`;

  const track = root.querySelector(".p5-carousel__track");
  const dotEls = [...root.querySelectorAll(".p5-carousel__dot")];
  let index = 0;

  function go(to) {
    index = (to + images.length) % images.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dotEls.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }

  root.querySelector(".is-prev").addEventListener("click", () => go(index - 1));
  root.querySelector(".is-next").addEventListener("click", () => go(index + 1));
  dotEls.forEach((d) => d.addEventListener("click", () => go(Number(d.dataset.index))));

  let timer = setInterval(() => go(index + 1), 4000);
  root.addEventListener("mouseenter", () => clearInterval(timer));
  root.addEventListener("mouseleave", () => {
    timer = setInterval(() => go(index + 1), 4000);
  });

  go(0);
}

/* Menú móvil */
function setupNavToggle() {
  const nav = document.querySelector(".p5-nav");
  const toggle = document.querySelector(".p5-nav__toggle");
  if (!nav || !toggle) return;
  toggle.addEventListener("click", () => nav.classList.toggle("is-open"));
}

/* Render del cuerpo del detalle */
function renderDetail(project) {
  const tags = (project.tags || [])
    .map((t) => `<li class="p5-tag"><span>${t}</span></li>`)
    .join("");

  const roleSection = project.role
    ? `
      <section class="p5-section">
        <h2 class="p5-heading"><span>Mi rol</span></h2>
        <div class="p5-panel"><p>${project.role}</p></div>
      </section>`
    : "";

  const gallerySection = (project.gallery || []).length
    ? `
      <section class="p5-section">
        <h2 class="p5-heading"><span>Galería</span></h2>
        <div class="p5-carousel" id="project-gallery"></div>
      </section>`
    : "";

  const externalBtn = project.externalLink
    ? `<a class="p5-btn" href="${project.externalLink}" target="_blank" rel="noopener">
        <span>${project.externalLabel || "¡Conoce más y prueba el juego!"}</span>
      </a>`
    : "";

  return `
    <header class="p5-project__hero">
      <div class="p5-project__cover">
        <img src="${asset(project.cover)}" alt="Portada de ${project.title}">
      </div>
      <div class="p5-project__intro">
        <h1 class="p5-project__title">${project.title}</h1>
        <p class="p5-project__tagline">${project.tagline || ""}</p>
        <ul class="p5-tags">${tags}</ul>
      </div>
    </header>

    <section class="p5-section is-alt">
      <h2 class="p5-heading"><span>Descripción del proyecto</span></h2>
      <div class="p5-panel"><p>${project.description}</p></div>
    </section>

    <section class="p5-section">
      <h2 class="p5-heading"><span>Proceso</span></h2>
      <div class="p5-panel"><p>${project.process}</p></div>
    </section>

    ${roleSection}
    ${gallerySection}

    <div class="p5-project__actions">
      ${externalBtn}
      <a class="p5-btn is-ghost" href="IndexP3.html#projects"><span>Volver al portafolio</span></a>
    </div>`;
}

/* Estado: proyecto no encontrado */
function renderNotFound(id) {
  return `
    <section class="p5-section">
      <h1 class="p5-heading"><span>Proyecto no encontrado</span></h1>
      <div class="p5-panel">
        <p>No existe ningún proyecto con el identificador <strong>"${id || "(vacío)"}"</strong>.</p>
        <p>Puede que el enlace esté roto o que el proyecto se haya retirado.</p>
        <div class="p5-project__actions">
          <a class="p5-btn" href="IndexP3.html#projects"><span>Ver todos los proyectos</span></a>
        </div>
      </div>
    </section>`;
}

function init() {
  const menu = document.getElementById("projects-menu");
  if (menu) menu.innerHTML = projects.map(renderMenuItem).join("");

  setupNavToggle();

  const container = document.getElementById("project-detail");
  if (!container) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const project = projects.find((p) => p.id === id);

  if (!project) {
    container.innerHTML = renderNotFound(id);
    document.title = "Proyecto no encontrado · Luis Rosaldo";
    return;
  }

  container.innerHTML = renderDetail(project);
  document.title = `${project.title} · Luis Rosaldo`;

  const gallery = document.getElementById("project-gallery");
  if (gallery) setupCarousel(gallery, project.gallery);
}

document.addEventListener("DOMContentLoaded", init);
