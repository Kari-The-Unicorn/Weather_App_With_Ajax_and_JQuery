$(document).ready(function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=14e151e484d9f117a91b94f3d9b10501&id=5128581&units=imperial", true);
  xhr.send();
   
  xhr.onreadystatechange = processRequest;
   
  function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
      var lond = response.main.temp;
        // var fToCel = ((10*Math.round(lond - 32) * 5 / 9))/10 +"&ordm;"+" Celsius";
         $('#btnLondon').one( "click", function() {
          var newDiv = $('<div class="listing listing_ad job"></div>');
          $('body').append(newDiv);
      var round_temp = Math.floor(lond); 
       var fToCel_1 = ((round_temp-32)*5);
       var fToCel_2 = fToCel_1/9;
        var fToCel = Math.floor(fToCel_2);
      //   $('<p class = "pClass">'+fToCel+ &ordm + Celsiuss'</p>').appendTo('#subtitle');
      $('<p class = "pClass">'+fToCel +'</p>').appendTo('#subtitle')
         $('#btnReset').one( "click", function() {
           var remov = $("#subtitle").remove();
    });
  });
};
};
});





// $(document).ready(function(){
//   $.ajax({
//    url:"http://api.openweathermap.org/data/2.5/weather?q=London&APPID=14e151e484d9f117a91b94f3d9b10501&id=5128581&units=imperial",
//     dataType: 'json',
//     success: function(data) {
//     var fToCel = ((10*Math.round(data.main.temp - 32) * 5 / 9))/10 +"&ordm;"+" Celsius";
//    $('#btnLondon').one( "click", function() {
//     var newDiv = $('<div class="listing listing_ad job"></div>');
//   $('body').append(newDiv);
//   var temper = data.rates[0].mid;;
// var round_temp = Math.floor(temper);
// var fToCel_1 = ((round_temp-32)*5);
// var fToCel_2 = fToCel_1/9;
// var fToCel = Math.floor(fToCel_2);
//  $('<p class = "pClass">'+fToCel+'</p>').appendTo('#subtitle');
//  $('#btnReset').one( "click", function() {
//   var remov = $("#subtitle").remove();
// });
// });
//     },
//     error: function() {
//       alert("error");
//     }
//   });   
//   $('.btn').click(function() {
//     location.reload();
// });     
// });