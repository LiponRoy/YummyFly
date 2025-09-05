import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Protected routes
const protectedRoutes = ["/checkout", "/profile"];

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = req.nextUrl.pathname;

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET, 
    });

    if (!token) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*", "/profile/:path*"],
};
