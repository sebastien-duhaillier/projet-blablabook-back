import { Router } from "express";
import { userController } from "../controllers/index.js";
import { userbookController } from "../controllers/userbook.controller.js";
import { userAuthentificationController } from "../controllers/index.js";
import { authenticate } from '../middlewares/authentification.middleware.js';
import avatarUpload from "../middlewares/uploadAvatar.middleware.js";
import upload from "../middlewares/uploadCover.middleware.js";


export const userRouter = Router();

userRouter.post('/user/register', avatarUpload.single('avatar'), userAuthentificationController.register);

userRouter.post('/user/login', userAuthentificationController.login);

userRouter.get('/auth/me', authenticate, userAuthentificationController.getMe);

userRouter.post('/user', userController.createUser);

userRouter.get('/users', userController.getUsers);

userRouter.get('/user/:id', userController.getUserById);

// userRouter.post('/user/:userId/avatar', upload.single('avatar'), userController.userAvatar);



// Références pour nommer les endpoints
// /me
// /me/books
// /me/books/:id

// {
//   "name": "Explorateur",
//   "firstname": "Nina",
//   "email": "nina.exploratrice@blablabook.fr",
//   "password": "VoyageLittéraire2025!",
//   "confirm": "VoyageLittéraire2025!",
//   "age": 26,
//   "avatar": [fichier image JPEG ou PNG — par exemple une carte ou un globe stylisé]
// }
