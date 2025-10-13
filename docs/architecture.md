# 🏗️ Architecture du projet BlaBlaBook (Backend)

Ce projet suit une architecture **MVC (Modèle - Vue - Contrôleur)** adaptée à une API REST avec Express.js. L’objectif est de garantir une structure claire, maintenable et évolutive.

---

## 📁 Structure des dossiers

```bash
blablabook-backend/
│
├── controllers/              → Logique métier (Contrôleurs Express)
│   ├── authentification.controller.js
│   ├── author.controller.js
│   ├── author.controller.test.js
│   ├── book.controller.js
│   ├── book.controller.test.js
│   ├── genre.controller.js
│   ├── index.js
│   ├── user.controller.js
│   └── userbook.controller.js
│
├── docs/                     → Documentation technique
│   ├── api.md                → Liste des routes API
│   ├── architecture.md       → Explication de la structure MVC
│   ├── auth.md               → Flow d’authentification
│   └── middlewares.md        → Rôle des middlewares
│   
├── middlewares/             → Middlewares personnalisés
│   ├── authentification.middleware.js
│   ├── uploadAvatar.middleware.js
│   └── uploadCover.middleware.js
│   
├── migrations/                   → Modèles Sequelize (Base de données)
│   ├── 01.create-tables.js
│   └── 02.seed-tables.js   
│   
├── models/                   → Modèles Sequelize (Base de données)
│   ├── author.model.js
│   ├── book.model.js
│   ├── genre.model.js
│   ├── index.js
│   ├── sequelize.client.js
│   ├── user.model.js
│   └── userBook.model.js
│   
├── routers/                   → Routeurs Express (points d’entrée API REST)
│   ├── author.router.js
│   ├── book.router.js
│   ├── genre.router.js
│   ├── index.js
│   ├── user.router.js
│   └── userbook.router.js
│
├── schemas/                   → Configuration du projet
│   ├── login.schema.js
│   ├── register.schema.js
│   └── user.schema.js
│
│
├── uploads/                    → Tests unitaires et d’intégration
│   ├── avatars/
│   └── ...
│   ├── books/
│   └── ...
│  
├── utils/                    → Fonctions utilitaires
│   └── http-status-code.js
│
├── .env                    
├── .env.example                    
├── .gitignore                    
├── BRAINSTORMING.md                
├── app.js                    → Point d’entrée principal de l’application Express
├── jest.config.js                   
├── package-lock.json              → Dépendances et scripts NPM
├── package.json              → Dépendances et scripts NPM
└── README.md                 → Présentation générale du projet

```

<!-- Voici l'arborescence de notre app, côté back -->