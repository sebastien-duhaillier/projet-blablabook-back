import { Router } from "express";
import { userController } from "../controllers/index.js";
import { userAuthentificationController } from "../controllers/index.js";
import avatarUpload from "../middlewares/uploadAvatar.middleware.js";
import upload from "../middlewares/uploadCover.middleware.js";
import { authenticate } from '../middlewares/authentification.middleware.js';


export const userRouter = Router();
userRouter.post('/user/register', userAuthentificationController.register); // création d'un compte

userRouter.post('/user/login', userAuthentificationController.login); // login du user avec la gestion du token

userRouter.get('/auth/me', authenticate, userAuthentificationController.getMe);

userRouter.post('/user', userController.createUser);

userRouter.get('/users', userController.getUsers);

userRouter.get('/user/:id', userController.getUserById);


// Routes pour ajouter ou supprimer un livre à la bibliothèque d’un utilisateur
userRouter.delete('/user/:userId/book/:bookId', userController.deleteBookFromUser);
userRouter.post('/user/:userId/book/:bookId', userController.addBookToUser);
userRouter.post('/user/:userId/avatar', upload.single('avatar'), userController.userAvatar);




// userRouter.post('/user/register', avatarUpload.single('avatar'), userAuthentificationController.register); // création d'un compte

// userRouter.post('/user/register', userAuthentificationController.register); // création d'un compte

// userRouter.post('/user/login', userAuthentificationController.login); // login du user avec la gestion du token

// userRouter.get('/auth/me', authenticate, userAuthentificationController.getMe);

// est ce que ces routes n'ont pas plutôt leur place dans un /auth/register etc .....

// /me
// /me/books
// /me/books/:id