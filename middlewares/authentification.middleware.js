import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      error: "You can't have access to this resource, please authentify",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT error:", err.message);
    return res.status(403).json({
      error: "Your token is invalid or has expired",
    });
  }
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
