import type { GalleryItem } from "./types";
import { photos } from "./photos";

export const gallery: GalleryItem[] = [
  { id: "demo", image: photos.demonstration, layout: "wide", caption: { vi: "01 / Trình diễn FactoryMind", en: "01 / Demonstrating FactoryMind" } },
  { id: "project", image: photos.factoryMind, layout: "portrait", caption: { vi: "02 / Câu chuyện phía sau mô hình", en: "02 / The thinking behind the prototype" } },
  { id: "celebration", image: photos.celebration, layout: "square", caption: { vi: "03 / Niềm vui khi được đi tiếp", en: "03 / The joy of making it through" } },
  { id: "referees", image: photos.enjoyAi, layout: "square", caption: { vi: "04 / Trọng tài ENJOY AI Việt Nam 2026", en: "04 / ENJOY AI Vietnam 2026 referees" } },
  { id: "champions", image: photos.iotChampions, layout: "wide", caption: { vi: "05 / Giải nhất IoT Challenge 2025", en: "05 / First prize at IoT Challenge 2025" } },
  { id: "semifinal", image: photos.semifinal, layout: "portrait", caption: { vi: "06 / AIoT Developer InnoWorks 2026", en: "06 / AIoT Developer InnoWorks 2026" } },
];
