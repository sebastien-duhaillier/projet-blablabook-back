#  Authentification – BlaBlaBook Backend

Ce document décrit le fonctionnement de l’authentification dans l’API BlaBlaBook, les routes concernées, les middlewares utilisés et les bonnes pratiques de sécurité.

---

## Flow d’authentification

1. **Inscription (`/user/register`)**
   - Méthode : `POST`
   - Payload :
     ```json
     {
       "name": "string",
       "email": "string",
       "password": "string",
       "firstname": "string",
       "age": Number,
       "avatar": "fichier.jpg..."
     }
     ```
   - Middleware : `avatarUpload.single('avatar')`
   - Action : Création d’un utilisateur + hash du mot de passe (Argon2) + enregistrement de l’avatar

2. **Connexion (`/user/login`)**
   - Méthode : `POST`
   - Payload :
     ```json
     {
       "email": "string",
       "password": "string"
     }
     ```
   - Action : Vérification des identifiants + génération d’un token JWT

3. **Accès protégé (`/auth/me`)**
   - Méthode : `GET`
   - Middleware : `authenticate`
   - Action : Vérifie le token JWT et retourne les infos de l’utilisateur connecté

---

##  Middleware `authenticate`

- Vérifie la présence et la validité du token JWT dans l’en-tête `Authorization`
- Si le token est valide :
  - Ajoute `req.user` contenant les infos de l’utilisateur
- Sinon :
  - Retourne une erreur `403 Unauthorized`

---

## Sécurité

- **Hash du mot de passe** : Argon2 (résistant aux attaques par force brute)
- **Token JWT** :
  - Signé avec une clé secrète (`process.env.JWT_SECRET`)
  - Expiration configurable (`process.env.JWT_EXPIRES_IN`)
- **Stockage du token côté client** :
  
   `localStorage` 
---