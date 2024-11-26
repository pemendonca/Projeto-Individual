var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/TotalPessoas", function (req, res) {
    dashboardController.TotalPessoasController(req, res);
});

// router.get("/verificarRegistros", function (req, res) {
//     dashboardController.verificarRegistrosController(req, res);
// });


router.get("/percentualPopularidadeFilme", function (req, res) {
    dashboardController.percentualPopularidadeFilme(req, res);
});

// router.get("/percentualPopularidade", function (req, res) {
//     dashboardController.percentualPopularidade(req, res);
// });

router.get("/totalVotos", function (req, res) {
    dashboardController.totalVotos(req, res);
});


module.exports = router;