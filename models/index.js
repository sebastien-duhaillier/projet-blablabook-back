import { User } from "./user.model.js";
import { Book } from "./book.model.js";
import { UserBook } from "./userBook.model.js";
import { Genre } from "./genre.model.js";
import { Author } from "./author.model.js";
import { sequelize } from "./sequelize.client.js";


UserBook.belongsTo(User, {
   foreignKey: 'user_id',
   as: 'user'
});

User.hasMany(UserBook, {
   foreignKey: 'user_id',
   as: 'userBooks'
});

User.belongsToMany(Book, {
   through: UserBook,                  
   foreignKey: "user_id",             // Clé étrangère dans la table de liaison pointant vers User
   as: "books"                        // Alias pour accéder aux livres d'un utilisateur
});

Book.belongsToMany(User, {
   through: UserBook,                  
   foreignKey: "book_id",             // Clé étrangère dans la table de liaison pointant vers Book
   as: "users"                        // Alias pour accéder aux utilisateurs possédant le livre
});

UserBook.belongsTo(Book, {
   foreignKey: "book_id",
   as: "book"
});

Book.hasMany(UserBook, {
   foreignKey: "book_id",
   as: "userBooks"
});


Genre.belongsToMany(Book, {
   through: "belongs_to",           
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


Author.belongsToMany(Book, {
   through: "written_by",           
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


export { User, Book, Author, Genre, UserBook, sequelize };