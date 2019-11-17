var mysql = require('mysql'); // A variavel mysql faz a requisição/importa modulos © mysql.
var express = require('express');// A variavel express faz a requisição/importa modulod express.
var app = express();
var http = require('http');
var url = require('url')

http.createServer(
function (req, res) {
res.writeHead(200,
{'Content-Type': '../public/Home-page atleta.html'});
res.write(q.host+'<br>')
res.write(q.pathname+'<br>')
res.write(q.search+'<br>')
res.write(q.host+'<br>')
res.end();
}).listen(8080);
 
// DBPASS must be defined with the database password
// Powershell: $env:DBPASS="password"
// CMD (windows): set DBPASS="password"
// Linux and iOS: export DBPASS="password"
// Heroku: Go to Settings and then to config vars

/*
var pool  = mysql.createPool({
    connectionLimit : 10,
    host     : 'remotemysql.com',
    user     : '54tXwN8Pvu',
    password : process.env.DBPASS,
    database : '54tXwN8Pvu'
});

module.exports.pool = pool;  
*/     

// Variavel --conectar--  recebe a funcão que cria a conexão a BD e suas propriedades.

var conectar =  mysql.createConnection({
    host     : 'remotemysql.com',
    user     : 'EGQ9u0m0HB',
    password : 'aom22K8zDk',//pass:aom22K8zDk
    database : 'EGQ9u0m0HB'



})

//Variavel --conetar-- chama a função connect para determinar o funcionamento da BD quando estiver conectada. 


conectar.connect(function(error){
    if(error ){
        console.log('ERRO');
    }
    else{
        console.log('Conectado');
    }


});

//Paramentros 1-'/'->é o URL para a função  2-req->request  res->response
//Interagir com BD

app.get('../public/index',function(req,res){

    connection.query('SELECT * FROM Atleta',function(error,rows, fields){
        if(!!error ){
            console.log('ERROR in the query');
        }
           else{
               console.log('Sucess query');
               console.log(rows);
        }


    });


});

app.listen('3308', ()=>{console.log('Sucesso')}); // A app está a ser ouvida na porta 3308

