import mysql2 from 'mysql2';

/* DB LOCAL 
// configuração da conexão
const conexao = mysql2.createConnection({
        host : 'localhost',
        user : 'root',
        password: '',
        database : 'escola3'
    });
*/


/* DB REMOTO 
// configuração da conexão
const conexao = mysql2.createConnection({
        host : 'https://srv28.hostgator.com.br',
        user : 'kuart612_apinode',
        password: 'Xrc6(b7TnOkl',
        database : 'kuart612_betapi'
    });
*/

    /* DB4Free*/
// configuração da conexão
const conexao = mysql2.createConnection({
    host : 'db4free.net',
    user : 'apialunos',
    password: 'Senac*123',
    database : 'apiescola3'
}); 


// conectando ao banco
// conexao.connect();

// conectando ao banco, verificando erro ou sucesso e informando
conexao.connect( erro => {
    if(erro){
        console.error(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado com sucesso!`);
    }
});

export default conexao;