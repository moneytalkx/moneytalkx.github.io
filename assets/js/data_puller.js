

 

// // GET URL FROM LOCAL JSON FILE
var instancedata = $.getJSON("../../assets/json/instance.json", function (datas) {
var instance = datas.instance_url;
  
// var getprofileurl = "https://"+instance+"/api/v1/me";

// ASSIGN THE PULLED URL FORM JSON FILE TO ANOTHER VARIABLE
var getprofileurl = instance;

  $.ajax({
          "async": true,
          "crossDomain": true,
          "url": getprofileurl,
          "cors": true ,
          "method": "GET",
          "headers": {
            'Access-Control-Allow-Origin': '*',
            },
          success:function (results) {
            console.log(results);
            var myJSON = JSON.parse(results);
            console.log(myJSON);
          }
            
  });
});


   

