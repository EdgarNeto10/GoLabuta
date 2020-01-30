
var pool = require('./MysqlConn').pool;


module.exports.getAllAtletas=function(callback,next){
    pool.getConnection(function(err,conn){
       if (err) {
           callback(err,{code: 500, status: "Error in the connection to the database"})
           return;
       }
       conn.query("select * from Atleta", function(err, results) {
          
           conn.release();
           if (err) {
               callback(err,{code: 500, status: "Error in a database query"})
               return;
           }        
           callback(false, {code: 200, status:"ok", data: results})
        }) 
          
 })
}

module.exports.getAtletas=function(idAtleta,callback,next){
    pool.getConnection(function(err,conn){
       if (err) {
           callback(err,{code: 500, status: "Error in the connection to the database"})
           return;
       }
       conn.query("select atleta_nome,atleta_id from Atleta where atleta_id=?",[idAtleta], function(err, results) {
           
           conn.release();
           if (err) {
               callback(err,{code: 500, status: "Error in a database query"})
               return;
           }        
           callback(false, {code: 200, status:"ok", data: results})
        }) 
          
 })
}