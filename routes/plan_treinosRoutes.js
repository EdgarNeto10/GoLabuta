/*A criar um router */
var express = require('express');
var router = express.Router();
var plan_treinosDAO = require("../models/plan_treinosDAO");


router.get('/', function (req, res, next) {

  plan_treinosDAO.getAllexercicios(function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})

router.get('/:idTreino', function (req, res, next) {

  plan_treinosDAO.getexercicios(req.params.idTreino, function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})


router.put('/:idPlan_trein', function (req, res, next) {

  plan_treinosDAO.updateExercicios(req.params.idPlan_trein, req.body.estado,
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
