#  Middlewares – BlaBlaBook Backend

Ce fichier décrit les middlewares personnalisés utilisés dans le projet, leur rôle, et les routes concernées.

---

##  `authenticate.middleware.js`

- **Rôle** : Vérifie la présence et la validité du token JWT dans l’en-tête `Authorization`
- **Utilisé dans** :
  - `GET /auth/me`
  - `GET /userbooks`
- **Effet** :
  - Si le token est valide → ajoute `req.user` avec les infos utilisateur
  - Sinon → renvoie une erreur `401 Unauthorized`

---

## `uploadAvatar.middleware.js`

- **Rôle** : Gère l’upload de l’avatar utilisateur via `multer`
- **Utilisé dans** :
  - `POST /user/register`
- **Effet** :
  - Stocke le fichier image dans le dossier prévu
  - Ajoute les infos du fichier à `req.file`

---

## `uploadCover.middleware.js`   (V2)

- **Rôle** : Gère l’upload de la couverture de livre via `multer`
- **Utilisé dans** :
  - `POST /books/:id/cover`
- **Effet** :
  - Stocke le fichier image dans le dossier prévu
  - Ajoute les infos du fichier à `req.file`

