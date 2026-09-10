'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      question: "Le logiciel Audify peut-il fonctionner sans connexion Internet ?",
      answer: "Absolument. Audify a été conçu selon la philosophie Offline-First Native. Toutes vos données, checklists et pièces jointes sont stockées localement sur votre ordinateur sous Windows. Vous pouvez travailler sur le terrain chez vos clients sans aucune connexion internet. Une fois reconnecté, vos travaux se synchronisent en arrière-plan."
    },
    {
      question: "Audify est-il conforme au système comptable SYSCOHADA Révisé ?",
      answer: "Oui, à 100%. Audify intègre nativement des modèles de checklists d'audit, de programmes de travail et de présentations de synthèses conformes aux directives OHADA, aux normes ISA (International Standards on Auditing) et aux exigences du Commissariat aux Comptes en zone UEMOA et CEMAC."
    },
    {
      question: "Faut-il payer une licence Microsoft Office (Word/Excel) séparée ?",
      answer: "Non. Audify intègre directement sa propre suite d'édition documentaire avec un tableur interactif (.xlsx) et un éditeur de texte enrichi (.docx). Vous économisez l'intégralité des coûts de licences logicielles tierces pour votre cabinet."
    },
    {
      question: "Comment s'effectue l'activation de ma licence Audify ?",
      answer: "Dès la souscription de votre formule auprès du service commercial ou via le portail d'administration, votre clé de licence numérique unique est générée instantanément pour débloquer votre accès."
    },
    {
      question: "Comment migrer nos anciens dossiers d'audit depuis Excel ou RevisAudit ?",
      answer: "Audify propose des outils d'importation automatique de vos fichiers d'audit au format Excel (.xlsx), CSV ou PDF. Notre équipe de support peut également vous accompagner gratuitement dans la migration de votre historique."
    },
    {
      question: "Combien d'ordinateurs puis-je installer avec une seule licence ?",
      answer: "Chaque licence utilisateur permet d'activer Audify sur 2 appareils personnels (par exemple votre ordinateur de bureau au cabinet et votre PC portable de mission)."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Questions Fréquentes
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tout Ce Que Vous Devez Savoir <br />
            <span className="gradient-text-blue">Sur Le Logiciel Audify</span>
          </h2>
        </div>

        {/* Accordion FAQ */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-gray-800 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-heading">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-brand-400 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-brand-500/10' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-gray-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
