import { Router } from "express";
import { bookController } from '../controllers/index.js';
import upload from "../middlewares/uploadCover.middleware.js";


export const bookRouter = Router();


bookRouter.get('/', bookController.getRandomBooks);
bookRouter.get('/catalog', bookController.getAllBooks);
bookRouter.get('/book/:id', bookController.getBookById);
bookRouter.post('/books/:id/cover', upload.single('cover'), bookController.uploadCover);

//  attention à bien être cohérents au niveau des nommage de routes....