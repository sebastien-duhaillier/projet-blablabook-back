import { Book, Author, Genre } from '../models/index.js';
import { Sequelize } from 'sequelize';
import { Op } from 'sequelize';


export const bookController = {


  async getRandomBooks(req, res) {
    try {
      const books = await Book.findAll({
        order: Sequelize.literal('RANDOM()'),
        limit: 10,
        include: [
          { model: Author, as: "authors", through: { attributes: [] } },
          { model: Genre, as: "genres", through: { attributes: [] } },
        ]
      });
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération des livres' });
    }
  },


  async getAllBooks(req, res) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;

    try {
      const books = await Book.findAll({
        include: [
          { model: Author, as: "authors", through: { attributes: [] } },
          { model: Genre, as: "genres", through: { attributes: [] } },
        ],
        order: [['release_date', 'DESC']],
        limit,
        offset
      });

      const totalBooks = await Book.count();
      const totalPages = Math.ceil(totalBooks / limit);

      res.json({
        page,
        totalPages,
        totalBooks,
        books
      });
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération des livres' });
    }
  },


  async getBookById(req, res) {
    try {
      const book = await Book.findByPk(req.params.id,
        {
          include: [
            { model: Author, as: "authors", through: { attributes: [] } },
            { model: Genre, as: "genres", through: { attributes: [] } },
          ]
        }
      );
      // Inclure les auteurs et genres associés include: [Author, Genre]
      if (!book) return res.status(404).json({ error: 'Livre non trouvé' });
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: 'Erreur serveur' });
    }
  },



  async uploadCover(req, res) {
    try {
      const book = await Book.findByPk(req.params.id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      book.cover = `${req.protocol}://${req.get('host')}/uploads/books/images/${req.file.filename}`;
      await book.save();

      res.status(200).json({ message: 'Cover image uploaded successfully', cover_url: book.cover });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });

    }

  },
async searchBooks(req, res) {
  try {
    const { q, sortBy = 'title', page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;

    if (!q || q.trim().length < 2) {
      return res.json({ books: [] });
    }

    const searchTerm = q.trim();

    // Recherche séparée pour chaque type
    const booksByTitle = await Book.findAll({
      where: {
        title: { [Op.iLike]: `%${searchTerm}%` }
      },
      include: [
        { model: Author, as: 'authors', through: { attributes: [] } },
        { model: Genre, as: 'genres', through: { attributes: [] } }
      ]
    });

    const booksByAuthor = await Book.findAll({
      include: [
        {
          model: Author,
          as: 'authors',
          through: { attributes: [] },
          where: {
            [Op.or]: [
              { name: { [Op.iLike]: `%${searchTerm}%` } },
              { firstname: { [Op.iLike]: `%${searchTerm}%` } }
            ]
          }
        },
        { model: Genre, as: 'genres', through: { attributes: [] } }
      ]
    });

    const booksByGenre = await Book.findAll({
      include: [
        { model: Author, as: 'authors', through: { attributes: [] } },
        {
          model: Genre,
          as: 'genres',
          through: { attributes: [] },
          where: {
            name: { [Op.iLike]: `%${searchTerm}%` }
          }
        }
      ]
    });

    // Fusionner les résultats et supprimer les doublons
    const allBooks = [...booksByTitle, ...booksByAuthor, ...booksByGenre];
    const uniqueBooks = allBooks.filter((book, index, self) => 
      index === self.findIndex(b => b.id === book.id)
    );

    // Pagination
    const paginatedBooks = uniqueBooks.slice(offset, offset + parseInt(limit));
    const totalBooks = uniqueBooks.length;
    const totalPages = Math.ceil(totalBooks / limit);

    console.log(`Recherche "${searchTerm}": ${uniqueBooks.length} livres trouvés`);

    res.json({ 
      page: parseInt(page), 
      totalPages, 
      totalBooks, 
      books: paginatedBooks 
    });
  } catch (error) {
    console.error('Erreur searchBooks:', error);
    res.status(500).json({ error: 'Erreur lors de la recherche de livres' });
  }
},  

};
