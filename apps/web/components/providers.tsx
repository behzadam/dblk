"use client";

import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <SessionProvider>
      <NextIntlClientProvider locale={locale}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          {children}
        </NextThemesProvider>
      </NextIntlClientProvider>
    </SessionProvider>
  );
}
