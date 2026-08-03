"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useCalendlyModal } from "@/components/common/useCalendlyModal";

type CalendlyButtonProps = {
  text: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
  size?: "default" | "sm" | "lg" | "xs" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
};

const variantClasses: Record<NonNullable<CalendlyButtonProps["variant"]>, string> = {
  default: "border-[#f5f3f5] bg-[#f5f3f5] text-[#0b0b0b] hover:-translate-y-0.5 hover:bg-[#b898ff] hover:text-[#0b0b0b]",
  outline: "border-white/15 bg-white/5 text-white hover:border-white/40 hover:bg-white/8",
  secondary: "border-[#a87bff]/40 bg-[#a87bff]/12 text-[#f4f0f6] hover:border-[#a87bff]/60 hover:bg-[#a87bff]/20",
  ghost: "border-transparent bg-transparent text-white hover:bg-white/5",
  destructive: "border-[#fb7185]/60 bg-[#fb7185]/10 text-[#fecdd3] hover:bg-[#fb7185]/20",
  link: "border-transparent bg-transparent p-0 text-[#bda7ff] underline-offset-4 hover:underline",
};

const sizeClasses: Record<NonNullable<CalendlyButtonProps["size"]>, string> = {
  default: "h-11 px-4 text-sm",
  sm: "h-9 px-3 text-xs",
  lg: "h-12 px-5 text-sm",
  xs: "h-7 px-2.5 text-[11px]",
  icon: "h-10 w-10 p-0",
  "icon-xs": "h-7 w-7 p-0",
  "icon-sm": "h-8 w-8 p-0",
  "icon-lg": "h-12 w-12 p-0",
};

export function CalendlyButton({
  text,
  className,
  variant = "default",
  size = "default",
}: CalendlyButtonProps) {
  const { CALENDLY_URL, containerRef, hasLoadError, isLoading, isOpen, openModal, setIsOpen } = useCalendlyModal();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const closeOnOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    window.addEventListener("mousedown", closeOnOutsideClick);

    return () => {
      window.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [closeOnOutsideClick, isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg border font-semibold whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-3 focus-visible:ring-[#a87bff]/40 disabled:pointer-events-none disabled:opacity-60",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        aria-label={text}
      >
        <Calendar size={16} />
        <span>{isLoading ? "Loading…" : text}</span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/75 p-3 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              ref={modalRef}
              className="relative flex h-[min(88vh,720px)] w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d10] shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm transition hover:bg-white/10"
                aria-label="Close Calendly modal"
              >
                <X size={18} />
              </button>

              <div ref={containerRef} className="h-full w-full" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {hasLoadError ? (
        <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="sr-only">
          Open Calendly fallback
        </a>
      ) : null}
    </>
  );
}
