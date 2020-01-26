//Variaveis globais 
var partida;
var chegada;
var jogo;
var encontro;
var local;
var c;
var marker;
var circle;

//--------------------------------------------------------------------------\\

//--------------------------------------------------------------------------\\

//Display map

var mymap = L.map('mapid').setView([38.7526809, -9.184661888906753], 13)

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
    readCalendedario();
    encontro = document.getElementById('encontro');
    local = document.getElementById('local');
    //readAllMarker()
    //readHistoricoRotas();
    //readHistoricoGolos();
}

function readAllMarker() {

    $.ajax({
        url: '/api/calendarios/',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            chegada = res
            partida = res
            for (i in chegada) {

                marker = L.marker([chegada[i].cal_desportivo_lat, chegada[i].cal_desportivo_long]).addTo(mymap);
                marker.bindPopup(chegada[i].cal_desp_local);

            }
            marker = L.marker([partida[i].equipa_lat, partida[i].equipa_long]).addTo(mymap);
            marker.bindPopup(partida[i].equipa_local).openPopup();

        },
        error: function () {

        }
    })

}


// Função para pegar o histórico  de rotas nas epoca passadas

function readHistoricoRotas() {
    
    $.ajax({
        url: '/api/equipas/epocas',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            chegada = res
            partida = res
            var ref = [{ local: '' }] //Array que vai guardar os locais da equipas adversarias

           


            for (i in chegada) {

                // A fazer a contagem das deslocações da equipa
                /*
                var conta = chegada[i].ep_local
                //for (j in chegada) {
                    var c = 0;
                  
                    for (var ji = 0; ji < ref.length; ji++) {
                        
                        if (conta == ref[ji].local) {
                            c += 1

                            //console.log(c)

                        }
                    

                    
                    //console.log(ref[ji].local)

                    }
                    var store=[]
                    store.push(c)
                    console.log(c)

                //}
                */


                //A adicionar os pontos das equipas adversarias

                marker = L.marker([chegada[i].ep_lat, chegada[i].ep_long]).addTo(mymap);
                marker.bindPopup(chegada[i].ep_local + ' ' + c);//Nome da equipa

                /*
                O ponto A e B desenham uma linha recta
                */

                var pontoA = new L.LatLng(partida[i].equipa_lat, partida[i].equipa_long);
                var pontoB = new L.LatLng(chegada[i].ep_lat, chegada[i].ep_long);
                var linha = [pontoA, pontoB]; // Variavel que guarda os 2 pontos

                /*
                Este for() vai percorrer o array 'ref' e se a localização da equipa adversaria
                 estiver no array a espessura  da linha aumenta.     
                */
                for (var j = 0; j < ref.length; j++) {
                    if (ref[j].local.includes(chegada[i].ep_local)) {
                        var polyline = new L.Polyline(linha, {
                            //A customizar a linha
                            color: 'red',
                            weight: 3 * 3,
                            opacity: 0.5,
                            smoothFactor: 1
                        });

                    }
                    else {
                        var polyline = new L.Polyline(linha, {
                            //A customizar a linha
                            color: 'red',
                            weight: 3,
                            opacity: 0.5,
                            smoothFactor: 1
                        });

                    }
                    polyline.addTo(mymap); //A adicionar as linha ao mapa 

                }

                // A adicionar a localização dentro do array
                ref.push({ local: chegada[i].ep_local })



                // A adcionar o ponto de partida da equipa
                marker = L.marker([partida[i].equipa_lat, partida[i].equipa_long]).addTo(mymap);
                marker.bindPopup(partida[i].equipa_local).openPopup();


            }

            console.log(ref)

        },
        error: function () {

        }
    })

}

   


// Função para pegar o histórico  de golos nas epoca passadas
function clear(){
    mymap.removeLayer(marker)
}

function readHistoricoGolos() {

   
    //mymap.removeLayer(marker);

   

    $.ajax({
        url: '/api/equipas/epocas',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
          
            chegada = res
            partida = res
            //var ref = [{ local: '' }] //Array que vai guardar os locais da equipas adversarias




            for (i in chegada) {



                //A adicionar os pontos das equipas adversarias

                marker = L.marker([chegada[i].ep_lat, chegada[i].ep_long]).addTo(mymap);
                marker.bindPopup(chegada[i].ep_local + '<br>' + chegada[i].ep_resultado + '<br>' + 'Foram marcados ' + chegada[i].ep_Ngolos + ' golos neste campo');//Nome da equipa

                /*
               A adicionar o raio ao mapa, o raio aumenta dependendo do numero 
               de golos marcados.
                */
                circle = L.circle([chegada[i].ep_lat, chegada[i].ep_long], {
                    color: 'red',
                    fillColor: '#f07',
                    fillOpacity: 0.5,
                    radius: chegada[i].ep_Ngolos * 200
                }).addTo(mymap);



                // A adcionar o ponto de partida da equipa
                marker = L.marker([partida[i].equipa_lat, partida[i].equipa_long]).addTo(mymap);
                marker.bindPopup(partida[i].equipa_local).openPopup();


            }

            console.log(ref)

        },
        error: function () {

        }
    })

}



function readMarker() {
    
    $.ajax({

        url: '/api/calendarios/' + localStorage.getItem('IdCalendario'),
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            chegada = res
            partida = res

            for (i in chegada) {

                L.Routing.control({
                    waypoints: [
                        L.latLng(chegada[i].cal_desportivo_lat, chegada[i].cal_desportivo_long),
                        L.latLng(partida[i].equipa_lat, partida[i].equipa_long)
                    ],
                    routeWhileDragging: false
                }).addTo(mymap);

            }

        },
        error: function () {

        }
    })

}



function setIdCalendario(IdCalendario) {
    window.localStorage.setItem('IdCalendario', IdCalendario);

}

function readCalendedario() {
    $.ajax({

        url: '/api/calendarios/',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            jogo = res
            var html = ""
            for (i in jogo) {
                html += jogo[i].cal_desp_jornada + '<br>' + "<p onclick= style='background-color:lime'>" + jogo[i].cal_desp_data + ' ' + jogo[i].cal_desp_jogo + " <input type='button' id='local' value='Localização' onclick='setIdCalendario(" + jogo[i].cal_desp_id + ");readMarker()'></p>";

            }
            encontro.innerHTML = html;



        },
        error: function () {

        }
    })

}

//-----------Post

var loc;

function pesquisa() {

    var local = document.getElementById("local").value
    $.getJSON('http://nominatim.openstreetmap.org/search/' + local + '?format=json', function (data) {
        var lat = data[0].lat
        var long = data[0].lon
        console.log(lat + ',' + long)

        loc = {
            local: local,
            lat: lat,
            lng: long
        }
        validarCofigurar()

    })
}


function addCalendario() {
    var jornada = document.getElementById("jornada").value;
    var encontro = document.getElementById("encontro").value;
    var data_encontro = document.getElementById("data").value;
    var local_encontro = document.getElementById("local").value;

    $.ajax({
        url: "/api/calendarios/",
        method: "post",
        data: {
            jornada: jornada,
            encontro: encontro,
            data_encontro: data_encontro,
            local_encontro: local_encontro,
            lat: loc.lat,
            lng: loc.lng
        },
        success: function (data, status) {

        }
    })
}

var j = 0;
function validarCofigurar() {
    //j =j+1
    var r = confirm("Pretente adicionar esta jornada?");
    if (r == true) {
        addCalendario()
        document.getElementById("addJ").innerHTML = "jornada adicionada com sucesso ";
    }
    else if (r == false) {
        window.location.reload();
    }
}







