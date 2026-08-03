import { NextRequest, NextResponse } from "next/server";

const locales = ["ar", "en"] as const;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))) {
    return NextResponse.next();
  }

  const savedLocale = request.cookies.get("adonix-locale")?.value;
  const browserPrefersEnglish = request.headers.get("accept-language")?.toLowerCase().startsWith("en");
  const locale = savedLocale && locales.includes(savedLocale as (typeof locales)[number])
    ? savedLocale
    : browserPrefersEnglish ? "en" : "ar";
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  const response = NextResponse.redirect(url);
  if (!savedLocale) response.cookies.set("adonix-locale", locale, { maxAge: 60 * 60 * 24 * 365, path: "/" });
  return response;
}

export const config = { matcher: ["/((?!_next|.*\\..*).*)"] };
