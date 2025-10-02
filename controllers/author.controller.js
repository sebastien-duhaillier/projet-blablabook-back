import { Book, Author, Genre } from '../models/index.js';
import { Sequelize } from 'sequelize';
import Joi from 'joi';

export const authorController = {

   async getAllAuthors(req, res) {
      try {
         const authors = await Author.findAll({});
         res.json(authors);
      } catch (error) {
         res.status(500).json({ error: 'Erreur lors de la récupération des auteurs' });
      }
   },

   async getAuthorById(req, res) {
      try {
         const { id } = req.params;
         if (isNaN(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
         }
         const author = await Author.findByPk(id);
         if (!author) {
            return res.status(404).json({ error: "Author not found. Please verify the provided ID" });
         }
         res.status(200).json(author);
      } catch (err) {
         res.status(500).json({ error: "Internal server error" });
      }
   },
};

// Il nous manque les méthodes pour lier les book avec le genres et les auteurs
