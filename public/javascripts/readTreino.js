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
var exercicios;
var nome;

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
    exercicios = document.getElementById('exercicios');
    exercicio = document.getElementById('exercicio');
    nome = document.getElementById('nome');

    readNotificaçoes();
    readTreinos();
    readExercicios();
    readAtletas();
    readExerRealizado();
    readComments();
    
}
  
//-----------------Session Storage--------------------//


// Esta função guarda o id de um treino 'por reaizar' no session storage da pagina.

function setIdTreino(Idtreino){
    window.sessionStorage.setItem('Idtreino',Idtreino);
    window.location.href='../Treino.html';

}

// Esta função guarda o id de um treino 'realizado' no session storage das paginas.

function setIdTreinofeito(IdtreinoFeito){
        window.sessionStorage.setItem('IdtreinoFeito',IdtreinoFeito);
        window.location.href='../treino realizado.html';
}

//-------------------------------------------------------//


// Esta função serve para pegar todos os treinos 'por realizar' de um atleta e mostra na pagina. 

function readTreinos() {
    $.ajax({
        url: '/api/atletas/treinos/'+sessionStorage.getItem('atletaId'),
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            treinar = res
            var html = ""
           
            for (i in treinar) {
                if (treinar[i].treino_estado == 'Por realizar')
               
                
                html += "<p onclick='setIdTreino("+treinar[i].treino_id+");' style='cursor: pointer;'>" +treinar[i].date+ ' - ' + treinar[i].treino_tipo + "</p>";
            }

            treinos.innerHTML = html;
         
        },
        error: function () {

        }
    })

}


// Esta função serve para pegar todos os treinos  'Realizados' de um atleta selecionado e mostra na pagina. 

function readTreinosFeitos() {
    $.ajax({
        url: '/api/atletas/treinos/' + selecionar.value,
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            treinar = res;
            var html = "";
            for (i in treinar) {
                if (treinar[i].treino_estado == 'Realizado')
                    html += "<p onclick= setIdTreinofeito("+treinar[i].treino_id+"); style='cursor:pointer'>" +treinar[i].date+ ' - ' + treinar[i].treino_tipo + "</p>"
            }
            treinosfeitos.innerHTML = html;
        },
        error: function () {

        }
    })

}


// Função de testes que pega todos os comentarios.

function readAllComments() {
    $.ajax({
        url: '/api/treinos/comentarios/',
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

// Função  serve para pegar todos os comentarios feitos em um treino e mostra na pagina.

function readComments() {
    $.ajax({
        url: '/api/treinos/comentarios/'+sessionStorage.getItem('IdtreinoFeito'),
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

/* 
Esta função pega os dados de todos atletas e insere os seus nomes em um select 
para um membro da staff selecionar e mostra na pagina.  
*/

function readAtletas()  {
  
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
          selecionar.innerHTML = option;
      },
      error: function () {

      }
  })

}


// Esta função serve para pegar todos os materiais disponiveis e mostra na pagina.

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

// Esta função serve para pegar todos os feedbacks realizados para um determinado atleta e mostrar.

function readNotificaçoes() {
    $.ajax({
        url: '/api/atletas/feedBacks/'+sessionStorage.getItem('atletaId'),
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            var html = "";

            feedbacks = res
            for (i in feedbacks) {
                html += '<li>' + feedbacks[i].staff_feedback + '</li>'

            }

            notificaçao.innerHTML = html;
        },
        error: function () {

        }
    })

}


// Esta função serve para pegar todos os exercícios 'Por realizar' referentes um treino e mostra na pagina.

function readExercicios() {
    $.ajax({
        url: '/api/treinos/plan_treinos/'+sessionStorage.getItem('Idtreino'),
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            exer = res
            var html = ""
            for (i in exer) {
                if (exer[i].Plano_Treino_estd == 'Por realizar')
                    html += "<li>" + exer[i].plan_treino_exer+ "<input  type='checkbox'  onclick='validarExercicio("+exer[i].plan_treino_id+")' > </li>";

            }

            exercicios.innerHTML = html;

        },
        error: function () {

        }
    })

}


// Esta função serve para pegar todos os exercícios 'Realizados'  referentes a um treino e mostra na pagina.

function readExerRealizado() {
    $.ajax({
        url: '/api/treinos/plan_treinos/'+sessionStorage.getItem('Idtreino'),
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            exer = res
            var html = ""
            for (i in exer) {
                if (exer[i].Plano_Treino_estd == 'Realizado')
                    html += "<li>" + exer[i].plan_treino_exer+ "</li>";

            }

            exercicio.innerHTML = html;

        },
        error: function () {

        }
    })

}





  


