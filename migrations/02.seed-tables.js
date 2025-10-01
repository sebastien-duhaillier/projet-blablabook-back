import { Genre, Book, Author, User, sequelize } from "../models/index.js";

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
const book2 = await Book.create({ title: "Orgueil et Préjugés", release_date: "1813-01-28", cover: "orgueil-prejuges.jpg", synopsis: "Une romance classique sur les mœurs et les préjugés dans l’Angleterre du XIXe siècle." });
const book3 = await Book.create({ title: "Wild", release_date: "2012-03-20", cover: "wild.jpg", synopsis: "Le récit autobiographique de Cheryl Strayed, une randonnée de 1700 km pour se reconstruire." });
const book4 = await Book.create({ title: "Veille sur elle", release_date: "2023-01-05", cover: "veille-sur-elle.jpg", synopsis: "Un roman poignant sur la mémoire, la guerre et la résilience." });
const book5 = await Book.create({ title: "Rendez-vous avec le crime", release_date: "2014-06-12", cover: "rendez-vous-crime.jpg", synopsis: "Une enquête cosy dans un village anglais menée par une bibliothécaire curieuse." });
const book6 = await Book.create({ title: "Paradise Kiss", release_date: "2000-01-01", cover: "paradise-kiss.jpg", synopsis: "Un manga sur la mode, l’amour et la quête de soi dans le Tokyo branché." });
const book7 = await Book.create({ title: "NANA", release_date: "2000-05-26", cover: "nana.jpg", synopsis: "Deux jeunes femmes nommées Nana, liées par le destin et les émotions dans un Tokyo vibrant." });
const book8 = await Book.create({ title: "Les Optimistes", release_date: "2019-02-07", cover: "les-optimistes.jpg", synopsis: "Un roman sur la mémoire, la musique et les liens familiaux à travers les générations." });
const book9 = await Book.create({ title: "Le Sympathisant", release_date: "2015-04-02", cover: "le-sympathisant.jpg", synopsis: "Un espion vietnamien infiltré dans la communauté exilée aux États-Unis après la guerre." });
const book10 = await Book.create({ title: "Le journal de Mr Darcy", release_date: "2007-09-15", cover: "journal-darcy.jpg", synopsis: "Une réécriture intime du classique de Jane Austen, vue par Darcy lui-même." });
const book11 = await Book.create({ title: "La petite confiserie de l’allée nocturne", release_date: "2021-11-10", cover: "confiserie-nocturne.jpg", synopsis: "Un conte sucré et mystérieux dans une ruelle magique où les souvenirs prennent goût." });
const book12 = await Book.create({ title: "Impardonnable", release_date: "2015-03-12", cover: "impardonnable.jpg", synopsis: "Un roman noir sur la culpabilité, le silence et les conséquences irréversibles." });
const book13 = await Book.create({ title: "Golden Kamui Tome 1", release_date: "2014-08-01", cover: "golden-kamui.jpg", synopsis: "Un manga d’aventure historique sur la chasse au trésor dans le Japon de l’ère Meiji." });
const book14 = await Book.create({ title: "Ernestine", release_date: "2022-09-22", cover: "ernestine.jpg", synopsis: "Une héroïne singulière dans un roman tendre et drôle sur la solitude et la liberté." });
const book15 = await Book.create({ title: "Les Sept Sœurs", release_date: "2014-12-01", cover: "sept-soeurs.jpg", synopsis: "Une saga familiale inspirée des constellations, pleine de mystère et de voyages." });
const book16 = await Book.create({ title: "La Servante Écarlate", release_date: "1985-09-01", cover: "servante-ecarlate.jpg", synopsis: "Un roman dystopique sur la domination patriarcale et la résistance féminine." });
const book17 = await Book.create({ title: "Druss la Légende", release_date: "1993-06-01", cover: "druss-legende.jpg", synopsis: "Une épopée fantasy sur un guerrier mythique, entre honneur, combat et solitude." });
const book18 = await Book.create({ title: "Endymion", release_date: "1996-02-01", cover: "endymion.jpg", synopsis: "Une aventure de science-fiction dans l’univers d’Hyperion, entre poésie et technologie." });
const book19 = await Book.create({ title: "Le Seigneur des Anneaux", release_date: "1954-07-29", cover: "seigneur-anneaux.jpg", synopsis: "La quête épique de l’Anneau unique dans un monde fantastique peuplé de héros et de ténèbres." });
const book20 = await Book.create({ title: "Conan le Sim...", release_date: "1932-01-01", cover: "conan.jpg", synopsis: "Les aventures brutales et mythiques du barbare Conan dans un monde sauvage et magique." });


// Les auteurs 
const author1 = await Author.create({ name: "Dumas", firstname: "Alexandre" });
const author2 = await Author.create({ name: "Austen", firstname: "Jane" });
const author3 = await Author.create({ name: "Strayed", firstname: "Cheryl" });
const author4 = await Author.create({ name: "Andrea", firstname: "Jean-Baptiste" });
const author5 = await Author.create({ name: "Chapman", firstname: "Julia" });
const author6 = await Author.create({ name: "Aiyazawa", firstname: "Ai" }); // pour Paradise Kiss et NANA
const author7 = await Author.create({ name: "Makkai", firstname: "Rebecca" });
const author8 = await Author.create({ name: "Nguyen", firstname: "Viet Thanh" });
const author9 = await Author.create({ name: "Grange", firstname: "Amanda" }); // Journal de Mr Darcy
const author10 = await Author.create({ name: "Nakamura", firstname: "Sayaka" }); // Confiserie fictive
const author11 = await Author.create({ name: "Menegaux", firstname: "Mathieu" });
const author12 = await Author.create({ name: "Noda", firstname: "Satoru" }); // Golden Kamui
const author13 = await Author.create({ name: "Delaume", firstname: "Chloé" }); // Ernestine
const author14 = await Author.create({ name: "Riley", firstname: "Lucinda" }); // Les sept sœurs
const author15 = await Author.create({ name: "Atwood", firstname: "Margaret" });
const author16 = await Author.create({ name: "Gemmell", firstname: "David" }); // Druss
const author17 = await Author.create({ name: "Simmons", firstname: "Dan" }); // Endymion
const author18 = await Author.create({ name: "Tolkien", firstname: "J.R.R." });
const author19 = await Author.create({ name: "Howard", firstname: "Robert E." }); // Conan

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

await user1.addBook([book]);             // ✅ alias = "books"
await user2.addBook([book17, book18, book19, book20]);   // Sébastien → Orgueil et Préjugés
await user3.addBook([book3, book2, book7, book11, book15, book16]);   // Ludivine → Wild
await user4.addBook([book5, book6, book10, book13, book14]);   // Claude → Veille sur elle
await user5.addBook([book10, book17, book19]);   // Bastien → Rendez-vous avec le crime
await user6.addBook([book4, book8, book9, book12]);   // Vincent → Paradise Kiss





console.log("🎉 Seeding terminé avec succès");
await sequelize.close();

