var ups;
var downs;

window.onload = function(){
  $(".stats-link").after('<div class="progress" style="display:inline-block; width:20%; height:20%; vertical-align:middle;"><div class="progress-bar progress-bar-success" role="progressbar"></div><div class="progress-bar progress-bar-danger" role="progressbar"></div></div>');
window.setTimeout(function(){
  var imageID = window.location.href.replace("http://imgur.com/gallery/", "");

  $.ajax
({
  type: "GET",
  url: "https://api.imgur.com/3/gallery/image/"+imageID+"/votes",
  dataType: 'json',
  async: true,
  headers: {
    "Authorization": "Client-ID " + "d25fe2851fe0e96"
  },
  success: function (result){

    ups = result.data.ups;
    downs = result.data.downs;

    percentUp = ((ups)/(ups+downs))*100;


    percentDown = ((downs)/(ups+downs))*100;



    $(".progress-bar-success").css("width", percentUp+"%");
    $(".progress-bar-danger").css("width", percentDown+"%");

  }
});
}, 50);
}
