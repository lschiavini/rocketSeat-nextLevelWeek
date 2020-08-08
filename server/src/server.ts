import express from 'express';

const app = express();

app.use(express.json());

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar info existente
// DELETE: Deletar info existente

// Corpo (Request Body): Dados para criação ou atualização de registro
// Route Params: Identificar qual recurso atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

app.get('/users', (request, response) => { // consumido via Insomnia.rest
    console.log(request.query);
    console.log('Acessou a rota');

    const users = [
        {name: 'Diego', age: 25},
        {name: 'Lucas', age: 23}
    ]
    return response.json(users);
});

// http://localhost:3333/users

app.listen(3333);
