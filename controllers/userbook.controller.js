import { User, Book, UserBook } from '../models/index.js';
import { Sequelize } from 'sequelize';

export const userbookController = {

  async getBooks(req, res) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;

    try {
      const user = await User.findByPk(req.user.id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const userbooks = await UserBook.findAll({
        where: { user_id: user.id },
        include: [
          { model: Book, as: "book" },
        ],
        order: [[{ model: Book, as: "book" }, 'title', 'ASC']],
        limit,
        offset
      });

      const totalBooks = await UserBook.count({
        where: { user_id: user.id }
      });
      const totalPages = Math.ceil(totalBooks / limit);

      res.json({
        page,
        totalPages,
        totalBooks,
        userbooks
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erreur lors de la récupération de la booklist' });
    }

  },

  // récupérer les livres de la booklist user //
  // async getFavorites(req, res) {
  //   try {
  //     const user = await User.findOne({
  //       where: { email: req.user.email }, // on récupère les infos user via le token front qui renvoie req.user //
  //       include: [
  //         {
  //           model: Book,
  //           as: "books",
  //           through: { attributes: [] }
  //         }
  //       ]
  //     });

  //     if (!user) {
  //       return res.status(404).json({ error: "User not found" });
  //     }

  //     res.status(200).json(user.books);
  //   } catch (error) {
  //     console.error("Erreur getFavoris :", error);
  //     res.status(500).json({ error: "Erreur serveur" });
  //   }
  // },

  //  notre méthode ici permet d'ajouter un livre à la booklist
  async addBookToUserList(req, res) {
    try {
      const { userId, bookId, toRead } = req.params;

      if (!userId || !bookId) {
        return res.status(400).json({ message: "userId et bookId sont requis" });
      }

      const user = await User.findByPk(userId);
      if (!user) return res.status(404).json({ message: "Utilisateur non trouvé." });

      const book = await Book.findByPk(bookId);
      if (!book) return res.status(404).json({ error: "Livre non trouvé." });

      const existingEntry = await UserBook.findOne({
        where: { user_id: userId, book_id: bookId },
      });

      if (existingEntry) {
        return res.status(400).json({ message: "Ce livre est déjà dans la liste de l'utilisateur." });
      }

      const userBook = await UserBook.create({
        user_id: userId,
        book_id: bookId,
        toRead: true,
      });

      return res.status(201).json({
        message: "Livre ajouté à la booklist avec succès.",
        data: userBook,
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erreur serveur", error: error.message });
    }
  },

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