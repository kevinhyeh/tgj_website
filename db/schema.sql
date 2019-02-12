CREATE DATABASE tgj_db;

USE tgj_db;

CREATE TABLE projects(
  id INT AUTO_INCREMENT NOT NULL,
  project VARCHAR(45) NOT NULL,
  price INT NOT NULL,
  description VARCHAR(300) NOT NULL,
  PRIMARY KEY (id)
);
