import { Router } from "express";
import { bookController } from '../controllers/book.controller.js';
import upload from "../middlewares/upload.middleware.js";





export const bookRouter = Router();






bookRouter.get('/home', bookController.getRandomBooks);       // sur la page d'accueil limit: 10 pour le caroussel
bookRouter.get('/catalog', bookController.getAllBooks);         // GET /api/books
bookRouter.get('/book/:id', bookController.getBookById);      // GET /api/books/:id
bookRouter.post('/books/:id/cover', upload.single('cover'), bookController.uploadCover);

