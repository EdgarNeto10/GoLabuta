/*A criar um router */
var express = require('express');
var router = express.Router();
var treinosDAO = require("../models/treinosDAO");

/*Para testes  */
router.get('/', function (req, res, next) { // Lê todos os treinos 

  treinosDAO.getAllTreinos(function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})


router.get('/:idAtleta', function (req, res, next) { // Lê todos treinos relacionados a um atleta

  treinosDAO.getTreinos(req.params.idAtleta, function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})



router.put('/:idTreino', function (req, res, next) { // Faz o update de um determinado treino

  treinosDAO.updateTreinos(req.params.idTreino, req.body.estado,
    function (err, result) {
      if (err) {

        res.statusMessage = result.status;
        res.status(result.code).json(err);
        return;
      }
      res.status(200).send(result.data);
    }, next)
});


module.exports = router; /* A exportar o router criado */ 
