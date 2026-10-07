import type { ContactChannel } from "./types";

// Facebook: original brief. TikTok and email: supplied hiring.jpg footer.
// Add the confirmed phone number here; its tel link and QR follow automatically.
export const contactDetails = {
  facebook: "https://www.facebook.com/clbRoboticsIotVKU",
  tiktok: "https://www.tiktok.com/@rio.clb.robotics_iot_vku",
  email: "roboticsiotvku@gmail.com",
  phone: "",
};

export const contactChannels: ContactChannel[] = [
  { id: "facebook", label: { vi: "Facebook", en: "Facebook" }, value: "clbRoboticsIotVKU", href: contactDetails.facebook,
    description: { vi: "Tin tức, hoạt động và thông tin tham gia câu lạc bộ.", en: "Club news, activities and membership updates." }, action: { vi: "Mở Facebook", en: "Open Facebook" } },
  { id: "tiktok", label: { vi: "TikTok", en: "TikTok" }, value: "@rio.clb.robotics_iot_vku", href: contactDetails.tiktok,
    description: { vi: "Những lát cắt gần hơn về con người và hành trình của RIO.", en: "A closer look at the people and the journey behind RIO." }, action: { vi: "Mở TikTok", en: "Open TikTok" } },
  { id: "email", label: { vi: "Email", en: "Email" }, value: contactDetails.email, href: `mailto:${contactDetails.email}`,
    description: { vi: "Trao đổi về câu lạc bộ, dự án và các hoạt động kết nối.", en: "Get in touch about the club, projects and opportunities to connect." }, action: { vi: "Gửi email", en: "Send an email" } },
  { id: "phone", label: { vi: "Điện thoại", en: "Phone" }, value: contactDetails.phone,
    href: contactDetails.phone ? `tel:${contactDetails.phone.replace(/[^\d+]/g, "")}` : undefined,
    description: { vi: "Liên hệ trực tiếp với RIO.", en: "Speak directly with RIO." }, action: { vi: "Gọi điện", en: "Call RIO" } },
];

export const contactContent = {
  eyebrow: { vi: "LIÊN HỆ", en: "GET IN TOUCH" },
  title: { vi: "Bắt đầu bằng\nmột lời chào.", en: "It starts\nwith a hello." },
  description: { vi: "Bạn quan tâm đến robotics, muốn tìm hiểu một dự án, hay có ý tưởng muốn cùng thực hiện? Chọn kênh thuận tiện nhất để kết nối với RIO.", en: "Curious about robotics, interested in a project, or have an idea to build together? Choose the channel that works best for you." },
  qrHint: { vi: "Mở liên kết trực tiếp hoặc quét QR bằng điện thoại.", en: "Open a link directly or scan its QR code with your phone." },
  qrLabel: { vi: "Quét để kết nối", en: "Scan to connect" },
  download: { vi: "Tải mã QR", en: "Download QR" },
  phonePending: { vi: "Số điện thoại đang được cập nhật", en: "Phone number to be confirmed" },
  phoneFallback: { vi: "Trong lúc chờ, bạn có thể liên hệ qua email hoặc Facebook.", en: "In the meantime, please reach us by email or Facebook." },
};
