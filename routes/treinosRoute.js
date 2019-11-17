/*A criar um router */
var express = require('express');
var router = express.Router();
var treinosDAO=require("../models/treinosDAO");


/* A chamar os dados, ou seja quando este router ver um pedido(req) com este caminho('/') irá chamar todos  */
router.get("/:treinosID/coments", function(req, res, next){
// A ler os dados 
  treinosDAO.getComents(req.params.treinosID, function(coments){
    res.send(coments);
  })

})
  

router.post("/:treinosID/coments",function(req, res, next) {
    var data = req.body;
    console.log(data);
    //o parametro data.addData está ligado ao coment
    // A inserir os dados 
    treinosDAO.saveComents(req.params.treinosID,data.addData,
        function(result) {
            res.send(result);
        })    

});

module.exports = router; /* A exportar o router criado */ 
