/*A criar um router */
var express = require('express');
var router = express.Router();
var calendariosDAO = require("../models/calendariosDAO");


router.get('/', function (req, res, next) { // Lê todos os calendários

    calendariosDAO.getAllCalendarios(function (err,result) {
      if (err) {
        res.status(result.code).json(err);
        return;
      }
      res.status(result.code).send(result.data);
    }, next)
  })
  



  router.get('/:idCalendario', function (req, res, next) { // Lê um determinado calendário

    calendariosDAO.getCalendarios(req.params.idCalendario,function (err,result) {
      if (err) {
        res.status(result.code).json(err);
        return;
      }
      res.status(result.code).send(result.data);
    }, next)
  })


  router.post('/', function (req, res, next) { // Insere  todo  calendário
    var data = req.body;
  
    console.log(data);

    calendariosDAO.saveCalendarios( data.jornada,data.encontro,data.data_encontro,data.local_encontro,data.lat,data.lng,
      function (err,result) {
        res.send(result);
      })
  
  });

  
  module.exports = router; 