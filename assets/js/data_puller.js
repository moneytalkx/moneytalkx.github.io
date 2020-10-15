

 

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
          "method": "GET",
          success:function (results) {
            // console.log(results);

            // Parse General JSON Text file to JSON Object to split values
            var myJSON = JSON.parse(results);
            // console.log(myJSON);

            // DEFINE VARIABLES AND GET BASIC DATA FOR TOP PROFILE 
            var profilename = myJSON.basics.name;
            var profilepicture = myJSON.basics.picture;
            var profileemail = myJSON.basics.email;
            var profilelabel = myJSON.basics.label;
            var profilephone = myJSON.basics.phone;
            var profileaddress = myJSON.basics.location.address;
            var profilecity = myJSON.basics.location.city;
            var profileregion = myJSON.basics.location.region;
            
            // ARRAY JSON VALUES ARE HANDLED USING LOOP
            // Here Social Media URL is handled 
            for (var i in myJSON.basics.profiles) {
              var profilenetwork = myJSON.basics.profiles[i].network;
              var profileurl= myJSON.basics.profiles[i].url;
              if(profilenetwork == "LinkedIn") {
                console.log('printed');
                $('#profile_network_linkedin').attr('href', profileurl);
              }
            }

            for (var j in myJSON.awards) {
              var profileawardstitle = myJSON.awards[j].title;
              $('#profile_awards_title').html(profileawardstitle);
            }

            // SET DATA TO HTML TAGS VIA ID
            $('#profile_name').html(profilename);
            $('#profile_picture').attr('src', profilepicture);
            $('#profile_email').html(profileemail);
            $('#profile_label').html(profilelabel);
            $('#profile_location').html(profilecity +  ", " + profileaddress + ", " + profileregion);
            $('#profile_phone').html(((profilephone !== '')? profilephone : '<b>No Phone Number</b>'));
            
          }
            
  });
});


   

