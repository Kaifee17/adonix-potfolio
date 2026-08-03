"use client";
import { useEffect, useMemo, useState } from "react";
import { Command, Copy, Moon, Search, Share2, Sun, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/projects";
import type { Locale } from "@/lib/i18n";

export function ExperienceControls({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false); const [query, setQuery] = useState(""); const [light, setLight] = useState(false); const router = useRouter();
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen(true); } if (event.key === "Escape") setOpen(false); }; addEventListener("keydown", onKey); return () => removeEventListener("keydown", onKey); }, []);
  useEffect(() => { document.documentElement.classList.toggle("light", light); }, [light]);
  const toggleTheme = () => { const next = !light; setLight(next); localStorage.setItem("adonix-theme", next ? "light" : "dark"); document.documentElement.classList.toggle("light", next); };
  const results = useMemo(() => projects.filter((project) => project.title.toLowerCase().includes(query.toLowerCase()) || project.industry.toLowerCase().includes(query.toLowerCase())), [query]);
  const copy = async () => { await navigator.clipboard.writeText(location.href); };
  const share = async () => { if (navigator.share) await navigator.share({ title: "Adonix Digital", url: location.href }); else await copy(); };
  return <><div className="scroll-progress" aria-hidden="true"/><div className="utility-actions"><button onClick={() => setOpen(true)} aria-label="Search projects"><Search size={16}/><kbd>⌘K</kbd></button><button onClick={toggleTheme} aria-label="Toggle theme">{light ? <Moon size={16}/> : <Sun size={16}/>}</button><button onClick={copy} aria-label="Copy page URL"><Copy size={15}/></button><button onClick={share} aria-label="Share page"><Share2 size={15}/></button></div>{open && <div className="command-backdrop" onMouseDown={() => setOpen(false)}><div className="command-menu" onMouseDown={(event) => event.stopPropagation()}><div className="command-input"><Search size={18}/><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder={locale === "ar" ? "ابحث في المشاريع..." : "Search projects..."}/><button onClick={() => setOpen(false)}><X size={17}/></button></div><p>{locale === "ar" ? "المشاريع" : "Projects"}</p><div className="command-results">{results.map((project) => <button key={project.slug} onClick={() => { setOpen(false); router.push(`/${locale}/work/${project.slug}`); }}><span>{project.title}</span><small>{project.industry}</small></button>)}{results.length === 0 && <span className="no-results">{locale === "ar" ? "لا توجد نتائج" : "No projects found"}</span>}</div><div className="command-footer"><Command size={13}/> {locale === "ar" ? "ابحث للانتقال إلى مشروع" : "Search to jump to a project"}</div></div></div>}</>;
}
