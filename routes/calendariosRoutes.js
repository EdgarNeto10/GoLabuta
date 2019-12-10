/*A criar um router */
var express = require('express');
var router = express.Router();
var calendariosDAO = require("../models/calendariosDAO");


router.get('/', function (req, res, next) {

    calendariosDAO.getCalendarios(function (err,result) {
      if (err) {
        res.status(result.code).json(err);
        return;
      }
      res.status(result.code).send(result.data);
    }, next)
  })
  
  module.exports = router; 