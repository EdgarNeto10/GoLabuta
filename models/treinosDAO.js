var coments=["O treino correu bem","Tive um problema no treino"]
var feedBacks=['Muito bem','Tens que correr mais km']
var treinosA=[]

var pool = require('./MysqlConn').pool;
module.exports.getComments=function(callback,next){
   pool.getConnection(function(err,conn){
      if (err) {
          callback(err,{code: 500, status: "Error in the connection to the database"})
          return;
      }
      conn.query("select coment from comentario", function(err, results) {
          // VERY IMPORTANT: Always release a connection after you don't need it
          // You can make more then one query but in the last one release it
          conn.release();
          if (err) {
              callback(err,{code: 500, status: "Error in a database query"})
              return;
          } 
          callback(false, {code: 200, status:"ok", data: results})
      })
  })


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


