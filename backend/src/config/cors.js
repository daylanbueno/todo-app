module.exports = function(req,res,next) {// permitir acesso de qualquer url.
    res.headers('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS','PATCH','DELETE'); //REQUISIÇÕES PERMITIDAS
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Context-Type, Accept');
    next() //para concluir ele Aplicação não parar.
}