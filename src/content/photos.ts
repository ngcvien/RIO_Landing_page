import type { ContentImage } from "./types";

// Original photographs: images/Activities. Keep shared paths so browsers cache
// each photo once when it appears in a story and in the gallery.
export const photos = {
  iotChampions: {
    src: "/images/activities/iot-challenge-2025.webp", width: 2048, height: 1365,
    alt: { vi: "Đội thi tại IoT Challenge 2025 với bảng quán quân", en: "The team holding the first-prize award at IoT Challenge 2025" },
  },
  enjoyAi: {
    src: "/images/activities/enjoy-ai-2026.webp", width: 2048, height: 1153,
    alt: { vi: "Các trọng tài nhận chứng nhận tại ENJOY AI Việt Nam 2026", en: "Referees with their certificates at ENJOY AI Vietnam 2026" },
  },
  factoryMind: {
    src: "/images/activities/factorymind.webp", width: 2048, height: 1365,
    alt: { vi: "Poster FactoryMind và mô hình cánh tay robot tại gian trưng bày dự án", en: "The FactoryMind project poster and robotic-arm model at the exhibition booth" },
  },
  demonstration: {
    src: "/images/activities/factorymind-demo.webp", width: 2048, height: 1365,
    alt: { vi: "Nhóm giới thiệu mô hình FactoryMind tại vòng bán kết AIoT Developer", en: "The team demonstrating FactoryMind at the AIoT Developer semifinal" },
  },
  semifinal: {
    src: "/images/activities/innoworks-semifinal-2026.webp", width: 2048, height: 1366,
    alt: { vi: "Đoàn VKU tại vòng bán kết AIoT Developer InnoWorks 2026 ở Hà Nội", en: "The VKU delegation at the AIoT Developer InnoWorks 2026 semifinal in Hanoi" },
  },
  celebration: {
    src: "/images/activities/finalist-celebration.webp", width: 2048, height: 1365,
    alt: { vi: "Các thành viên vui mừng khi biết tin được vào chung kết", en: "Team members celebrating the news that they have reached the final" },
  },
  hero: {
    src: "/images/activities/BII00718.jpg", width: 7008, height: 4672,
    alt: { vi: "Các thành viên vui mừng khi biết tin được vào chung kết", en: "Team members celebrating the news that they have reached the final" },
  },
  iot_product: {
    src: "/images/activities/iot_product.jpg", width: 1620, height: 1080,
    alt: { vi: "Sản phẩm IoT Challenge 2025 của RIO", en: "The RIO IoT challenge 2025 product" },
  },
  IOTChallenge: {
    src: "/images/activities/IOTChallenge.jpg", width: 2048, height: 1365,
    alt: { vi: "Cận cảnh mô hình của RIO tại IoT Challenge 2025", en: "A close-up of RIO's prototype at IoT Challenge 2025" },
  },
  A_quan_robot_tu_hanh: {
    src: "/images/activities/A_quan_robot_tu_hanh.jpg", width: 2048, height: 1365,
    alt: { vi: "Hai thành viên RIO tại vòng chung kết cuộc thi Robot tự hành 2025", en: "Two RIO members at the final of the 2025 Autonomous Robot Competition" },
  },
} satisfies Record<string, ContentImage>;
