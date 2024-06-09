var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/:idQuiz/:idUsuario", function (req, res) {
    resultadoController.buscarUltimoResultadoQuiz(req, res);
});

router.post("/:idQuiz/:idUsuario/:valor", function (req, res){
    resultadoController.inserirResultado(req, res);
});

router.get("/ranking", function (req, res) {
    resultadoController.ranking(req, res);
});

router.get("/:idQuiz", function (req, res){
    resultadoController.mostrarResultadoGeral(req, res);
});


module.exports = router;