/*A criar um router */
var express = require('express');
var router = express.Router();
var treinosDAO = require("../models/treinosDAO");


router.get('/',function (req, res, next) {//Lê todos os tipos de treinos

  treinosDAO.getAllTreinos(function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})


router.get('/:idAtleta',function (req, res, next) {//Lê todos os tipos de treinos

  treinosDAO.getTreinos(req.params.idAtleta,function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})



router.put('/:idTreino', function(req, res, next) {
  // req.params.id will be a string, but we don't need an Integer anyway
  treinosDAO.updateTreinos(req.params.idTreino,req.body.estado,
      function(err,result){
      if (err) {
          // sending error because its for learning/debugging
          // real project would only send a general message
          res.statusMessage = result.status;
          res.status(result.code).json(err);
          return;
      }
      res.status(200).send(result.data);
  },next)
});


module.exports = router; /* A exportar o router criado */ 
