/*A criar um router */
var express = require('express');
var router = express.Router();
var feedbacksDAO = require("../models/feedbacksDAO");


router.get('/', function (req, res, next) { // Lê todos os feedbacks

  feedbacksDAO.getAllFeedbacks(function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})

router.get('/:idAtleta', function (req, res, next) { // Lê todos feedbacks relacionados a um atleta

  feedbacksDAO.getFeedbacks(req.params.idAtleta, function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})





router.post('/', function (req, res, next) { // Insere todos os feedbacks
  var data = req.body;
  console.log(data);

  feedbacksDAO.saveFeedbacks(data.feedback, data.atleta,
    function (err, result) {
      res.send(result);
    })

});






module.exports = router; /* A exportar o router criado */ 
