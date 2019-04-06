DROP DATABASE animals_db;

CREATE DATABASE animals_db;

USE animals_db;

CREATE TABLE animals (
    id INT AUTO_INCREMENT, 
    animal_name VARCHAR(255),
    PRIMARY KEY(id)
);