import type { Metadata } from "next";
import { Alexandria, Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import "../globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const alexandria = Alexandria({ variable: "--font-arabic", subsets: ["arabic"] });

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const arabic = locale === "ar";
  const title = arabic ? "أدونيكس ديجيتال | تصميم وتطوير مواقع إلكترونية احترافية" : "Adonix Digital | Premium Website Development Agency";
  const description = arabic ? "أدونيكس ديجيتال تبني مواقع وتطبيقات ويب وحلول AI راقية للشركات الطموحة." : "Adonix Digital builds premium websites, web applications and AI solutions for ambitious businesses.";
  return { metadataBase: new URL("https://adonixdigital.com"), title, description, alternates: { canonical: `/${locale}`, languages: { ar: "/ar", en: "/en" } }, openGraph: { title, description, locale: arabic ? "ar_SA" : "en_US", type: "website" }, twitter: { card: "summary_large_image", title, description } };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={`${geist.variable} ${alexandria.variable}`}><body className={locale === "ar" ? "font-arabic" : "font-geist"}>{children}</body></html>;
}
