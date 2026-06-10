/* Rutas de imagen resueltas por Parcel (evita depender solo de static-files-copy) */

import catharsisMain from "url:../img/CatharsisMain.png";
import lucioGalaxyMain from "url:../img/LucioGalaxyMain.png";
import memeceptionMain from "url:../img/MemeceptionMain.png";
import raboomMain from "url:../img/RaboomMain.jpg";
import cosmicFangMain from "url:../img/CosmicFangMain.png";

import galleryExample1 from "url:../img/GalleryExample.png";
import galleryExample2 from "url:../img/GalleryExample (2).png";
import galleryExample3 from "url:../img/GalleryExample (3).png";

const COVER_ASSETS = {
  "img/CatharsisMain.png": catharsisMain,
  "img/LucioGalaxyMain.png": lucioGalaxyMain,
  "img/MemeceptionMain.png": memeceptionMain,
  "img/RaboomMain.jpg": raboomMain,
  "img/CosmicFangMain.png": cosmicFangMain,
};

export const GALLERY_IMAGES = [galleryExample1, galleryExample2, galleryExample3];

export function asset(path) {
  return COVER_ASSETS[path] || path;
}
