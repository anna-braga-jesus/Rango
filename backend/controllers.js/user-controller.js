import {
  serverErrorResponse,
  STATUS_CODE,
} from "../controllers.js/helper-controller.js";
import {
  getUsers,
  insertUser,
  getComments,
} from "../repositories/auth-repository.js";

async function getUserPosts(req, res) {
  try {
    const userInfo = await getUsers();
    return res.status(200).send(userInfo);
  } catch (error) {
    return res.status(500).send("Deu ruim");
  }
}
async function createAUser(req, res) {
  const { nome, email, comentario } = req.body;
  console.log("nome, email, comentario", nome, email, comentario)
  try {
    const users = await insertUser(nome, email, comentario);
    return res.status(STATUS_CODE.OK).send("Created!");
  } catch (error) {
    return serverErrorResponse(res, error);
  }
}
async function getAllComments(req, res) {
  try {
    console.log(1)
    const allComments = await getComments();
    console.log(2)
    return res.send(allComments).status(200);
    console.log(3)
  } catch (error) {
    console.log('erro')
    return res.status(500).send("Deu ruim");
  }
}

export { getUserPosts, createAUser, getAllComments };
