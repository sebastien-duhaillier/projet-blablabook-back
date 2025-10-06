import { Router } from "express";
import { userbookController } from "../controllers/userbook.controller.js";

export const userbookRouter = Router();

userbookRouter.get('/userbooks/:userId', userbookController.getBooks);
// userbookRouter.post('/user/:userId/book/:bookId', userController.addBookToUser);
// userbookRouter.delete('/user/:userId/book/:bookId', userController.deleteBookFromUser);