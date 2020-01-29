/*A criar um router */
var express = require('express');
var router = express.Router();
var atletasDAO = require("../models/atletasDAO");



router.get('/', function (req, res, next) { //Lê todos os atletas

  atletasDAO.getAllAtletas(function (err,result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})


router.get('/:idAtleta', function (req, res, next) { //Lê um determinado atleta

    atletasDAO.getAtletas(req.params.idAtleta,function (err,result) {
      if (err) {
        res.status(result.code).json(err);
        return;
      }
      res.status(result.code).send(result.data);
    }, next)
  })
  
  module.exports = router; 