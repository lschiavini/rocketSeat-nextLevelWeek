import express from 'express';

const app = express();

app.use(express.json());



app.get('/', (request, response) => { // consumido via Insomnia.rest
    return response.json({message: 'Hello World!'});
});


app.listen(3333);
