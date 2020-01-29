/*A criar um router */
var express = require('express');
var router = express.Router();
var materiaisDAO = require("../models/materiaisDAO");


router.get('/', function (req, res, next) { // Lê todos os materiais 

  materiaisDAO.getMateriais(function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})





router.post('/', function (req, res, next) { // Insere todos os materiais
  var data = req.body;
  console.log(data);

  materiaisDAO.saveMateriais(data.comment,
    function (result) {
      res.send(result);
    })

});






module.exports = router; 
