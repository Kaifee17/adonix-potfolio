"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";

export function Navbar({ locale, t }: { locale: Locale; t: Dictionary }) {
  const [open, setOpen] = useState(false);
  const links = [["work", "#work"], ["services", "#services"], ["about", "#about"], ["contact", "#contact"]] as const;
  return <header className="nav-wrap"><nav className="nav shell"><Logo locale={locale}/><div className="nav-links">{links.map(([key, href]) => <a href={href} key={key}>{t.nav[key]}</a>)}</div><div className="nav-actions"><LanguageSwitcher locale={locale}/><a className="button button-sm button-solid" href="#contact">{t.nav.start}</a><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button></div></nav>{open && <div className="mobile-menu shell">{links.map(([key, href]) => <a onClick={() => setOpen(false)} href={href} key={key}>{t.nav[key]}</a>)}</div>}</header>;
}
