/* Rutas de imagen resueltas por Parcel (evita depender solo de static-files-copy) */

import catharsisMain from "url:../img/CatharsisMain.png";
import lucioGalaxyMain from "url:../img/LucioGalaxyMain.png";
import memeceptionMain from "url:../img/MemeceptionMain.png";
import raboomMain from "url:../img/RaboomMain.jpg";
import cosmicFangMain from "url:../img/CosmicFangMain.png";
import personaErrorMain from "url:../img/PersonaErrorMain.jpg";
import epicLucioPrototypeMain from "url:../img/EpicLucioPrototypeMain.jpg";
import lucioKartMain from "url:../img/LucioKartMain.jpg";
import visualizer3DMain from "url:../img/Visualizer3DMain.jpg";
import popsAndBarksMain from "url:../img/PopsAndBarksMain.jpg";
import custom2DFrameworkMain from "url:../img/Custom2DFrameworkMain.jpg";
import epicLucioMVPMain from "url:../img/EpicLucioMVPMain.jpg";
import solarSystemMain from "url:../img/SolarSystemMain.jpg";
import offTheHookMain from "url:../img/OffTheHookMain.jpg";
import deadlockEscapeMain from "url:../img/DeadlockEscapeMain.jpg";
import lucioClickerMain from "url:../img/LucioClickerMain.jpg";
import aRProjectsMain from "url:../img/ARProjectsMain.jpg";
import kiwiAgentsMain from "url:../img/KiwiAgentsMain.jpg";
import kerberosEngineMain from "url:../img/KerberosEngineMain.jpg";
import pCGEnemiesMain from "url:../img/PCGEnemiesMain.jpg";
import vesselsMain from "url:../img/VesselsMain.jpg";
import deathOfWillMain from "url:../img/DeathOfWillMain.jpg";

import galleryExample1 from "url:../img/GalleryExample.png";
import galleryExample2 from "url:../img/GalleryExample (2).png";
import galleryExample3 from "url:../img/GalleryExample (3).png";

const COVER_ASSETS = {
  "img/CatharsisMain.png": catharsisMain,
  "img/LucioGalaxyMain.png": lucioGalaxyMain,
  "img/MemeceptionMain.png": memeceptionMain,
  "img/RaboomMain.jpg": raboomMain,
  "img/CosmicFangMain.png": cosmicFangMain,
  "img/PersonaErrorMain.jpg": personaErrorMain,
  "img/EpicLucioPrototypeMain.jpg": epicLucioPrototypeMain,
  "img/LucioKartMain.jpg": lucioKartMain,
  "img/Visualizer3DMain.jpg": visualizer3DMain,
  "img/PopsAndBarksMain.jpg": popsAndBarksMain,
  "img/Custom2DFrameworkMain.jpg": custom2DFrameworkMain,
  "img/EpicLucioMVPMain.jpg": epicLucioMVPMain,
  "img/SolarSystemMain.jpg": solarSystemMain,
  "img/OffTheHookMain.jpg": offTheHookMain,
  "img/DeadlockEscapeMain.jpg": deadlockEscapeMain,
  "img/LucioClickerMain.jpg": lucioClickerMain,
  "img/ARProjectsMain.jpg": aRProjectsMain,
  "img/KiwiAgentsMain.jpg": kiwiAgentsMain,
  "img/KerberosEngineMain.jpg": kerberosEngineMain,
  "img/PCGEnemiesMain.jpg": pCGEnemiesMain,
  "img/VesselsMain.jpg": vesselsMain,
  "img/DeathOfWillMain.jpg": deathOfWillMain,
};

export const GALLERY_IMAGES = [galleryExample1, galleryExample2, galleryExample3];

export function asset(path) {
  return COVER_ASSETS[path] || path;
}
