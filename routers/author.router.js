import { Router } from "express";
import { authorController } from "../controllers/author.controller.js";

export const authorRouter = Router();

authorRouter.get('/authors', authorController.getAllAuthors);
authorRouter.get('/author/:id', authorController.getAuthorById);
