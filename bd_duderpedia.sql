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
SELECT valor as numeroPersonagem, 
        count(valor) as Contador 
        FROM resultado 
        GROUP BY numeroPersonagem 
        ORDER BY Contador DESC 
        LIMIT  1;
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


insert into quiz (idQuiz,tipo) values
(1,'Conhecimento'),
(2,'Personalidade');

SELECT usuario.nome, MAX(resultado.valor) as media_acertos
FROM resultado
JOIN usuario ON resultado.fkUsuario = usuario.idUsuario
WHERE resultado.fkQuiz = 1
GROUP BY usuario.nome
ORDER BY media_acertos DESC
LIMIT 5;




