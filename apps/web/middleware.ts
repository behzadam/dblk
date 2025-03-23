import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createIntlMiddleware({
  locales: ["fa"],
  defaultLocale: "fa",
  localePrefix: "always",
});

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  // Handle admin subdomain
  if (hostname.startsWith("admin.")) {
    // Create a new URL object based on the original request
    const newUrl = new URL(req.url);
    // Modify only the pathname
    newUrl.pathname = `/admin${url.pathname === "/" ? "" : url.pathname}`;

    // Use rewrite to maintain the original URL in the browser
    return NextResponse.rewrite(newUrl);
  }

  // Handle app subdomain
  if (hostname.startsWith("app.")) {
    const newUrl = new URL(req.url);
    newUrl.pathname = `/app${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(newUrl);
  }

  // Handle root domain
  if (
    !hostname.startsWith("admin.") &&
    !hostname.startsWith("app.") &&
    !hostname.endsWith("/login")
  ) {
    // For root domain, redirect to app subdomain
    const subdomain = "app";
    const newUrl = new URL(req.url);
    newUrl.host = `${subdomain}.${hostname}`;

    return NextResponse.redirect(newUrl);
  }

  // For all other cases, use the intl middleware
  return intlMiddleware(req);
}
