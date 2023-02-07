import { connection } from "../database/data.js";

async function listUsersById(id) {
  const result = await connection.query(
    `
        SELECT * FROM users WHERE id = $1;
    `,
    [id]
  );
  return result;
}
async function listUsers() {
  const result = await connection.query(
    `
    SELECT * FROM users;`
  );
  return result;
}
async function insertUser(nome, email, comentario) {
  return (
    await connection.query(
      `INSERT INTO (nome,email, comentario ) VALUES ($1,$2,$3);`,
      [nome, email, comentario]
    )
  ).rows;
}

export { listUsersById, listUsers };
