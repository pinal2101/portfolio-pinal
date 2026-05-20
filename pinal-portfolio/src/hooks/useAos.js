import { useEffect } from 'react';

let aosScriptAppended = false;

/**
 * Loads AOS from CDN (matches reference portfolio) and initializes once.
 */
export function useAos() {
  useEffect(() => {
    const init = () => {
      if (typeof window === 'undefined' || !window.AOS) return;
      window.AOS.init({
        duration: 800,
        once: false,
        offset: 80,
      });
    };

    if (typeof window !== 'undefined' && window.AOS) {
      init();
      window.AOS.refresh();
      return undefined;
    }

    const onLoad = () => init();

    const existing = document.querySelector('script[data-aos-cdn="1"]');
    if (existing) {
      if (window.AOS) init();
      else existing.addEventListener('load', onLoad);
      return () => existing.removeEventListener('load', onLoad);
    }

    if (!aosScriptAppended) {
      aosScriptAppended = true;
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
      script.async = true;
      script.dataset.aosCdn = '1';
      script.onload = init;
      document.body.appendChild(script);
    }

    return undefined;
  }, []);
}
