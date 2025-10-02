# Brainstorming (ou tout simplement "NOTES"... 😉😉 "clin d'oeil, clin d'oeil")

## 30/09/2025

__🎯 Initialisation de la BDD__

   → Création et mise en place de la BDD,

   → Et tables de liaison OK,

   → Mise en place des migrations et test dbb réussi
 

## 🥸🤓🧐Les axes de réflexion et différentes tâches à faire pour demain

 __Voir avec la team Front , il veulent peut-être des books bien précis__

   → Suite à cette réflexion, nous avons décidé de mettre des livres que nous apprécions, individuellement, dans notre BDD.

__isbn ou id pour definir les clées primaires__

   → On sait que Sequelize nous gère automatiquement les id, et pour la taille de notre projet, nous avons finalement décidé de ne pas renseigner les id ou isbn.

__plus de rôle admin pour l'instant que le rôle user__

   → Nous avons retrouvé dans nos précédents projets, une manière de gérer les rôles. Par défaut, le rôle sera simple "user". 

 __On a rajouté un prénom pour la table des auteurs__

   → Effectivement, cela parraît tout à fait naturel mais cela nous a échappé durant notre réflexion pendant la première semaine (peut-être encore d'autres surprise......😉)


__on peut gérer l'apport des images seulement en renseignant l'url d'une image de chaque bouquin__

   → Par contre, pour être "large" au niveau du nombre de caractères, on renseignera STRING(255) pour le champ "cover", les URL peuvent être assez longue !
   Si nous passons par des url directement, cela nous enlêve de la gestion de upload du côté back
   et du côté front on pourra faire appel aux images → {book.cover}
   ex:
   ```svelte
   <img src="{book.cover}" alt="{book.title}" class="book-cover" /> 
   ```
   idée de gestion au niveau du css... pour remettre le 👃"nez dedans":
   ```css
   .book-cover {
  width: 100%;
  max-width: 300px;
  object-fit: cover;
  border-radius: 8px;
}
   ```
## 01/10/2025

__🎯 Effectivement nous avons réussi à gérer l'apport des images dans la BDD__

   → Changement fait au niveau du "cover"

__🎯 Nous avons fait les routes basiques pour la MVP__

   → Les routers et les controllers liés entre eux avec les "imports" pour les users, authors et genres, les tables de liaison ont été gérées (allez....presque toutes)



## 🥸🤓🧐Les axes de réflexion et différentes tâches à faire pour demain

   __Traîter les "Pull requests".__

   __Rôles à définir , se réferer à ce qui a été fait dans okanban .__

   __En fin de journée, nous nous sommes rendu compte que nous n'avions pas inclus de biographie pour les auteurs, donc à corriger.__

   __Nous devons mettre en place les routes de suppression et ajout d'un livre dans les bibliothèques de chaque "user".__

   __La gestion de l’upload d’images pour l’avatar de chaque  “user“ doit être finie le 02/10 .__

   __Les routes d'authentification  :__ 

   * POST /signup, pour la création d'un compte,

   * POST /login, pour la connexion avec la gestion d'un token (JWT),

   * Sécuriser les routes avec des middlewares d'authentification,

   * PUT /user/avatar pour l'upload, la mise à jour d'un avatar 
   
   * PUT /user/:id/book/:id
   
   * _Créer DELETE /user, pour la suppression d'un compte (<u>à voir si à faire de suite ou au moment du dernier sprint</u>)_ ,



### 🤯 Les difficultés rencontrés

   → Notre test de création de user a été long et éprouvant.... jusqu'à ce qu'on se rende compte que le positionnement des middlewares dans notre point d'entrer du site

   → Prise en main de Postman légèrement compliquée au début (peut-être avec la fatigue aussi 😉) 

---
---

## 02/10/2025

   __🎯 __   
      →

   __🎯 __   
      →
       
   __🎯 __   
      → 

## 🥸🤓🧐Les axes de réflexion et différentes tâches à faire pour demain

   __réflexion  .__

   __réflexion  .__

   __réflexion  .__

---

### 🤯 Les difficultés rencontrés


