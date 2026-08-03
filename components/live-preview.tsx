"use client";
import { useState } from "react";
import { Expand, ExternalLink, Monitor, Smartphone, Tablet } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

type Device = "desktop" | "tablet" | "mobile";
export function LivePreview({ url, title, t, compact = false }: { url: string; title: string; t: Dictionary; compact?: boolean }) {
  const [device, setDevice] = useState<Device>("desktop"); const [expanded, setExpanded] = useState(false);
  const controls = <><div className="browser-dots"><i/><i/><i/></div><div className="address"><span>⌕</span>{url.replace(/^https?:\/\//, "")}</div><a href={url} target="_blank" rel="noreferrer" aria-label={`Visit ${title}`}><ExternalLink size={14}/></a></>;
  const panel = <div className={`preview-shell ${device} ${compact ? "compact" : ""}`}><div className="browser-bar">{controls}</div><iframe title={`${title} live website`} src={url} loading="lazy" sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-scripts allow-same-origin" /></div>;
  return <><div className="preview-controls"><span className="live-pill"><i/> {t.work.preview}</span><div className="device-switcher" aria-label={t.work.device}>{([ ["desktop", Monitor], ["tablet", Tablet], ["mobile", Smartphone] ] as const).map(([value, Icon]) => <button key={value} className={device === value ? "active" : ""} onClick={() => setDevice(value)} aria-label={t.work[value]}><Icon size={15}/></button>)}</div>{!compact && <button className="expand-button" onClick={() => setExpanded(true)}><Expand size={15}/>{t.work.expand}</button>}</div>{panel}{expanded && <div className="preview-modal" role="dialog" aria-modal="true"><button className="modal-close" onClick={() => setExpanded(false)}>× {t.work.close}</button><div className="modal-inner">{panel}</div></div>}</>;
}
