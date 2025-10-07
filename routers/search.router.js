import { Router } from "express";
import { bookController } from "../controllers";


export const searchRouter = Router();

searchRouter.get('/suggestions', bookController.searchBooks);