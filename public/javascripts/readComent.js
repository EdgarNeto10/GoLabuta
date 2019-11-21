
window.onload = function () {
    var comentario = document.getElementById("comment");
    var intId = setInterval(readComments, 3000);//Local function
    readComments();
   function readComments() {
    $.ajax({     
        url:'/api/treinos/1/comments',// Caminho para os comentarios no router
        method:'get',
        success: function (res, status) {
            var html = "";
            for (i in res) {
                html += "<li>" + res[i] + "</li>";
            }
            comentario.innerHTML = html;
        },
        error: function () {

        }
    })
    
  }
}

//}

function coment(){
    document.getElementById('coment1').innerHTML='oi'
    }
    
  







      