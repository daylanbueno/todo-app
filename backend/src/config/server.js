const port  = 3003;

const bodyPaser = require('body-parser'); //responsavel por fazer o parser.
const express = require('express'); //servidor
const server = express(); 
const allowCors = require('./cors'); // declarando 

server.use(bodyPaser.urlencoded({extended: true})); // falando que bady parser vai fazer o parser maximo arquivo  usa para todas as requisições.
server.use(bodyPaser.json());
server.use(allowCors); // registrando.

server.listen(port , function() {
    console.log(`Servidor - backand está executando na porta ${port}.`)
})

module.exports = server;