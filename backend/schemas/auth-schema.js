import Joi from "joi";

const userSchema = Joi.object({
  nome: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().max(50).required(),
  comentario: Joi.string().max(100),
});

export { userSchema };
