import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
// import { auth } from "@/auth";

export default NextAuth(authConfig).auth
// export { auth } from "@/auth"
// export { default } from "next-auth/middleware"
// export { default } from "next-auth/middleware"

// export { auth as default } from "./auth"

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }