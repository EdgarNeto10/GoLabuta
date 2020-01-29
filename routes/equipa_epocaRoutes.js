/*A criar um router */
var express = require('express');
var router = express.Router();
var equipa_epocaDAO = require("../models/equipa_epocaDAO");



router.get('/', function (req, res, next) { //Lê todas epócas de uma equipa

  equipa_epocaDAO.getAlleq_epoca(function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})


module.exports = router; 