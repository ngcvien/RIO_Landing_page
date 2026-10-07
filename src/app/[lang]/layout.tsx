import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { themeStyles } from "@/content/brand";
import { isLocale, locales } from "@/content/types";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <html lang={lang} suppressHydrationWarning>
    <head>
      <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
      <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('rio-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}})();` }} />
    </head>
    <body>{children}</body>
  </html>;
}
