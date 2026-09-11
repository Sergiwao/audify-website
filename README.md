# Audify Website — Site Vitrine & Téléchargement Indépendant

Site vitrine officiel et plateforme de téléchargement pour **Audify**, le logiciel de gestion d'audit & commissariat aux comptes certifié pour la zone OHADA.

Ce projet est **100% indépendant et autonome** (`audify-website`), prêt à être hébergé sur Vercel, Netlify, Cloudflare Pages, Hostinger, cPanel ou tout serveur Web Node.js / statique.

---

## 🚀 Fonctionnalités Clés du Site Vitrine

- **Design Premium & Futuriste** : Effets glassmorphism, thèmes sombres élégants, animations d'impact et typographies modernes.
- **Accroches & Punchlines Marketing** : Argumentaire taillé sur mesure pour la zone OHADA / UEMOA / CEMAC (40% de gain de temps, mode 100% offline-native, 0€ de frais Word/Excel, conformité SYSCOHADA & ISA).
- **Centre de Téléchargement Officiel** : Téléchargement direct de l'installateur Windows (`Audify-Setup-0.2.0.exe`), calculateur de hash SHA-256 et guides d'installation en 3 étapes.
- **Démonstrateur d'Interface Interactif** : Onglets dynamiques pour explorer les checklists, le tableur collaboratif, le journal d'audit et les rapports PDF.
- **Grille de Tarifs & Mobile Money** : Tarification claire avec prise en compte des moyens de paiement régionaux (**Wave, Orange Money, Moov Money, MTN**).
- **FAQ Accordéon** : Réponses aux questions fréquentes des experts-comptables et directeurs de mission.

---

## 🛠️ Déploiement & Hébergement

### Option 1 : Déploiement sur Vercel (Recommandé - Gratuit)
1. Installez Vercel CLI ou connectez votre compte GitHub.
2. Dans le dossier `audify-website`, lancez :
   ```bash
   npx vercel
   ```
3. Suivez les instructions. Le site sera en ligne avec un lien HTTPS en moins d'une minute !

### Option 2 : Déploiement sur Netlify
1. Allez sur Netlify.com -> **Add new site** -> **Import from Git**.
2. Sélectionnez le dossier `audify-website`.
3. Commande de build : `npm run build`
4. Dossier de publication : `.next` (ou `out` si export HTML).

### Option 3 : Lancement Local / Test
Dans le répertoire `audify-website` :
```bash
# 1. Installation des dépendances
npm install

# 2. Lancement du serveur de développement (http://localhost:3001 ou 3000)
npm run dev

# 3. Build de production
npm run build
npm start
```

---

## 📁 Structure du Projet

```
audify-website/
├── src/
│   ├── app/
│   │   ├── api/download/   # Route API servant les infos de téléchargement du setup .exe
│   │   ├── globals.css     # CSS Tailwind + Glassmorphism + Gradients
│   │   ├── layout.js      # Métadonnées SEO, titres et balises OpenGraph
│   │   └── page.js        # Assemblage des sections de la page d'accueil
│   └── components/
│       ├── Navbar.js       # Header sticky avec badge version & CTAs
│       ├── Hero.js         # Section d'accueil d'impact + Mockup app flottant
│       ├── Stats.js        # Métriques clés (40% temps, 100% offline, 0€ licence)
│       ├── Benefits.js     # Cartes des avantages OHADA & ISA
│       ├── InteractiveShowcase.js # Démonstrateur interactif d'onglets UI
│       ├── DownloadCenter.js # Zone de téléchargement Windows .exe + SHA-256
│       ├── Pricing.js      # Cartes de prix & badges Mobile Money (Wave, Orange...)
│       ├── FAQ.js          # Accordéon de questions fréquentes
│       └── Footer.js       # Pied de page complet et contact support
├── package.json
├── tailwind.config.js
├── next.config.mjs
└── README.md
```

---
*Projet Audify Website — Conçu pour l'excellence des cabinets comptables & d'audit.*
