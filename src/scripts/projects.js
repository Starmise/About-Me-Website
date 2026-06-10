/* Render del portafolio desde projects.json */

import projects from "../data/projects.json";

/* Las imágenes se sirven desde la copia estática de src/img (ver .parcelrc) */
function asset(path) {
  return path;
}

/* Tarjeta de proyecto */
function renderCard(project) {
  const tags = (project.tags || [])
    .map((t) => `<li class="p5-tag"><span>${t}</span></li>`)
    .join("");

  return `
    <article class="p5-card">
      <div class="p5-card__media">
        <img src="${asset(project.cover)}" alt="Portada de ${project.title}">
      </div>
      <div class="p5-card__body">
        <h3 class="p5-card__title">${project.title}</h3>
        <p class="p5-card__tagline">${project.tagline || ""}</p>
        <ul class="p5-tags">${tags}</ul>
      </div>
      <a class="p5-card__link" href="project.html?id=${project.id}">Ver ${project.title}</a>
    </article>`;
}

/* Entrada del submenú de navegación */
function renderMenuItem(project) {
  return `<li><a href="project.html?id=${project.id}"><span>${project.title}</span></a></li>`;
}

/* Imágenes para la galería: portadas + galerías de cada proyecto, sin repetir */
function galleryImages() {
  const all = projects.flatMap((p) => [p.cover, ...(p.gallery || [])]);
  return [...new Set(all)];
}

/* Carrusel propio: navegación, indicadores y autoplay */
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

/* Monta todo cuando carga el DOM */
function init() {
  const grid = document.getElementById("projects-grid");
  if (grid) grid.innerHTML = projects.map(renderCard).join("");

  const menu = document.getElementById("projects-menu");
  if (menu) menu.innerHTML = projects.map(renderMenuItem).join("");

  const carousel = document.getElementById("gallery");
  if (carousel) setupCarousel(carousel, galleryImages());

  setupNavToggle();
}

document.addEventListener("DOMContentLoaded", init);
