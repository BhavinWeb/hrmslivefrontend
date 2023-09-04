import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
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

export const config = {
  // matcher: ["/!userlogin","/!cprofile","/!dashboard", "/!signup", "/!resetpassword", "/!companyregister","/!"]
  matcher: ["/((?!userlogin|signup|resetpassword|companyregister|api|_next|favicon.ico|.*\\..*))"],
};
