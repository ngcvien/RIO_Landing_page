"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gallery } from "@/content/gallery";
import { siteConfig as site } from "@/content/site";
import type { Locale } from "@/content/types";

export function PhotoGallery({ lang }: { lang: Locale }) {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opened = selected !== null;
  const current = selected === null ? undefined : gallery[selected];

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (!opened) { element.close(); return; }
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; element.close(); };
  }, [opened]);

  const move = (direction: number) => setSelected(index => index === null ? null : (index + direction + gallery.length) % gallery.length);

  return <>
    <div className="gallery-layout">
      {gallery.map((item, index) => <figure className={`gallery-${item.layout}`} key={item.id}>
        <button type="button" className="gallery-trigger" onClick={() => setSelected(index)} aria-label={`${site.labels.openPhoto[lang]}: ${item.image.alt[lang]}`} aria-haspopup="dialog">
          <Image src={item.image.src} alt={item.image.alt[lang]} width={item.image.width} height={item.image.height} sizes="(max-width: 760px) 100vw, 66vw" />
          <span className="gallery-open mono" aria-hidden="true">{site.labels.openPhoto[lang]} ↗</span>
        </button>
        <figcaption className="mono">{item.caption[lang]}</figcaption>
      </figure>)}
    </div>
    <dialog ref={dialog} className="photo-dialog" aria-label={site.labels.photoViewer[lang]}
      onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }}
      onKeyDown={event => {
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      }}>
      <div className="photo-dialog-inner">
        <div className="photo-dialog-toolbar">
          <span className="mono" aria-live="polite">{selected === null ? "" : `${String(selected + 1).padStart(2, "0")} / ${String(gallery.length).padStart(2, "0")}`}</span>
          <button type="button" onClick={() => setSelected(null)} aria-label={site.labels.closePhoto[lang]}><span aria-hidden="true">×</span></button>
        </div>
        {current && <figure>
          <Image key={current.id} src={current.image.src} alt={current.image.alt[lang]} width={current.image.width} height={current.image.height} sizes="95vw" loading="eager" />
          <figcaption aria-live="polite">{current.caption[lang]}</figcaption>
        </figure>}
        <div className="photo-dialog-controls">
          <button type="button" onClick={() => move(-1)} aria-label={site.labels.previousPhoto[lang]}><span aria-hidden="true">←</span> {site.labels.previousPhoto[lang]}</button>
          <button type="button" onClick={() => move(1)} aria-label={site.labels.nextPhoto[lang]}>{site.labels.nextPhoto[lang]} <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </dialog>
  </>;
}
