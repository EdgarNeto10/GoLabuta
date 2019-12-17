
var pool = require('./MysqlConn').pool;


module.exports.getFeedbacks=function(callback,next){
   pool.getConnection(function(err,conn){
      if (err) {
          callback(err,{code: 500, status: "Error in the connection to the database"})
          return;
      }
      conn.query("select staff_feedback from Feedback", function(err, results) {
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


module.exports.saveFeedbacks= function( feedbacks, callback){
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
            return;
        }
        conn.query('insert into Feedback (staff_feedback) values(?)', [feedbacks],function(err, results) {
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

  