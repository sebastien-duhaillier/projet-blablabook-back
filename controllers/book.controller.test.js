import { jest, test } from '@jest/globals';
import { bookController } from './book.controller.js';
import { Book } from '../models/index.js';

describe('bookController.getAllBooks', () => { //le 'describe' permet de regrouper plusieurs tests
   beforeEach(() => {
      jest.restoreAllMocks();
   });
   // cette fonction beforeEach est avant chaque test pour réinitialiser les mock, en gros c'est le point de départ au propre
   test('retourne la liste paginée des livres', async () => {
      jest.spyOn(Book, 'findAll').mockResolvedValue([
         { id: 1, title: "Livre 1" },
         { id: 2, title: "Livre 2" }
      ]);
      jest.spyOn(Book, 'count').mockResolvedValue(2);
      // jest.spyOn permet de surveiller les appels à une méthode spécifique, ici findAll et count de Book, et mockResolvedValue definit quellle valeur renvoyer quand cette méthode est appelée, ici 2 livres dans les parenthèses "Book" est le modèle sequelize et findall et count sont des méthodes de ce modèle
      const req = {
         query: {
            page: "1",
            limit: "2"
         },
         session: {} // ici on remet la session vide pour éviter les erreurs
      };
      const res = {
         json: jest.fn()
      };

      await bookController.getAllBooks(req, res); // dans req ici 

      expect(Book.findAll).toHaveBeenCalled();
      expect(Book.count).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({
         page: 1,
         totalPages: 1,
         totalBooks: 2,
         books: [
            { id: 1, title: "Livre 1" },
            { id: 2, title: "Livre 2" }
         ]
      });
   });
});
// et maintenant pour tester il faut lancer la commande 'npm test' dans le terminal
// pour clarifier un peu l'organisation des tests , j'ai dabord voulu faire un dossier 'tests' ,mais au final, j'ai préféré mettre ces derniers à côté pour un accès plus rapide, je suis peut-être un peu féniant aussi


// // pour ce test précis j'ai simulé (mocké) les méthodes findAll et count de Sequelize, le "const req = {
//          query: {
//             page: "1",
//             limit: "2"
//          }," simule une req Http avec des paramètres de pagination et le "const res" nous retourne en json les résultats attendus