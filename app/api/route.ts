import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const revalidate = 0; 

export async function GET(req: NextRequest) {
  cookies().set("jwt_token", req.nextUrl.searchParams.get("token") as string);
  cookies().set("role", req.nextUrl.searchParams.get("role") as string);
  redirect("/");
}
