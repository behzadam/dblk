export function getFontFamily(locale: string) {
  return locale === "fa" ? "var(--font-vazir)" : "var(--font-roboto)";
}

export function getDirection(locale: string) {
  return locale === "fa" ? "rtl" : "ltr";
}
