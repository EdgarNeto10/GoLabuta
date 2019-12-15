/*A criar um router */
var express = require('express');
var router = express.Router();
var calendariosDAO = require("../models/calendariosDAO");


router.get('/', function (req, res, next) {

    calendariosDAO.getAllCalendarios(function (err,result) {
      if (err) {
        res.status(result.code).json(err);
        return;
      }
      res.status(result.code).send(result.data);
    }, next)
  })
  



  router.get('/:idCalendario', function (req, res, next) {

    calendariosDAO.getCalendarios(req.params.idCalendario,function (err,result) {
      if (err) {
        res.status(result.code).json(err);
        return;
      }
      res.status(result.code).send(result.data);
    }, next)
  })
  
  module.exports = router; 