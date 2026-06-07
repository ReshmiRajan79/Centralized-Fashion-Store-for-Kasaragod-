import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow access to login page
    if (pathname === '/admin/login') {
        return NextResponse.next();
    }

    // Check for admin session cookie
    const sessionCookie = request.cookies.get('admin_session');

    // If no session cookie, redirect to login
    if (!sessionCookie) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Verify session is valid
    try {
        const session = JSON.parse(sessionCookie.value);

        // Check if session has expired
        if (session.expiresAt && session.expiresAt < Date.now()) {
            const response = NextResponse.redirect(new URL('/admin/login', request.url));
            response.cookies.delete('admin_session');
            return response;
        }

        // Session is valid, allow access
        return NextResponse.next();
    } catch {
        // Invalid session cookie, redirect to login
        const response = NextResponse.redirect(new URL('/admin/login', request.url));
        response.cookies.delete('admin_session');
        return response;
    }
}

export const config = {
    matcher: ['/admin/:path*'],
};
