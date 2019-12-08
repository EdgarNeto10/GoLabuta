
//var addTreinoA = document.getElementById('treinos').value
//var addTreinoB = document.getElementById('treinos').value
var str;
//-------------------------------------------------------------

function validarTreino() {    
    var r = confirm("Realizou o treino?");
    if (r == true) {
        readTreinos()
    } 
    
}

function updateTreinos() {
    $.ajax({
        url: "/api/treinos/" + document.getElementById('treinar').value,
        method: "put",
        data: {
            estado: document.getElementById("real").value
        },

        success: function (res) {
            validarTreino() 
            document.getElementById("submeter").innerHTML = "ola";

        },
        error: function (err) {
            console.log(err);
        }


    })
}