var treinar;
var treinos;
var treinosfeitos;
var  comentario;
var msg;
window.onload = function () {
   treinos = document.getElementById("treinos");  
   treinosfeitos = document.getElementById("treinosfeitos");  
   comentario = document.getElementById("comment");  
   readTreinos();
   readTreinosFeitos();
   readComments()
}


function readTreinos() {
    $.ajax({     
        url:'/api/treinos/',// Caminho para treinos no router
        method:'get',
        contentType:"application/json", // sending in json
        dataType:"json",// receiving in json
        success: function (res, status) {
            treinar=res
            var html = "";
            for (i in treinar) {
                if(treinar[i].treino_estado=='Por realizar')
                html += "<li>" + treinar[i].treino_tipo + "<input id=treinos type='checkbox'> </li>";

            }
            treinos.innerHTML = html;
           
        },
        error: function () {

        }
    })
    
  }

function readTreinosFeitos() {
    $.ajax({     
        url:'/api/treinos/',// Caminho para treinos no router
        method:'get',
        contentType:"application/json", // sending in json
        dataType:"json",// receiving in json
        success: function (res, status) {
            treinar=res
            var html = "";
            for (i in treinar) {
                if(treinar[i].treino_estado=='Realizado')
                html += "<li>" + treinar[i].treino_tipo + "</li>";
            }
            treinosfeitos.innerHTML = html;
        },
        error: function () {

        }
    })
    
  }

  function readComments() {
    $.ajax({     
        url:'/api/comentar/',// Caminho para os comentarios no router
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
  
function coment(){
    document.getElementById('coment1').innerHTML='oi'
    }
    
  







      