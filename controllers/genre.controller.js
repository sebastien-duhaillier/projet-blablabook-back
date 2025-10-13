import { Genre } from '../models/index.js';


export const genreController = {

  async getAllGenres(req, res) {
    try {
      const genres = await Genre.findAll({});
      res.json(genres);
    } catch (error) {
      res.status(500).json({ error: 'Cannot get genres' });
    }
  },

  async getGenreById(req, res) {
    try {
      const { id } = req.params;
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }
      const genre = await Genre.findByPk(id);
      if (!genre) {
        return res.status(404).json({ error: "Genre not found. Please verify the provided ID" });
      }
      res.status(200).json(genre);
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
