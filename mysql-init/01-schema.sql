-- mysql-init/01-schema.sql
CREATE DATABASE IF NOT EXISTS cards;
USE cards;

CREATE TABLE IF NOT EXISTS flashcards (
  id VARCHAR(255) PRIMARY KEY,
  box   INT NOT NULL,
  level INT NOT NULL,
  front   TEXT,
  back    TEXT,
  example TEXT
);
