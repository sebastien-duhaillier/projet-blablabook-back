import { Book, Author, Genre, User } from '../models/index.js';
import { Sequelize } from 'sequelize';
import Joi from "joi";





export const userController = {


   async getUsers(req, res) {
      try {
         const users = await User.findAll({
            include: [
               { model: Book, as: "books", through: { attributes: [] } },
            ]
         });
         res.json(users);
      } catch (error) {
         res.status(500).json({ error: 'Erreur lors de la récupération des users' });
      }
   },

   // On oublie pas, il faut mettre des virugules ! ^^

   async getUserById(req, res) {
      try {
         const user = await User.findByPk(req.params.id,
            {
               include: [
                  { model: Book, as: "books", through: { attributes: [] } },
               ]
            }
         );
         // Inclure les auteurs et genres associés include: [Author, Genre]
         if (!user) return res.status(404).json({ error: 'User non trouvé' });
         res.json(user);
      } catch (error) {
         res.status(500).json({ error: 'Erreur serveur' });
      }
   },


   async createUser(req, res) {
      const data = req.body;
      const user = await User.create(data);
      res.status(201).json(user);
      if (!user) {
         return res.status(400).json({ error: 'Error while creating user' })
      }
   },

   async loginUser(req, res) {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username: username } });
      if (!user || user.password !== password) {
         return res.status(401).json({ error: 'User not valid' });
      }
   }
}