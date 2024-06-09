var database = require("../database/config");
function buscarUltimoResultadoQuiz(idUsuario,idQuiz){
    var instrucaoSql = `
        SELECT resultado.valor as total_acertos
        FROM resultado
        WHERE resultado.fkUsuario = ${idUsuario} 
        AND resultado.fkQuiz = ${idQuiz} 
        ORDER BY resultado.data_hora DESC 
        LIMIT 1`;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function inserirResultado(idUsuario,idQuiz,valor){
    var instrucaoSql = `
        INSERT INTO resultado (fkUsuario, fkQuiz, valor) VALUES
        (${idUsuario}, ${idQuiz}, ${valor})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarResultadoGeral(idQuiz){
    var instrucaoSql = `
        SELECT usuario.nome as nome, MAX(resultado.valor) as acertos
        FROM resultado
        JOIN usuario ON resultado.fkUsuario = usuario.idUsuario
        WHERE resultado.fkQuiz = ${idQuiz}
        GROUP BY nome
        ORDER BY acertos DESC
        LIMIT 5;`
       ;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ranking(){
    var instrucaoSql = `
        SELECT personagem_favorito, 
        count(personagem_favorito) as Contador 
        FROM usuario 
        GROUP BY personagem_favorito 
        ORDER BY Contador DESC 
        LIMIT 1`;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimoResultadoQuiz,
    inserirResultado,
    mostrarResultadoGeral,
    ranking
}
