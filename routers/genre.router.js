import { Router } from "express";
import { genreController } from "../controllers/index.js";

export const genreRouter = Router();

genreRouter.get('/genres', genreController.getAllGenres);
genreRouter.get('/genre/:id', genreController.getGenreById);
