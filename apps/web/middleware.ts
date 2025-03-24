import { NextRequest, NextResponse } from "next/server";

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

  return NextResponse.next();
}
