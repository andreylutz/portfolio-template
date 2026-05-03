import { useEffect, useRef, useState } from "react";

type UseRevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

const useReveal = <T extends HTMLElement>({
  threshold = 0.16,
  rootMargin = "0px 0px -8% 0px"
}: UseRevealOptions = {}) => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, isVisible]);

  return { ref, isVisible };
};

export default useReveal;
