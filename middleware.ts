import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname == "/ServerError") return NextResponse.next();
  if (
    request.cookies.get("jwt_token")?.value &&
    request.nextUrl.pathname === "/"
  ) {
    if (request.cookies.get("role")?.value == "1") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else if (request.cookies.get("role")?.value == "2") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
  if (request.cookies.get("jwt_token")?.value) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/userlogin", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // "/dashboard",
    // "/cprofile",
    "/",
    "/!userlogin",
    "/!signup",
    "/!resetpassword",
    "/!companyregister",
    "/!api",
  ],
};
