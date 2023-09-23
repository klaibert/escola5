import conexao from './banco.js';

// Criando as funções CRUD


// LER: função que vai ler todos os alunos do banco de dados (que no momento está vazio)
function ler(res) {
    const sql = "SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql, (erro, resultados) => {
        if(resultados === 0){
            res.status(204).end();
            return;
        }

        if(erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados);
        }
    });
}


// INSERIR: função que insere alunos no banco de dados
function inserir(aluno, res){
    const sql = "INSERT INTO alunos SET ?";
    conexao.query(sql, aluno, (erro) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({ "Status" : "aluno inserido!"});
            // res.status(201).json.end();
        }
    })
}


// LER UM ALUNO - Função que lê um único aluno baseado em seu ID
function lerUm(id, res) {
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados) => {
        if(resultados.length === 0){
            res.status(204).end();
            return;
        }

        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados[0]);
        }
    });
}

// ATUALIZAR - Função que atualiza todos/alguns dados do aluno
function atualizar(id, aluno, res) {
    const sql = "UPDATE alunos SET ? WHERE id = ?";
    conexao.query(sql, [aluno, id], (erro, resultados) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            // res.status(200).json({ "status" : "Atualizado com sucesso!"});
            res.status(200).json( {...aluno, id} );
        }
    });
}


// EXCLUIR - Função que exclui o aluno
function excluir (id, res) {
    const sql = "DELETE FROM alunos WHERE id = ?"

    conexao.query(sql, id, (erro, resultados) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json( { "Status" : "Aluno(a) excluído", id});
        }
    });
}


export { ler, inserir, lerUm, atualizar, excluir};