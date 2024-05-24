create database dunderpedia;

use dunderpedia;

create table usuario(
idUsuario int primary key AUTO_INCREMENT,
nome varchar(50),
email varchar(50),
senha varchar(20),
personagem_favorito int);

