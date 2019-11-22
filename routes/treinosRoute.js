/*A criar um router */
var express = require('express');
var router = express.Router();
var treinosDAO=require("../models/treinosDAO");



/* A chamar os dados, ou seja quando este router ver um pedido(req) com este caminho('/') irá chamar todos  */
router.get("/", function(req, res, next){//Lê todos os comentários

  treinosDAO.getComments( function(err,result){
    if(err){
      res.status(result.code).json(err);
      return;
  }
  res.status(result.code).send(result.data);
},next)
})

router.post("/:treinosId/comments",function(req, res, next) {
    var data = req.body;
    console.log(data);
    //o parametro data.addData está ligado ao coment
    // A inserir os dados 
    treinosDAO.saveComments(req.params.treinosId,data.comment,
        function(result) {
            res.send(result);
        })    

});



router.post('/:treinosId/feedBacks',function(req,res,next){
   var data =req.body;
   console.log(data);
   treinosDAO.saveFeedBacks(req.params.treinosId,data.addfeedBack,
    function(result){
      res.send(result);
    
    })
    })

   
    router.post('/:treinosId/Treinos',function(req,res,next){
      var data=req.body;
      console.log(data);
      treinosDAO.saveTreinos(req.params.treinosId,data.addTreinoA,
       function(result){
         res.send(result);
       
       });
});


module.exports = router; /* A exportar o router criado */ 
