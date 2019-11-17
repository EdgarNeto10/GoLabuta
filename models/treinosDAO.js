var coments=["O treino correu bem","Tive um problema no treino"]

module.exports.getComents=function(treinosID, callBack){
   callBack(coments)

}

//o parametro coment será inserido na lista
module.exports.saveComents= function(treinosID, coment, callBack){
coments.push(coment) ;  
callBack({status:"ok",coment:coment});
}


