/*A criar um router */
var express = require('express');
var router = express.Router();
var materiaisDAO = require("../models/materiaisDAO");


router.get('/', function (req, res, next) {

  materiaisDAO.getMateriais(function (err,result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})





router.post('/', function (req, res, next) {
  var data = req.body;
  console.log(data);
  //o parametro data.addData está ligado ao coment
  // A inserir os dados 
   materiaisDAO.saveMateriais( data.comment,
    function (result) {
      res.send(result);
    })

});






module.exports = router; 
