# Site du mariage — Déborah & Benjamin

## Mise en ligne sur GitHub

1. Décompressez le fichier ZIP.
2. Dans le dépôt `benpitoun.github.io`, cliquez sur **Add file** puis **Upload files**.
3. Glissez **tout le contenu** du dossier :
   - `index.html`
   - `films.html`
   - `style.css`
   - `script.js`
   - `config.js`
   - le dossier `assets`
4. Descendez en bas et cliquez sur **Commit changes**.
5. Patientez 1 à 3 minutes puis ouvrez :
   `https://benpitoun.github.io`

## Ajouter les liens

Ouvrez le fichier `config.js` dans GitHub, cliquez sur le crayon, puis remplacez les `#` par les liens de partage :

- `photos` : album Amazon Photos ou autre galerie
- `downloadAll` : dossier général en lecture seule
- `full` : film complet
- `best` : Best Of
- `teaser` : teaser
- `bonus` : dossier Bonus

Exemple :

```js
photos: "https://...",
```

## Ajouter vos vraies photos

Dans le dossier `assets`, remplacez les fichiers suivants en conservant exactement les mêmes noms :

- `cover.jpg` : grande photo d’accueil, idéalement horizontale
- `photos.jpg` : vignette de la rubrique Photos
- `films.jpg` : vignette de la rubrique Films
- `film-full.jpg`
- `film-best.jpg`
- `film-teaser.jpg`
- `film-bonus.jpg`

Conseils :
- JPEG de bonne qualité
- environ 1800 à 2400 px de large pour `cover.jpg`
- environ 1200 à 1600 px pour les autres
- éviter des fichiers de plus de 2 Mo chacun pour garder un site rapide

## Sécurité des fichiers partagés

Le site est public, mais les fichiers restent protégés par les permissions de votre cloud.
Créez des liens :
- en lecture seule ;
- avec téléchargement autorisé ;
- sans autorisation de modification ou suppression.
