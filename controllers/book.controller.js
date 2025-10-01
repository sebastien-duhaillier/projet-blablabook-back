import { Book, Author, Genre } from '../models/index.js';
import { Sequelize } from 'sequelize';
import Joi from "joi";





export const bookController = {


   async getRandomBooks(req, res) {
      try {
         const books = await Book.findAll({
            order: Sequelize.literal('RANDOM()'),
            limit: 10
         });
         res.json(books);
      } catch (error) {
         res.status(500).json({ error: 'Erreur lors de la récupération des livres' });
      }
   },


   async getAllBooks(req, res) {
      try {
         const books = await Book.findAll({});
         res.json(books);
      } catch (error) {
         res.status(500).json({ error: 'Erreur lors de la récupération des livres' });
      }
   },

   // On oublie pas, il faut mettre des virugules ! ^^

   async getBookById(req, res) {
      try {
         const book = await Book.findByPk(req.params.id); // Inclure les auteurs et genres associés include: [Author, Genre]
         if (!book) return res.status(404).json({ error: 'Livre non trouvé' });
         res.json(book);
      } catch (error) {
         res.status(500).json({ error: 'Erreur serveur' });
      }
   },

}