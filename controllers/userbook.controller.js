import { User, Book, UserBook } from '../models/index.js';
import { Sequelize } from 'sequelize';

export const userbookController = {

    async getBooks(req, res) {
        try {
            const { userId } = req.params;
            const user = await User.findByPk(userId);
            const userbooks = await UserBook.findAll({
                where: { user_id: user.id },
                include: [
                    { model: Book, as: "book" },
                ]
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });                
            }
            res.json(userbooks);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Erreur lors de la récupération de la booklist' });
        }

    }
   //       if (!user || !book) {
   //          return res.status(404).json({ error: 'User or book not found' });
   //       }

   //       await user.addBook(book);
   //       res.status(200).json({ message: 'Book successfully added to user' });


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

};