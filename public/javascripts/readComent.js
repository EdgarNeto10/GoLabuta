
window.onload = function () {
    var comentario = document.getElementById("comment");
    var intId = setInterval(readComments, 3000);//Local function
    readComments();
   function readComments() {
    $.ajax({     
        url:'/api/treinos',// Caminho para os comentarios no router
        method:'get',
        contentType:"application/json", // sending in json
        dataType:"json",// receiving in json
        success: function (res, status) {
            var html = "";
            for (i in res) {
                html += "<li>" + res[i].coment + "</li>";
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
    
  







      