import Joi from "joi";

export const loginSchema = Joi.object({
   email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } }),
   password: Joi.string().required()
});


// attention aux restrictions à ce qu'elles soient justifiées, .com .net etc... sûrement à revoir
// et améliorer le password