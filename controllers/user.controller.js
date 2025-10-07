import { Book, Author, Genre, User } from '../models/index.js';
import Joi from "joi";
import { createUserSchema } from '../schemas/user.schema.js';


  


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
      try {
         console.log("Données reçues :", req.body); // ← vérifie ce que Postman envoie
         const data = Joi.attempt(req.body, createUserSchema);
         const user = await User.create(data);
         res.status(201).json(user);
      } catch (error) {
         console.error(error);
         res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
      }
   },


   async loginUser(req, res) {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username: username } });
      if (!user || user.password !== password) {
         return res.status(401).json({ error: 'User not valid' });
      }
   },

   //  notre méthode ici permet d'ajouter un livre à la booklist
   // async addBookToUser(req, res) {
   //    try {
   //       const { userId, bookId } = req.params;
   //       const user = await User.findByPk(userId);
   //       const book = await Book.findByPk(bookId);

   //       if (!user || !book) {
   //          return res.status(404).json({ error: 'User or book not found' });
   //       }

   //       await user.addBook(book);
   //       res.status(200).json({ message: 'Book successfully added to user' });
   //    } catch (error) {
   //       console.error(error);
   //       res.status(500).json({ error: 'Internal server error' });
   //    }
   // },

   //  notre méthode ici permet de supprimer un livre de la booklist

   // async deleteBookFromUser(req, res) {
   //    try {
   //       const { userId, bookId } = req.params;
   //       const user = await User.findByPk(userId);
   //       const book = await Book.findByPk(bookId);

   //       if (!user || !book) {
   //          return res.status(404).json({ error: 'User or book not found' });
   //       }

   //       await user.removeBook(book);
   //       res.status(200).json({ message: 'Book successfully removed from user' });
   //    } catch (error) {
   //       console.error(error);
   //       res.status(500).json({ error: 'Internal server error' });
   //    }
   // },


   // notre méthode ici permet de récupérer la booklist d'un utilisateur

   // userBooks(req, res) {
   //    try {
   //       const { userId } = req.params;
   //       const user = await User.findByPk(userId);
   //       const books = await Book.findAll({
   //          where: 
   //       });

   //       if (!user || !book) {
   //          return res.status(404).json({ error: 'User or book not found' });
   //       }

   //       await user.addBook(book);
   //       res.status(200).json({ message: 'Book successfully added to user' });
   //    } catch (error) {
   //       console.error(error);
   //       res.status(500).json({ error: 'Internal server error' });
   //    }
   // };


   async userAvatar(req, res) {

      try {
         const { userId } = req.params;
         if (!userId) {
            return res.status(400).json({ error: 'UserId is required' });
         }
         user.avatar = req.file.path;
         await user.save();
         res.status(200).json({ message: 'Avatar image uploaded successfully' });
      } catch (error) {
         console.error(error);
         res.status(500).json({ error: 'Internal server error' });
      }


   }
};



