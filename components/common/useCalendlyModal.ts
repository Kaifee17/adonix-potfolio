"use client";

import { useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget?: (config: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/adonixaimarketing/30min?month=2026-08";
const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

export function useCalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadError, setHasLoadError] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scriptLoadPromiseRef = useRef<Promise<void> | null>(null);

  const loadScript = useCallback(async () => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.Calendly?.initInlineWidget) {
      return;
    }

    if (scriptLoadPromiseRef.current) {
      await scriptLoadPromiseRef.current;
      return;
    }

    scriptLoadPromiseRef.current = new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      script.onload = () => {
        if (window.Calendly?.initInlineWidget) {
          resolve();
          return;
        }

        reject(new Error("Calendly embed API is unavailable."));
      };
      script.onerror = () => {
        reject(new Error("Calendly script failed to load."));
      };
      document.body.appendChild(script);
    });

    try {
      await scriptLoadPromiseRef.current;
    } catch (error) {
      console.error("Calendly failed to load:", error);
      setHasLoadError(true);
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  }, []);

  const openModal = useCallback(async () => {
    if (typeof window === "undefined") {
      return;
    }

    setHasLoadError(false);
    setIsLoading(true);

    try {
      await loadScript();

      if (!window.Calendly?.initInlineWidget) {
        throw new Error("Calendly embed API is unavailable.");
      }

      setIsOpen(true);
    } catch (error) {
      console.error("Calendly could not be opened:", error);
      setHasLoadError(true);
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    } finally {
      setIsLoading(false);
    }
  }, [loadScript]);

  useEffect(() => {
    if (!isOpen || !containerRef.current || typeof window === "undefined") {
      return;
    }

    const container = containerRef.current;

    if (!window.Calendly?.initInlineWidget) {
      return;
    }

    container.innerHTML = "";
    window.Calendly.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: container,
    });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen]);

  return {
    CALENDLY_URL,
    containerRef,
    hasLoadError,
    isLoading,
    isOpen,
    openModal,
    setIsOpen,
  };
}
