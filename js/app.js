$(document).ready(function(){
  $.ajax({
   url:"http://api.openweathermap.org/data/2.5/weather?q=London&APPID=14e151e484d9f117a91b94f3d9b10501&id=5128581&units=imperial",
    dataType: 'json',
    success: function(data) {
    var fToCel = ((10*Math.round(data.main.temp - 32) * 5 / 9))/10 +"&ordm;"+" Celsius";
   $('#btnLondon').one( "click", function() {
    var newDiv = $('<div class="listing listing_ad job"></div>');
  $('body').append(newDiv);
  var temper = 49.02;
var round_temp = Math.floor(temper);
var fToCel_1 = ((round_temp-32)*5);
var fToCel_2 = fToCel_1/9;
var fToCel = Math.floor(fToCel_2);
 $('<p class = "pClass">'+fToCel+'</p>').appendTo('#subtitle');
 $('#btnReset').one( "click", function() {
  var remov = $("#subtitle").remove();
});
});
    },
    error: function() {
      alert("error");
    }
  });   
  $('.btn').click(function() {
    location.reload();
});     
});