"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig as site } from "@/content/site";
import type { Locale } from "@/content/types";
import { visibleSections } from "@/lib/content";
import { Arrow } from "./arrow";
import { BrandLogo } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";

export function Header({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const navigation = site.navigation.filter((item) => visibleSections[item.id]);

  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const wide = window.matchMedia("(min-width: 1200px)");
    const closeOnDesktop = () => { if (wide.matches) setOpen(false); };
    document.addEventListener("keydown", escape);
    wide.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", escape);
      wide.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="page-shell header-inner">
        <Link href={`/${lang}`} aria-label={site.labels.home[lang]} className="brand-lockup" onClick={close}>
          <BrandLogo />
          <span className="brand-wordmark">{site.name}<span className="brand-period">.</span></span>
          <span className="brand-descriptor">{site.fullName}<br />{site.affiliation}</span>
        </Link>
        <nav aria-label={site.labels.navigation[lang]} className="desktop-navigation">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={item.id === "join" ? "nav-join" : ""}>
              {item.label[lang]}{item.id === "join" && <Arrow diagonal />}
            </a>
          ))}
        </nav>
        <div className="header-controls">
          <ThemeToggle lang={lang} />
          <div className="language-switch" role="group" aria-label={site.labels.language[lang]}>
            {site.languages.map((language) => (
              <Link key={language.code} href={`/${language.code}`} hrefLang={language.code} lang={language.code}
                aria-label={language.name} aria-current={lang === language.code ? "page" : undefined} onClick={close}>
                {language.label}
              </Link>
            ))}
          </div>
          <button ref={toggle} type="button" className="menu-toggle" aria-controls="mobile-menu" aria-expanded={open}
            aria-label={open ? site.labels.closeMenu[lang] : site.labels.openMenu[lang]} onClick={() => setOpen(!open)}>
            <span className={open ? "menu-lines is-open" : "menu-lines"}><span /><span /></span>
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className="mobile-navigation" hidden={!open} aria-label={site.labels.navigation[lang]}>
        <div className="page-shell">
          {navigation.map((item, index) => (
            <a key={item.id} href={`#${item.id}`} onClick={close}>
              <span className="mono">{String(index + 1).padStart(2, "0")}</span>{item.label[lang]}<Arrow />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
