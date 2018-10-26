//responsável pela configuração com mongodb.
const mongoose  = require('mongoose'); // mongoose faz comuncação com banco.
mongoose.Promise =  global.Promise; // vai usar API de  Promise do node. retirar msg adivertencia.
module.exports = mongoose.connect('mongodb://localhost/todo');
 