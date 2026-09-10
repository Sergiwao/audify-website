import { Check, Sparkles, Smartphone, CreditCard, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Essai Gratuit",
      price: "0 FCFA",
      period: "pendant 14 jours",
      description: "Pour tester gratuitement toutes les fonctionnalités sur un dossier réel.",
      badge: "Découverte",
      badgeColor: "bg-gray-800 text-gray-300 border-gray-700",
      features: [
        "1 Licence Utilisateur (Auditeur ou Chef)",
        "Jusqu'à 3 missions d'audit",
        "Mode 100% Hors-Ligne Native",
        "Checklists OHADA incluses",
        "Éditeur de texte & Tableur basique",
        "Export Rapport PDF",
      ],
      buttonText: "Démarrer l'Essai Gratuit",
      highlighted: false,
      buttonStyle: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700",
    },
    {
      name: "Cabinet Professionnel",
      price: "150 000 FCFA",
      period: "/ an par auditeur",
      description: "La formule complète idéale pour les cabinets d'expertise comptable et commissaires aux comptes.",
      badge: "Le Plus Populaire",
      badgeColor: "bg-brand-500 text-white border-brand-400 font-bold",
      features: [
        "Nombre de missions d'audit ILLIMITÉ",
        "Modèles de checklists OHADA & ISA personnalisables",
        "Synchronisation réseau & sauvegarde cloud optionnelle",
        "GED documentaire & Tableur collaboratif avancé",
        "Audit Trail inaltérable & Gestion des anomalies",
        "Support technique prioritaire par téléphone/WhatsApp",
        "Certificat de licence officiel zone OHADA",
      ],
      buttonText: "Activer ma Licence Cabinet",
      highlighted: true,
      buttonStyle: "bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-500 text-white shadow-xl shadow-brand-500/30 hover:scale-[1.02]",
    },
    {
      name: "Grand Cabinet / Réseau",
      price: "Sur Devis",
      period: "Multi-sites & Cabinets affiliés",
      description: "Pour les cabinets de plus de 25 auditeurs avec exigences de déploiement spécifiques.",
      badge: "Entreprise",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      features: [
        "Licences illimitées sur site ou Cloud privé",
        "Base PostgreSQL dédiée avec réplication multi-pays",
        "Intégration ERP & systèmes comptables sur mesure",
        "Formation de l'équipe d'associés sur place",
        "Chef de projet dédié & SLA garanti 99.9%",
      ],
      buttonText: "Contacter le Service Commercial",
      highlighted: false,
      buttonStyle: "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-950/90 border-t border-gray-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5" />
            Tarifs Transparents & Sans Frais Cachés
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Des Formules Adaptées à Votre <br />
            <span className="gradient-text-gold">Taille de Cabinet</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Abonnement annuel simple et adapté aux besoins de votre cabinet.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlighted
                  ? 'glass-panel border-2 border-brand-500 shadow-2xl shadow-brand-500/20 scale-[1.03] z-10'
                  : 'glass-panel border border-gray-800'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-600 to-emerald-500 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                  Offre Recommandée
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white font-heading">{plan.name}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] border ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-white font-heading">{plan.price}</span>
                  <span className="text-xs text-gray-400 ml-2 font-medium">{plan.period}</span>
                </div>

                <p className="mt-3 text-xs text-gray-400 leading-relaxed">
                  {plan.description}
                </p>

                <div className="my-6 border-t border-gray-800"></div>

                <ul className="space-y-3 text-xs text-gray-300 font-medium">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#download"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${plan.buttonStyle}`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
