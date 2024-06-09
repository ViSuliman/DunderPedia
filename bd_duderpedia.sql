create database dunderpedia;

use dunderpedia;

create table usuario(
idUsuario int primary key AUTO_INCREMENT,
nome varchar(50),
email varchar(50),
senha varchar(20),
personagem_favorito int);


select * from usuario;

select personagem_favorito, count(personagem_favorito) as Contador from usuario group by personagem_favorito order by Contador desc limit 1; 

create table quiz(
idQuiz int primary key AUTO_INCREMENT,
tipo varchar(50));

create table resultado (
fkUsuario int,
fkQuiz int,
data_hora datetime,
valor int,
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkQuiz) references quiz(idQuiz),
primary key (fkUsuario, fkQuiz)
);

insert into quiz (idQuiz,tipo) values
(1,'Conhecimento'),
(2,'Personalidade');




