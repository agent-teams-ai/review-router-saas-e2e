const { createDb } = require("./db");

function findUserByEmail(email) {
  const db = createDb();
  return db.query("select * from users where email = ?", [email]);
}

function canLogin(email) {
  return Boolean(findUserByEmail(email));
}

module.exports = {
  canLogin,
  findUserByEmail,
};
