export const STATUS_CODE = Object.freeze({
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  UNPROCESSABLE_ENTITY: 422,
  CONFLIT: 409,
});
function validationSchema(res, schema, body) {
  const validation = schema.validate(body, { abortEarly: false });

  if (validation.error) {
    const errorList = validation.error.details.map((error) => error.message);
    return res.status(STATUS_CODE.UNPROCESSABLE_ENTITY).send(errorList);
  }
}
function createdResponse(res) {
  return res.status(STATUS_CODE.CREATED).send("Created!");
}

function badRequestResponse(res) {
  return res.status(STATUS_CODE.BAD_REQUEST).send("Bad Request!");
}

function okResponse(res) {
  return res.status(STATUS_CODE.OK).send("OK");
}

function serverErrorResponse(res) {
  return res.status(STATUS_CODE.SERVER_ERROR).send("Internal Server Error");
}

function notFoundResponse(res) {
  return res.status(STATUS_CODE.NOT_FOUND).send("Not Found! Try again...");
}
function conflictResponse(res) {
  return res.status(STATUS_CODE.CONFLIT).send("Conflict");
}
function unauthorizedResponse(res) {
  return res.status(STATUS_CODE.UNAUTHORIZED).send("Unauthorized");
}
export {
  createdResponse,
  badRequestResponse,
  okResponse,
  unauthorizedResponse,
  notFoundResponse,
  serverErrorResponse,
  conflictResponse,
  validationSchema,
};
