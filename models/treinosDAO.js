
var pool = require('./MysqlConn').pool;




module.exports.getTreinos=function(callback,next){
    pool.getConnection(function(err,conn){
       if (err) {
           callback(err,{code: 500, status: "Error in the connection to the database"})
           return;
       }
       conn.query("select treino_tipo,treino_estado from treino", function(err, results) {
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

module.exports.saveTreinos=function(treinosId, treino, callback){
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
            return;
        }
        conn.query('insert into Treino (treino_estado) values(?)', [treino],function(err, results) {
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

 
  /*var results = [];
 // calculates

 for(i in users) //filtrar por unidade no array
 if(users[i].roles.include('admin'))//se  for o admin ele lê o resultado .
 
 results.push({
 name: users[i].name, email: users[i].email
 })
 callback(results);
 */




module.exports.getFeedBacks=function(feedBacksId, callBack){
   callBack(feedBacks);
}

module.exports.saveFeedBacks=function(feedBacksId,feedBack ,callBack){
   feedBacks.push(feedBack)
   callBack({status:'ok', feedBack:feedBack})

}

