import jwt from "jsonwebtoken"; // JSON Web Token pour générer ... un token

// import { User } from "../models/user.model.js"; // import du model



export function authenticate(req, res, next) {
   //       1 - On va vérifier que notre utilisateur a un token
   const authHeader = req.headers.authorization;

   // Si           nous n'avons pas l'entete 'Authorization'
   // Ou si la valeur ne débute pas par 'Bearer'
   if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(403).json({
         error: "You can't have access to this resource, please authentify",
      });
   }

   const token = authHeader.split(" ")[1];

   // Je récupère :
   // 1 - le token (évidemment LOL)
   // 2 - Le secret stocké dans notre .env
   const decoded = jwt.verify(token, process.env.JWT_SECRET);

   // Si le token est expiré ou invalide
   if (!decoded) {
      return res.status(403).json({
         error: "Your token is invalid or has been expired",
      });
   }

   // Maintenant qu'on a un token vérifié
   req.user = decoded;

   // On n'oublie pas de laisser passer à la suite
   next();
}







// // Méthode permettant de donner accès à une ressource selon un rôle
// // requiredRole => mettre le nom du rôle qui pourra accéder à la ressource
// export function isAllowed(requiredRole) {
//   // Ce middleware va venir récupérer l'utilisateur et son rôle
//   return async (req, res, next) => {
//     const user = await User.findOne({
//       where: { username: req.user.username },
//       include: { model: Role, as: "role" },
//     });

//     // Si l'utilisateur n'existe pas.. On renvoie une 404
//     if (!user) {
//       return res.status(404).json({ error: "User does not exists" });
//     }

//     // Si on sait que l'utilisateur est un admin
//     // on ne va pas chercher plus loin, on le laisse passer
//     if (user.role.name === "admin") return next();

//     // Si on doit affiner via un rôle sépcifique
//     // on va se baser sur le rôle que l'on donne en argument de la fonction
//     if (user.role.name !== requiredRole) {
//       return res.status(403).json({ error: "Access denied" });
//     }

//     // Si le role correspond, on peut laisser l'utilisateur
//     // passer à la suite
//     next();
//   };
// }
