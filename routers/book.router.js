import { Router } from "express";
import { bookController } from '../controllers/book.controller.js';

export const bookRouter = Router();






bookRouter.get('/', bookController.getRandomBooks);       // sur la page d'accueil limit: 10 pour le caroussel
bookRouter.get('/catalogue', bookController.getAllBooks);         // GET /api/books
bookRouter.get('/book/:id', bookController.getBookById);      // GET /api/books/:id


