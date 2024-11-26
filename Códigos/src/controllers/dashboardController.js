const dashboardModel = require("../models/dashboardModel");

function TotalPessoasController(req, res) {
    dashboardModel.TotalPessoas()
        .then((resultado) => {
            console.log("Dados retornados:", resultado);
            // if (resultado > 0) {
                res.status(200).json(resultado);
            // } else {
                // console.log("Nenhum dado encontrado.");
                // res.status(204).send(); // Status 204: Sem conteúdo
            // }
        })
        .catch((erro) => {
            console.error("Erro ao realizar a contagem:", erro);
            res.status(500).json({
                mensagem: "Houve um erro ao realizar a contagem!",
                erro: erro.sqlMessage
            });
        });
}

// function verificarRegistrosController(req, res) {
//     const { idUsuario } = req.body; // Desestruturação para pegar o ID do usuário

//     if (!idUsuario) {
//         return res.status(400).json({ mensagem: "ID do usuário é obrigatório." });
//     }

//     dashboardModel.verificarRegistros(idUsuario)
//         .then((resultado) => {
//             if (resultado.length === 1) {
//                 console.log("Registro encontrado:", resultado);
//                 res.status(200).json(resultado);
//             } else if (resultado.length === 0) {
//                 res.status(404).json({ mensagem: "Usuário sem pontuação registrada." });
//             } else {
//                 res.status(409).json({ mensagem: "Mais de uma pontuação registrada." });
//             }
//         })
//         .catch((erro) => {
//             console.error("Erro ao verificar registros:", erro);
//             res.status(500).json({
//                 mensagem: "Houve um erro ao verificar os registros.",
//                 erro: erro.sqlMessage
//             });
//         });
// }

function percentualPopularidadeFilme(req, res) {
    dashboardModel.percentualPopularidadeFilme()
        .then((resultado) => {
            console.log("Dados retornados:", resultado);
            // if (resultado.length > 0) {
                res.status(200).json(resultado);
            // } else {
                // console.log("Nenhum dado encontrado.");
                // res.status(204).send();
            // }
        })
        .catch((erro) => {
            console.error("Erro ao calcular percentual de popularidade:", erro);
            res.status(500).json({
                mensagem: "Houve um erro ao calcular o percentual de popularidade!",
                erro: erro.sqlMessage
            });
        });
}

function totalVotos(req, res) {
    dashboardModel.totalVotos()
        .then((resultados) => {
            console.log("Dados retornados:", resultados);
            // if (resultados > 0) {
                res.status(200).json(resultados);
            // } else {
                // res.status(204).send("Nenhum dado encontrado.");
            // }
        })
        .catch((erro) => {
            console.error("Erro ao buscar total de votos:", erro);
            res.status(500).json({
                mensagem: "Houve um erro ao buscar o total de votos.",
                erro: erro.sqlMessage
            });
        });
}

module.exports = {
    TotalPessoasController,
    // verificarRegistrosController,
    percentualPopularidadeFilme,
    totalVotos
};
