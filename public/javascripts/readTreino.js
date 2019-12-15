//|----------Variaveis globais----------|
var treinar;
var treinos;
var treinosfeitos;
var comentario;
var requisitar;
var msg;
var material;
var atletas;
var atleta_nome;
var natificaçao;
var selecionar;

//---------------------------------------

window.onload = function () {
    treinos = document.getElementById("treinos");
    treinosfeitos = document.getElementById("treinosfeitos");
    comentario = document.getElementById("comment");
    notificaçao = document.getElementById('notificacoes');
    not = document.getElementById('not');
    requisitar = document.getElementById("requisitar");
    selecionar = document.getElementById('select');
    atleta_nome = document.getElementById('atleta_nome');


    readAtletas();
    //readTreinos();
    //readTreinosFeitos();
    readComments();
    //loadMateriaisDisp() 
    readNotificaçoes();
}


function readTreinos() {
    $.ajax({
        url: '/api/treinos/' + selecionar.value,
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            treinar = res
            var html = ""
            for (i in treinar) {
                if (treinar[i].treino_estado == 'Por realizar')
                    html += "<li>" + treinar[i].treino_tipo + "<input id='treinar' type='checkbox'  value='" + treinar[i].treino_id + "' onclick='updateTreinos()' > </li>";

            }

            treinos.innerHTML = html;

        },
        error: function () {

        }
    })

}

function readTreinosFeitos() {
    $.ajax({
        url: '/api/treinos/'+ selecionar.value,
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            treinar = res;
            var html = "";
            for (i in treinar) {
                if (treinar[i].treino_estado == 'Realizado')
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
        url: '/api/comentar/',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
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


function readAtletas() {
    $.ajax({
        url: '/api/atletas/',//
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
           // var html = "";
            var option = "";
            atletas = res;
            for (i in atletas) {
                html = atletas[i].atleta_nome
                option += "<option value='" + atletas[i].atleta_id + "'>"
                    + atletas[i].atleta_nome + "</option>"
            }
           // atleta_nome.innerHTML = html;
            selecionar.innerHTML = option;
        },
        error: function () {

        }
    })

}



function loadMateriaisDisp() {
    $.ajax({
        url: '/api/materiais/',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            material = res
            var html = "";
            for (i in material) {
                if (material[i].mat_estado == 'disponivel')
                    html += "<li>" + material[i].mat_nome + "<br><p><input type='radio' id='falta' name='estado" + [i] + "' value='Em falta'> Em falta <input type='radio' id='mas' name='estado" + [i] + "' value='más condições'> Em más condições</p>" + "</li>";

            }
            requisitar.innerHTML = html;
            window.alert('Cenário 2º(materiais) incompleto')

        },
        error: function () {

        }
    })

}


function readNotificaçoes() {
    $.ajax({
        url: '/api/feedBacks/',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            var html = "";

            feedbacks = res
            for (i in feedbacks) {
                html += '<li style=color:white >' + feedbacks[i].staff_feedback + '</li>'

            }

            notificaçao.innerHTML = html;
        },
        error: function () {

        }
    })

}








