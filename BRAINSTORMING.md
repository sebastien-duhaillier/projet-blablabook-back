# Brainstorming (ou tout simplement "NOTES"... 😉😉 "clin d'oeil, clin d'oeil")

## 30/09/2025

 __🤔 Voir avec la team Front , il veulent peut-être des books bien précis__

   → Suite à cette réflexion, nous avons décidé de mettre des livres que nous apprécions, individuellement, dans notre BDD.

__🤔 isbn ou id pour definir les clées primaires__

   → On sait que Sequelize nous gère automatiquement les id, et pour la taille de notre projet, nous avons finalement décidé de ne pas renseigner les id ou isbn.

__🤔 plus de rôle admin pour l'instant que le rôle user__

   → Nous avons retrouvé dans nos précédents projets, une manière de gérer les rôles. Par défaut, le rôle sera simple "user". 

 __🤔 On a rajouté un prénom pour la table des auteurs__

   → Effectivement, cela parraît tout à fait naturel mais cela nous a échappé durant notre réflexion pendant la première semaine (peut-être encore d'autres surprise......😉)


__🤔 on peut gérer l'apport des images seulement en renseignant l'url d'une image de chaque bouquin__

   → Par contre, pour être "large" au niveau du nombre de caractères, on renseignera STRING(255) , les URL peuvent être assez longue !
   Si nous passons par des url directement, cela nous enlêve de la gestion de upload du côté back
   et du côté front on pourra faire appel aux images → {book.cover}
   ex:
   ```svelte
   <img src="{book.cover}" alt="{book.title}" class="book-cover" /> 
   ```
   idée de gestion au niveau du css... pour remettre le "nez dedans":
   ```css
   .book-cover {
  width: 100%;
  max-width: 300px;
  object-fit: cover;
  border-radius: 8px;
}
   ```

   ↓↓↓ *Voici un tableau des urls, merci les IA* ↓↓↓

| Titre                                   | URL de l’image de couverture                                                                 |
|----------------------------------------|-----------------------------------------------------------------------------------------------|
| Orgueil et Préjugés                    | https://upload.wikimedia.org/wikipedia/commons/1/1e/PrideAndPrejudiceTitlePage.jpg           |
| Wild                                   | https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg                              |
| Veille sur elle                        | https://images.epagine.fr/9782378912432_1_75.jpg                                              |
| Rendez-vous avec le crime              | https://images.epagine.fr/9782290083246_1_75.jpg                                              |
| Paradise Kiss                          | https://upload.wikimedia.org/wikipedia/en/3/3e/Paradise_Kiss_vol01_Cover.jpg                 |
| NANA                                   | https://upload.wikimedia.org/wikipedia/en/2/2e/Nana_vol1_cover.jpg                           |
| Les Optimistes                         | https://images.epagine.fr/9782378910421_1_75.jpg                                              |
| Le Sympathisant                        | https://images-na.ssl-images-amazon.com/images/I/71vXqZxvXzL.jpg                              |
| Le journal de Mr Darcy                 | https://images-na.ssl-images-amazon.com/images/I/81xZ9ZKZKDL.jpg                              |
| La petite confiserie de l’allée nocturne | https://images.epagine.fr/9782378912241_1_75.jpg                                              |
| Impardonnable                          | https://images.epagine.fr/9782253179074_1_75.jpg                                              |
| Golden Kamui Tome 1                    | https://upload.wikimedia.org/wikipedia/en/1/1e/Golden_Kamuy_volume_1_cover.jpg               |
| Ernestine                              | https://images.epagine.fr/9782378912401_1_75.jpg                                              |
| Les Sept Sœurs                         | https://images-na.ssl-images-amazon.com/images/I/81Zz7kq3uXL.jpg                              |
| La Servante Écarlate                   | https://upload.wikimedia.org/wikipedia/en/1/14/TheHandmaidsTale.jpg                          |
| Druss la Légende                       | https://images-na.ssl-images-amazon.com/images/I/91ZzZzYzZzL.jpg                              |
| Endymion                               | https://images-na.ssl-images-amazon.com/images/I/81ZzZzZzZzL.jpg                              |
| Le Seigneur des Anneaux                | https://upload.wikimedia.org/wikipedia/en/8/8e/The_Lord_of_the_Rings_cover.gif               |
| Conan le Sim... (Conan le Barbare)     | https://upload.wikimedia.org/wikipedia/en/2/2e/Conan_the_Barbarian_%281982%29_poster.jpg     |



   → Changement fait au niveau du "cover"


   Pour définir des endpoints API avec Express et Sequelize à partir de tes modèles (User, Book, Author, Genre), tu vas créer des routes qui exposent des opérations comme GET, POST, PUT, DELETE. Voici une structure simple pour démarrer :


projet-blablabook-back/
├── controllers/
│   ├── book.controller.js
│   ├── user.controller.js
│   ├── author.controller.js
│   └── genre.controller.js
├── routers/
│   ├── book.router.js
│   ├── user.router.js
│   ├── author.router.js
│   └── genre.router.js
├── models/
│   └── index.js
├── index.js

Bon bah faut revoir pour les images 
Surement rechercher des liens à la mano;.....
Et à la mano ça marche... merci Sébastien Druss

Cet aprem on va faire les routes pour les user author et genre
à faire attention aux imports....

author les controllers importer :  models, sequelize, joi eventuellement
author les routes importer : le router express, le controller en rapport

user les routes importer : le router express, le controller en rapport
user les controllers importer :  models, sequelize, joi eventuellement

genre les routes importer : le router express, le controller en rapport
genre les controllers importer :  models, sequelize, joi eventuellement

et dans l'index.js des controllers, importer tous les controllers