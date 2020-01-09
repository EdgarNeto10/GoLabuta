
//|----------Variaveis globais----------|
var selecionar;
var staff;
//---------------------------------------

window.onload = function () {
    selecionar_A= document.getElementById('select_atle');
    selecionar_S= document.getElementById('select_staff');
    readAtletasindex();
    readStaffindex();
   
}

  
  
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

//--------------Session Storage------------//

function setIdAtleta(){
  window.sessionStorage.setItem('atletaId', selecionar_A.value)
}

function setIdStaff(){
  window.sessionStorage.setItem('staffId', selecionar_S.value)
}

