import { Providers } from "@/components/providers";
import { getDirection, getFontFamily } from "@/i18n/config";
import "@workspace/ui/globals.css";
import { getLocale } from "next-intl/server";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={getDirection(locale)} suppressHydrationWarning>
      <body className={`${getFontFamily(locale)} font-sans`}>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
