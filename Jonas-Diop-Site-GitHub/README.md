# Site officiel — Jonas Diop

Code source complet du site **Jonas Diop — The Game Changer**.

## Contenu du projet

- toutes les pages du site dans `app/` ;
- images, vidéos, favicon, sitemap et robots dans `public/` ;
- liens de réservation, réseaux sociaux et coordonnées dans `app/site-content.ts` ;
- styles généraux et règles de lisibilité dans `app/*.css` ;
- configuration Next.js, Vinext, TypeScript et Cloudflare ;
- fichier `package-lock.json` pour reproduire exactement l’installation.

## Importer dans GitHub Desktop

1. Décompresser l’archive dans un dossier permanent.
2. Ouvrir GitHub Desktop.
3. Choisir **File → Add Local Repository**.
4. Sélectionner le dossier décompressé.
5. Si GitHub Desktop indique que ce n’est pas encore un dépôt, choisir **Create a Repository**.
6. Écrire un premier message de commit, puis cliquer sur **Commit to main**.
7. Cliquer sur **Publish repository**.

Ne jamais ajouter manuellement `node_modules`, `.next`, `dist` ou les fichiers `.env`. Ils sont déjà exclus par `.gitignore`.

## Lancer le site en local

Prérequis : Node.js 22.13 ou plus récent.

```bash
npm install
npm run dev
```

Ouvrir ensuite l’adresse affichée dans le terminal, généralement `http://localhost:3000`.

## Vérifier la version de production

```bash
npm run build
```

Le build doit terminer sans erreur avant tout déploiement.

## Modifier les informations importantes

Le fichier principal est :

```text
app/site-content.ts
```

Il centralise notamment :

- le courriel et le téléphone ;
- le Game Changer Call ;
- les candidatures The Shift, The Breakthrough et Dynasty Council ;
- le formulaire Conférences ;
- LinkedIn, Instagram, Facebook et YouTube ;
- les liens Amazon des livres ;
- les vidéos.

Les liens de paiement encore manquants pourront être insérés dans ce fichier sans reconstruire le design.

## Formulaires

Les formulaires visuels du Swipe File et des listes prioritaires doivent être reliés à ton outil d’emailing ou CRM avant le lancement définitif. Le formulaire Conférences est déjà relié à Tally.

## Mise en ligne

GitHub Desktop sert à envoyer et maintenir le code sur GitHub. Pour rendre le site public sur ton propre domaine, il faut ensuite connecter le dépôt GitHub à un hébergeur compatible avec Next.js/Vinext et configurer le domaine `jonasdiop.com` chez cet hébergeur.

Avant la mise en production définitive :

- connecter les formulaires ;
- ajouter les liens de paiement ;
- renseigner YouTube et les futurs liens Substack/podcast ;
- vérifier les mentions légales définitives ;
- configurer les variables d’environnement éventuelles ;
- exécuter `npm run build`.

## Scripts utiles

```bash
npm run dev       # aperçu local
npm run build     # version de production
npm run lint      # contrôle du code
npm test          # tests du projet
```
