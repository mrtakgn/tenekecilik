import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const frameId = window.requestAnimationFrame(() => {
        const target = document.getElementById(hash.slice(1));
        if (!target) return;

        const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height ?? 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 12;

        window.scrollTo({ top, behavior: 'smooth' });
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
