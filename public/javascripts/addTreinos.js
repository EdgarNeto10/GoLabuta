c=0;
//-------------------------------------------------------------
function addComment() {
    var comment = document.getElementById("comentario").value
    var treino = sessionStorage.getItem('Idtreino')
   

    
    $.ajax({
        url: "/api/treinos/comentarios/",
        method: "post",
        data: {
            comment: comment,
            treino: treino

        },
        success : function(res,status) {
            c=c+1
            if (res.status == "ok")
                 document.getElementById("comentarios").innerHTML = [c]+'º comentário realizado com sucesso'                             
            else console.log(res.status);
        },
        error : function(err) {
            console.log(err);
        }

    })
}


function addFeedBack(){
    var feedback = document.getElementById('feedback').value
    var  atleta = document.getElementById('select').value;
   $.ajax({
       url:"/api/atletas/feedBacks",
       method:"post",
       data:{
           feedback:feedback,
           atleta:atleta
       },
       success : function(res,status) {
           if (res.status == "ok"){
                document.getElementById("msg").innerHTML="FeedBack inserido com sucesso";
           }
           else console.log(res.status);
       },
       error : function(err) {
           console.log(err);
       }
       
   })
   
   }





