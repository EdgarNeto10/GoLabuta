/*A criar um router */
var express = require('express');
var router =express.Router();



/* A chamar os dados, ou seja quando este router ver um pedido(req) com este caminho('/') irá chamar todos  */

router.get('/',function(req,res){
  res.render('',function(title)
  
  {title:'TESTAR OS TREINOS'});



});



module.exports = router; /* A exportar o router criado */ 
