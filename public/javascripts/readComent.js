document.onload = function () {
    var comentario = document.getElementById("com");
    var intId = setInterval(getComents, 3000);
    readComent();
   function readComent() {
    
    $.ajax({     
        url:'api/treinos'+ treinosID,
        method:'get',
        success: function (res, status) {
            var html = "";
            for (i in res) {
                html += "<li>" + res[i] + "</li>";
            }
            comentario.innerHTML = html;
        },
        error: function () {

        }
    })
    
 

    
}

}

function coment(){
    if(document.getElementById('v')){
        document.getElementById('coment').innerHTML="O treino correu bem, aumentei o meu record"

    }   
    else if(document.getElementById('r')){
        document.getElementById('coment').innerHTML="Tive dificuldades no final"

    }
    
  }







      