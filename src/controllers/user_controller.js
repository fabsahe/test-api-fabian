const pool = require("../database");

exports.newUser = async (req, res) => {
  try {
    const user = req.body;
    await pool.query("INSERT INTO users_test_fabsahe SET ?", [user]);
    res.status(200).send("Usuario agregado");
  } catch (err) {
    const msg = "Error al guardar usuario";
    console.log(msg, err);
    res.status(500).send(msg);
  }
};
