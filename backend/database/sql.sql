#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
CREATE USER docker;
CREATE DATABASE carrefour;
CREATE TABLE mensagens (
id SERIAL PRIMARY KEY,
nome varchar(50) ,
email varchar (50) ,
comentario varchar(100)
);
INSERT INTO mensagens (id, nome, email, comentario) VALUES (1, 'Anna', 'annajesus.nave@gmail.com', 'Tentativa');
GRANT ALL PRIVILEGES ON DATABASE docker TO docker;

EOSQL
