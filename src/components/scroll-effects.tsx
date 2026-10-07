"use client";

import { useEffect } from "react";

/** Progressive enhancement: content stays visible without JavaScript or motion. */
export function ScrollEffects() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const selector = [
      ".section-heading", ".about-content > h2", ".about-columns",
      ".about-story", ".about-practices li", ".disciplines-intro > h2",
      ".engineering-trace", ".disciplines-list li", ".project-row",
      ".project-supporting", ".achievements-list li", ".activities-layout article",
      ".gallery-layout > figure", ".technology-heading", ".technologies-list",
      ".join-layout > h2", ".join-copy", ".contact-intro", ".contact-row",
    ].join(",");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    let disposed = false;

    const show = (element: HTMLElement) => {
      element.classList.add("is-revealed");
      observer?.unobserve(element);
    };

    const configure = () => {
      observer?.disconnect();
      elements.forEach(element => {
        element.classList.remove("motion-reveal", "is-revealed");
        element.style.removeProperty("--reveal-delay");
      });
      if (preference.matches || !("IntersectionObserver" in window)) return;

      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) show(entry.target as HTMLElement); });
      }, { threshold: 0.06, rootMargin: "0px 0px -28px 0px" });

      elements.forEach(element => {
        // Never hide content already on screen, including direct hash visits.
        if (element.getBoundingClientRect().top < window.innerHeight - 28) return;
        element.classList.add("motion-reveal");
        const siblings = Array.from(element.parentElement?.children ?? []);
        const order = siblings.indexOf(element);
        element.style.setProperty("--reveal-delay", `${Math.min(Math.max(order, 0), 3) * 45}ms`);
        observer?.observe(element);
      });
    };

    const updateProgress = () => {
      frame = 0;
      if (disposed) return;
      const distance = root.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      root.style.setProperty("--scroll-progress", String(progress));
    };
    const scheduleProgress = () => { if (!frame) frame = requestAnimationFrame(updateProgress); };
    const revealFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest<HTMLElement>(".motion-reveal");
      if (element) show(element);
    };
    const revealHash = () => {
      let id: string;
      try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (!target) return;
      elements.filter(element => target.contains(element) || element.contains(target)).forEach(show);
    };

    configure();
    updateProgress();
    revealHash();
    preference.addEventListener("change", configure);
    window.addEventListener("scroll", scheduleProgress, { passive: true });
    window.addEventListener("resize", scheduleProgress);
    window.addEventListener("hashchange", revealHash);
    document.addEventListener("focusin", revealFocus);
    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(scheduleProgress) : undefined;
    resizeObserver?.observe(document.body);
    return () => {
      disposed = true;
      observer?.disconnect();
      resizeObserver?.disconnect();
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", configure);
      window.removeEventListener("scroll", scheduleProgress);
      window.removeEventListener("resize", scheduleProgress);
      window.removeEventListener("hashchange", revealHash);
      document.removeEventListener("focusin", revealFocus);
      elements.forEach(element => {
        element.classList.remove("motion-reveal", "is-revealed");
        element.style.removeProperty("--reveal-delay");
      });
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return null;
}
