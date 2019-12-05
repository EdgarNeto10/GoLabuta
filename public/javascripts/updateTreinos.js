
function updateTreinos(){
    var addTreinoA = document.getElementById('A').value
    var addTreinoB = document.getElementById('B').value
    
$.ajax({
    url:"/api/treinos/1/Treinos",
    method:"post",
    data:{
        TreinoA:addTreinoA ,
        TreinoB:addTreinoB   
  
    },

    success : function(res,status) {
        if (res.status == "ok"){
             document.getElementById("trein").innerHTML="Treino submetido com sucesso";
        }
        else console.log(res.status);
    },
    error : function(err) {
        console.log(err);
    }
      
})

}