"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, type ProjectCategory } from "@/lib/projects";
import type { Dictionary, Locale } from "@/lib/i18n";
import { LivePreview } from "./live-preview";
import { CalendlyButton } from "./common/CalendlyButton";

export function WorkSection({ locale, t }: { locale: Locale; t: Dictionary }) {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const categories = ["all", "realEstate", "industrial", "healthcare", "crm", "agency", "dating", "restaurant", "business"] as const;
  const visible = active === "all" ? projects : projects.filter((project) => project.category === active);

  const renderProjectInfo = (project: (typeof projects)[number], index: number) => (
    <div className="project-info">
      <div>
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <p className="project-type">{t.work.categories[project.category]}</p>
        <h3>{project.title}</h3>
        <p className="project-copy">{project.description[locale]}</p>
      </div>
      <div className="project-meta">
        <span>{project.country}</span>
        <span>{project.year}</span>
      </div>
      <div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      <div className="project-links">
        <a href={project.url} target="_blank" rel="noreferrer" className="text-link">{t.work.visit}<ArrowUpRight size={16}/></a>
        <Link href={`/${locale}/work/${project.slug}`} className="text-link">{t.work.case}<ArrowUpRight size={16}/></Link>
      </div>
    </div>
  );

  const renderProjectPreview = (project: (typeof projects)[number]) => (
    <div className="project-preview">
      <LivePreview url={project.url} title={project.title} t={t} />
    </div>
  );

  return (
    <section id="work" className="section work-section shell">
      <div className="section-heading"><p className="eyebrow">{t.work.eyebrow}</p><h2>{t.work.title}</h2><p>{t.work.copy}</p></div>
      <div className="filters">{categories.map((category) => <button key={category} onClick={() => setActive(category)} className={active === category ? "active" : ""}>{category === "all" ? t.work.all : t.work.categories[category]}</button>)}</div>
      <div className="work-list">
        {visible.map((project, index) => {
          const isReversed = index % 2 !== 0;
          return <article className={isReversed ? "project-card project-card--reversed" : "project-card"} key={project.slug}>{renderProjectInfo(project, index)}{renderProjectPreview(project)}</article>;
        })}
        <article className="project-card portfolio-cta-card">
          <div className="portfolio-cta-content">
            <p className="portfolio-cta-kicker">{t.work.manyMoreKicker}</p>
            <h3 className="portfolio-cta-title">{t.work.manyMoreTitle}</h3>
            <p className="portfolio-cta-copy">{t.work.manyMoreCopy}</p>
            <CalendlyButton text={t.work.manyMoreButton} variant="default" size="default" className="portfolio-cta-button" />
          </div>
        </article>
      </div>
    </section>
  );
}
