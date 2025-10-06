import { Router } from "express";
import { bookRouter } from "./book.router.js";
import { authorRouter } from "./author.router.js";
import { genreRouter } from "./genre.router.js";
import { userRouter } from "./user.router.js";
import { userbookRouter } from "./userbook.router.js";

export const apiRouter = Router();

apiRouter.get("/", (req, res) => {
   res.json({
      message: "Welcome to the BlaBlaBook API",
      description:
         "This is the API for the BlaBlaBook application.",
      version: "1.0.0",
      author: " BlaBlaBookers",
      base_get_routes: {
         books: "/books",
         book_id: '/books/:id',
         users: '/users',                // routes à voir
      },
   });
});


apiRouter.use(bookRouter); // page d'accueil avec les 10 livres aléatoires
apiRouter.use(authorRouter);
apiRouter.use(genreRouter);
apiRouter.use(userRouter);
apiRouter.use(userbookRouter);
