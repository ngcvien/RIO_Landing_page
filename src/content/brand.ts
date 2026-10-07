// Navy is sampled from the supplied rio_icon-blue.png (#2c4673).
// The mint accent comes from the mascot reference; use sparingly, without glow.
// Assets are reproduced without redrawing or distorting the supplied logo.
export const brand = {
  colors: {
    primary: "#2c4673",
    secondary: "#172439",
    background: "#f6f5f1",
    surface: "#eeede7",
    text: "#18232d",
    muted: "#626973",
    accent: "#7aefe0",
    border: "#d7d9d5",
    inverse: "#ffffff",
    inverseMuted: "#c8d1df",
    inverseBorder: "#526789",
    brandSurface: "#2c4673",
    buttonText: "#ffffff",
    buttonHover: "#172439",
    qrPaper: "#ffffff",
    qrInk: "#172439",
    overlay: "#080d16eb",
  },
  darkColors: {
    primary: "#adc6f2",
    secondary: "#111c2e",
    background: "#101720",
    surface: "#18222f",
    text: "#edf1f7",
    muted: "#a9b5c5",
    accent: "#7aefe0",
    border: "#354154",
    inverse: "#ffffff",
    inverseMuted: "#c8d1df",
    inverseBorder: "#526789",
    brandSurface: "#2c4673",
    buttonText: "#111c2e",
    buttonHover: "#cfdef9",
    qrPaper: "#ffffff",
    qrInk: "#172439",
    overlay: "#080d16eb",
  },
  assets: {
    logo: "/images/logo/rio-blue.png",
    logoWhite: "/images/logo/rio-white.png",
    cover: "/images/brand/rio-cover.webp",
    mascot: "/images/brand/rio-mascot.webp",
    recruitment: "/images/brand/rio-recruitment.webp",
    favicon: "/images/logo/favicon.png",
    og: "/images/og/rio-og.png",
  },
} as const;

const variables = (colors: Record<string, string>) =>
  Object.entries(colors).map(([key, value]) => `--${key}:${value}`).join(";");

// Theme tokens remain in one place; system preference works even without JS.
export const themeStyles = `
  :root { ${variables(brand.colors)}; color-scheme: light; }
  :root[data-theme="dark"] { ${variables(brand.darkColors)}; color-scheme: dark; }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) { ${variables(brand.darkColors)}; color-scheme: dark; }
  }
`;
