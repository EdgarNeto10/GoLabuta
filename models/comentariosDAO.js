
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


module.exports.saveComments= function( coment, callback){
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
            return;
        }
        conn.query('insert into comentario (coment) values(?)', [coment],function(err, results) {
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

  