import { ShieldCheck, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/80 pt-16 pb-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand & Description Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-400 p-0.5 shadow-md">
                <div className="w-full h-full bg-gray-950 rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-brand-400" />
                </div>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white font-heading">
                AUDIFY<span className="text-brand-500">.</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              La solution logicielle de référence pour la gestion des missions d'audit et de commissariat aux comptes en Afrique de l'Ouest et du Centre (Zone OHADA).
            </p>
            <div className="pt-2 text-[11px] text-gray-300 font-mono">
              Build v0.2.0 • Standalone Edition
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Produit</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-brand-400 transition-colors">Fonctionnalités</a></li>
              <li><a href="#benefits" className="hover:text-brand-400 transition-colors">Avantages OHADA</a></li>
              <li><a href="#showcase" className="hover:text-brand-400 transition-colors">Aperçu Interface</a></li>
              <li><a href="#download" className="hover:text-brand-400 transition-colors">Télécharger pour Windows</a></li>
              <li><a href="#pricing" className="hover:text-brand-400 transition-colors">Tarifs & Licences</a></li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Réglementation</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300 font-medium">Référentiel SYSCOHADA</span></li>
              <li><span className="text-gray-300 font-medium">Normes ISA Internationales</span></li>
              <li><span className="text-gray-300 font-medium">Zone UEMOA & CEMAC</span></li>
              <li><span className="text-gray-300 font-medium">Conformité Anti-Fraude</span></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Contact Cabinet</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400" />
                <span>support@audify.africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+226 60 27 74 03 / WhatsApp</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-[11px] gap-4">
          <div>
            © {new Date().getFullYear()} Audify Software Inc. Tous droits réservés.
          </div>
          <div className="flex items-center gap-1">
            <span>Développé avec passion pour les Experts-Comptables de la zone OHADA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
