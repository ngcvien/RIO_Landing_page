import Image from "next/image";
import { brand } from "@/content/brand";

export function BrandLogo() {
  return <span className="brand-logo-pair" aria-hidden="true">
    <Image src={brand.assets.logo} alt="" width={56} height={50} className="brand-icon brand-logo-light" />
    <Image src={brand.assets.logoWhite} alt="" width={56} height={50} className="brand-icon brand-logo-dark" />
  </span>;
}
