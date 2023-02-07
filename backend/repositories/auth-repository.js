import { connection } from "../database/data.js";

async function getUserByEmail(email) {
  const result = await connection.query(
    `SELECT * FROM mensagens WHERE email = $1;`,
    [email]
  );
  return result;
}
async function getUsers() {
  return (await connection.query(`SELECT * FROM mensagens;`)).rows;
}
async function getComments() {
  return (await connection.query(`SELECT comentario FROM mensagens;`)).rows;
}
async function getUserById(userid) {
  return connection.query(`SELECT * FROM sessions WHERE userid = $1;`, [
    userid,
  ]);
}
async function insertUser(nome, email, comentario) {
  return (
    await connection.query(
      `INSERT INTO mensagens (nome, email, comentario) VALUES ($1, $2, $3);`,
      [nome, email, comentario]
    )
  ).rows;
}
async function insertSession(email, userid) {
  return connection.query(
    `INSERT INTO sessions (email, userid) VALUES ($1, $2);`,
    [email, userid]
  );
}

async function deleteSession(userid) {
  return connection.query(`DELETE FROM sessions WHERE userid = $1;`, [userid]);
}
async function getSessionByEmail(email) {
  return connection.query(`SELECT * FROM sessions WHERE email = $1;`, [email]);
}

export {
  getUsers,
  getUserByEmail,
  getComments,
  getUserById,
  insertUser,
  insertSession,
  deleteSession,
};
