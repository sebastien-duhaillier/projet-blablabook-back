import { Router } from "express";
import { userbookController } from "../controllers/userbook.controller.js";
import { authenticate } from '../middlewares/authentification.middleware.js';

export const userbookRouter = Router();


userbookRouter.delete('/user/:userId/book/:bookId', userbookController.removeBookFromUserList);
userbookRouter.put('/user/:userId/book/:bookId', userbookController.updateReadStatus);
userbookRouter.get('/user/:userId/book/:bookId/status', userbookController.checkBookStatus);

userbookRouter.get('/userbooks', authenticate, userbookController.getBooks);
userbookRouter.post('/user/:userId/book/:bookId', userbookController.addBookToUserList);