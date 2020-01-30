// Variaveis globais
var str;
var ct = 0;
var realizado = 'Realizado'
var PorRealizar = 'Por realizar'
var n;
//-------------------------------------------------------------

// Functions

// Esta função  serve para fazer o update de um determinado treino para 'Realizado'.

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

// Esta função serve para validar se um treino foi realizado'.

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





// Esta função que serve para fazer o update de um determinado exercício para 'Realizado'.

function updateExer() {
    $.ajax({
        url: "/api/treinos/plan_treinos/"+localStorage.getItem('idExer'),
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


// Esta função serve para validar se um exercicio foi realizado'.

function validarExercicio(exerpos) {
    ct = ct + 1
        window.localStorage.setItem('idExer',exerpos)
        var r = confirm("Realizou o exercicio?");
        if (r == true) {
            updateExer()
            if (ct == 1)
                document.getElementById("submeter").innerHTML = "Realizou " + [ct] + " exercicio";
            else
    
                document.getElementById("submeter").innerHTML = "Realizou " + [ct] + " exercicios";
        }
        else if (r == false) {
            readExercicios()
        }
    
    
    }
 



