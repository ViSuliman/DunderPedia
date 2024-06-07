var resultadoModel = require("../models/resultadoModel");

function buscarUltimoResultadoQuiz(req, res) {

    var idQuiz = req.params.idQuiz;
    var idUsuario = req.params.idUsuario;

    resultadoModel.buscarUltimoResultadoQuiz(idUsuario, idQuiz).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o resultado do quiz.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function ranking(req, res) {

    resultadoModel.ranking().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o resultado do quiz.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimoResultadoQuiz,
    ranking
}
