
var materiais;

window.onload = function () {
   materiais= document.getElementById("materiais");  
   readAllMateriais();
   




function readAllMateriais() {
    $.ajax({     
        url:'/api/materiais/',// Caminho para treinos no router
        method:'get',
        contentType:"application/json", // sending in json
        dataType:"json",// receiving in json
        success: function (res, status) {
            material=res
            var html = "";
            for (i in material) {
    
                html += "<li>" +material[i].mat_nome +"<br><p><input id='disponivel' type='radio' value=Disponível> Disponível <input id='nao_disponivel' type='radio' value=Não disponível> Não disponível</p></li>";
                
            }
            materiais.innerHTML = html;
           
        },
        error: function () {

        }
    })
    
  }

  

}







      