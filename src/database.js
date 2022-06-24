const mysql = require("mysql");
const { promisify } = require("util");

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log(`Algo salió mal: ${err.code}`);
  }

  console.log("Base de datos conectada");
  if (connection) {
    connection.release();
  }

  return;
});

pool.query = promisify(pool.query);

module.exports = pool;
