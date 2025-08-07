import express, { Application, NextFunction, Request, Response, request,  } from 'express';

const app: Application = express();  // Tipando 'app' como 'Application'

// Define a porta 300 para o servidor escutar
const PORT: number = 3000;  // Tipagem da porta como número

// Middleware para permitir que o Express interprete JSON
app.use(express.json());


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//2️⃣ Adicione um middleware que registre na hora exata da requisição no console. Execute os recursos (classes, interfaces, bibliotecas, métodos, etc) 
//para usar e faça comentários explicando seu uso.

// Aqui estamos criando um middleware global usando app.use().
// Isso significa que ele será executado em todas as requisições feitas ao servidor.
app.use((req: Request, res: Response, next: NextFunction) => {

    // A classe Date é uma classe nativa do JavaScript que representa uma data e hora.
    // Quando usamos new Date(), estamos criando um novo objeto com a data e hora atuais.
    let data = new Date();  

    // Aqui estamos exibindo no console a data e hora da requisição.
    // O método console.log() imprime informações no terminal.
    console.log("Requisição feita em: " + data);

    // A função next() é fundamental nos middlewares.
    // Ela permite que o Express continue para o próximo middleware ou rota.
    // Se não chamarmos next(), a requisição "trava" e não continua.
    next();
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//1️⃣ Crie uma rota GET /sobreque retorna um JSON com seu nome, idade e descrição

// Quando alguém acessar a rota /sobre usando o método GET,
// essa função vai ser executada.
app.get('/sobre', (req: Request, res: Response): Response => {

    // Aqui eu estou retornando um JSON com algumas informações minhas.
    // O status 200 significa que deu tudo certo.
    return res.status(200).json({
        nome: 'Luis Henrique Pedroso Santarem', // Meu nome
        idade: 19, // Minha idade
        descricao: 'Sou um estudante de Desenvolvimento de Sistema do Senac' // Uma descrição sobre mim
    });
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//3️⃣ Crie uma rota POST /comentariosque recebe um JSON com "texto".

// Essa rota recebe comentários enviados por alguém usando o método POST.
// O caminho da rota é /comentarios.
app.post('/comentarios', (req: Request, res: Response): Response => {

    // Aqui eu pego o campo "texto" que foi enviado no corpo da requisição (req.body).
    const { texto } = req.body;
    // Se a pessoa não mandou o campo "texto", eu respondo com erro 400.
    // Isso significa que a requisição está errada ou incompleta.
    if (!texto)
        return res.status(400).json({
            mensagem: 'O campo "texto" é obrigatório!' // Aviso para o usuário preencher o campo
        });

    // Se o "texto" foi enviado direitinho, eu retorno status 201 (criado com sucesso)
    // e uma mensagem confirmando o recebimento do comentário.
    return res.status(201).json({
        mensagem: `Comentário recebido: ${texto}` // Confirmação com o próprio texto enviado
    });
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//4️⃣ Crie uma rota DELETE/comentarios/:id

// Quando alguém acessar a rota /comentarios/:id usando o método DELETE,
// essa função será executada.
app.delete('/comentarios/:id', (req: Request, res: Response): Response => {

    // Aqui eu estou pegando o "id" que foi enviado nos parâmetros da URL.
    const { id } = req.params;

    // Se o "id" não for enviado, retorno o status 400 (requisição inválida)
    // com uma mensagem de erro em formato JSON.
    if (!id)  return res.status(400).json({ mensagem: 'ID não enviado' });
    // Se tudo estiver certo, retorno o status 204,
    // indicando que o comentário foi removido com sucesso.
    return res.status(204).json({ mensagem: 'Informação deletada'});
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Iniciando o servidor
app.listen(PORT, (): void => {
    console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});