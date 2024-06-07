var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/:idQuiz/:idUsuario", function (req, res) {
    resultadoController.buscarUltimoResultadoQuiz(req, res);
});

router.get("/:ranking", function (req, res) {
    resultadoController.ranking(req, res);
});

module.exports = router;