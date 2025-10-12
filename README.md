#  BlaBlaBook

**BlaBlaBook** est une plateforme web collaborative dédiée à la gestion de bibliothèques personnelles. Pensée par des passionnés de lecture, elle permet à chacun d’organiser ses livres, de découvrir ceux des autres, et de partager ses avis au sein d’une communauté active.

---

##  Objectifs du projet

- Permettre à chaque utilisateur de créer et gérer sa propre bibliothèque numérique
- Offrir un espace de découverte inspiré des collections des autres membres
- Faciliter les échanges autour des livres : avis, recommandations, discussions
- Proposer une interface moderne, responsive et accessible à tous

---

##  Public visé

- **Communauté d’échange** : interaction sociale autour des livres
- **Lecteurs occasionnels** : consultation et découverte sans obligation de création
- **Administrateurs** : supervision technique et modération de la plateforme
- **Lecteurs réguliers** : suivi des lectures, organisation de la bibliothèque

---

##  Stack technique

### Frontend
- **SvelteKit** 
- **CSS personnalisé** + charte graphique responsive
- **Composants dynamiques** : carrousel, boutons d’action, searchbar
- **Gestion des états utilisateur** : token, redirection, affichage conditionnel

### Backend
- **Node.js + Express**
- **Sequelize + PostgreSQL**
- **JWT pour l’authentification sécurisée**
- **Argon2 pour le hachage des mots de passe**
- **Multer pour l’upload des avatars et couvertures**
- **Architecture RESTful** avec routes modulaires

---

##  Fonctionnalités principales

-  Authentification sécurisée (JWT + Argon2)
-  Ajout, suppression et statut des livres (lu / à lire)
-  Upload d’avatar et de couverture de livre
-  Barre de recherche dynamique
-  Page “mon compte” avec affichage limité et boutons interactifs
-  Carrousel de livres sur la page d’accueil
-  Interface responsive et accessible (ARIA, mobile-first)

---

##  Installation

```bash
# Backend
cd backend
npm install
npm run dev
```

[Accès vers le repo du côté Front](https://github.com/O-clock-Cambridge/projet-blablabook)

```bash
# Frontend
cd frontend
npm install
npm run dev
```