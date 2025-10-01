import "dotenv/config";
import express from "express";
import { apiRouter } from "./routers/index.js";
import cors from "cors";
import { xss } from "express-xss-sanitizer";


const PORT = process.env.PORT || 3000;
const app = express();

// routeur de l'api
app.use(apiRouter);

// On va se prémunir des attaques XSS
// via express-xss-sanitizer
app.use(xss());

// Les CORS ne s'appliquent que dans le cadre d'une API
app.use(cors());

// démarrage de l'api
app.listen(PORT, () => {
   console.log(`BlaBlaBook 📘📗📕 is "reading" 👍 on http://localhost:${PORT}`);
});

// It works !