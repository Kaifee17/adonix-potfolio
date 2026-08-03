import type { Locale } from "@/lib/i18n";

const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Supabase", "PostgreSQL", "Firebase", "Docker", "AWS", "Cloudflare", "Vercel", "OpenAI", "n8n", "Stripe", "GitHub", "Figma"];

export function TechStack({ locale }: { locale: Locale }) {
  return <section className="section tech-section shell"><div className="section-heading"><p className="eyebrow">{locale === "ar" ? "المجموعة التقنية" : "Technology stack"}</p><h2>{locale === "ar" ? "تقنية مرنة، مبنية للنمو." : "Flexible technology, built for growth."}</h2><p>{locale === "ar" ? "نختار الأدوات المناسبة للمنتج، لا العكس." : "We choose the right tools for the product—not the other way around."}</p></div><div className="tech-grid">{technologies.map((tech, index) => <div key={tech}><span>{String(index + 1).padStart(2, "0")}</span><strong>{tech}</strong></div>)}</div></section>;
}
