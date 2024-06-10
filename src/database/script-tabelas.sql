create database dunderpedia;

use dunderpedia;

create table usuario(
idUsuario int primary key AUTO_INCREMENT,
nome varchar(50),
email varchar(50),
senha varchar(20),
personagem_favorito int);

create table quiz(
idQuiz int primary key AUTO_INCREMENT,
tipo varchar(50));

create table resultado (
fkUsuario int,
fkQuiz int,
data_hora datetime DEFAULT CURRENT_TIMESTAMP,
valor int,
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkQuiz) references quiz(idQuiz),
primary key (fkUsuario, fkQuiz, data_hora)
);






