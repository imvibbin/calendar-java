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
