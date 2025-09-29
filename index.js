import "dotenv/config";
import express from "express";
import cors from "cors";
import { xss } from "express-xss-sanitizer";


const PORT = process.env.PORT || 3000;
const app = express();


// démarrage de l'api
app.listen(PORT, () => {
   console.log(`BlaBlaBook 📘📗📕 is "reading" 👍 on http://localhost:${PORT}`);
});

// It works !