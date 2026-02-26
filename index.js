import "dotenv/config";
import express from "express";
import cors from "cors";
import { xss } from "express-xss-sanitizer";
import { apiRouter } from "./routers/index.js";


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Configuration CORS pour la production
const allowedOrigins = process.env.FRONTEND_URL 
  ? process.env.FRONTEND_URL.split(',') 
  : ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:4173'];

const corsOptions = {
  origin: (origin, callback) => {
    // Autoriser les requêtes sans origin (ex: Postman, Railway healthcheck)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(null, true); // temporairement tout autoriser jusqu'au déploiement du front
  },
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(xss());

app.use('/uploads', express.static('uploads'));

app.use(apiRouter);

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ 
    error: "Route not found",
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Gestionnaire d'erreurs global
app.use((error, req, res, next) => {
  console.error('Error:', error);
  
  const statusCode = error.status || 500;
  const message = process.env.NODE_ENV === 'production' 
    ? 'Internal Server Error' 
    : error.message;
    
  res.status(statusCode).json({
    error: message,
    ...(process.env.NODE_ENV !== 'production' && { stack: error.stack })
  });
});


app.listen(PORT, () => {
  console.log(`BlaBlaBook 📘📗📕 is "reading" 👍 on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
