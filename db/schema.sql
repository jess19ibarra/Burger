
create database burger_db;
use burger_db;

create table burgers
(
    id INT NOT NULL,
    burger_name VARCHAR
    (30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
);