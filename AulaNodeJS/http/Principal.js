//http é o protocolo que permite que o cliente se comunique com o servidor.
//modulo http permite que criemos aplicaçoes web
var http = require('http');

//abre servidor http, listen fala em qual porta vc quer escutar
http.createServer(function(req,res){

res.end("Ola");

}).listen(8081);

console.log("Servidor ON...");

