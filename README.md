# RIO Club — Robotics & IoT Club — VKU

Landing page Việt/Anh sử dụng Next.js App Router, TypeScript và Tailwind CSS. Thiết kế editorial, responsive, dùng tài sản thương hiệu RIO được cung cấp. Không thêm dữ liệu giả về thành tích, dự án hoặc thành viên.

## Chạy tại máy

Yêu cầu Node.js 20.9 trở lên (khuyến nghị Node.js 22 hoặc 24).

```bash
npm ci
npm run dev
```

Mở <http://localhost:3000>. Đường dẫn gốc chuyển đến `/vi`; bản tiếng Anh ở `/en`. Trên PowerShell có Execution Policy chặn `npm.ps1`, dùng `npm.cmd` thay cho `npm`.

Địa chỉ `127.0.0.1` cũng được khai báo trong `allowedDevOrigins` để HMR và các tương tác phía client hoạt động trong trang xem trước local.

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

Ảnh đã tối ưu được lưu sẵn trong [public/images](./public/images), không cần xử lý ảnh lại khi deploy. Không tải font từ bên ngoài trong quá trình build.

## Sửa nội dung

Toàn bộ copy và dữ liệu nằm trong [src/content](./src/content); không cần sửa UI component.

| Tệp | Nội dung |
| --- | --- |
| [site.ts](./src/content/site.ts) | Copy Việt/Anh, metadata, menu, liên kết Facebook, CTA |
| [brand.ts](./src/content/brand.ts) | Bảng màu tập trung và đường dẫn tài sản thương hiệu |
| [contact.ts](./src/content/contact.ts) | Facebook, TikTok, email, điện thoại và nhãn liên hệ/QR |
| [photos.ts](./src/content/photos.ts) | Ảnh hoạt động dùng chung, kích thước và alt Việt/Anh |
| [features.ts](./src/content/features.ts) | Bật/tắt các section |
| [projects.ts](./src/content/projects.ts) | Dự án đã được xác nhận |
| [achievements.ts](./src/content/achievements.ts) | Thành tích đã được xác nhận |
| [activities.ts](./src/content/activities.ts) | Hoạt động đã được xác nhận |
| [members.ts](./src/content/members.ts) | Thành viên và vai trò |
| [gallery.ts](./src/content/gallery.ts) | Ảnh thật và chú thích |
| [technologies.ts](./src/content/technologies.ts) | Danh sách công nghệ khám phá |
| [types.ts](./src/content/types.ts) | Kiểu dữ liệu của tất cả nội dung |

Các chuỗi có bản dịch dùng cấu trúc `{ vi: "...", en: "..." }`. Tên riêng, tên công nghệ giữ nguyên giữa hai ngôn ngữ.

Một section chỉ xuất hiện khi **flag bật và mảng dữ liệu có phần tử**. Menu tự loại bỏ liên kết đến section đang ẩn. Mục thành viên mặc định tắt; bật `members` sau khi thêm dữ liệu xác thực. Các layout dự án xen kẽ, hoạt động editorial, thành tích timeline, gallery bất đối xứng và danh sách thành viên đã được triển khai sẵn.

Khi thêm nội dung, điền đủ cả hai ngôn ngữ, dùng ID duy nhất, `image.src` dạng `/images/projects/ten-anh.webp`, kích thước gốc và alt text có nghĩa. Ngày hoạt động dùng ISO `YYYY-MM-DD`. `href` là tùy chọn: bỏ qua nếu chưa có trang chi tiết, không đặt liên kết giả `#`. Không đưa đường dẫn nội bộ đến trang chưa tồn tại.

Gallery hỗ trợ `wide`, `portrait`, `square`; mở ảnh trong lightbox để xem toàn bộ khung hình, dùng phím trái/phải để chuyển và Escape để đóng. Ảnh dự án dùng crop 4:5 trên desktop và 4:3 trên điện thoại. Các layout dự án trên điện thoại luôn đưa ảnh lên trước nội dung.

## Cơ sở thiết kế thương hiệu

- **Logo:** dùng các file RIO có sẵn, không vẽ lại, không kéo méo. Icon favicon lấy từ logo xanh.
- **Màu chủ đạo:** navy `#2c4673` từ logo xanh; nền trắng ngà và xám nhạt tạo không gian đọc trung tính. Mint `#7aefe0` xuất hiện trong mascot, chỉ dùng làm accent nhỏ, không tạo glow.
- **Typography:** sans serif lớn, khoảng cách chữ chặt cho tiêu đề; chữ mono nhỏ dùng cho nhãn, chỉ mục. Logo pixel giữ đúng ảnh nguồn, không mở rộng thành font pixel cho toàn website.
- **Hình ảnh:** ưu tiên ảnh thật từ [images/Activities](./images/Activities). Hero dùng ảnh trình diễn FactoryMind. Dự án, hoạt động, thành tích và thư viện ảnh dùng nội dung xác định từ tên tệp, poster, chứng nhận và bảng giải thưởng trong bộ ảnh.
- **Bố cục:** grid 12 cột, tương phản giữa khoảng trắng và các vùng navy, đường phân cách mảnh, không card grid hoặc gradient trang trí.
- **Chuyển động:** hero hiện nhẹ khi vào trang; các nhóm nội dung reveal một lần khi cuộn; sơ đồ tín hiệu vẽ một lần; ảnh/nút/menu có hover nhẹ và header có thanh tiến độ cuộn. Không parallax mạnh, không hiệu ứng chạy lặp liên tục. Tắt chuyển động theo `prefers-reduced-motion`; nội dung vẫn hiển thị khi không có JavaScript.

Hiện có dự án FactoryMind, 4 bài hoạt động/cuộc thi, 2 dấu mốc thành tích và 6 ảnh thư viện. Tên FactoryMind và hướng tiếp cận AIoT lấy từ poster dự án; IoT Challenge 2025 có bảng giải nhất; ảnh InnoWorks ghi ngày 26/09/2026 và chứng nhận Top 20 Finalist. Không tự thêm tên thành viên hoặc đối tác. Mục thành viên tiếp tục ẩn vì chưa có danh sách xác thực. Danh sách công nghệ chung là công cụ khám phá theo brief; công nghệ trong dự án lấy riêng từ poster.

## Dark mode, liên hệ và chuyển động

- Hai bảng màu ở [brand.ts](./src/content/brand.ts). Giao diện theo hệ thống khi chưa chọn; nút mặt trăng/mặt trời lưu lựa chọn vào `localStorage` với khóa `rio-theme` và giữ qua chuyển ngôn ngữ/tải lại. Dùng logo trắng gốc trên nền tối.
- Email `roboticsiotvku@gmail.com` và TikTok `@rio.clb.robotics_iot_vku` lấy từ footer poster tuyển thành viên. Facebook lấy từ brief. Điện thoại chưa được cung cấp: điền `contactDetails.phone` trong [contact.ts](./src/content/contact.ts); liên kết `tel:` và QR sẽ tự xuất hiện sau khi build lại.
- QR tạo ở server bằng `qrcode`, giữ nền trắng để quét được cả trong dark mode, có nút tải SVG. Không gửi dữ liệu sang dịch vụ QR bên ngoài. QR email dùng `mailto:`, QR điện thoại dùng `tel:`.
- Điều chỉnh thời gian và biên độ hiệu ứng ở cuối [globals.css](./src/app/globals.css). Logic quan sát cuộn và thanh tiến độ ở [scroll-effects.tsx](./src/components/scroll-effects.tsx); đồ họa đường tín hiệu ở [engineering-trace.tsx](./src/components/engineering-trace.tsx). Các nhóm đã hiện không lặp lại hiệu ứng khi cuộn lên/xuống. Focus bàn phím và điều hướng anchor luôn làm hiện nội dung đích.
- Khi Windows khóa output của một build cũ, có thể kiểm tra trong thư mục riêng: đặt biến môi trường `RIO_BUILD_DIR=.next-verify` rồi chạy `npm run build`. Dùng cùng biến đó khi chạy `npm start -- --port 3001`. Đây là tùy chọn kiểm tra local; Vercel giữ output mặc định nếu không đặt biến.

## Thay ảnh

Dùng các thư mục trong [public/images](./public/images): `logo`, `brand`, `hero`, `projects`, `activities`, `achievements`, `members`, `gallery`, `og`. Cập nhật đường dẫn ở content tương ứng. Nên dùng WebP và giữ ảnh gốc bên ngoài thư mục public.

[scripts/prepare-assets.mjs](./scripts/prepare-assets.mjs) ghi lại quy trình resize/chuyển định dạng từ bộ [images](./images) gốc. Để chạy lại cần cài `sharp` như công cụ phát triển nếu môi trường không có dependency này của Next.js. Script không cần cho runtime hoặc build. Open Graph hiện dùng ảnh cover gốc, chuẩn kích thước 1200 × 630.

## Triển khai Vercel

1. Đưa dự án vào repository Git của bạn và import repository đó trên Vercel, hoặc chạy `npx vercel` từ thư mục dự án sau khi đăng nhập Vercel.
2. Framework chọn **Next.js**. Build command `npm run build`, install command `npm ci`; để Output Directory mặc định.
3. Khi có tên miền chính thức, đặt `NEXT_PUBLIC_SITE_URL=https://ten-mien-cua-ban` trong Environment Variables rồi redeploy. Xem [.env.example](./.env.example).
4. Nếu chưa đặt biến này, Vercel system environment `VERCEL_PROJECT_PRODUCTION_URL` hoặc `VERCEL_URL` được dùng. Canonical, hreflang, sitemap và Open Graph sử dụng cùng origin.
5. Kiểm tra `/vi`, `/en`, `/robots.txt`, `/sitemap.xml` và liên kết Facebook sau deploy. Nếu dùng CLI, `npx vercel --prod` xuất bản production.

Không đặt token hoặc mật khẩu trong source code. Trên máy local chưa có origin, canonical và sitemap URL được bỏ trống; ảnh Open Graph dùng localhost để kiểm tra. Các phiên bản deploy nhận origin từ cấu hình ở trên.

## Kiểm tra giao diện

- Kiểm tra cả `/vi` và `/en`, đổi ngôn ngữ và thuộc tính `lang` trên trang.
- Các mục không có dữ liệu không xuất hiện trong nội dung hoặc menu.
- Menu di động mở/đóng, đóng bằng Escape và đóng sau khi chọn mục; Escape đưa focus về nút menu.
- Có skip link, focus bàn phím, alt ảnh và thông báo liên kết mở tab mới cho trình đọc màn hình.
- Kiểm tra không tràn ngang tại 320, 390, 768 và 1440px; ảnh không lỗi; không có lỗi JavaScript.
- Kiểm tra với reduced motion, và chạy lint/typecheck/build trước mỗi lần triển khai.

Kết quả kiểm tra bản cập nhật: lint, TypeScript và production build đạt; cả hai ngôn ngữ không tràn ngang ở 320, 390, 768, 1024, 1280 và 1440px. Đã kiểm tra dark mode theo hệ thống, lưu lựa chọn qua tải lại/chuyển ngôn ngữ, menu/Escape/focus, lightbox và phím trái/phải, anchor, ảnh, console, reveal khi cuộn, đồ họa tín hiệu chạy một lần, thanh tiến độ và reduced motion. Ba QR được giải mã từ ảnh chụp ở kích thước điện thoại và khớp liên kết nguồn. Nội dung production vẫn hiển thị khi tắt JavaScript. Metadata, SEO endpoints và 404 cho locale không hợp lệ đã được kiểm tra ở bản ban đầu.

`npm audit --omit=dev` không có cảnh báo. Audit toàn bộ dependency hiện báo 5 cảnh báo mức high trong cùng chuỗi công cụ lint (`eslint-config-next → fast-glob → micromatch → braces`, GHSA-vfj7-8cjw-p6xm). Chúng thuộc dependency phát triển; npm chỉ gợi ý hạ ESLint config xuống Next.js 14, không phù hợp với Next.js 16 nên chưa áp dụng. Cập nhật bản vá tương thích khi có; không chạy `npm audit fix --force` một cách tự động.
