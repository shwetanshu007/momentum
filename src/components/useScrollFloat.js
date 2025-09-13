import { useRef, useEffect } from 'react';

export function useScrollFloat({ yStart = 40, yEnd = 0, duration = 0.8, delay = 0 } = {}) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = 0;
    el.style.transform = `translateY(${yStart}px)`;
    el.style.transition = `opacity ${duration}s cubic-bezier(.4,0,.2,1) ${delay}s, transform ${duration}s cubic-bezier(.4,0,.2,1) ${delay}s`;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40 && rect.bottom > 40) {
        el.style.opacity = 1;
        el.style.transform = `translateY(${yEnd}px)`;
      } else {
        el.style.opacity = 0;
        el.style.transform = `translateY(${yStart}px)`;
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [yStart, yEnd, duration, delay]);

  return ref;
}
