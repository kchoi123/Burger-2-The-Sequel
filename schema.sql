DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burger_db;

CREATE TABLE burger
(
	id INT NOT NULL AUTO_INCREMENT,
	text VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burger (text, devoured) VALUES ('Meeses Burger', true);
INSERT INTO burger (text, devoured) VALUES ('Bobbi Burger', true);
INSERT INTO burger (text, devoured) VALUES ('Sylvester Burger', true);
INSERT INTO burger (text, devoured) VALUES ('Marilyn Manson Burger', false);
INSERT INTO burger (text, devoured) VALUES ('Joe Biden Burger', false);
INSERT INTO burger (text, devoured) VALUES ('Owens Burger', false);