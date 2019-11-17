function addComent(){
    var coment = document.getElementById("Comentário").value
    $.ajax({
        URL:"api/treinos",
        method:"post",
        data:{
            addData:coment
      },
      success : function(res,status) {
        if (res.status == "ok"){
             document.getElementById("coment1").innerHTML = "Item "+
                                coment+" inserido";
             document.getElementById("coment").innerHTML="Atleta inseriu um  comentario";
        }
        else console.log(res.status);
    },
    error : function(err) {
        console.log(err);
    }
    
})
      
//document.getElementById("coment").innerHTML="Atleta inseriu um  comentario";
    
   
}





      var mymap = L.map('mapid').setView([51.505, -0.09], 13)
       
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 18,
	    id: 'mapbox.streets',
	    accessToken: 'pk.eyJ1IjoiZWRnYXJuZXRvMTAiLCJhIjoiY2sycTN2NDMwMDdweTNlbW9hdWZwcmRnZCJ9.QjlbhLCs0X11RSheAFnOeA'
     }).addTo(mymap);
   
