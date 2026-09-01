import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//This code we will use handle requrest for login and login users
//Middleware allows you to run code before a request is completed. Change the code as per requirement
//Author : Ranjeet gupta

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", pathname);

    const nextResponse = NextResponse.next({
        request: {
            headers: requestHeaders
        }
    });

    const isPublicPath = pathname === "/login" || pathname === "/register" || pathname === "/reset-password";
    const { searchParams } = new URL(request.url);
    const searchTab = searchParams.get("tab");
    const isPrivatePath = pathname === "/thankyou" || pathname === "/myorders" || pathname === "/checkout" || /**pathname == "/saved-items/group/3" || pathname == "/saved-items/group/128" || pathname == "/saved-items/group" || pathname === "/saved-items" || pathname === "/saved-items/all-collections" || */ pathname === "/measurement" || (pathname === "/userprofile" && (searchTab === "editprofile" || searchTab === "notifications" || searchTab === "myorders" || searchTab?.includes("order-details")));
    const token = request.cookies.get("token")?.value || "";
    if (isPublicPath && token && request.cookies.get("role")?.value == process.env.NEXT_PUBLIC_WEBSITE_USER) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    if (isPrivatePath && !token) {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    if (!pathname.includes("customize-product") && pathname.includes("customise") && (!token || (token && request.cookies.get("role")?.value != process.env.NEXT_PUBLIC_WEBSITE_USER))) {
        return NextResponse.redirect(new URL("/customise", request.nextUrl));
    }

    return nextResponse;
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/", "/userprofile", "/login", "/register", "/reset-password", "/measurement", "/saved-items", "/saved-items/all-collections", "/saved-items/group", "/saved-items/group/3", "/saved-items/group/128", "/myorders", "/thankyou", "/customise/(.*)"]
};
