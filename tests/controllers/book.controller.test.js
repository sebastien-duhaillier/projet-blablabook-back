import { getBooks } from '../controllers/book.controller.js';
import { Book } from '../models/book.model.js';

import { describe, jest, test } from "@jest/globals";

describe('La méthode getBooks du bookController', () => {
   test('doit retourner  toute la liste des livres', async () => {
      const req = {
         body: {
            title: "Nouveau livre",
            release_date: "2023-10-01",
            cover: "http://example.com/cover.jpg",
            synopsis: "Ceci est le synopsis du livre."
         },
         session: {},
      };
      const res = {
         json: jest.fn(),
      };
      await getBooks(req, res);
      expect(res.json).toHaveBeenCalledWith(expect.arrayContaining([expect.objectContaining({
         title: "Nouveau livre",
         release_date: "2023-10-01",
         cover: "http://example.com/cover.jpg",
         synopsis: "Ceci est le synopsis du livre."
      })]));
   });
});