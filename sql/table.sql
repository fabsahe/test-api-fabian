CREATE TABLE IF NOT EXISTS users_test_fabsahe (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name_1 VARCHAR(60) NOT NULL,
  name_2 VARCHAR(60),
  lastname_1 VARCHAR(60) NOT NULL,
  lastname_2 VARCHAR(60) NOT NULL,
  birthday date NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
