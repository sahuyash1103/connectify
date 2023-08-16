// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";

// export default function middleware(req) {
//   let token = req.cookies.get("x-auth-token");
//   url = req.url;

//   if (token) {
//     if (
//       req.nextUrl.pathname.startsWith("/login") ||
//       req.nextUrl.pathname.startsWith("/signup")
//     ) {
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//   } else {
//     if (
//       req.nextUrl.pathname.startsWith("/login") ||
//       req.nextUrl.pathname.startsWith("/signup")
//     ) {
//       return;
//     } else {
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//   }
// }
