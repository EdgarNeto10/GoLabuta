
var pool = require('./MysqlConn').pool;

//Função para testes de exercicios

module.exports.getallexercicios=function(callback,next){
    pool.getConnection(function(err,conn){
       if (err) {
           callback(err,{code: 500, status: "Error in the connection to the database"})
           return;
       }
       conn.query("select * from Plano_Treino",
       function(err, results) {
           
           conn.release();
           if (err) {
               callback(err,{code: 500, status: "Error in a database query"})
               return;
           }        
          callback(false, {code: 200, status:"ok", data: results})
        }) 
          
 })
}


module.exports.getexercicios=function(idTreino,callback,next){
    pool.getConnection(function(err,conn){
       if (err) {
           callback(err,{code: 500, status: "Error in the connection to the database"})
           return;
       }
       conn.query("select Plano_Treino_estd,treino_plan_treino,plan_plano_treino, plan_treino_id, treino_id, plan_treino_exer from Plano_Treino p join Treino_Plan t on p.plan_treino_id = t.plan_plano_treino join treino tt on tt.treino_id = t.treino_plan_treino where treino_id = ?",[idTreino],
       function(err, results) {
          
           conn.release();
           if (err) {
               callback(err,{code: 500, status: "Error in a database query"})
               return;
           }        
          callback(false, {code: 200, status:"ok", data: results})
        }) 
          
 })
}




module.exports.updateExercicios= function(idPlan_trein,newestado,callback) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
            return;
        }
        console.log([newestado,idPlan_trein])
        conn.query("update Plano_Treino set Plano_Treino_estd = ? where plan_treino_id = ?", 
        [newestado,idPlan_trein],
        function(err, result) {
            console.log(result)
            conn.release(); callback(false, {code: 200, status:"ok", data: result})    
        })
    })
}

