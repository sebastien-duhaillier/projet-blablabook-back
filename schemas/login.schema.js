import Joi from "joi";

export const loginSchema = Joi.object({
   name: Joi.string().required(),
   email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } }),
   password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9!@#$%^&*()_+\\-=[\\]{}|;:'\",.<>?/]{3,30}$")).required(),
   firstname: Joi.string().required(),
});
