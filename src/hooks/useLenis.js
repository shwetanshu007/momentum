import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenis = null;

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis with optimized settings for smooth and fast scrolling
    lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2, // Slightly faster wheel scrolling
      touchMultiplier: 2.5, // Faster touch scrolling
      infinite: false,
    });

    // Listen for the scroll event and update the ScrollTrigger scroller proxy
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker to drive the Lenis animation loop
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable lag smoothing on GSAP's ticker for better performance
    gsap.ticker.lagSmoothing(0);

    // Update ScrollTrigger scroller to use Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value, { immediate: true })
          : lenis.animatedScroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed',
    });

    // Refresh ScrollTrigger after setting up the proxy
    ScrollTrigger.refresh();

    return () => {
      // Cleanup
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
      gsap.ticker.remove();
    };
  }, []);

  return lenis;
};

export default useLenis;