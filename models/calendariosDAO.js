var pool = require('./MysqlConn').pool;

module.exports.getAllCalendarios=function(callback,next){
    pool.getConnection(function(err,conn){
       if (err) {
           callback(err,{code: 500, status: "Error in the connection to the database"})
           return;
       }//cal_desp_data
       conn.query("select DATE_FORMAT(cal_desp_data,'%d/%m/%Y') as cal_desp_data,cal_desp_jogo,cal_desp_jornada,cal_desp_id  from cal_desportivo", function(err, results) {
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

 module.exports.getCalendarios=function(idCalendario,callback,next){
    pool.getConnection(function(err,conn){
       if (err) {
           callback(err,{code: 500, status: "Error in the connection to the database"})
           return;
       }
       conn.query("select * from  Equipa,cal_desportivo where cal_desp_id=?",[idCalendario], 
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


 