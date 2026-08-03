"use client";
import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname(); const router = useRouter();
  const change = () => { const next = locale === "ar" ? "en" : "ar"; document.cookie = `adonix-locale=${next};path=/;max-age=31536000`; router.push(pathname.replace(/^\/(ar|en)/, `/${next}`)); };
  return <button type="button" className="language-switcher" onClick={change} aria-label="Change language"><Languages size={15}/><span>{locale === "ar" ? "EN" : "العربية"}</span></button>;
}
