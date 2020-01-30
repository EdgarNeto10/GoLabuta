
// Variaveis globais
cf = 0;
//-------------------------------------------------------------
//-------------------------------------------------------------

// Functions

// Esta função permite efetuar o post de um ou mais comentários durante a secção de treino. 

function addComment() {
    var comment = document.getElementById("comentario").value
    var treino = sessionStorage.getItem('Idtreino')

    $.ajax({
        url: "/api/treinos/comentarios/",
        method: "post",
        data: {
            comment: comment,
            treino: treino

        },
        success: function (res, status) {
            c = c + 1
            if (res.status == "ok")
                document.getElementById("comentarios").innerHTML = [c] + 'º comentário realizado com sucesso'
            else console.log(res.status);
        },
        error: function (err) {
            console.log(err);
        }

    })
}


//  Esta função permite efetuar o post de um ou mais feedbacks para o atleta que se pretende. 

function addFeedBack() {
    var feedback = document.getElementById('feedback').value
    var atleta = document.getElementById('select').value;
    $.ajax({
        url: "/api/atletas/feedBacks",
        method: "post",
        data: {
            feedback: feedback,
            atleta: atleta
        },
        success: function (res, status) {
            cf = cf + 1
            if (res.status == "ok") {
                document.getElementById("msgF").innerHTML = [cf]+" feedBack inserido com sucesso";
            }
            else console.log(res.status);
        },
        error: function (err) {
            console.log(err);
        }

    })

}





