export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];
export type Localized = Record<Locale, string>;
export type SectionId = "about" | "disciplines" | "projects" | "achievements" | "activities" | "gallery" | "members" | "technologies" | "join" | "contact";

export interface ContentImage {
  src: string;
  alt: Localized;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  title: Localized;
  description: Localized;
  category: Localized;
  image: ContentImage;
  technologies: string[];
  details?: Localized[];
  supportingImage?: ContentImage;
  supportingCaption?: Localized;
  href?: string;
}

export interface Activity {
  id: string;
  title: Localized;
  description: Localized;
  category: Localized;
  date?: string;
  year?: string;
  image: ContentImage;
  href?: string;
}

export interface Achievement {
  id: string;
  year: string;
  title: Localized;
  description: Localized;
  href?: string;
}

export interface Member {
  id: string;
  name: string;
  role: Localized;
  href?: string;
}

export interface GalleryItem {
  id: string;
  image: ContentImage;
  caption: Localized;
}

export interface ContactChannel {
  id: string;
  label: Localized;
  value: string;
  href?: string;
  description: Localized;
  action: Localized;
}

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
