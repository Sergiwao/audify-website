import './globals.css';

export const metadata = {
  title: 'Audify — Solution Moderne de Gestion d\'Audit & Commissariat aux Comptes OHADA',
  description: 'Logiciel moderne pour cabinets d\'expertise comptable et commissaires aux comptes zone OHADA. Checklists automatisées, GED intégrée, et mode 100% Offline-Native.',
  keywords: 'Audify, audit, expertise comptable, OHADA, SYSCOHADA, commissariat aux comptes, Afrique, Sénégal, Côte d\'Ivoire, Cameroun, logiciel audit',
  openGraph: {
    title: 'Audify — Gestion d\'Audit OHADA',
    description: 'Automatisez vos missions d\'audit légal et contractuel. 100% Hors Ligne avec synchronisation sécurisée.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
