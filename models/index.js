// Importation des modèles Sequelize
import { User } from "./user.model.js";
import { Book } from "./book.model.js";
import { Genre } from "./genre.model.js";
import { Author } from "./author.model.js";
import { sequelize } from "./sequelize.client.js";


// ==============================
// ASSOCIATIONS MANY-TO-MANY
// ==============================

// 📚 Un utilisateur peut avoir plusieurs livres (empruntés, achetés, lus, etc.)
// Et un livre peut appartenir à plusieurs utilisateurs
User.belongsToMany(Book, {
   through: "user_has_book",         // Nom de la table de liaison personnalisée
   foreignKey: "user_id",            // Clé étrangère dans la table de liaison pointant vers User
   otherKey: "book_id",              // Clé étrangère dans la table de liaison pointant vers Book
   as: "books"                       // Alias pour accéder aux livres d’un utilisateur (user.getBooks(), user.addBook())
});

Book.belongsToMany(User, {
   through: "user_has_book",
   foreignKey: "book_id",
   otherKey: "user_id",
   as: "users"                       // Alias pour accéder aux utilisateurs d’un livre (book.getUsers(), book.addUser())
});

// 🎭 Un genre peut regrouper plusieurs livres
// Et un livre peut appartenir à plusieurs genres
Genre.belongsToMany(Book, {
   through: "belongs_to",            // Table de liaison entre Genre et Book
   foreignKey: "genre_id",
   otherKey: "book_id",
   as: "books"                       // genre.getBooks(), genre.addBook()
});

Book.belongsToMany(Genre, {
   through: "belongs_to",
   foreignKey: "book_id",
   otherKey: "genre_id",
   as: "genres"                      // book.getGenres(), book.addGenre()
});

// ✍️ Un auteur peut avoir écrit plusieurs livres
// Et un livre peut avoir plusieurs auteurs (co-écriture)
Author.belongsToMany(Book, {
   through: "written_by",           // Table de liaison entre Author et Book
   foreignKey: "author_id",
   otherKey: "book_id",
   as: "books"                      // author.getBooks(), author.addBook()
});

Book.belongsToMany(Author, {
   through: "written_by",
   foreignKey: "book_id",
   otherKey: "author_id",
   as: "authors"                    // book.getAuthors(), book.addAuthor()
});

// Exportation des modèles pour les utiliser ailleurs dans le projet
export { User, Book, Author, Genre, sequelize };