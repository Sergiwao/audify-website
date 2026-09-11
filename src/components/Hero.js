'use client';

import { Download, Sparkles, Shield, WifiOff, FileCheck2, CreditCard, ChevronRight, CheckCircle2, ArrowRight, Play, Laptop } from 'lucide-react';

export default function Hero({ onDownloadClick }) {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-gray-950">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-brand-300 text-xs sm:text-sm font-medium hover:border-slate-700 transition-all cursor-pointer">
            <span className="flex h-2 w-2 relative">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-white">Nouveau dans Audify v0.1.0 :</span>
            <span className="text-gray-300 hidden sm:inline">Mode Offline-First Native & Synchronisation Sécurisée</span>
            <ChevronRight className="w-4 h-4 text-brand-400" />
          </div>
        </div>

        {/* Main Punchline Heading */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
            La Solution Moderne de Gestion d'Audit <br className="hidden md:inline" />
            <span className="gradient-text-blue">Certifiée Conforme OHADA</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Automatisez vos <strong className="text-white">checklists SYSCOHADA</strong>, centralisez vos dossiers de travail et exécutez vos missions d'audit <strong className="text-emerald-400">100% hors-ligne</strong> avec synchronisation sécurisée et gestion des accès.
          </p>

          {/* Primary Action Buttons (CTAs) */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            
            {/* Primary CTA - Windows Installer Download */}
            <button
              onClick={onDownloadClick}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl text-white bg-gradient-to-r from-brand-600 to-emerald-600 border border-brand-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Download className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="text-sm font-extrabold">Télécharger pour Windows</div>
                <div className="text-[11px] font-normal text-brand-100 opacity-90">v0.1.0 (.exe - 64 bits)</div>
              </div>
              <ArrowRight className="w-5 h-5 ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>

            {/* Secondary CTA - Web Portal Access */}
            <a
              href="http://localhost:3000/login"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-2xl text-gray-200 bg-gray-900 hover:bg-gray-800 border border-gray-800 transition-all duration-200"
            >
              <Laptop className="w-5 h-5 mr-3 text-brand-400" />
              <span>Accéder au Portail Web</span>
            </a>
          </div>

          {/* Key Value Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs sm:text-sm text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <WifiOff className="w-4 h-4 text-emerald-400" />
              <span>100% Offline-Native</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-400" />
              <span>Normes SYSCOHADA & ISA</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-purple-400" />
              <span>Éditeur & Tableur Intégrés</span>
            </div>
          </div>
        </div>

        {/* Desktop UI Interactive Floating Mockup Preview */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          
          <div className="relative glass-panel rounded-2xl p-3 sm:p-4 border border-gray-800 overflow-hidden">
            
            {/* Mockup Window Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-800 bg-gray-950/80 rounded-t-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 text-xs font-medium text-gray-400">Audify Desktop v0.2.0 — Cabinet Expertise & Audit (Zone OHADA)</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Mode Hors-Ligne Actif</span>
              </div>
            </div>

            {/* Mockup App Interface Grid */}
            <div className="p-4 sm:p-6 bg-gray-950/90 rounded-b-xl space-y-6">
              
              {/* Top Stats Cards inside mockup */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-gray-900/90 p-3.5 rounded-xl border border-gray-800">
                  <div className="text-[11px] text-gray-400 font-medium">Missions d'Audit Actives</div>
                  <div className="text-xl font-bold text-white mt-1">14 Missions</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">100% à jour (OHADA)</div>
                </div>

                <div className="bg-gray-900/90 p-3.5 rounded-xl border border-gray-800">
                  <div className="text-[11px] text-gray-400 font-medium">Avancement Moyen</div>
                  <div className="text-xl font-bold text-brand-400 mt-1">78.4 %</div>
                  <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-brand-500 h-full rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-900/90 p-3.5 rounded-xl border border-gray-800">
                  <div className="text-[11px] text-gray-400 font-medium">Anomalies Traitées</div>
                  <div className="text-xl font-bold text-emerald-400 mt-1">42 / 45</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">3 en revue chef de mission</div>
                </div>

                <div className="bg-gray-900/90 p-3.5 rounded-xl border border-gray-800">
                  <div className="text-[11px] text-gray-400 font-medium">Heures Consommées</div>
                  <div className="text-xl font-bold text-amber-400 mt-1">320h / 350h</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Sous le budget (+8.5%)</div>
                </div>
              </div>

              {/* Mission Table Mockup preview */}
              <div className="bg-gray-900/60 rounded-xl border border-gray-800 p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                  <span className="text-xs font-bold text-gray-200">Dernières Missions d'Audit Légale & Commissariat</span>
                  <span className="text-[11px] text-brand-400 hover:underline cursor-pointer">Voir tout les dossiers</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/80 border border-gray-800/80 hover:border-brand-500/30 transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <div>
                        <div className="font-semibold text-white">SOCIETE GENERALE BENIN S.A.</div>
                        <div className="text-[10px] text-gray-400">Audit Contractuel & Conformité SYSCOHADA</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-medium">En Cours</span>
                      <span className="text-gray-300 font-mono text-[11px]">85%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/80 border border-gray-800/80 hover:border-brand-500/30 transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <div>
                        <div className="font-semibold text-white">PORT AUTONOME DE COTONOU</div>
                        <div className="text-[10px] text-gray-400">Commissariat aux Comptes — Exercice 2025</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-medium">En Revue</span>
                      <span className="text-gray-300 font-mono text-[11px]">92%</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
