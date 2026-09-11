'use client';

import { useState } from 'react';
import { LayoutDashboard, CheckSquare, FileSpreadsheet, FileCheck, Smartphone, Check, Lock, ChevronRight, Download } from 'lucide-react';

export default function InteractiveShowcase({ onDownloadClick }) {
  const [activeTab, setActiveTab] = useState('checklists');

  const tabs = [
    { id: 'checklists', label: 'Checklists OHADA', icon: CheckSquare },
    { id: 'ged', label: 'GED & Tableur Intégré', icon: FileSpreadsheet },
    { id: 'dashboard', label: 'Tableau de Bord & KPIs', icon: LayoutDashboard },
    { id: 'reports', label: 'Rapports PDF & Anomalies', icon: FileCheck },
    { id: 'licence', label: 'Licences & Mobile Money', icon: Smartphone },
  ];

  return (
    <section id="showcase" className="py-20 bg-gray-950/80 border-t border-gray-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider">
            Aperçu Fonctionnel En Direct
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Une Interface Intuitive Pensée Pour <br />
            <span className="gradient-text-emerald">Les Experts de Terrain</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Découvrez comment Audify simplifie l'exécution des travaux d'audit du cadrage initial jusqu'au rapport final.
          </p>
        </div>

        {/* Tab Buttons Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-600 to-emerald-600 text-white shadow-lg shadow-brand-500/25 scale-[1.02]'
                    : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Tab Preview Area */}
        <div className="mt-8 glass-panel p-6 sm:p-8 rounded-3xl border border-gray-800 shadow-2xl">
          
          {/* TAB 1: CHECKLISTS SYSCOHADA */}
          {activeTab === 'checklists' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-400 uppercase tracking-widest bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/20">
                  Génération Automatique
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Checklists & Programmes de Travail SYSCOHADA
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Sélectionnez le type de mission (Audit Légal, Contractuel, Commissariat aux comptes) et laissez Audify injecter le programme de travail standardisé OHADA.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-medium pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Modèles paramétrables par l'associé ou le chef de mission</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Affectation directe des tâches aux auditeurs juniors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Suivi de l'avancement en temps réel (%)</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <button 
                    onClick={onDownloadClick}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs bg-brand-600 hover:bg-brand-500 text-white flex items-center gap-2 shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    <span>Tester la fonction dans Audify (.exe)</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-gray-950 p-5 rounded-2xl border border-gray-800 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-gray-800 text-gray-400 text-[11px]">
                  <span>Modèle : Audit Légal — Cycle Trésorerie & Banque</span>
                  <span className="text-emerald-400 font-semibold">12 / 15 Valides</span>
                </div>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-gray-900/90 border border-gray-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span className="text-gray-200">Vérification des rapprochements bancaires au 31/12</span>
                    </div>
                    <span className="text-[10px] text-gray-400 bg-gray-800 px-2 py-0.5 rounded">Terminé</span>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900/90 border border-gray-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span className="text-gray-200">Demande de confirmation directe aux banques (Circularisation)</span>
                    </div>
                    <span className="text-[10px] text-gray-400 bg-gray-800 px-2 py-0.5 rounded">Terminé</span>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900/90 border border-brand-500/40 bg-brand-950/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">⏱</span>
                      <span className="text-white font-semibold">Vérification des caisses et procès-verbaux de comptage</span>
                    </div>
                    <span className="text-[10px] text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/40">En Cours (Auditeur Jr)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GED & TABLEUR */}
          {activeTab === 'ged' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  0€ de Licence Microsoft
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Feuilles de Calcul & Éditeur Word-like Intégrés
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Travaillez directement sur vos feuilles de travail (.xlsx) et notes d'analyse d'audit sans quitter Audify.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-medium">
                  <li className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-brand-400" />
                    <span>Verrouillage pessimiste (Pessimistic Locking) pour éviter les conflits d'édition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Indexation GED documentaire par mission et par tâche</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Importation / Exportation fluide des fichiers Excel et Word</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7 bg-gray-950 p-5 rounded-2xl border border-gray-800 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                    <span className="text-white font-semibold">Feuille_de_Travail_Immobilisations.xlsx</span>
                  </div>
                  <span className="text-[10px] text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800/40">🔒 Verrouillé par Alex (Chef de mission)</span>
                </div>
                <div className="bg-gray-900 rounded p-3 text-[11px] space-y-1">
                  <div className="grid grid-cols-4 font-bold text-gray-400 border-b border-gray-800 pb-1">
                    <span>Compte</span>
                    <span>Libellé</span>
                    <span>Brut 2025</span>
                    <span>Amortissement</span>
                  </div>
                  <div className="grid grid-cols-4 text-gray-300 py-0.5">
                    <span>211000</span>
                    <span>Terrains</span>
                    <span>45 000 000 FCFA</span>
                    <span>0 FCFA</span>
                  </div>
                  <div className="grid grid-cols-4 text-gray-300 py-0.5">
                    <span>213000</span>
                    <span>Bâtiments</span>
                    <span>120 000 000 FCFA</span>
                    <span>18 000 000 FCFA</span>
                  </div>
                  <div className="grid grid-cols-4 text-emerald-400 font-bold border-t border-gray-800 pt-1">
                    <span>TOTAL</span>
                    <span>Classe 2</span>
                    <span>165 000 000 FCFA</span>
                    <span>18 000 000 FCFA</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                  Pilotage Cabinet
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Tableau de Bord & KPIs de Productivité
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Supervisez l'avancement global de toutes les missions en cours dans le cabinet et gardez le contrôle sur les budgets d'heures.
                </p>
              </div>

              <div className="lg:col-span-7 bg-gray-950 p-5 rounded-2xl border border-gray-800 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-900 rounded-xl border border-gray-800">
                    <div className="text-[11px] text-gray-400">Total Temps Consommé</div>
                    <div className="text-xl font-bold text-brand-400 mt-1">1 240 Heures</div>
                  </div>
                  <div className="p-3 bg-gray-900 rounded-xl border border-gray-800">
                    <div className="text-[11px] text-gray-400">Taux de Réalisation</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">94.2 %</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: REPORTS */}
          {activeTab === 'reports' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-pink-400 uppercase tracking-widest bg-pink-500/10 px-2.5 py-1 rounded-full border border-pink-500/20">
                  Livrables Automatisés
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Rapports d'Audit PDF & Journal Anti-Fraude
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Générez en 1 clic votre rapport d'audit final incluant le résumé exécutif, la synthèse des temps et la liste des anomalies d'audit.
                </p>
              </div>

              <div className="lg:col-span-7 bg-gray-950 p-5 rounded-2xl border border-gray-800 text-xs font-mono">
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 space-y-2">
                  <div className="text-brand-400 font-bold">📄 RAPPORT_AUDIT_FINAL_OHADA_2025.pdf</div>
                  <div className="text-gray-400 text-[11px]">Généré automatiquement — 24 Pages — Conforme ISA 700</div>
                  <div className="text-emerald-400 text-[10px]">✓ Signature électronique prête</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: MOBILE MONEY */}
          {activeTab === 'licence' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  Paiement Local Inclus
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Activation Facile par Mobile Money
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Pas de carte bancaire internationale requise. Réglez et renouvelez vos clés de licence Audify directement via Wave, Orange Money, Moov ou MTN.
                </p>
              </div>

              <div className="lg:col-span-7 bg-gray-950 p-5 rounded-2xl border border-gray-800 text-xs font-mono space-y-3">
                <div className="text-gray-300 font-bold">Moyens de paiement acceptés en zone UEMOA / CEMAC :</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 font-bold">Wave Mobile Money</span>
                  <span className="px-3 py-1.5 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30 font-bold">Orange Money</span>
                  <span className="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-600/30 font-bold">Moov Money</span>
                  <span className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold">MTN Mobile Money</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
