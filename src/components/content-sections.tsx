import Image from "next/image";
import { activities } from "@/content/activities";
import { achievements } from "@/content/achievements";
import { members } from "@/content/members";
import { projects } from "@/content/projects";
import { siteConfig as site } from "@/content/site";
import type { Locale } from "@/content/types";
import { visibleSections } from "@/lib/content";
import { Arrow } from "./arrow";
import { PhotoGallery } from "./photo-gallery";

function SectionHeading({ section, lang }: { section: keyof typeof site.sections; lang: Locale }) {
  const content = site.sections[section];
  return <div className="section-heading"><p className="eyebrow">{content.eyebrow[lang]}</p><div><h2 className="preserve-lines">{content.title[lang]}</h2><p className="section-description body-copy">{content.description[lang]}</p></div></div>;
}

function DetailLink({ href, lang }: { href: string; lang: Locale }) {
  const external = /^https?:\/\//.test(href);
  return <a className="text-link" href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
    {site.labels.details[lang]}<Arrow diagonal={external} />{external && <span className="sr-only"> ({site.labels.external[lang]})</span>}
  </a>;
}

export function Projects({ lang }: { lang: Locale }) {
  if (!visibleSections.projects) return null;
  return <section id="projects" className="section-space page-shell">
    <SectionHeading section="projects" lang={lang} />
    <div className="projects-list">{projects.map((project, index) => <article className="project-story" key={project.id}><div className="project-row">
      <div className="project-image"><Image src={project.image.src} alt={project.image.alt[lang]} width={project.image.width} height={project.image.height} sizes="(max-width: 760px) 100vw, 60vw" /></div>
      <div className="project-copy"><p className="eyebrow">{String(index + 1).padStart(2, "0")} / {project.category[lang]}</p><h3>{project.title[lang]}</h3><p>{project.description[lang]}</p>
        <ul className="project-technologies mono">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        {project.details?.map((paragraph, index) => <p className="project-detail" key={index}>{paragraph[lang]}</p>)}
        {project.href && <DetailLink href={project.href} lang={lang} />}
      </div>
    </div>{project.supportingImage && <figure className="project-supporting"><Image src={project.supportingImage.src} alt={project.supportingImage.alt[lang]} width={project.supportingImage.width} height={project.supportingImage.height} sizes="(max-width: 760px) 100vw, 85vw" />{project.supportingCaption && <figcaption className="mono">{project.supportingCaption[lang]}</figcaption>}</figure>}</article>)}</div>
  </section>;
}

export function Achievements({ lang }: { lang: Locale }) {
  if (!visibleSections.achievements) return null;
  return <section id="achievements" className="section-space page-shell">
    <SectionHeading section="achievements" lang={lang} />
    <ol className="achievements-list">{achievements.map((item) => <li key={item.id}>
      <span className="mono">{item.year}</span><div><h3>{item.title[lang]}</h3><p>{item.description[lang]}</p>{item.href && <DetailLink href={item.href} lang={lang} />}</div>
    </li>)}</ol>
  </section>;
}

export function Activities({ lang }: { lang: Locale }) {
  if (!visibleSections.activities) return null;
  return <section id="activities" className="section-space page-shell">
    <SectionHeading section="activities" lang={lang} />
    <div className="activities-layout">{activities.map((activity) => <article key={activity.id}>
      <Image src={activity.image.src} alt={activity.image.alt[lang]} width={activity.image.width} height={activity.image.height} sizes="(max-width: 760px) 100vw, 60vw" />
      <p className="eyebrow">{activity.category[lang]}{activity.date ? <> / <time dateTime={activity.date}>{new Intl.DateTimeFormat(lang === "vi" ? "vi-VN" : "en-GB", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(activity.date))}</time></> : activity.year ? <> / {activity.year}</> : null}</p>
      <h3>{activity.title[lang]}</h3><p>{activity.description[lang]}</p>{activity.href && <DetailLink href={activity.href} lang={lang} />}
    </article>)}</div>
  </section>;
}

export function Gallery({ lang }: { lang: Locale }) {
  if (!visibleSections.gallery) return null;
  return <section id="gallery" className="section-space page-shell">
    <SectionHeading section="gallery" lang={lang} />
    <PhotoGallery lang={lang} />
  </section>;
}

export function Members({ lang }: { lang: Locale }) {
  if (!visibleSections.members) return null;
  return <section id="members" className="section-space page-shell">
    <SectionHeading section="members" lang={lang} />
    <ol className="members-list">{members.map((member, index) => <li key={member.id}>
      <span className="mono">{String(index + 1).padStart(2, "0")}</span><h3>{member.name}</h3><p>{member.role[lang]}</p>
      {member.href && <DetailLink href={member.href} lang={lang} />}
    </li>)}</ol>
  </section>;
}
