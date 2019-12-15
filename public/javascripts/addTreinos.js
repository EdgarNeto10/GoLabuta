c=0;
//-------------------------------------------------------------
function addComment() {
    var comment = document.getElementById("comentario").value
   
    $.ajax({
        url: "/api/comentarios/",
        method: "post",
        data: {
            comment: comment
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
   
   $.ajax({
       url:"/api/feedBacks",
       method:"post",
       data:{
           feedback:feedback
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





