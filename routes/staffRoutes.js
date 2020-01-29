/*A criar um router */
var express = require('express');
var router = express.Router();
var atletasDAO = require("../models/staffDAO");



router.get('/', function (req, res, next) { // Lê toda informação da staff

  atletasDAO.getAllstaff(function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})

module.exports = router;
