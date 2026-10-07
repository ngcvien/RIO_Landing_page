import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { Header } from "@/components/header";
import { BrandLogo } from "@/components/brand-logo";
import { ContactSection } from "@/components/contact-section";
import { ScrollEffects } from "@/components/scroll-effects";
import { EngineeringTrace } from "@/components/engineering-trace";
import { Projects, Achievements, Activities, Gallery, Members } from "@/components/content-sections";
import { brand } from "@/content/brand";
import { siteConfig as site } from "@/content/site";
import { technologies } from "@/content/technologies";
import { contactChannels } from "@/content/contact";
import { isLocale } from "@/content/types";
import { visibleSections } from "@/lib/content";
import { getSiteUrl } from "@/lib/url";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const origin = getSiteUrl();
  return {
    metadataBase: origin ?? new URL("http://localhost:3000"),
    title: site.meta.title,
    description: site.meta.description[lang],
    applicationName: site.name,
    alternates: origin ? { canonical: `/${lang}`, languages: { vi: "/vi", en: "/en", "x-default": "/vi" } } : undefined,
    icons: { icon: [{ url: brand.assets.favicon, type: "image/png" }], apple: brand.assets.favicon },
    openGraph: {
      title: site.meta.title,
      description: site.meta.description[lang],
      siteName: site.name,
      type: "website",
      locale: lang === "vi" ? "vi_VN" : "en_US",
      alternateLocale: lang === "vi" ? "en_US" : "vi_VN",
      url: origin ? `/${lang}` : undefined,
      images: [{ url: brand.assets.og, width: 1200, height: 630, alt: site.meta.ogAlt[lang] }],
    },
    twitter: { card: "summary_large_image", title: site.meta.title, description: site.meta.description[lang], images: [brand.assets.og] },
  };
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const navigation = site.navigation.filter((item) => visibleSections[item.id]);
  return <>
    <ScrollEffects />
    <a href="#main" className="skip-link">{site.labels.skip[lang]}</a>
    <Header lang={lang} />
    <main id="main">
      <section id="top" className="hero page-shell">
        <div className="hero-eyebrow"><p className="eyebrow"><span className="status-square" />{site.hero.eyebrow[lang]}</p><span className="mono hero-location">{site.affiliation} / {site.fullName}</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1><span className="hero-rio">{site.hero.title}<span className="hero-dot">.</span></span><span className="hero-subtitle">{site.hero.subtitle.map((line) => <span key={line}>{line}</span>)}</span></h1>
            <p className="hero-description">{site.hero.description[lang]}</p>
            <div className="hero-actions"><a className="button button-primary" href="#about">{site.labels.explore[lang]}<Arrow /></a><a className="text-link" href="#join">{site.labels.join[lang]}<Arrow diagonal /></a></div>
          </div>
          <figure className="hero-figure">
            <div className="hero-art"><Image src={site.hero.image.src} alt={site.hero.image.alt[lang]} width={site.hero.image.width} height={site.hero.image.height} sizes="(max-width: 760px) 100vw, 46vw" preload /><span className="art-corner art-corner-tl" aria-hidden="true" /><span className="art-corner art-corner-br" aria-hidden="true" /></div>
            <figcaption className="mono"><span>{site.hero.imageIndex}</span><span>{site.hero.imageLabel[lang]}</span><Arrow diagonal /></figcaption>
          </figure>
        </div>
        <div className="hero-bottom"><p className="mono">{site.hero.footer[lang]}</p><a className="mono" href="#about">{site.hero.scroll[lang]}<span aria-hidden="true">↓</span></a></div>
      </section>

      <div className="principles-band"><div className="page-shell principles-inner">{site.hero.principles.map((principle, index) => <span key={principle}><span className="principle-index mono">{String(index + 1).padStart(2, "0")}</span>{principle}</span>)}</div></div>

      <section id="about" className="about-section section-space page-shell grid-twelve">
        <div className="section-label"><span className="section-number mono">01 /</span><p className="eyebrow">{site.about.eyebrow[lang]}</p></div>
        <div className="about-content"><h2 className="preserve-lines">{site.about.title[lang]}</h2><div className="about-columns"><p className="about-lead">{site.about.lead[lang]}</p><div><p className="body-copy">{site.about.body[lang]}</p><a className="text-link" href={site.facebook} target="_blank" rel="noopener noreferrer">{site.labels.facebook[lang]}<Arrow diagonal /><span className="sr-only"> ({site.labels.external[lang]})</span></a></div></div><p className="about-story body-copy">{site.about.story[lang]}</p><ol className="about-practices">{site.about.practices.map((practice, index) => <li key={index}><span className="mono">{String(index + 1).padStart(2, "0")}</span><div><h3>{practice.title[lang]}</h3><p>{practice.description[lang]}</p></div></li>)}</ol><p className="about-note mono">{site.about.note[lang]}</p></div>
      </section>

      <section id="disciplines" className="disciplines-section"><div className="page-shell section-space grid-twelve">
        <div className="disciplines-intro"><p className="eyebrow"><span className="section-number">02 /</span>{site.disciplines.eyebrow[lang]}</p><h2 className="preserve-lines">{site.disciplines.title[lang]}</h2><p className="body-copy">{site.disciplines.description[lang]}</p><EngineeringTrace /><div className="discipline-mark" aria-hidden="true"><Image src={brand.assets.logoWhite} alt="" width={132} height={118} /><span className="mono">{site.fullName}<br />{site.affiliation}</span></div></div>
        <ol className="disciplines-list">{site.disciplines.items.map((item, index) => <li key={item.name}><span className="discipline-number mono">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.name}</h3><p>{item.description[lang]}</p></div><span className="discipline-plus" aria-hidden="true">+</span></li>)}</ol>
      </div></section>

      <Projects lang={lang} /><Achievements lang={lang} /><Activities lang={lang} /><Gallery lang={lang} /><Members lang={lang} />

      {visibleSections.technologies && <section id="technologies" className="technologies-section section-space page-shell grid-twelve"><div className="section-label"><p className="eyebrow">{site.technologies.eyebrow[lang]}</p></div><div className="technologies-content"><div className="technology-heading"><h2>{site.technologies.title[lang]}</h2><p className="body-copy">{site.technologies.description[lang]}</p></div><ul className="technologies-list">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div></section>}

      <section id="join" className="join-section"><div className="page-shell section-space"><div className="join-top"><p className="eyebrow">{site.join.eyebrow[lang]}</p><span className="mono">{site.name} × {site.affiliation}</span></div><div className="join-layout"><h2>{site.join.title[lang].map((line, index) => <span className={index === 2 ? "join-last" : ""} key={line}>{line}</span>)}</h2><div className="join-copy"><span className="join-arrow" aria-hidden="true">↗</span><p>{site.join.description[lang]}</p><a className="button button-primary" href="#contact">{site.labels.join[lang]}<Arrow /></a><p className="join-note">{site.join.contactNote[lang]}</p></div></div><div className="join-bottom mono"><span>{site.join.signature}</span><span>{site.join.contactLabel[lang]}</span></div></div></section>
      <ContactSection lang={lang} />
    </main>
    <footer className="site-footer page-shell"><div className="footer-top"><a className="brand-lockup" href="#top" aria-label={site.labels.top[lang]}><BrandLogo /><span className="brand-wordmark">{site.name}<span className="brand-period">.</span></span></a><nav aria-label={site.labels.footerNavigation[lang]}>{navigation.map((item) => <a href={`#${item.id}`} key={item.id}>{item.label[lang]}</a>)}</nav></div><div className="footer-contacts">{contactChannels.filter(channel => channel.href).map(channel => <a key={channel.id} href={channel.href} target={channel.href?.startsWith("https://") ? "_blank" : undefined} rel={channel.href?.startsWith("https://") ? "noopener noreferrer" : undefined}>{channel.label[lang]}<Arrow diagonal />{channel.href?.startsWith("https://") && <span className="sr-only"> ({site.labels.external[lang]})</span>}</a>)}</div><div className="footer-bottom mono"><p>© {new Date().getFullYear()} {site.name}. {site.labels.copyright[lang]}</p><a href="#top">{site.labels.top[lang]}<span aria-hidden="true">↑</span></a></div></footer>
  </>;
}
