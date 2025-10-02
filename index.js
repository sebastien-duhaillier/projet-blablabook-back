// 📦 Chargement des variables d'environnement depuis le fichier .env
import "dotenv/config";

// 🚀 Import des modules nécessaires
import express from "express";
import cors from "cors";
import { xss } from "express-xss-sanitizer";
import { apiRouter } from "./routers/index.js";

// 🔧 Initialisation de l'application Express
const PORT = process.env.PORT || 3000;
const app = express();

// 🧠 Middleware pour parser les données JSON envoyées par le client
// Permet de lire les requêtes avec Content-Type: application/json
app.use(express.json());

// 🧠 Middleware pour parser les données encodées en URL (formulaires)
// Permet de lire les requêtes avec Content-Type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// 🛡️ Middleware contre les attaques XSS (Cross-Site Scripting)
// Nettoie les entrées utilisateur pour éviter l'injection de scripts malveillants
app.use(xss());

// 🌍 Middleware CORS pour autoriser les appels cross-origin
// Utile si le frontend est hébergé sur un domaine différent
app.use(cors());

// 🛣️ Intégration du routeur principal de l'API
// Toutes les routes sont regroupées dans ./routers/index.js
app.use(apiRouter);

// 🟢 Démarrage du serveur Express
app.listen(PORT, () => {
   console.log(`BlaBlaBook 📘📗📕 is "reading" 👍 on http://localhost:${PORT}`);
});

