
//|----------Variaveis globais----------|
var selecionar;
var staff;
//---------------------------------------

window.onload = function () {
    selecionar_A= document.getElementById('select_atle');
    selecionar_S= document.getElementById('select_staff');
    readAtletasindex();
    readStaffindex();
    readAtletasNomes()
   
}

  
//  Functions

// Esta função pega os dados de todos atletas e insere os seus nomes em um select.  

  function readAtletasindex() {
  
    $.ajax({
      url: '/api/atletas/',//
      method: 'get',
      contentType: "application/json", // sending in json
      dataType: "json",// receiving in json
      success: function (res, status) {
          var option = "";
          atletas = res;
          for (i in atletas) {
              option += "<option value='" + atletas[i].atleta_id + "'>"
                  + atletas[i].atleta_nome + "</option>"
          }
          selecionar_A.innerHTML = option;
      },
      error: function () {

      }
  })

}


// Esta função pega os dados de todos membros da staff e insere os seus nomes em um select.  

function readStaffindex() {
  
  $.ajax({
    url: '/api/staff/',//
    method: 'get',
    contentType: "application/json", // sending in json
    dataType: "json",// receiving in json
    success: function (res, status) {
        var option = "";
        staff = res;
        for (i in staff) {
            option += "<option value='" + staff[i].staff_id + "'>"
                + staff[i].staff_nome + "</option>"
        }
        selecionar_S.innerHTML = option;
    },
    error: function () {

    }
})

}


//Esta função pega o nome de um determinado atleta e mostra na pagina.

function readAtletasNomes() {
  $.ajax({
      url: '/api/atletas/'+sessionStorage.getItem('atletaId'),
      method: 'get',
      contentType: "application/json", // sending in json
      dataType: "json",// receiving in json
      success: function (res, status) {
          var html = "";

          nomes = res
          for (i in nomes) {
              html += '<li>' + nomes[i].atleta_nome + '</li>'

          }

          nome.innerHTML = html;
      },
      error: function () {

      }
  })

}


//--------------Session Storage------------//


// Esta função guarda o id do atleta no session storage das paginas.
function setIdAtleta(){
  window.sessionStorage.setItem('atletaId', selecionar_A.value)
}

// Esta função guarda o id da staff no session storage das paginas.
function setIdStaff(){
  window.sessionStorage.setItem('staffId', selecionar_S.value)
}

