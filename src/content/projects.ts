import type { Project } from "./types";
import { photos } from "./photos";

// Name and scope are visible on the supplied FactoryMind project poster.
export const projects: Project[] = [
  {
    id: "factorymind",
    title: { vi: "FactoryMind", en: "FactoryMind" },
    category: { vi: "AIoT / Giám sát công nghiệp", en: "AIoT / Industrial monitoring" },
    description: {
      vi: "Nền tảng AIoT hướng đến giám sát thông minh và đề xuất lịch bảo trì cho môi trường công nghiệp. FactoryMind kết nối bài toán dữ liệu với mô hình phần cứng, đưa ý tưởng từ poster kỹ thuật đến một sản phẩm có thể trình diễn trực tiếp.",
      en: "An AIoT platform for intelligent industrial monitoring and maintenance-schedule recommendations. FactoryMind connects a data problem with a working hardware model, taking an idea from a technical poster to a live demonstration.",
    },
    image: photos.factoryMind,
    technologies: ["AIoT Sensing", "Vision AI", "Predictive AI"],
    details: [
      { vi: "Ba hướng tiếp cận được giới thiệu trong dự án: thu thập dữ liệu bằng cảm biến, quan sát bằng thị giác máy tính và phân tích dự đoán để hỗ trợ bảo trì.", en: "The project presents three connected approaches: sensor-based data collection, computer vision and predictive analysis to support maintenance." },
      { vi: "Tại vòng bán kết AIoT Developer InnoWorks 2026, nhóm trưng bày poster, mô hình cánh tay robot và băng tải; trực tiếp giới thiệu cách các thành phần phần cứng và phần mềm phối hợp trong hệ thống.", en: "At the AIoT Developer InnoWorks 2026 semifinal, the team presented a technical poster, robotic arms and a conveyor model, explaining how the hardware and software fit together." },
    ],
    supportingImage: photos.demonstration,
    supportingCaption: { vi: "Từ mô hình đến phần trình diễn: FactoryMind tại vòng bán kết AIoT Developer InnoWorks 2026.", en: "From prototype to demonstration: FactoryMind at the AIoT Developer InnoWorks 2026 semifinal." },
    href: "#gallery",
  },
];
