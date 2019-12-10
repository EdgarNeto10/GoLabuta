//Variaveis globais 
var partida;
var chegada;
var jogo;
var encontro;

//--------------------------------------------------------------------------


//--------------------------------------------------------------------------

//Display map

var mymap = L.map('mapid').setView([38.736946, -9.142685], 13)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWRnYXJuZXRvMTAiLCJhIjoiY2sycTN2NDMwMDdweTNlbW9hdWZwcmRnZCJ9.QjlbhLCs0X11RSheAFnOeA'
}).addTo(mymap);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);



//-------------------------------------------------------------------------

//Functions

window.onload = function () {
    readCalendedario()
    encontro = document.getElementById('encontro')

}

function readMarker() {
    $.ajax({
        url: '/api/calendarios/',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            chegada = res
            partida =res
            for (i in chegada) {

                L.Routing.control({
                    waypoints: [
                       L.latLng(chegada[i].cal_desportivo_lat, chegada[i].cal_desportivo_long),
                       L.latLng(partida[i].atleta_lat, partida[i].atleta_long)
                    ],
                    routeWhileDragging: false
                }).addTo(mymap);

            }         

        },
        error: function () {

        }
    })

}

function readCalendedario() {
    $.ajax({     
        url:'/api/calendarios/',
        method:'get',
        contentType:"application/json", // sending in json
        dataType:"json",// receiving in json
        success: function (res, status) {
            jogo=res
            var html=""
            for (i in jogo) {
                html += "<p onclick= style='background-color:lime'>" +jogo[i].cal_desp_jogo+ " <input type='button' value='Localização' onclick='readMarker()'></p>";             
            }
            encontro.innerHTML = html;
         

           
        },
        error: function () {

        }
    })
    
  }


