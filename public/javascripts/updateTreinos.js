var str;
var c;
var realizado = 'Realizado'
var PorRealizar = 'Por realizar'
var n;
//-------------------------------------------------------------





function updateTreinos() {
    $.ajax({
        url: "/api/treinos/" + document.getElementById("treinar").value,
        method: "put",
        data: {
            estado:realizado
        },

        success: function (res) {
            validarTreino();
            function validarTreino() {
                c = c + 1
                var r = confirm("Realizou o treino?");
                if (r == true) {
                    readTreinos()
                    if (c == 1)
                        document.getElementById("submeter").innerHTML = "Realizou " + [c] + " treino";
                    else
                        document.getElementById("submeter").innerHTML = "Realizou " + [c] + " treinos";
                }
                else if (r == false) {
                    updateTreinosReverse()
                }


            }

        },
        error: function (err) {
            console.log(err);
        }


    })
}

function updateTreinosReverse() {
    $.ajax({
        url: "/api/treinos/" + document.getElementById('treinar').value,
        method: "put",
        data: {
            estado: PorRealizar
        },

        success: function (res) {
            readTreinos()
            
        },
        error: function (err) {
            console.log(err);
        }


    })
}