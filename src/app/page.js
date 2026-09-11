'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Benefits from '@/components/Benefits';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import DownloadCenter from '@/components/DownloadCenter';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const purgeNetlifyBadge = () => {
      const selectors = [
        '[class*="netlify"]',
        '[id*="netlify"]',
        '[data-netlify-badge]',
        '[data-netlify-drawer]',
        'a[href*="netlify.com"]',
        'a[href*="netlify"]',
        'iframe[src*="netlify"]',
        '.netlify-badge',
        '.netlify-feedback-button'
      ];
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
      });

      // Target fixed bottom right elements containing netlify text
      document.querySelectorAll('div, iframe, a').forEach(el => {
        if (el.textContent && el.textContent.toLowerCase().includes('netlify')) {
          const style = window.getComputedStyle(el);
          if (style.position === 'fixed' || style.position === 'absolute') {
            el.remove();
          }
        }
      });
    };

    purgeNetlifyBadge();
    const observer = new MutationObserver(purgeNetlifyBadge);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const scrollToDownload = () => {
    const downloadElement = document.getElementById('download');
    if (downloadElement) {
      downloadElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white selection:bg-brand-500 selection:text-white">
      <Navbar onDownloadClick={scrollToDownload} />
      <Hero onDownloadClick={scrollToDownload} />
      <Stats />
      <Benefits />
      <InteractiveShowcase onDownloadClick={scrollToDownload} />
      <DownloadCenter />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
