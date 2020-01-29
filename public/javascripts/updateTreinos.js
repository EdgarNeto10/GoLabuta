var str;
var c;
var realizado = 'Realizado'
var PorRealizar = 'Por realizar'
var n;
//-------------------------------------------------------------




function updateTreinos() {
    $.ajax({
        url: "/api/atletas/treinos/" + sessionStorage.getItem('Idtreino'),
        method: "put",
        data: {
            estado: realizado
        },

        success: function (res) {
           window.location.href='../Treinos.html'
        },
        error: function (err) {
            console.log(err);
        }


    })
}

function validarTreino() {
    c = c + 1
    var r = confirm("Realizou o treino?");
    if (r == true) {
        updateTreinos() ;
        if (c == 1)
            document.getElementById("submeter").innerHTML = "Realizou " + [c] + " treino";
        else
            document.getElementById("submeter").innerHTML = "Realizou " + [c] + " treinos";
    }
    else if (r == false) {
        readExercicios();
    }


}





function updateExer() {
    $.ajax({
        url: "/api/plan_treinos/"+localStorage.getItem('idExer'),
        method: "put",
        data: {
            estado: realizado
        },

        success: function (res) {
            readExercicios()

        },
        error: function (err) {
            console.log(err);
        }

    })
}

function validarExercicio(exerpos) {
    c = c + 1
        window.localStorage.setItem('idExer',exerpos)
        var r = confirm("Realizou o exercicio?");
        if (r == true) {
            updateExer()
            if (c == 1)
                document.getElementById("submeter").innerHTML = "Realizou " + [c] + " exercicio";
            else
    
                document.getElementById("submeter").innerHTML = "Realizou " + [c] + " exercicios";
        }
        else if (r == false) {
            readExercicios()
        }
    
    
    }
 



/*
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

*/