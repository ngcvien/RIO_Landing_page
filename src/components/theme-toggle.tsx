"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { siteConfig as site } from "@/content/site";
import type { Locale } from "@/content/types";

function isDark() {
  const selected = document.documentElement.dataset.theme;
  return selected ? selected === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const syncStorage = (event: StorageEvent) => {
    if (event.key !== "rio-theme" && event.key !== null) return;
    const value = event.newValue;
    if (value === "dark" || value === "light") document.documentElement.dataset.theme = value;
    else delete document.documentElement.dataset.theme;
    callback();
  };
  media.addEventListener("change", callback);
  window.addEventListener("rio-theme-change", callback);
  window.addEventListener("storage", syncStorage);
  return () => {
    media.removeEventListener("change", callback);
    window.removeEventListener("rio-theme-change", callback);
    window.removeEventListener("storage", syncStorage);
  };
}

export function ThemeToggle({ lang }: { lang: Locale }) {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);
  useLayoutEffect(() => {
    // App Router may replace <html> attributes on a locale transition.
    // Restore the saved choice before the browser paints the new language.
    try {
      const saved = localStorage.getItem("rio-theme");
      if (saved === "light" || saved === "dark") document.documentElement.dataset.theme = saved;
    } catch { /* System preference remains available without storage. */ }
    window.dispatchEvent(new Event("rio-theme-change"));
  }, [lang]);
  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("rio-theme", next); } catch { /* The switch also works when storage is unavailable. */ }
    window.dispatchEvent(new Event("rio-theme-change"));
  };
  return <button type="button" className="theme-toggle" aria-label={site.labels.darkMode[lang]} aria-pressed={dark}
    title={dark ? site.labels.switchLight[lang] : site.labels.switchDark[lang]} onClick={toggle}>
    <svg className="theme-moon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20.8 13.2A9 9 0 0 1 10.8 3.2a9 9 0 1 0 10 10Z" /></svg>
    <svg className="theme-sun" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></svg>
  </button>;
}
