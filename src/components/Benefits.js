import { CheckCircle, ShieldAlert, FileText, Database, Users, Sparkles, Scale, RefreshCw } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Scale,
      title: "100% Conforme au Référentiel SYSCOHADA Révisé",
      description: "Bénéficiez de checklists d'audit, de programmes de travail et de modèles de rapport rigoureusement alignés sur les normes OHADA et ISA.",
      badge: "OHADA Conforme",
      badgeColor: "bg-brand-500/10 text-brand-400 border-brand-500/30",
    },
    {
      icon: RefreshCw,
      title: "Mode Offline Native & Synchronisation Auto",
      description: "Vos collaborateurs saisissent les faits d'audit et téléversent les pièces justificatives même sans connexion. Tout se synchronise automatiquement dès le retour en ligne.",
      badge: "Terrain Ready",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      icon: FileText,
      title: "Feuilles de Calcul & Éditeur Word-like Intégrés",
      description: "Créez vos feuilles de travail interactives, modifiez vos documents et appliquez des verrous de modification (Pessimistic Locking) sans acheter Office 365.",
      badge: "Économie 100%",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
    {
      icon: ShieldAlert,
      title: "Gestion des Anomalies & Journal d'Audit Falsification-Proof",
      description: "Suivez chaque constat d'audit de la détection à la résolution. Chaque modification est enregistrée dans un journal d'audit infalsifiable.",
      badge: "Sécurité Maximale",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      icon: Users,
      title: "Suivi du Budget Heures & Productivité Équipe",
      description: "Visualisez en temps réel les heures réelles consommées par tâche et par mission vs le budget initial pour maximiser la rentabilité de votre cabinet.",
      badge: "Rentabilité",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    },
    {
      icon: Database,
      title: "Génération du Rapport PDF en 1 Clic",
      description: "Produisez le livrable de mission complet avec synthèse des travaux, liste des anomalies résolues et références documentaires prêt pour la signature.",
      badge: "1-Click PDF",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-950 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Conçu pour la Zone UEMOA & CEMAC
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pourquoi les Cabinets d'Audit <br />
            <span className="gradient-text-blue">Adoptent Audify ?</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Une solution pensée pour éliminer la lourdeur administrative et offrir une traçabilité totale sur vos missions comptables et d'audit légal.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-8 rounded-2xl border border-gray-800 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-700/80 flex items-center justify-center shadow-inner">
                      <Icon className="w-6 h-6 text-brand-400" />
                    </div>
                    <span className={`px-2.5 py-1 text-[11px] font-bold rounded-full border ${benefit.badgeColor}`}>
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center text-xs font-semibold text-brand-400">
                  <span>En savoir plus</span>
                  <CheckCircle className="w-4 h-4 ml-2 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
