import QRCode from "qrcode";
import { contactChannels, contactContent as content } from "@/content/contact";
import { brand } from "@/content/brand";
import { siteConfig as site } from "@/content/site";
import type { Locale } from "@/content/types";
import { Arrow } from "./arrow";

export async function ContactSection({ lang }: { lang: Locale }) {
  const channels = await Promise.all(contactChannels.map(async (channel) => ({
    ...channel,
    qr: channel.href ? await QRCode.toString(channel.href, {
      type: "svg", errorCorrectionLevel: "M", margin: 4, width: 144,
      color: { dark: brand.colors.qrInk, light: brand.colors.qrPaper },
    }) : null,
  })));

  return <section id="contact" className="contact-section page-shell section-space grid-twelve">
    <div className="contact-intro">
      <p className="eyebrow">{content.eyebrow[lang]}</p>
      <h2 className="preserve-lines">{content.title[lang]}</h2>
      <p className="body-copy">{content.description[lang]}</p>
      <p className="contact-hint mono">{content.qrHint[lang]}</p>
    </div>
    <div className="contact-list">
      {channels.map((channel, index) => {
        const external = channel.href?.startsWith("https://");
        return <article className="contact-row" key={channel.id}>
          <div className="contact-copy">
            <p className="eyebrow">{String(index + 1).padStart(2, "0")} / {channel.label[lang]}</p>
            <h3>{channel.value || content.phonePending[lang]}</h3>
            <p>{channel.href ? channel.description[lang] : content.phoneFallback[lang]}</p>
            {channel.href && <a className="text-link" href={channel.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
              {channel.action[lang]}<Arrow diagonal={external} />{external && <span className="sr-only"> ({site.labels.external[lang]})</span>}
            </a>}
          </div>
          {channel.qr && <figure className="contact-qr">
            <div className="qr-code" data-qr-value={channel.href} aria-hidden="true" dangerouslySetInnerHTML={{ __html: channel.qr }} />
            <figcaption>{content.qrLabel[lang]}</figcaption>
            <a href={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(channel.qr)}`} download={`rio-${channel.id}-qr.svg`} aria-label={`${content.download[lang]} — ${channel.label[lang]}`}>{content.download[lang]} <span aria-hidden="true">↓</span></a>
          </figure>}
        </article>;
      })}
    </div>
  </section>;
}
