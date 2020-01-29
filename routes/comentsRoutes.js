/*A criar um router */
var express = require('express');
var router = express.Router();
var comentariosDAO = require("../models/comentariosDAO");

//Para testes
router.get('/', function (req, res, next) {   // Lê todos os comentários

  comentariosDAO.getAllComments(function (err,result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})

router.get('/:idTreino', function (req, res, next) {

  comentariosDAO.getComments(req.params.idTreino,function (err,result) { //Lê todos os comentarios em um determidado treino
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})





router.post('/', function (req, res, next) { // Insere todos os comentários 
  var data = req.body;
  console.log(data);
   comentariosDAO.saveComments( data.comment,data.treino,
    function (err,result) {
      res.send(result);
    })

});






module.exports = router; /* A exportar o router criado */ 
