function addTreinos(){
var addTreinoA = document.getElementById('A').value

$.ajax({
    url:"/api/treinos/1/Treinos",
    method:"post",
    data:{
        TreinoA:addTreinoA    
  
    },

    success : function(res,status) {
        if (res.status == "ok"){
             document.getElementById("trein").innerHTML="Treinos enviados com sucesso";
        }
        else console.log(res.status);
    },
    error : function(err) {
        console.log(err);
    }
      
})

}