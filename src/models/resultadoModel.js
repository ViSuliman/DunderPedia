var database = require("../database/config");
function buscarUltimoResultadoQuiz(idUsuario,idQuiz){
    var instrucaoSql = `
        SELECT resultado.valor as total_acertos
        FROM resultado
        JOIN resultado_usuario ON resultado.idResultado = resultado_usuario.fkResultado
        WHERE resultado_usuario.fkUsuario = ${idUsuario} 
        AND resultado.fkQuiz = ${idQuiz} 
        ORDER BY resultado_usuario.data_hora DESC 
        LIMIT 1`;

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
    ranking
}
