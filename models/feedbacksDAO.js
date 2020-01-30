
var pool = require('./MysqlConn').pool;


module.exports.getAllFeedbacks=function(callback,next){
   pool.getConnection(function(err,conn){
      if (err) {
          callback(err,{code: 500, status: "Error in the connection to the database"})
          return;
      }
      conn.query("select staff_feedback from Feedback", function(err, results) {
         
          conn.release();
          if (err) {
              callback(err,{code: 500, status: "Error in a database query"})
              return;
          } 
         callback(false, {code: 200, status:"ok", data: results})
      })
  })


}



module.exports.getFeedbacks=function(idAtleta,callback,next){
    pool.getConnection(function(err,conn){
       if (err) {
           callback(err,{code: 500, status: "Error in the connection to the database"})
           return;
       }
       conn.query("select atleta,staff_feedback from Feedback where atleta=?",[idAtleta], function(err, results) {
           
           conn.release();
           if (err) {
               callback(err,{code: 500, status: "Error in a database query"})
               return;
           } 
          callback(false, {code: 200, status:"ok", data: results})
       })
   })
 
 
 }

module.exports.saveFeedbacks= function( feedbacks,atletas, callback){
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
            return;
        }
        conn.query('insert into Feedback (staff_feedback,atleta) values(?,?)', [feedbacks,atletas],function(err, results) {
          
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
           callback(false, {code: 200, status:"ok", data: results})
        })
    })
  
  
  } 

  