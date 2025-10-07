import { Router } from "express";
import { userbookController } from "../controllers/userbook.controller.js";
import { authenticate } from '../middlewares/authentification.middleware.js';

export const userbookRouter = Router();

userbookRouter.get('/userbooks', authenticate, userbookController.getBooks);
userbookRouter.post('/user/:userId/book/:bookId', userbookController.addBookToUserList);
// userbookRouter.delete('/user/:userId/book/:bookId', userController.deleteBookFromUser);