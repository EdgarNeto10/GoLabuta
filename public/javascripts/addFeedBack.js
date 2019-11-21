function addFeedBack(){
 var addfeed = document.getElementById('feed').value

$.ajax({
    url:"/api/treinos/1/feedBacks",
    method:"post",
    data:{
        feedbck:addfeed
    },
    success : function(res,status) {
        if (res.status == "ok"){
             document.getElementById("msg").innerHTML="FeedBack inserido com sucesso";
        }
        else console.log(res.status);
    },
    error : function(err) {
        console.log(err);
    }
    
})

}