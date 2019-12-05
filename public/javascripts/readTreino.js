//|----------Variaveis globais----------|
var treinar;
var treinos;
var treinosfeitos;
var  comentario;
var requisitar;
var msg;
var material;
//--------------------------------------

window.onload = function () {
   treinos = document.getElementById("treinos");  
   treinosfeitos = document.getElementById("treinosfeitos");  
   comentario = document.getElementById("comment");  
   requisitar = document.getElementById("requisitar");  
   readTreinos();
   readTreinosFeitos();
   readComments()
   loadMateriaisDisp() 
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


  
  function loadMateriaisDisp() {
    $.ajax({     
        url:'/api/materiais/',// Caminho para treinos no router
        method:'get',
        contentType:"application/json", // sending in json
        dataType:"json",// receiving in json
        success: function (res, status) {
            material=res
            var html = "";
            for (i in material) {
               if(material[i].mat_estado=='disponivel')
                html += "<li>" +material[i].mat_nome +"<br><p><input type='radio' value=Em falta> Em falta <input type='radio' value=más condições> Em más condições</p>"+"</li>";
                
            }
            requisitar.innerHTML = html;
           
        },
        error: function () {

        }
    })
    
  }

  






      