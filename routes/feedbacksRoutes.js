/*A criar um router */
var express = require('express');
var router = express.Router();
var feedbacksDAO = require("../models/feedbacksDAO");


router.get('/', function (req, res, next) {

  feedbacksDAO.getAllFeedbacks(function (err,result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})

router.get('/:idAtleta', function (req, res, next) {

  feedbacksDAO.getFeedbacks(req.params.idAtleta,function (err,result) {
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
  feedbacksDAO.saveFeedbacks( data.feedback,data.atleta,
    function (err,result) {
      res.send(result);
    })

});






module.exports = router; /* A exportar o router criado */ 
