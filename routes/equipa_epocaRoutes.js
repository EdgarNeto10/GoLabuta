/*A criar um router */
var express = require('express');
var router = express.Router();
var equipa_epocaDAO = require("../models/equipa_epocaDAO");



router.get('/', function (req, res, next) {

  equipa_epocaDAO.getAlleq_epoca(function (err,result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})

/*
router.get('/:idAtleta', function (req, res, next) {

    atletasDAO.getAtletas(req.params.idAtleta,function (err,result) {
      if (err) {
        res.status(result.code).json(err);
        return;
      }
      res.status(result.code).send(result.data);
    }, next)
  })
  */
  
  module.exports = router; 