

 

// // GET URL FROM LOCAL JSON FILE
// var instancedata = $.getJSON("../../assets/json/instance.json", function (datas) {
// var instance = datas.instance_url;
 
// Get url from current url params
var url = window.location.pathname;
var urlprofile = url.substring(url.lastIndexOf('/') + 1);

// SPLIT HTML FROM NAME
var urlprofilename = urlprofile.split('.')[0];


// Remove this code when URL is working without CORS ERROR
console.log(urlprofilename);
var getprofileurl = "../../assets/json/profile_data/"+ urlprofilename +".json";


// UNCOMMENT THIS URL WHEN CORS ERROR RESOLVES
// var getprofileurl = instance +"api/v1/profile/" + urlprofilename;

// ASSIGN THE PULLED URL FORM JSON FILE TO ANOTHER VARIABLE
// var getprofileurl = instance;

  $.ajax({
          "async": true,
          "crossDomain": true,
          "url": getprofileurl,
          "cors": true ,
          "method": "GET",
          "headers": {
            // 'Access-Control-Allow-Origin': '*',
            // 'Content-Type':'application/json',
            // 'Accept':'application/json',
            // 'Authorization': 'Basic',
            // 'Origin':'http://localhost:3000',
            },

          success:function (myJSON) {
            // console.log(results);
            // var myJSON = JSON.parse(results);
            // console.log(myJSON);
            if(myJSON.success === true){
            // DEFINE VARIABLES AND GET BASIC DATA FOR TOP PROFILE 
            var profilename = myJSON.basics.name;
            var profilepicture = myJSON.basics.picture;
            var profileemail = myJSON.basics.email;
            var profilelabel = myJSON.basics.label;
            var profilephone = myJSON.basics.phone;
            var profileaddress = myJSON.basics.location.address;
            var profilecity = myJSON.basics.location.city;
            var profilepostalcode = myJSON.basics.location.postalCode;
            var profilebiosummary = myJSON.basics.summary;
            var profileworkdata = myJSON.basics.work;
            var profileawardsdata = myJSON.basics.awards;

            var data_not_found = "No Data Found";
            
            // ARRAY JSON VALUES ARE HANDLED USING LOOP
            // Here Social Media URL is handled 
            for (var i in myJSON.basics.profiles) {
              var profilenetwork = myJSON.basics.profiles[i].network;
              var profileurl= myJSON.basics.profiles[i].url;

              // Twitter
              if(profilenetwork == "Twitter") {
                $('#profile_network_twitter').attr('href', profileurl);
                if(profileurl !== "") {
                  $('#profile_network_twitter_li').removeClass("hide");
                }
              }

              // Linkedin
              if(profilenetwork == "linkedin") {
                $('#profile_network_linkedin').attr('href', profileurl);
                if(profileurl !== "") {
                  $('#profile_network_linkedin_li').removeClass("hide");
                }
              }

              // Facebook
               if(profilenetwork == "Facebook") {
                $('#profile_network_facebook').attr('href', profileurl);
                if(profileurl !== "") {
                  $('#profile_network_facebook_li').removeClass("hide");
                }
              }
            }



            // SET DATA TO HTML TAGS VIA ID
            // SET URL FOR CONNECT BUTTON
            $('#conf_id').attr('href', "https://app.monietalk.com/conf/"+urlprofilename);  

            $('#profile_name').html(profilename);
            $('#profile_picture').attr('src', profilepicture);
            $('#profile_email').html(profileemail);
            $('#profile_label').html(profilelabel);
            if(profilebiosummary !== ""){
              $('#profile_bio_summary_data').html(profilebiosummary);
            }else {
              $('#profile_bio_summary_data').html(data_not_found);
            }

            if(profileworkdata !== ""){
              $('#profile_work_data').html(profileworkdata);
            }else {
              $('#profile_work_data').html(data_not_found);
            }
            
            if(profileawardsdata !== ""){
              $('#profile_awards_data').html(profileawardsdata);
            }else {
              $('#profile_awards_data').html(data_not_found);
            }


            $('#profile_location').html( profileaddress +  ", <br/>" + profilecity +  " " + profilepostalcode);
            $('#profile_phone').html(((profilephone !== '')? profilephone : '<b>No Phone Number</b>'));
          }
          }
  });
// });


   

