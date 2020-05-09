DROP DATABASE IF EXISTS PokerVault;
CREATE DATABASE PokerVault;

USE PokerVault;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id VARCHAR(100) UNIQUE PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(100)
);

/* for Location Type */
DROP TABLE IF EXISTS location_types;

CREATE TABLE location_types (
  id INT AUTO_INCREMENT PRIMARY KEY,
  location_type VARCHAR (100) UNIQUE
);

DROP TABLE IF EXISTS user_location_types;

CREATE TABLE user_location_types (
  user_id VARCHAR(100),
  location_type_id INT,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (location_type_id) REFERENCES location_types (id),
  PRIMARY KEY (user_id, location_type_id)
);

/* for Limit Type */
DROP TABLE IF EXISTS limit_types;

CREATE TABLE limit_types (
  id INT AUTO_INCREMENT PRIMARY KEY,
  limit_type VARCHAR (100) UNIQUE
);

DROP TABLE IF EXISTS user_limit_types;

CREATE TABLE user_limit_types (
  user_id VARCHAR(100),
  limit_type_id INT,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (limit_type_id) REFERENCES limit_types (id),
  PRIMARY KEY (user_id, limit_type_id)
);

/* for Stake */
DROP TABLE IF EXISTS stakes;

CREATE TABLE stakes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  stake VARCHAR (100) UNIQUE
);

DROP TABLE IF EXISTS user_stakes;

CREATE TABLE user_stakes (
  user_id VARCHAR(100),
  stake_id INT,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (stake_id) REFERENCES stakes (id),
  PRIMARY KEY (user_id, stake_id)
);

/* for Location */
DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  location VARCHAR (100) UNIQUE
);

DROP TABLE IF EXISTS user_locations;

CREATE TABLE user_locations (
  user_id VARCHAR(100),
  location_id INT,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (location_id) REFERENCES locations (id),
  PRIMARY KEY (user_id, location_id)
);

/* for Tournament Type */
DROP TABLE IF EXISTS tournament_types;

CREATE TABLE tournament_types (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tournament_type VARCHAR (100) UNIQUE
);

DROP TABLE IF EXISTS user_tournament_types;

CREATE TABLE user_tournament_types (
  user_id VARCHAR(100),
  tournament_type_id INT,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (tournament_type_id) REFERENCES tournament_types (id),
  PRIMARY KEY (user_id, tournament_type_id)
);

/* for Game */
DROP TABLE IF EXISTS games;

CREATE TABLE games (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game VARCHAR (100) UNIQUE
);

DROP TABLE IF EXISTS user_games;

CREATE TABLE user_games (
  user_id VARCHAR(100),
  game_id INT,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (game_id) REFERENCES games (id),
  PRIMARY KEY (user_id, game_id)
);

/* for Cash Game Session */
DROP TABLE IF EXISTS cash_sessions;

CREATE TABLE cash_sessions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game VARCHAR(100),
  stake VARCHAR(100),
  limit_type VARCHAR(100),
  location VARCHAR(100),
  location_type VARCHAR(100),
  start_time DATETIME,
  end_time DATETIME,
  buy_in INT,
  cashed_out INT,
  tips INT,
  notes VARCHAR(255),
  user_id VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

/* for Tournament Session */
DROP TABLE IF EXISTS tournament_sessions;

CREATE TABLE tournament_sessions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game VARCHAR(100),
  type VARCHAR(100),
  limit_type VARCHAR(100),
  location VARCHAR(100),
  location_type VARCHAR(100),
  player_total INT,
  start_time DATETIME,
  end_time DATETIME,
  entry_fee INT,
  cashed_out INT,
  places_paid INT,
  tips INT,
  notes VARCHAR(255),
  user_id VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES users (id)
);
