var mysql = require('mysql'); // A variavel mysql faz a requisição/importa modulos © mysql.
var express = require('express');// A variavel express faz a requisição/importa modulod express.
var app = express();
var http = require('http');
var url = require('url')

// DBPASS must be defined with the database password
// Powershell: $env:DBPASS="password"
// CMD (windows): set DBPASS="password"
// Linux and iOS: export DBPASS="password"
// Heroku: Go to Settings and then to config vars


var pool  = mysql.createPool({
    connectionLimit : 10,
    host     : 'remotemysql.com',
    user     : 'EGQ9u0m0HB',
    password : 'aom22K8zDk',
    database : 'EGQ9u0m0HB'
});

module.exports.pool = pool;  
   

// Variavel --conectar--  recebe a funcão que cria a conexão a BD e suas propriedades.

/*var conectar =  mysql.createConnection({
    host     : 'remotemysql.com',
    user     : 'EGQ9u0m0HB',
    password : 'aom22K8zDk',//pass:aom22K8zDk
    database : 'EGQ9u0m0HB'



})
*/
//Variavel --conetar-- chama a função connect para determinar o funcionamento da BD quando estiver conectada. 


/*pool.connect(function(error){
    if(error ){
        console.log('ERRO');
    }
    else{
        console.log('Conectado');
    }


});
*/
