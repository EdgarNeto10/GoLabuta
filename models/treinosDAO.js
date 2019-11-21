var coments=["O treino correu bem","Tive um problema no treino"]
var feedBacks=['Muito bem','Tens que correr mais km']
var treinosA=[]

module.exports.getComments=function(treinosId, callBack){
   callBack(coments)

}

//o parametro coment será inserido no array
module.exports.saveComments= function(treinosId, coment, callBack){
coments.push(coment);  
callBack({status:"ok",coment:coment});
}



module.exports.getFeedBacks=function(feedBacksId, callBack){
   callBack(feedBacks);
}

module.exports.saveFeedBacks=function(feedBacksId,feedBack ,callBack){
   feedBacks.push(feedBack)
   callBack({status:'ok', feedBack:feedBack})

}

module.exports.saveTreinos=function(treinosId, treino, callBack){
  treinosA.push(treino)
   callBack({status:'ok', treino:treino})


}


