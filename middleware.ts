// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// // Protected routes
// const protectedRoutes = ["/checkout", "/profile"];

// export async function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   const pathname = req.nextUrl.pathname;

//   if (protectedRoutes.some((route) => pathname.startsWith(route))) {
//     const token = await getToken({
//       req,
//       secret: process.env.NEXTAUTH_SECRET, 
//     });

//     if (!token) {
//       url.pathname = "/login";
//       return NextResponse.redirect(url);
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/checkout/:path*", "/profile/:path*"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

// force Node.js runtime
export const runtime = "nodejs"; 

const protectedRoutes = ["/checkout", "/profile"];

export async function middleware(req: NextRequest) {
  const session = await auth();

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!session?.user) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*", "/profile/:path*"],
};
