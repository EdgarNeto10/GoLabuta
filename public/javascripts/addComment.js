function addComment(){
    var comment = document.getElementById("comentario").value
    $.ajax({
        url:"/api/treinos/1/comments",
        method:"post",
        data:{
            comment:comment
      },
      success : function(res,status) {
        if (res.status == "ok"){
             document.getElementById("coment").innerHTML="Atleta inseriu um  comentário";
        }
        else console.log(res.status);
    },
    error : function(err) {
        console.log(err);
    }
    
})


}





     