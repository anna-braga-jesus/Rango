import {
  conflictResponse,
  notFoundResponse,
  serverErrorResponse,
  unauthorizedResponse,
  validationSchema,
  createdResponse,
} from "../controllers.js/helper-controller.js";
import { getUserByEmail, getUsers } from "../repositories/auth-repository.js";
import { userSchema } from "../schemas/auth-schema.js";

async function signUpValidation(req, res, next) {
  const { nome, email, comentario } = req.body;
  console.log(req.body);
  const isValid = userSchema.validate(req.body, { abortEarly: false });
  if (isValid.error) {
    const error = isValid.error.details.map((erro) => erro.message);
    res.status(422).send(error);
    return;
  }
  try {
    const checkUserEmail = await getUserByEmail(email);

    if (checkUserEmail.rows.length > 0)
      return conflictResponse(res, "E-mail already registered!");
    res.locals.body = { nome, email, comentario };
  } catch (error) {
    return serverErrorResponse(res, error);
  }
  next();
}

async function loginValidation(req, res, next) {
  const { name, email, comentario } = req.body;

  validationSchema(res, userSchema, { name, email });

  try {
    const user = (await getUserByEmail(email)).rows[0];
    if (!user) return unauthorizedResponse(res, "E-mail are invalid!");

    const { id, name, email, comentario } = user;
    res.locals.user = { id, name, email, comentario };
    next();
  } catch (error) {
    return serverErrorResponse(res, error);
  }
}

export { signUpValidation, loginValidation };
