
var pool = require('./MysqlConn').pool;




module.exports.getMateriais=function(callback,next){
   pool.getConnection(function(err,conn){
      if (err) {
          callback(err,{code: 500, status: "Error in the connection to the database"})
          return;
      }
      conn.query("select mat_nome,mat_estado from material", function(err, results) {
        
          conn.release();
          if (err) {
              callback(err,{code: 500, status: "Error in a database query"})
              return;
          } 
         callback(false, {code: 200, status:"ok", data: results})
      })
  })


}


module.exports.saveMateriais= function( coment, callback){
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
            return;
        }
        conn.query('insert into comentario (coment) values(?)', [coment],function(err, results) {
            
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
  
  
  } 

  