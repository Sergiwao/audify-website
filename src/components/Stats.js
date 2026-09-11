import { Zap, Clock, DollarSign, ShieldCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Clock,
      value: "40 %",
      label: "De gain de temps moyen par mission",
      description: "Checklists automatiques & dossiers pré-remplis selon le type d'audit OHADA.",
      color: "text-brand-400",
      bgColor: "bg-brand-500/10",
      borderColor: "border-brand-500/20",
    },
    {
      icon: Zap,
      value: "100 %",
      label: "Fonctionnement Hors-Ligne Native",
      description: "Travaillez sur le terrain chez vos clients sans aucune connexion internet requise.",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      icon: DollarSign,
      value: "0 Fcfa",
      label: "Frais de licences logicielles tierces",
      description: "Tableur (Excel-like) et Éditeur de texte (Word-like) intégrés directement sans abonnement.",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
    {
      icon: ShieldCheck,
      value: "100 %",
      label: "Traçabilité & Journal Inaltérable",
      description: "Conformité stricte aux normes anti-fraude, audit trails et revues superviseurs.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
  ];

  return (
    <section className="py-12 bg-gray-950 border-y border-gray-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-gray-800 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${stat.bgColor} ${stat.borderColor} border flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-4xl font-extrabold font-heading ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-base font-bold text-white mt-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
