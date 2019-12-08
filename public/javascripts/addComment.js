c=0;
//-------------------------------------------------------------
function addComment() {
    var comment = document.getElementById("comentario").value
   
    $.ajax({
        url: "/api/comentar/",
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





