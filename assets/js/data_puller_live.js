

 

// // GET URL FROM LOCAL JSON FILE
var instancedata = $.getJSON("../../assets/json/instance.json", function (datas) {
var instance = datas.instance_url;
 
// Get url from current url params
var url = window.location.pathname;
var urlprofile = url.substring(url.lastIndexOf('/') + 1);

// SPLIT HTML FROM NAME
var urlprofilename = urlprofile.split('.')[0];
// var urlprofilename="eyal";


// Remove this code when URL is working without CORS ERROR
console.log(urlprofilename);
var getprofileurl = instance + "/api/v1/profile/"+ urlprofilename;


  $.ajax({
          "async": true,
          "crossDomain": true,
          "url": getprofileurl,
          "cors": true ,
          "method": "GET",
          "headers": {
            // 'Access-Control-Allow-Origin': '*',
            // 'Content-Type':'application/json',
            },

          success:function (myJSON) {
            // console.log(results);
            // var myJSON = JSON.parse(results);
            console.log(myJSON);
            if(myJSON.success === true){
             $('#profile_section').removeClass("hide");
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

            var profileawardsdata = myJSON.basics.awards;

            var data_not_found = "<span>Noo Data Found</span>";
            
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

              if(profilenetwork == "Instagram") {
                $('#profile_network_instagram').attr('href', profileurl);
                if(profileurl !== "") {
                  $('#profile_network_instagram_li').removeClass("hide");
                }
              }

            }

            // SET DATA TO HTML TAGS VIA ID
            // SET URL FOR CONNECT BUTTON
            $('#conf_id').attr('href', instance +"/conf/"+ urlprofilename); 

            // SET SRC URL FOR IFRAME MODAL
            $('#profile_conf').attr('src', instance +"/conf/"+ urlprofilename); 

            // SET URL FOR SCHEDULE BUTTON
            $('#schedule_id').attr('href', instance +"/booking/"+ urlprofilename);
            
            // SET SRC URL FOR IFRAME MODAL
            $('#profile_schedule').attr('src', instance +"/booking/"+ urlprofilename);

          
            $('#profile_name').html(profilename);
            $('#profile_picture').attr('src', profilepicture);
            $('#profile_email').html(profileemail);
            $('#profile_label').html(profilelabel);

            if(profilebiosummary !== ""){
              profilebiosummary = profilebiosummary.replace(/(?:\r\n|\r|\n)/g, '<br>');
              $('#profile_bio_summary_data').html(profilebiosummary);
            }else {
              $('#profile_bio_summary_data').html(data_not_found);
            }

            for(var j in myJSON.basics.work){

              var profileworkdata = myJSON.basics.work[j];

            if(profileworkdata !== null){
              $('#profile_work_data').html(profileworkdata[j]);
            } else {
              $('#profile_work_data').html(data_not_found);
            }
          }
            if(profileawardsdata !== ""){
              $('#profile_awards_data').html(profileawardsdata);
            }else {
              $('#profile_awards_data').html(data_not_found);
            }


            $('#profile_location').html(profileaddress +  "<br/>" + profilecity +  " " + profilepostalcode  );
            $('#profile_phone').html(((profilephone !== '')? profilephone : '<b>No Phone Number</b>'));
          }

          else {
            $('#no_page_found_section').removeClass("hide");
          }
          },
          error: function(xhr, status, error) {
            // var err = eval("(" + xhr.responseText + ")");
            // alert(err.Message);
            $('#no_page_found_section').removeClass("hide");
          }

  });
});


   

