import type { GalleryItem } from "./types";
import { photos } from "./photos";

export const gallery: GalleryItem[] = [
  { id: "demo", image: photos.demonstration, caption: { vi: "01 / Trình diễn FactoryMind", en: "01 / Demonstrating FactoryMind" } },
  { id: "project", image: photos.factoryMind, caption: { vi: "02 / Câu chuyện phía sau mô hình", en: "02 / The thinking behind the prototype" } },
  { id: "celebration", image: photos.celebration, caption: { vi: "03 / Niềm vui khi được đi tiếp", en: "03 / The joy of making it through" } },
  { id: "referees", image: photos.enjoyAi, caption: { vi: "04 / Trọng tài ENJOY AI Việt Nam 2026", en: "04 / ENJOY AI Vietnam 2026 referees" } },
  { id: "champions", image: photos.iotChampions, caption: { vi: "05 / Quán quân IoT Challenge 2025", en: "05 / First prize at IoT Challenge 2025" } },
  { id: "semifinal", image: photos.semifinal, caption: { vi: "06 / AIoT Developer InnoWorks 2026", en: "06 / AIoT Developer InnoWorks 2026" } },
  { id: "iot-product", image: photos.iot_product, caption: { vi: "07 / Sản phẩm dự thi IoT Challenge", en: "07 / Our IoT Challenge prototype" } },
  { id: "iot-challenge", image: photos.IOTChallenge, caption: { vi: "08 / Cận cảnh mô hình IoT", en: "08 / The IoT prototype up close" } },
  { id: "autonomous-robot", image: photos.A_quan_robot_tu_hanh, caption: { vi: "09 / Á quân Robot tự hành 2025", en: "09 / Autonomous Robot Competition 2025 runners-up" } },
];
