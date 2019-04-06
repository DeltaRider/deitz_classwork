/*
mysql -u root -p < schema.sql

create a database called actors_db. Make an actors table with an id and actor_name
DROP DATABASE actors_db;
*/


CREATE DATABASE animals_db;

USE animals_db;

CREATE TABLE animal (
    id INT AUTO_INCREMENT, 
    animal_name VARCHAR(255),
    PRIMARY KEY(id)
);