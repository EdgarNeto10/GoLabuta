
var pool = require('./MysqlConn').pool;


module.exports.getAllstaff=function(callback,next){
    pool.getConnection(function(err,conn){
       if (err) {
           callback(err,{code: 500, status: "Error in the connection to the database"})
           return;
       }
       conn.query("select * from staff", function(err, results) {
       
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
module.exports.getAtletas=function(idAtleta,callback,next){
    pool.getConnection(function(err,conn){
       if (err) {
           callback(err,{code: 500, status: "Error in the connection to the database"})
           return;
       }
       conn.query("select atleta_nome,atleta_imagem,atleta_lat,atleta_long from Atleta where atleta_id=?",[idAtleta], function(err, results) {
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
