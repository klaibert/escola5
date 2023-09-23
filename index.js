import express from "express";
import {ler, inserir, lerUm, atualizar, excluir } from './src/aluno.js';

const app = express();
// const porta = 8080;
const porta = process.env.PORT || 3306;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ROTA RAIZ
app.get('/', function(req, res){
    res.send(`API de alunos, criada com NodeJS, Express e MySQL funcionando corretamente!`)
});

// CONFIGURANDO AS DEMAIS ROTAS UTILIZANDO OS VERBOS HTTP E MENSAGENS DE SERVIDOR


// GET: ROTA PARA TODOS OS ALUNOS DA API
app.get('/alunos', (req, res) => {
    // res.send(`Dados de todos os alunos`);
    ler(res);
});


// GET: UM ALUNO
app.get('/alunos/:id', (req, res) => {
    // res.send(`Dados de um aluno`);
    const id = parseInt(req.params.id);
    lerUm(id, res);
})


// POST: Endpoint para inserir novos alunos
app.post('/alunos', (req, res) => {
    // res.send('Inserindo UM aluno.');
    const novoAluno = req.body;
    inserir(novoAluno, res);
})

// PUT:  Endpoint para atualizar TODOS os dados de UM aluno
app.put('/alunos/:id', (req, res) => {
    res.send('Atualizar TODOS os dados de UM aluno.');
})

// PATCH:  Endpoint para atualizar todos/alguns dados de UM aluno
app.patch('/alunos/:id', (req, res) => {
    // res.send('Atualizar alguns ou todos os dados de UM aluno.');
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);
})

// DELETE:  Endpoint para excluir alunos
app.delete('/alunos/:id', (req, res) => {
    // res.send('Excluir UM aluno.');
    const id = parseInt(req.params.id);
    excluir(id, res);
})

// EXECUTANDO O SERVIDOR EXPRESS
app.listen(porta, () => {
    console.log(`Servidor express sendo executado corretamente na porta ${porta}`);
});

