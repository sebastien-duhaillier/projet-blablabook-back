import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.get('/users', userController.getUsers);
userRouter.get('/user/:id', userController.getUserById);
// une autre route pour inscrire un user 
userRouter.post('/user', userController.createUser);
// une route pour connecter un user 
userRouter.post('/user/login', userController.loginUser);

// Routes pour ajouter ou supprimer un livre à la bibliothèque d’un utilisateur
userRouter.delete('/user/:userId/book/:bookId', userController.deleteBookFromUser);
userRouter.post('/user/:userId/book/:bookId', userController.addBookToUser);
