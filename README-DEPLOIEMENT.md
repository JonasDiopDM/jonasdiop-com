# Site Jonas Diop — déploiement GitHub + Cloudflare Pages

Ce dossier est la version statique complète du site. Le fichier `index.html` se trouve directement à la racine.

## Mise en ligne avec GitHub Desktop

1. Décompressez l’archive dans un dossier vide.
2. Dans GitHub Desktop, choisissez **File → Add local repository**.
3. Si GitHub Desktop propose de créer le dépôt, acceptez, puis publiez-le sur GitHub.
4. Vérifiez que `index.html`, `assets`, `media`, `photos` et les autres pages `.html` sont bien à la racine du dépôt.
5. Faites un commit puis cliquez sur **Push origin**.

## Réglages Cloudflare Pages

- Branche de production : `main`
- Framework preset : `None`
- Build command : laisser vide
- Build output directory : `/`
- Root directory : laisser vide

Cloudflare redéploiera automatiquement le site après chaque push sur GitHub.

## Modifier le site

- Les pages sont des fichiers `.html`.
- Les styles se trouvent dans `assets/index-DAstLcjh.css`.
- Les images et vidéos se trouvent dans `media`, `photos` et `section-bg`.
- Gardez les noms et l’arborescence des dossiers pour éviter de casser les liens.

Le dossier source de développement est fourni dans une archive séparée. Pour une mise en ligne simple, utilisez cette archive statique.
