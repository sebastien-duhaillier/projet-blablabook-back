## 📘 Documentation des routes API

| Méthode | URL | Description | Middleware(s) |
|--------|-----|-------------|----------------|
| GET | `/authors` | Récupère tous les auteurs | Aucun |
| GET | `/author/:id` | Récupère un auteur par ID | Aucun |
| GET | `/search` | Recherche de livres | Aucun |
| GET | `/` | Récupère des livres aléatoires | Aucun |
| GET | `/catalog` | Récupère tous les livres | Aucun |
| GET | `/book/:id` | Récupère un livre par ID | Aucun |
| POST | `/books/:id/cover` | Upload de couverture de livre | `upload.single('cover')` |
| GET | `/genres` | Récupère tous les genres | Aucun |
| GET | `/genre/:id` | Récupère un genre par ID | Aucun |
| POST | `/user/register` | Inscription utilisateur avec avatar | `avatarUpload.single('avatar')` |
| POST | `/user/login` | Connexion utilisateur | Aucun |
| GET | `/auth/me` | Récupère l'utilisateur connecté | `authenticate` |
| POST | `/user` | Crée un utilisateur | Aucun |
| GET | `/users` | Récupère tous les utilisateurs | Aucun |
| GET | `/user/:id` | Récupère un utilisateur par ID | Aucun |
| POST | `/user/:userId/book/:bookId` | Ajoute un livre à la liste de l'utilisateur | Aucun |
| GET | `/user/:userId/book/:bookId/status` | Vérifie le statut de lecture d’un livre | Aucun |
| PUT | `/user/:userId/book/:bookId` | Met à jour le statut de lecture | Aucun |
| DELETE | `/user/:userId/book/:bookId` | Supprime un livre de la liste de l'utilisateur | Aucun |
| GET | `/userbooks` | Récupère tous les livres de l'utilisateur connecté | `authenticate` |

<!-- Ceci est juste un premier tableau simplement pour nous mettre sur la voie d'une bonne documentation -->