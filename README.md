### `Dans bash`
Ouvrir le dossier “0621-racoon-p3-laboite-front”

### `Installation`
installer les dépendances, “npm install” dans le terminal
Lancement : lancement du site, “npm start” dans le terminal

### `Variable d’environnement`
REACT_APP_URL_API=adresse du serveur
Si la fenêtre d’explorateur ne s’ouvre pas, allez sur “localhost:3000”

### `Espace Admin`
-   Afin de pouvoir accéder à l’interface administrateur, se connecter via le logo de la barre de navigation à droite qui apparait au survol
-   Interface admin utilisable uniquement depuis un ordinateur (non optimisée pour mobile)
-   Lors de la création d'un nouveau pôle, renseigner les trois images pour que celles-ci apparaissent bien sur le site (bannière, photo d'illustration pour le fonctionnement et miniature pour la page accueil).
-   Si aucune photo n'est renseignée à l'ajout d'un membre de l'équipe, un avatar sera affiché par défaut.
-   Pour un ajout ou une modification d'un pôle ou d'une activité, ne pas oublier de confirmer le contenu de l'éditeur de texte avant de publier.
-   Optimisation du format des images lors de la création ou modification d’un élément    pour un meilleur rendu.
-   Mettre absolument une image par activité
-   Lors de la suppression d’un pôle, les activités liées sont toujours présentes dans la base de données. Vous pouvez les retirer depuis la section “activités”
-   Pour voir le site dans sa totalité (entête et bas de page) se déconnecter de la partie administrateur.
-   Ne pas dépasser 335 caractères dans la partie Fonctionnement des pôles.
-   Ne pas dépasser 250 caractères dans la partie description d'activité.

### `formater les images pour le web`
Site pour redimensionner les images en lignes : https://imageresizer.com/.
Site de compression d’images en ligne :  https://imagecompressor.com/fr/. les images doivent être en dessous de 500ko
-   image de la bannière > résolution 72 DPI, dimensions 2500 x 450 px, jpg
-   image de membre > résolution 72 DPI, dimensions 300 x 300 px, png
-   image fonctionnement >  résolution 72 DPI, dimensions 674 × 480 px, jpg
-   image activité > résolution 72 DPI, dimensions 463 x 225 px, jpg
-   pole vignettes > resolution 72 DPI, dimensions 400 x 350 px, jpg
-   pole images > resolution 72 DPI, dimensions 674 x 480 px, jpg

### `Insertion des pictos lors de la création ou modification`
Allez à l’adresse suivante : https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=regular,solid&m=free
Chercher l'icône de son choix (libre de droits), par exemple “address-book”. C’est ce nom qu’il faudra renseigner dans le champ “picto”.
Attention, FontAwesome inverse parfois l’ordre dans le nom de ses icônes qui contiennent un trait-d’union. Il faudra tester d’inverser l’ordre des mots si besoin.

### `video interface utilisateur`
https://user-images.githubusercontent.com/75483296/138306996-fdac52da-c959-4094-8420-9f443b6aa08e.mov

### `video interface administrateur`
https://user-images.githubusercontent.com/75483296/138420643-f7157482-3fd9-47c5-b5e9-f87e9622b9be.mov


