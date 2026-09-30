# Atelier 132 — site vitrine

Next.js (export statique) · Tailwind CSS v4 · shadcn · framer-motion. Déployé sur GitHub Pages à chaque push sur `main`.

## Modifier le contenu

- **Infos, tarifs, horaires, avis, lien Planity** : `lib/site.ts` (un seul fichier).
- **Photos** : `public/images/`. Remplacez simplement les fichiers en gardant le même nom :
  - `hero1.webp` : fond plein écran du haut de page (idéalement ≥ 1920 px de large)
  - `hero2.webp` : grande photo de la section « L'atelier »
  - `hero3.webp` : fond du bandeau final « Votre prochain rendez-vous »
  - Galerie : `salon-interieur`, `bacs`, `facade`, `produits`, `espace-barbier`, `rue` (liste dans `app/page.tsx`, constante `PHOTOS`)
- **Logo** : fichiers vectoriels prêts à l'emploi dans `public/logo/` (médaillon seul, horizontal, horizontal blanc pour fond sombre, vertical). Le médaillon du site est `components/site/logo-emblem.tsx`, l'icône d'onglet `app/icon.svg` et l'icône iPhone `app/apple-icon.png`.
- **Couleurs** : `app/globals.css` (bloc « Palette Atelier 132 »).
- **Vitesse du carrousel** : `--animate-marquee` dans `app/globals.css` (28s par défaut).

## Développement

```bash
npm install
npm run dev
```
