create database dunderpedia;

use dunderpedia;

create table usuario(
idUsuario int primary key AUTO_INCREMENT,
nome varchar(50),
email varchar(50),
senha varchar(20),
personagem_favorito int);


select * from usuario;

create table quiz(
idQuiz int primary key AUTO_INCREMENT,
tipo varchar(50));

create table resultado(
idResultado int primary key AUTO_INCREMENT,
nome varchar(50),
valor int,
fkQuiz int,
foreign key (fkQuiz) references quiz(idQuiz));

create table resultado_usuario(
fkUsuario int,
fkResultado int,
data_hora datetime,
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkResultado) references resultado(idResultado),
primary key (fkUsuario, fkResultado)
);

insert into quiz (idQuiz,tipo) values
(1,'Conhecimento'),
(2,'Personalidade');

insert into resultado (valor,fkQuiz) values
(5,1);

insert into resultado_usuario values
(2,1,