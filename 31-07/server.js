// Biblioteca usada para criar servidores com Node
const express = require('express');
// Biblioteca que permite interações com o banco
const mysql = require('mysql2');
// Permite que o servidor entenda o formato JSON
const bodyParser = require('body-parser');

// Crio o objeto Express, que me permite acessae métodos para configurar meu servidor
const app = express();
// Configura o servidor para aceitar dados no formato JSON
app.use(bodyParser.json());

// Configura a conexão, passando todas as informações necessárias para se conectar com o sevidor de banco de dados
const connection = mysql.createConnection({
    host: 'localhost', // endereço do servidor de banco de dados
    port: 3306, // porta que ele usa
    user: 'root', // usuário 
    password: 'root', // senha
    database: 'meu_backend' // nome EXATO do banco 
});

// O método connect (que é da biblioteca mysql2) tenta se conectar ao banco
// Se erro não for nulo, não faz a conexão
// Recebe como argumento uma função de callback - ou seja, uma função que ser executada depois que o banco de daddos responder.
connection.connect(error => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados: ' + error.stack);
        return;
    }
    console.log('Conectado ao banco de dados com ID ' + connection.threadId);
});


// Rotas

// Cria uma rota HTTP POST para cadastrar um novo usuário no banco de dados 
// app é a nossa aplicação Express
// .post() define que essa rota aceita apenas requisiçôes HTTP do yipo POST
// '/usuarios' é o caminho da URL
// (req, res) => {...} é a função de callback que será executado quando essa rota for chamada
// req (request): objeto que contém  todas as informações da requisição feita pelo cliente.
// res (response): objeto usado para enviar uma resposta ao cliente

app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, senha], (error) => {
        if (error) return res.status(500).send('Erro ao adicionar usuário. ' + error.message);
        res.status(201).send('Usuário adicionado com sucesso.');
    });
});


// Rota para obter todas as informações do usuario
app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, results) => {
        if (error) return res.status(500).send('Erro ao obter usuários.');
        res.json(results);
    });
});

// Rota para obter informações DE UM ÚNICO usuário
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results) => {
        if (error) return res.status(500).send('Erro ao obter o usuário: ' + error.message);
        res.json(results);
    });
})


app.put('/usuarios/:id', (req, res) => {
    const {id} = req.params;
    const { nome, email, senha } = req.body;
    const sql = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?';
    connection.query(sql, [nome, email, senha, id],(error) => {
        if (error) return res.status(500).send('Erro ao atualizar tabela' + error.message);
        res.json();
    } )

})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});