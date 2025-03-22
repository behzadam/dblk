import { Providers } from "@/components/providers";
import { getDirection, getFontFamily } from "@/i18n/config";
import { routing } from "@/i18n/routing";
import "@workspace/ui/globals.css";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={getDirection(locale)} suppressHydrationWarning>
      <body className={`${getFontFamily(locale)} font-sans`}>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
