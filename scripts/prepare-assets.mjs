import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "public/images");
const directories = ["logo", "brand", "hero", "projects", "activities", "achievements", "members", "gallery", "og"];
for (const directory of directories) {
  await mkdir(path.join(output, directory), { recursive: true });
  if (!["logo", "brand", "og"].includes(directory)) await writeFile(path.join(output, directory, ".gitkeep"), "");
}
for (const [input, name] of [["rio_icon-blue.png", "rio-blue.png"], ["rio_white-icon.png", "rio-white.png"], ["rio_black-icon.png", "rio-black.png"]]) {
  await sharp(path.join(root, "images/Rio logo", input)).resize({ width: 320 }).png().toFile(path.join(output, "logo", name));
}
await sharp(path.join(root, "images/Rio logo/rio_icon-blue.png")).trim().resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(output, "logo/favicon.png"));
await sharp(path.join(root, "images/ảnh bìa RIO.png")).resize({ width: 2048, withoutEnlargement: true }).webp({ quality: 88 }).toFile(path.join(output, "brand/rio-cover.webp"));
await sharp(path.join(root, "images/mascotRIO.png")).resize({ width: 1800 }).webp({ quality: 85 }).toFile(path.join(output, "brand/rio-mascot.webp"));
await sharp(path.join(root, "images/hiring.jpg")).resize({ width: 1000 }).webp({ quality: 85 }).toFile(path.join(output, "brand/rio-recruitment.webp"));
await sharp(path.join(root, "images/ảnh bìa RIO.png")).resize(1200, 630, { fit: "cover" }).png().toFile(path.join(output, "og/rio-og.png"));
const activitySources = [
  ["top1_IOT_CHALLENGE_2025.jpg", "iot-challenge-2025"],
  ["Làm trọng tài cuộc thi ENJOY AI VN 2026.jpg", "enjoy-ai-2026"],
  ["Factorimind_bán kết AIoT.jpg", "factorymind"],
  ["Giới thiệu sản phẩn bán kết AIoT Developer.jpg", "factorymind-demo"],
  ["Bán kết AIoT Developer InnoWorks 2026.jpg", "innoworks-semifinal-2026"],
  ["khoảng khắc biết tin được vào chung kết.jpg", "finalist-celebration"],
];
for (const [input, name] of activitySources) {
  await sharp(path.join(root, "images/Activities", input)).rotate().resize({ width: 2048, withoutEnlargement: true }).webp({ quality: 86 }).toFile(path.join(output, "activities", `${name}.webp`));
}
console.log("RIO assets and activity photographs prepared from supplied originals.");
