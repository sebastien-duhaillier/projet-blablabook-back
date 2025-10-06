import { Router } from "express";
import { authorController } from "../controllers/index.js";

export const authorRouter = Router();

authorRouter.get('/authors', authorController.getAllAuthors);
authorRouter.get('/author/:id', authorController.getAuthorById);

// conseil d'un pro: niveau du nommage on aurait pu garder au pluriel authors.