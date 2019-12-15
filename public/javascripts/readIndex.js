
//|----------Variaveis globais----------|
var selecionar;

//---------------------------------------

window.onload = function () {
    selecionar= document.getElementById('select_atle');
    readAtletasindex();
   
}

  
  
  function readAtletasindex() {
  
    $.ajax({     
        url:'/api/atletas/',
        method:'get',
        contentType:"application/json", // sending in json
        dataType:"json",// receiving in json
        success: function (res, status) {
            var html = "";
             atletas=res
            for (i in atletas) {
              html +='<option value ='+atletas[i].atleta_id+'>'+atletas[i].atleta_nome+'<option>' 
            }
            selecionar.innerHTML = html;
        },
        error: function () {

        }
    })
    
  }