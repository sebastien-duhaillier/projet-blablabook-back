import { Router } from "express";
import { authorController } from "../controllers/index.js";

export const authorRouter = Router();

authorRouter.get('/authors', authorController.getAllAuthors);
authorRouter.get('/author/:id', authorController.getAuthorById);
