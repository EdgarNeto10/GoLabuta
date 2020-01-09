/*A criar um router */
var express = require('express');
var router = express.Router();
var comentariosDAO = require("../models/comentariosDAO");


router.get('/', function (req, res, next) {

  comentariosDAO.getAllComments(function (err,result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})

router.get('/:idTreino', function (req, res, next) {

  comentariosDAO.getComments(req.params.idTreino,function (err,result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})





router.post('/', function (req, res, next) {
  var data = req.body;
  console.log(data);
  //o parametro data.addData está ligado ao coment
  // A inserir os dados 
   comentariosDAO.saveComments( data.comment,data.treino,
    function (err,result) {
      res.send(result);
    })

});






module.exports = router; /* A exportar o router criado */ 
