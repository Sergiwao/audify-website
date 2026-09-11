'use client';

import { useState } from 'react';
import { Download, ShieldCheck, CheckCircle, Monitor, ArrowRight, FileCheck, Copy, Sparkles } from 'lucide-react';

export default function DownloadCenter() {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  const sha256 = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  const handleDownload = () => {
    setDownloading(true);
    setDownloadSuccess(false);

    try {
<<<<<<< HEAD
      // Lien direct vers la Release GitHub v0.1.0
      const releaseUrl = 'https://github.com/Sergiwao/audify-website/releases/download/v0.1.0/Audify-Setup-0.1.0.exe';
      const link = document.createElement('a');
      link.href = releaseUrl;
      link.setAttribute('download', 'Audify-Setup-0.1.0.exe');
=======
      const releaseUrl = 'https://github.com/Sergiwao/audify-website/releases/download/v0.1.0/Audify.Setup.0.1.0.exe';
      const link = document.createElement('a');
      link.href = releaseUrl;
      link.setAttribute('download', 'Audify.Setup.0.1.0.exe');
>>>>>>> 43d56e2 (Fix exact release asset URL Audify.Setup.0.1.0.exe)
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setDownloading(false);
        setDownloadSuccess(true);
      }, 800);
    } catch {
      setDownloading(false);
      setDownloadSuccess(true);
    }
  };

  const copyHash = () => {
    navigator.clipboard.writeText(sha256);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section id="download" className="py-20 bg-gray-950 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-600/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-semibold uppercase tracking-wider">
            <Download className="w-3.5 h-3.5" />
            Centre de Téléchargement Officiel
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Prêt à Révolutionner Vos Missions ? <br />
            <span className="gradient-text-blue">Téléchargez Audify Gratuitement</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Installez l'application en 30 secondes et profitez de 14 jours d'essai gratuit complet sans carte de crédit.
          </p>
        </div>

        {/* Download Main Box */}
        <div className="mt-12 max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-gray-700/80 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-emerald-500 p-0.5 shadow-lg">
                  <div className="w-full h-full bg-gray-950 rounded-[14px] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-brand-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">Audify Desktop pour Windows</h3>
                  <p className="text-xs text-emerald-400 font-medium">v0.1.0 Build Officielle • 64-bit</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Installation automatique ultra-rapide (Sans dépendance)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Mode 100% Hors-Ligne avec base de données SQLite locale</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Mise à jour transparente & Sécurité d'accès garantie</span>
                </div>
              </div>

              {/* SHA 256 Security Checksum */}
              <div className="pt-2">
                <div className="text-[11px] text-gray-400 font-mono mb-1">Empreinte de sécurité (SHA-256) :</div>
                <div className="flex items-center justify-between bg-gray-950 px-3 py-2 rounded-xl border border-gray-800 font-mono text-[10px] text-gray-400">
                  <span className="truncate max-w-[280px] sm:max-w-[360px]">{sha256}</span>
                  <button 
                    onClick={copyHash}
                    className="ml-2 text-brand-400 hover:text-white flex items-center gap-1 font-sans text-[11px]"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedHash ? 'Copié !' : 'Copier'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Download CTA Panel */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-gray-950/80 rounded-2xl border border-gray-800 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 shadow-inner">
                <Monitor className="w-8 h-8" />
              </div>

              <div>
                <div className="text-sm font-bold text-white">Windows 10 / 11</div>
                <div className="text-xs text-gray-400 mt-0.5">Taille du fichier : ~68.4 Mo</div>
              </div>

              <button
                onClick={handleDownload}
                disabled={downloading}
                className="w-full py-4 px-6 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-500 shadow-xl shadow-brand-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {downloading ? (
                  <span>Lancement du téléchargement...</span>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Télécharger l'Installateur (.exe)</span>
                  </>
                )}
              </button>

              {downloadSuccess && (
                <div className="text-xs text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-800/60 px-3 py-2 rounded-xl w-full">
                  ✓ Fichier en cours de téléchargement ! Lancez `Audify-Setup-0.1.0.exe` sur votre ordinateur.
                </div>
              )}

              <p className="text-[10px] text-gray-400">
                100% Sans virus ni logiciel espion. Conforme aux standards d'installation Windows.
              </p>
            </div>

          </div>

          {/* Windows SmartScreen Helpful Guide */}
          <div className="mt-8 pt-6 border-t border-gray-800/80 bg-gray-950/50 -mx-8 sm:-mx-12 -mb-8 sm:-mb-12 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              <span>Guide d'Installation Windows SmartScreen</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Si Windows affiche la notification <strong className="text-white">"Windows a protégé votre ordinateur"</strong> lors du premier lancement :
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                <span className="text-gray-300">Cliquer sur le lien <strong className="text-white">"Informations complémentaires"</strong> sur la fenêtre Windows.</span>
              </div>
              <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                <span className="text-gray-300">Cliquer sur le bouton <strong className="text-white">"Exécuter quand même"</strong> pour démarrer l'installation.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
