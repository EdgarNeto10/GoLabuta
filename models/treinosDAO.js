
var pool = require('./MysqlConn').pool;


module.exports.getAllTreinos=function(callback,next){
    pool.getConnection(function(err,conn){
       if (err) {
           callback(err,{code: 500, status: "Error in the connection to the database"})
           return;
       }
       conn.query("select * from treino ",
       function(err, results) {
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




module.exports.updateTreinos= function(idTreino,newestado,callback) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
            return;
        }
        console.log([newestado,idTreino])
        conn.query("update treino set treino_estado = ? where treino_id = ?", 
        [newestado,idTreino],
        function(err, result) {
            console.log(result)
            conn.release(); callback(false, {code: 200, status:"ok", data: result})    
        })
    })
}


module.exports.getTreinos=function(idAtleta,callback,next){
    pool.getConnection(function(err,conn){
       if (err) {
           callback(err,{code: 500, status: "Error in the connection to the database"})
           return;
       }
       conn.query("select treino_id,treino_tipo,treino_estado,treino_data,atleta_id,atleta_atle_trein from  treino t join Atle_Trein a on  t.treino_id = a.treino_atle_trein join Atleta x on a.atleta_atle_trein = x.atleta_id where atleta_atle_trein=? ",
       [idAtleta],function(err, results) {
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


/*
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

 
*/


