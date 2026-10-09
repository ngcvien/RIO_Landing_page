import type { Activity } from "./types";
import { photos } from "./photos";

// Dates are included only when visible in the supplied photographs.
export const activities: Activity[] = [
  {
    id: "innoworks-2026", date: "2026-09-26",
    title: { vi: "Mang sản phẩm đến AIoT Developer InnoWorks 2026", en: "Taking our work to AIoT Developer InnoWorks 2026" },
    category: { vi: "Cuộc thi / Hà Nội", en: "Competition / Hanoi" },
    description: { vi: "Vòng bán kết là nơi ý tưởng được đặt trước những câu hỏi thực tế. Cùng mô hình, poster và phần trình diễn trực tiếp, nhóm có dịp trình bày hướng giải quyết bài toán, trao đổi về sản phẩm và ghi lại một chặng đường đáng nhớ tại cuộc thi.", en: "The semifinal puts ideas in front of real questions. With a model, a technical poster and a live demonstration, the team presented its approach, discussed the project and marked an important step in the competition." },
    image: photos.semifinal,
  },
  {
    id: "enjoy-ai-referees-2026", year: "2026",
    title: { vi: "Đồng hành cùng ENJOY AI Việt Nam trong vai trò trọng tài", en: "Supporting ENJOY AI Vietnam as referees" },
    category: { vi: "Cộng đồng / Robotics", en: "Community / Robotics" },
    description: { vi: "Không chỉ đứng ở vị trí người dự thi, các thành viên còn tham gia ENJOY AI Việt Nam 2026 trong vai trò trọng tài. Một trải nghiệm khác với robotics: theo sát sân thi đấu, đồng hành cùng các đội và góp phần vào hoạt động của cộng đồng yêu công nghệ.", en: "Engineering also means contributing beyond our own projects. Members joined ENJOY AI Vietnam 2026 as referees, gaining a different view of robotics through the competition floor and supporting a wider community of technology enthusiasts." },
    image: photos.enjoyAi,
  },
  {
    id: "iot-challenge-2025", year: "2025",
    title: { vi: "Một dấu mốc tại IoT Challenge 2025", en: "A milestone at IoT Challenge 2025" },
    category: { vi: "Cuộc thi / IoT", en: "Competition / IoT" },
    description: { vi: "Từ quá trình chuẩn bị đến khoảnh khắc nhận quán quân, IoT Challenge 2025 là một phần trong câu chuyện học và làm của RIO. Bức ảnh cùng bảng giải thưởng lưu lại niềm vui của đội thi sau hành trình với chủ đề Edge AI for Smart Retail.", en: "From preparation to the moment of receiving first prize, IoT Challenge 2025 is part of RIO’s story of learning through making. The team photograph captures the celebration after a journey around Edge AI for Smart Retail." },
    image: photos.iotChampions,
  },
  {
    id: "finalist-moment-2026", year: "2026",
    title: { vi: "Khoảnh khắc biết mình được đi tiếp", en: "The moment we knew we were through" },
    category: { vi: "Nhật ký RIO / Đồng đội", en: "RIO journal / Teamwork" },
    description: { vi: "Những cái đập tay, nụ cười và niềm vui khi biết tin được vào chung kết. Phía sau một phần trình bày kỹ thuật là những người cùng làm, cùng chờ đợi và cùng chia sẻ kết quả — cũng là một phần rất thật của trải nghiệm tại RIO.", en: "High-fives, smiles and the news of a place in the final. Behind every technical presentation are people who work, wait and celebrate together — an equally important part of the RIO experience." },
    image: photos.celebration,
  },
];
