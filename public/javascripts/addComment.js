function addComment() {
    var comment = document.getElementById("comentario").value
   
    $.ajax({
        url: "/api/comentar/",
        method: "post",
        data: {
            comment: comment
        },
        success : function(res,status) {
            if (res.status == "ok")
                 document.getElementById("submeter").innerHTML = 'Treino submetido com sucesso'                             
            else console.log(res.status);
        },
        error : function(err) {
            console.log(err);
        }

    })

    document.getElementById("submeter").innerHTML = 'Treino submetido com sucesso' 
}





