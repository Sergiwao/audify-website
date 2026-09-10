'use client';

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
