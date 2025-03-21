import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host') || '';

  // Handle app.* subdomain
  if (host.startsWith('app.')) {
    // If user is not authenticated and trying to access protected routes
    if (!request.cookies.has('auth-token') && (pathname.startsWith('/app') || pathname === '/')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // If user is authenticated and trying to access auth pages
    if (request.cookies.has('auth-token') && (pathname === '/login' || pathname === '/register')) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  }

  // Handle main domain (dblk.ir)
  if (pathname.startsWith('/app')) {
    return NextResponse.redirect(new URL('https://app.dblk.ir/app'));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
