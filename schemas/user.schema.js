import Joi from "joi";



export const createUserSchema = Joi.object({



   name: Joi.string().trim().min(2).required(),
   firstname: Joi.string().trim().min(2).required(),
   age: Joi.number().integer().min(0).max(120),
   email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } }),
   password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
   avatar: Joi.string().uri().optional(),
});




// 📧 Validation du champ "email" avec Joi
// Joi.string()          → le champ doit être une chaîne de caractères
// .email(...)           → le champ doit respecter le format d'une adresse email
// { 
//   minDomainSegments: 2 → l'email doit contenir au moins deux segments de domaine (ex: "example.com" → ["example", "com"])
//   tlds: { allow: ['com', 'net'] } → seules les extensions ".com" et ".net" sont autorisées (ex: "user@gmail.com" ✅, "user@gmail.fr" ❌)
// }
// 👉 Cette validation est utile si tu veux restreindre les domaines à des TLD spécifiques pour des raisons métier ou de sécurité