CREATE DATABASE IF NOT EXISTS makehabits_test;

USE makehabits_test;

CREATE TABLE
  IF NOT EXISTS users (
    user_id INTEGER AUTO_INCREMENT,
    username VARCHAR(255),
    password VARCHAR(255),
    rol_id INTEGER,
    PRIMARY KEY (user_id)
  );

INSERT INTO
  users (username, password, rol_id)
VALUES
  ('johndoe', 'secret', 1),
  ('maryjane', 'qwerty', 2),
  ('admin', 'admin', 3);
