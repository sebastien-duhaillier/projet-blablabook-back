import { Genre, Book, Author, User, UserBook, sequelize } from "../models/index.js";

console.log("🌱 Seeding des tables...");

// Notre premier user !
const user1 = await User.create({ name: "Doe", firstname: "John", age: 25, role: "user", email: "John@Doe.example", password: "123456abc", avatar: "😂" });
const user2 = await User.create({ name: "Martin", firstname: "Sébastien", age: 32, role: "user", email: "sebastien.martin@example.com", password: "passSeba123", avatar: "🧔" });
const user3 = await User.create({ name: "Durand", firstname: "Ludivine", age: 29, role: "user", email: "ludivine.durand@example.com", password: "passLudi456", avatar: "👩‍🎨" });
const user4 = await User.create({ name: "Bernard", firstname: "Claude", age: 45, role: "user", email: "claude.bernard@example.com", password: "passClaude789", avatar: "🧓" });
const user5 = await User.create({ name: "Lemoine", firstname: "Bastien", age: 27, role: "user", email: "bastien.lemoine@example.com", password: "passBastien321", avatar: "👨‍💻" });
const user6 = await User.create({ name: "Dupuis", firstname: "Vincent", age: 34, role: "user", email: "vincent.dupuis@example.com", password: "passVincent654", avatar: "🧠" });



// notre premier livre
const book = await Book.create({ title: 'Le Mystère de la Vallée', release_date: '2022-05-15', cover: 'mystere-vallee.jpg', synopsis: 'Un thriller captivant dans une vallée isolée.', });
const book2 = await Book.create({ title: "Orgueil et Préjugés", release_date: "1813-01-28", cover: "http://localhost:3000/uploads/books/images/orgueil_et_prégugés.jpg", synopsis: "Une romance classique sur les mœurs et les préjugés dans l’Angleterre du XIXe siècle." });
const book3 = await Book.create({ title: "Wild", release_date: "2012-03-20", cover: "http://localhost:3000/uploads/books/images/wild.jpg", synopsis: "Le récit autobiographique de Cheryl Strayed, une randonnée de 1700 km pour se reconstruire." });
const book4 = await Book.create({ title: "Veiller sur elle", release_date: "2023-01-05", cover: "http://localhost:3000/uploads/books/images/veillier-sur-elle.jpg", synopsis: "Un roman poignant sur la mémoire, la guerre et la résilience." });
const book5 = await Book.create({ title: "Rendez-vous avec le crime", release_date: "2014-06-12", cover: "http://localhost:3000/uploads/les-dectectives-du-yorkshire.jpg", synopsis: "Une enquête cosy dans un village anglais menée par une bibliothécaire curieuse." });
const book6 = await Book.create({ title: "Paradise Kiss", release_date: "2000-01-01", cover: "http://localhost:3000/uploads/paradise-kiss.jpg", synopsis: "Un manga sur la mode, l’amour et la quête de soi dans le Tokyo branché." });
const book7 = await Book.create({ title: "NANA", release_date: "2000-05-26", cover: "https://m.media-amazon.com/images/I/91gNO2cThGL._SL1500_.jpg", synopsis: "Deux jeunes femmes nommées Nana, liées par le destin et les émotions dans un Tokyo vibrant." });
const book8 = await Book.create({ title: "Les Optimistes", release_date: "2019-02-07", cover: "https://m.media-amazon.com/images/I/71+1fdrur1S._SL1311_.jpg", synopsis: "Un roman sur la mémoire, la musique et les liens familiaux à travers les générations." });
const book9 = await Book.create({ title: "Le Sympathisant", release_date: "2015-04-02", cover: "https://m.media-amazon.com/images/I/71FZ0wImdIL._SL1311_.jpg", synopsis: "Un espion vietnamien infiltré dans la communauté exilée aux États-Unis après la guerre." });
const book10 = await Book.create({ title: "Le journal de Mr Darcy", release_date: "2007-09-15", cover: "https://m.media-amazon.com/images/I/81c7d5jb8mL._SL1500_.jpg", synopsis: "Une réécriture intime du classique de Jane Austen, vue par Darcy lui-même." });
const book11 = await Book.create({ title: "La petite confiserie de l’allée nocturne", release_date: "2021-11-10", cover: "https://m.media-amazon.com/images/I/91F7d914aQL._SL1500_.jpg", synopsis: "Un conte sucré et mystérieux dans une ruelle magique où les souvenirs prennent goût." });
const book12 = await Book.create({ title: "Impardonnable", release_date: "2015-03-12", cover: "https://m.media-amazon.com/images/I/717RVAj5c1L._SL1500_.jpg", synopsis: "Un roman noir sur la culpabilité, le silence et les conséquences irréversibles." });
const book13 = await Book.create({ title: "Golden Kamui Tome 1", release_date: "2014-08-01", cover: "https://m.media-amazon.com/images/I/71TbYXgB7tL._SL1107_.jpg", synopsis: "Un manga d’aventure historique sur la chasse au trésor dans le Japon de l’ère Meiji." });
const book14 = await Book.create({ title: "Ernestine", release_date: "2022-09-22", cover: "https://m.media-amazon.com/images/I/71BeUsemWrL._SL1276_.jpg", synopsis: "Une héroïne singulière dans un roman tendre et drôle sur la solitude et la liberté." });
const book15 = await Book.create({ title: "Les Sept Sœurs", release_date: "2014-12-01", cover: "https://m.media-amazon.com/images/I/81dTNOTZIpL._SL1500_.jpg", synopsis: "Une saga familiale inspirée des constellations, pleine de mystère et de voyages." });
const book16 = await Book.create({ title: "La Servante Écarlate", release_date: "1985-09-01", cover: "https://m.media-amazon.com/images/I/51H+qxDCtPL._SL1184_.jpg", synopsis: "Un roman dystopique sur la domination patriarcale et la résistance féminine." });
const book17 = await Book.create({ title: "Druss la Légende", release_date: "1993-06-01", cover: "https://m.media-amazon.com/images/I/81+mMDfliBL._SL1500_.jpg", synopsis: "Une épopée fantasy sur un guerrier mythique, entre honneur, combat et solitude." });
const book18 = await Book.create({ title: "Endymion", release_date: "1996-02-01", cover: "https://m.media-amazon.com/images/I/61OvhEOqvnL._SL1139_.jpg", synopsis: "Une aventure de science-fiction dans l’univers d’Hyperion, entre poésie et technologie." });
const book19 = await Book.create({ title: "Le Seigneur des Anneaux", release_date: "1954-07-29", cover: "https://m.media-amazon.com/images/I/91Eh5NIns6L._SL1500_.jpg", synopsis: "La quête épique de l’Anneau unique dans un monde fantastique peuplé de héros et de ténèbres." });
const book20 = await Book.create({ title: "Conan le cimmérien", release_date: "1932-01-01", cover: "http://localhost:3000/uploads/books/images/conan.jpg" , synopsis: "Les aventures brutales et mythiques du barbare Conan dans un monde sauvage et magique." });


// Les userbooks

const userbook1 = await UserBook.create({ user_id: user2.id, book_id: book20.id, toRead: true });
const userbook2 = await UserBook.create({ user_id: user3.id, book_id: book2.id, toRead: false });
const userbook3 = await UserBook.create({ user_id: user4.id, book_id: book5.id, toRead: false });
const userbook4 = await UserBook.create({ user_id: user5.id, book_id: book9.id, toRead: true  });
const userbook5 = await UserBook.create({ user_id: user6.id, book_id: book18.id, toRead: false });


// Les auteurs 

const author1 = await Author.create({
   name: "Dumas",
   firstname: "Alexandre",
   bio: "Alexandre Dumas, écrivain français du XIXe siècle, est célèbre pour ses romans historiques et d'aventure comme 'Les Trois Mousquetaires' et 'Le Comte de Monte-Cristo'. Son œuvre prolifique mêle panache, intrigue et héroïsme."
});

const author2 = await Author.create({
   name: "Austen",
   firstname: "Jane",
   bio: "Jane Austen, romancière anglaise du XIXe siècle, a marqué la littérature avec ses portraits ironiques de la société britannique. Ses œuvres comme 'Orgueil et Préjugés' explorent les relations et les conventions sociales."
});

const author3 = await Author.create({
   name: "Strayed",
   firstname: "Cheryl",
   bio: "Cheryl Strayed est une autrice américaine connue pour 'Wild', récit autobiographique d’un voyage initiatique sur le Pacific Crest Trail. Elle explore les thèmes du deuil, de la résilience et de la quête de soi."
});

const author4 = await Author.create({
   name: "Andrea",
   firstname: "Jean-Baptiste",
   bio: "Jean-Baptiste Andrea est un écrivain et réalisateur français. Ses romans sensibles et poétiques, comme 'Des diables et des saints', explorent l’enfance, la solitude et la rédemption avec une grande humanité."
});

const author5 = await Author.create({
   name: "Chapman",
   firstname: "Julia",
   bio: "Julia Chapman est une autrice britannique spécialisée dans les romans policiers. Sa série 'Les Détectives du Yorkshire' mêle humour, mystère et ambiance rurale dans un cadre pittoresque du nord de l’Angleterre."
});

const author6 = await Author.create({
   name: "Yazawa",
   firstname: "Ai",
   bio: "Ai Yazawa est une mangaka japonaise renommée pour ses œuvres 'NANA' et 'Paradise Kiss'. Elle explore les thèmes de la mode, de l’amour et de l’indépendance avec un style graphique distinctif et émotionnel."
});

const author7 = await Author.create({
   name: "Makkai",
   firstname: "Rebecca",
   bio: "Rebecca Makkai est une romancière américaine saluée pour 'Les Optimistes', un roman poignant sur la mémoire, la perte et l’épidémie du sida. Elle mêle finesse psychologique et narration subtile."
});

const author8 = await Author.create({
   name: "Nguyen",
   firstname: "Viet Thanh",
   bio: "Viet Thanh Nguyen est un écrivain vietnamien-américain, lauréat du prix Pulitzer pour 'Le Sympathisant'. Son œuvre interroge l’identité, l’exil et les cicatrices de la guerre du Vietnam."
});

const author9 = await Author.create({
   name: "Grange",
   firstname: "Amanda",
   bio: "Amanda Grange est une autrice britannique connue pour ses réécritures des romans de Jane Austen du point de vue masculin, comme 'Le Journal de Mr Darcy'. Elle revisite les classiques avec élégance et sensibilité."
});

const author10 = await Author.create({
   name: "Nakamura",
   firstname: "Sayaka",
   bio: "Sayaka Nakamura est une autrice japonaise spécialisée dans les récits fantastiques et poétiques. Elle est notamment connue pour 'Confiserie fictive', une œuvre délicate mêlant rêve et gourmandise."
});

const author11 = await Author.create({
   name: "Menegaux",
   firstname: "Mathieu",
   bio: "Mathieu Menegaux est un écrivain français contemporain. Ses romans courts et percutants abordent des sujets sensibles comme la justice, la culpabilité et les violences faites aux femmes."
});

const author12 = await Author.create({
   name: "Noda",
   firstname: "Satoru",
   bio: "Satoru Noda est un mangaka japonais, auteur de 'Golden Kamui', un manga historique et d’action se déroulant après la guerre russo-japonaise. Il mêle aventure, humour et ethnographie aïnou."
});

const author13 = await Author.create({
   name: "Delaume",
   firstname: "Chloé",
   bio: "Chloé Delaume est une autrice française singulière, mêlant autofiction, poésie et expérimentation littéraire. Elle explore les identités fragmentées et les récits intimes, notamment dans 'Ernestine'."
});

const author14 = await Author.create({
   name: "Riley",
   firstname: "Lucinda",
   bio: "Lucinda Riley est une romancière britannique célèbre pour la saga 'Les Sept Sœurs', mêlant romance, mystère et secrets de famille à travers le monde. Son œuvre séduit par son souffle narratif."
});

const author15 = await Author.create({
   name: "Atwood",
   firstname: "Margaret",
   bio: "Margaret Atwood est une écrivaine canadienne majeure, connue pour 'La Servante écarlate'. Elle explore les dystopies, les rapports de pouvoir et les enjeux féministes avec une plume acérée."
});

const author16 = await Author.create({
   name: "Gemmell",
   firstname: "David",
   bio: "David Gemmell était un auteur britannique de fantasy, célèbre pour ses récits épiques comme 'Druss la Légende'. Il mêle héroïsme, tragédie et réflexion sur le courage et la destinée."
});

const author17 = await Author.create({
   name: "Simmons",
   firstname: "Dan",
   bio: "Dan Simmons est un écrivain américain prolifique, connu pour ses sagas de science-fiction comme 'Hyperion' et 'Endymion'. Il mêle érudition, mysticisme et narration complexe."
});

const author18 = await Author.create({
   name: "Tolkien",
   firstname: "J.R.R.",
   bio: "J.R.R. Tolkien, philologue et écrivain britannique, est le père de la fantasy moderne. Son œuvre majeure, 'Le Seigneur des Anneaux', a marqué des générations par son univers riche et mythologique."
});

const author19 = await Author.create({
   name: "Howard",
   firstname: "Robert E.",
   bio: "Robert E. Howard est un écrivain américain du début du XXe siècle, créateur de Conan le Barbare. Il est considéré comme un pionnier de la fantasy héroïque et du pulp fiction."
});


// Les genres

const genre1 = await Genre.create({ name: "Roman" });
const genre2 = await Genre.create({ name: "Romance" });
const genre3 = await Genre.create({ name: "Autobiographie" });
const genre4 = await Genre.create({ name: "Drame" });
const genre5 = await Genre.create({ name: "Polar" });
const genre6 = await Genre.create({ name: "Manga" }); // pour Paradise Kiss et NANA
const genre7 = await Genre.create({ name: "Contemporain" });
const genre8 = await Genre.create({ name: "Thriller politique" });
const genre9 = await Genre.create({ name: "Réécriture classique" });
const genre10 = await Genre.create({ name: "Fantastique" });
const genre11 = await Genre.create({ name: "Noir" });
const genre12 = await Genre.create({ name: "Manga historique" });
const genre13 = await Genre.create({ name: "Roman contemporain" });
const genre14 = await Genre.create({ name: "Saga familiale" });
const genre15 = await Genre.create({ name: "Dystopie" });
const genre16 = await Genre.create({ name: "Fantasy" });
const genre17 = await Genre.create({ name: "Science-fiction" });
const genre18 = await Genre.create({ name: "High Fantasy" });
const genre19 = await Genre.create({ name: "Sword & Sorcery" });

// Voici notre table de liaison concernant book → auteur


await book2.addAuthor(author2);   // Orgueil et Préjugés → Jane Austen
await book3.addAuthor(author3);   // Wild → Cheryl Strayed
await book4.addAuthor(author4);   // Veille sur elle → JB Andrea
await book5.addAuthor(author5);   // Rendez-vous avec le crime → Julia Chapman
await book6.addAuthor(author6);   // Paradise Kiss → Ai Aiyazawa
await book7.addAuthor(author6);   // NANA → Ai Aiyazawa
await book8.addAuthor(author7);   // Les Optimistes → Rebecca Makkai
await book9.addAuthor(author8);   // Le Sympathisant → Viet Thanh Nguyen
await book10.addAuthor(author9);  // Journal de Mr Darcy → Amanda Grange
await book11.addAuthor(author10); // Confiserie nocturne → Sayaka Nakamura
await book12.addAuthor(author11); // Impardonnable → Mathieu Menegaux
await book13.addAuthor(author12); // Golden Kamui → Satoru Noda
await book14.addAuthor(author13); // Ernestine → Chloé Delaume
await book15.addAuthor(author14); // Les sept sœurs → Lucinda Riley
await book16.addAuthor(author15); // La Servante Écarlate → Margaret Atwood
await book17.addAuthor(author16); // Druss la légende → David Gemmell
await book18.addAuthor(author17); // Endymion → Dan Simmons
await book19.addAuthor(author18); // Seigneur des Anneaux → J.R.R. Tolkien
await book20.addAuthor(author19); // Conan → Robert E. Howard

// Voici notre table de liaison concernant book → genre


await book2.addGenre(genre2);   // Orgueil et Préjugés → Romance
await book3.addGenre(genre3);   // Wild → Autobiographie
await book4.addGenre(genre4);   // Veille sur elle → Drame
await book5.addGenre(genre5);   // Rendez-vous avec le crime → Polar
await book6.addGenre(genre6);   // Paradise Kiss → Manga
await book7.addGenre(genre6);   // NANA → Manga
await book8.addGenre(genre7);   // Les Optimistes → Contemporain
await book9.addGenre(genre8);   // Le Sympathisant → Thriller politique
await book10.addGenre(genre9);  // Journal de Mr Darcy → Réécriture classique
await book11.addGenre(genre10); // Confiserie nocturne → Fantastique
await book12.addGenre(genre11); // Impardonnable → Noir
await book13.addGenre(genre12); // Golden Kamui → Manga historique
await book14.addGenre(genre13); // Ernestine → Roman contemporain
await book15.addGenre(genre14); // Les sept sœurs → Saga familiale
await book16.addGenre(genre15); // La Servante Écarlate → Dystopie
await book17.addGenre(genre16); // Druss la légende → Fantasy
await book18.addGenre(genre17); // Endymion → Science-fiction
await book19.addGenre(genre18); // Seigneur des Anneaux → High Fantasy
await book20.addGenre(genre19); // Conan → Sword & Sorcery


// Voici notre table de liaison concernant user → book

// await user1.addBook([book]);             // ✅ alias = "books"
// await user2.addBook([book17, book18, book19, book20]);   // Sébastien → Orgueil et Préjugés
// await user3.addBook([book3, book2, book7, book11, book15, book16]);   // Ludivine → Wild
// await user4.addBook([book5, book6, book10, book13, book14]);   // Claude → Veille sur elle
// await user5.addBook([book10, book17, book19]);   // Bastien → Rendez-vous avec le crime
// await user6.addBook([book4, book8, book9, book12]);   // Vincent → Paradise Kiss



console.log("🎉 Seeding terminé avec succès");
await sequelize.close();

