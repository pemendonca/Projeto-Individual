var database = require("../database/config");

// Contar o número de pessoas que fizeram o quiz
function TotalPessoas() {
    var instrucaoSql = `
        SELECT COUNT(DISTINCT fkIdUsuario) AS totalPessoasFizeramQuiz
        FROM quiz_respostas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Verificar registros para um usuário específico
// function verificarRegistros(idUsuario) {
//     var instrucaoSql = `
//         SELECT * 
//         FROM quiz_respostas 
//         WHERE fkIdUsuario = ?;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql, idUsuario);
//     return database.executar(instrucaoSql, [idUsuario]);
// }

// Percentual de popularidade do filme mais votado
function percentualPopularidadeFilme() {
    var instrucaoSql = `
        SELECT 
            filme, 
            COUNT(*) AS votos,
            ROUND((COUNT(*) * 100.0 / (SELECT COUNT(*) FROM quiz_respostas)), 2) AS percentual_popularidade
        FROM 
            quiz_respostas
        GROUP BY 
            filme
        ORDER BY 
            votos DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Popularidade de todos os filmes
function totalVotos() {
    var instrucaoSql = `
        SELECT 
            filme,
            COUNT(*) AS votos,
            ROUND((COUNT(*) * 100.0 / (SELECT COUNT(*) FROM quiz_respostas)), 2) AS percentual_popularidade
        FROM 
            quiz_respostas
        GROUP BY 
            filme
        ORDER BY 
            votos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    TotalPessoas,
    // verificarRegistros,
    percentualPopularidadeFilme,
    totalVotos,
};
