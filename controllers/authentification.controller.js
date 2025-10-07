// import argon2 from "argon2"; // argon 2 permet le hashage des mots de passe
// import Joi from "joi"; // Joi sert à valider et vérifier la structure des données reçues (ex : corps de requête), pour s'assurer qu'elles respectent le format attendu
// import jwt from "jsonwebtoken"; // jwt (JSON Web Token) sert à générer et vérifier des tokens d'authentification pour sécuriser les échanges entre le client et le serveur
// import { User } from "../models/user.model.js";
// import { loginSchema } from "../schemas/login.schema.js";

// export const userAuthentificationController = {
//    // Controller de création d'un compte
//    async register(req, res) {
//       // 1 - Récupérer les informations de l'utilisateur
//       // Les infos passent dans le corps de la requête
//       const { name, email, firstname } = Joi.attempt(req.body, loginSchema);

//       // 2 - Je dois vérifier si l'utilisateur existe déjà
//       const isUserExists = await User.findOne({
//          where: { name: name, email: email, firstname: firstname }
//       });

//       // Si l'utilisateur existe
//       if (isUserExists) {
//          return res.status(409).json({ error: "User already exists" });
//       }

//       // 3 - Hashage du mot de passe
//       const hashedPassword = await argon2.hash(password);

//       // 4 - Ajouter l'utilisateur en BDD

//       // // Pour créer un user, j'ai besoin d'un role par défaut
//       // // Ici, je vais venir récupérer le rôle user de base
//       // const userRole = await Role.findOne({ where: { name: "user" } });

//       // Je crée mon utilisateur en lui donnant un rôle par défaut
//       const newUser = await User.create({
//          name,
//          password: hashedPassword,
//          // role_id: userRole.id, // Par défaut, mon utilisateur a le role "user"
//       });

//       // Au final, on renvoie un message pour indiquer que tout fonctionne
//       // 201 - Code HTTP spécifique à la création d'une ressource
//       res.status(201).json({ message: "Compte créé", name: newUser.name });
//    },

//    // Controller de connexion d'un utilisateur
//    async login(req, res) {
//       // 1 - On va récupérer les infos de l'utilisateur
//       const { name, password } = Joi.attempt(req.body, loginSchema);

//       // 2 - On va vérifier que l'utilisateur existe en BDD
//       const user = await User.findOne({
//          where: { name: name, email: email, password: password, firstname: firstname }
//       });

//       // Si l'utilisateur n'existe pas...
//       // '!' = null, undefined, 0, ''....
//       if (!user) {
//          return res.status(404).json({ error: "User does not exists" });
//       }

//       // 3 - Vérification du mot de passe
//       // argon2.verify prend deux arguments
//       // 1 - Le mot de passe hashé en BDD
//       // 2 - La tentative de mot de passe donné par l'utilisateur
//       const isPasswordValid = await argon2.verify(user.password, password);

//       // Si l'utilisateur a donné un mot de passe incorrect
//       if (!isPasswordValid) {
//          return res.status(403).json({ error: "Password is not correct, retry" });
//       }

//       // 4 - Génération du token JWT
//       // On va utiliser JWT pour générer un token basé sur un secret
//       // La méthode jwt.sign contient 3 arguments (2 premiers obligatoires)
//       // 1 - Payload (charge utile) => ce sont les infos à stocker dans le token (ex : username, idn ...) ATTENTION : pas de mot de passe
//       // 2 - Secret => Ce secret va permettre de chiffrer le token. Lors de la réception du token, le serveur saura le déchiffrer et vérifier que l'on a bien affaire à un utilisateur
//       // 3 - Options => Peut contenir des paramètres pour le token comme la durée de vie
//       const token = jwt.sign(
//          { name: user.name },
//          process.env.JWT_SECRET,
//          { expiresIn: "1h" } // on changera la durée du token
//       );

//       // Si l'utilisateur a les champs correspondants, on lui donne l'accès
//       res.status(200).json({ message: "Utilisateur connecté", token });
//    },

//    async getMe(req, res) {
//       // Je souhaite trouver un utilisateur via son username
//       // ! - On évite ici d'utiliser l'id pour des raisons de sécurité
//       // on ne dévoile pas la manière dont nous incrémentons nos ID
//       // Comme ça les pirates, bah ils savent pas comment nous pirater hin hin

//       const user = await User.findOne({
//          where: { name: req.user.name },
//          attributes: ["name"],
//       });

//       // Si l'utilisateur n'est pas trouvé, on va renvoyer une 404
//       if (!user) {
//          return res.status(404).json({ error: "User does not exists" });
//       }

//       // On va renvoyer la réponse de validation
//       res.status(200).json({ user });
//    },
// }




import argon2 from "argon2";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { loginSchema } from "../schemas/login.schema.js";
import { registerSchema } from "../schemas/register.schema.js";


export const userAuthentificationController = {
  async register(req, res) {
    try {
      const { name, email, password, firstname } = Joi.attempt(req.body, registerSchema);

      const isUserExists = await User.findOne({
        where: { email }
      });

      if (isUserExists) {
        return res.status(409).json({ error: "User already exists" });
      }

      const hashedPassword = await argon2.hash(password);

      const newUser = await User.create({
        name,
        email,
        firstname,
        password: hashedPassword,
        // role_id: userRole.id // si tu veux ajouter le rôle plus tard
      });

      res.status(201).json({ message: "Compte créé", name: newUser.name });
    } catch (error) {
      console.error("Erreur register :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = Joi.attempt(req.body, loginSchema);

      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return res.status(404).json({ error: "User does not exist" });
      }

      const isPasswordValid = await argon2.verify(user.password, password);

      if (!isPasswordValid) {
        return res.status(403).json({ error: "Password is incorrect" });
      }

      const token = jwt.sign(
        {
          email: user.email,
          id: user.id
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({ message: "Utilisateur connecté", token });
    } catch (error) {
      console.error("Erreur login :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },

  async getMe(req, res) {
    try {
      const user = await User.findOne({
        where: { email: req.user.email },
        attributes: ["name", "email", "firstname"]
      });

      if (!user) {
        return res.status(404).json({ error: "User does not exist" });
      }

      res.status(200).json(user);

/*          res.status(200).json({ user });
 */      } catch (error) {
      console.error("Erreur getMe :", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  },
};
