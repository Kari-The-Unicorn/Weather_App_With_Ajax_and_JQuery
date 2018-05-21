$(document).ready(function () {
  var d = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dt = new Date();
  var date = ((dt.getDate() < 10) ? '0' : '') + dt.getDate() + '.' + (((dt.getMonth() + 1) < 10) ? '0' : '') + (dt.getMonth() + 1) + '.' + dt.getFullYear();

  document.getElementById("todayIs").innerHTML = days[d.getDay()] +",";
  document.getElementById("todayDate").innerHTML = date;

  var warsaw = $('#warsaw');
  var london = $('#london');
  var dublin = $('#dublin');
  var copenhagen = $('#copenhagen');
  var berlin = $('#berlin');
  var rome = $('#rome');
  var paris = $('#paris');
  var vienna = $('#vienna');
  var oslo = $('#oslo');
  var brussels = $('#brussels');
  var amsterdam = $('#amsterdam');
  var helsinki = $('#helsinki');
  var newYork = $('#newYork');
  var wdg1 = $('#wdg1');
  var wdg2 = $('#wdg2');
  var wdg3 = $('#wdg3');
  var wdg4 = $('#wdg4');
  var wdg5 = $('#wdg5');
  var wdg6 = $('#wdg6');
  var wdg7 = $('#wdg7');
  var wdg8 = $('#wdg8');
  var wdg9 = $('#wdg9');
  var wdg10 = $('#wdg10');
  var wdg12 = $('#wdg12');
  var wdg13 = $('#wdg13');
  var wdg14 = $('#wdg14');

  warsaw.click(function display() {
    wdg1.removeClass("hidd");
    wdg1.addClass("block");
    wdg1.siblings().removeClass('block');
    wdg1.siblings().addClass('hidd');
  });
  london.click(function display() {
    wdg2.removeClass("hidd");
    wdg2.addClass("block");
    wdg2.siblings().removeClass('block');
    wdg2.siblings().addClass('hidd');
  });
  dublin.click(function display() {
    wdg3.removeClass("hidd");
    wdg3.addClass("block");
    wdg3.siblings().removeClass('block');
    wdg3.siblings().addClass('hidd');
  });
  copenhagen.click(function display() {
    wdg4.removeClass("hidd");
    wdg4.addClass("block");
    wdg4.siblings().removeClass('block');
    wdg4.siblings().addClass('hidd');
  });
  berlin.click(function display() {
    wdg5.removeClass("hidd");
    wdg5.addClass("block");
    wdg5.siblings().removeClass('block');
    wdg5.siblings().addClass('hidd');
  });
  rome.click(function display() {
    wdg6.removeClass("hidd");
    wdg6.addClass("block");
    wdg6.siblings().removeClass('block');
    wdg6.siblings().addClass('hidd');
  });
  paris.click(function display() {
    wdg7.removeClass("hidd");
    wdg7.addClass("block");
    wdg7.siblings().removeClass('block');
    wdg7.siblings().addClass('hidd');
  });
  vienna.click(function display() {
    wdg8.removeClass("hidd");
    wdg8.addClass("block");
    wdg8.siblings().removeClass('block');
    wdg8.siblings().addClass('hidd');
  });
  oslo.click(function display() {
    wdg9.removeClass("hidd");
    wdg9.addClass("block");
    wdg9.siblings().removeClass('block');
    wdg9.siblings().addClass('hidd');
  });
  brussels.click(function display() {
    wdg10.removeClass("hidd");
    wdg10.addClass("block");
    wdg10.siblings().removeClass('block');
    wdg10.siblings().addClass('hidd');
  });
  //event - pressing enter//
  document.body.onkeydown = function(e) {
    if (e.keyCode == 13){
    document.getElementById("submit").click();
    console.log("enter");
    }
};

  $('#submit').click(function add() {
    
    var task = $('#entry').val();

    if (task != '') {

      var xhr = new XMLHttpRequest();

      xhr.open('GET', "http://api.openweathermap.org/data/2.5/weather?q=" + task + "&APPID=14e151e484d9f117a91b94f3d9b10501&id=5128581&units=imperial", true);
      xhr.send();
      xhr.onreadystatechange = processRequest;

      function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {

          var response = JSON.parse(xhr.responseText);
          var fahrenh = response.main.temp;

             
               var divTemp = $('<div"></div>');
               var counter=divTemp.length;
               if(counter>0){
                // ('#subtitle').innerHTML = "";
            // ('#subtitle').remove();
              //   // $('body').find(divTemp).remove();
              $('#subtitle').empty();
              //   // divTemp.html('');
              //   console.log(counter);
                }
              // else{
              //     $('body').append(divTemp);
              //   };
                
                
               
            var fToCel = (Math.floor(fahrenh - 32) * 5) / 9;

            fToCel = Math.ceil(fToCel);
            $('<p class = "pClass" >' + fToCel + '&ordm Celsiuss' + '</p>').appendTo('#subtitle');

            var weatherIcon = response.weather[0].id;

            if (weatherIcon == 200 || weatherIcon == 201 || weatherIcon == 202 || weatherIcon == 210 || weatherIcon == 211 || weatherIcon == 212 || weatherIcon == 221 || weatherIcon == 230 || weatherIcon == 231 || weatherIcon == 232) {
              $('<img src="http://openweathermap.org/img/w/11d.png" class="img-rounded" alt="weatherIcon" width="60" height="60"></img>').appendTo('#subtitle');
            }
            if (weatherIcon == 300 || weatherIcon == 301 || weatherIcon == 302 || weatherIcon == 310 || weatherIcon == 311 || weatherIcon == 312 || weatherIcon == 313 || weatherIcon == 314 || weatherIcon == 321 || weatherIcon == 520 || weatherIcon == 521 || weatherIcon == 522 || weatherIcon == 531) {
              $('<img src="http://openweathermap.org/img/w/09d.png" class="img-rounded" alt="weatherIcon" width="60" height="60"></img>').appendTo('#subtitle');
            }
            if (weatherIcon == 500 || weatherIcon == 501 || weatherIcon == 502 || weatherIcon == 503 || weatherIcon == 504) {
              $('<img src="http://openweathermap.org/img/w/10d.png" class="img-rounded" alt="weatherIcon" width="60" height="60"></img>').appendTo('#subtitle');
            }
            if (weatherIcon == 511 || weatherIcon == 600 || weatherIcon == 601 || weatherIcon == 602 || weatherIcon == 611 || weatherIcon == 612 || weatherIcon == 615 || weatherIcon == 616 || weatherIcon == 620 || weatherIcon == 621 || weatherIcon == 622) {
              $('<img src="http://openweathermap.org/img/w/13d.png" class="img-rounded" alt="weatherIcon" width="60" height="60"></img>').appendTo('#subtitle');
            }
            if (weatherIcon == 701 || weatherIcon == 711 || weatherIcon == 721 || weatherIcon == 731 || weatherIcon == 741 || weatherIcon == 751 || weatherIcon == 761 || weatherIcon == 762 || weatherIcon == 771 || weatherIcon == 781) {
              $('<img src="http://openweathermap.org/img/w/50d.png" class="img-rounded" alt="weatherIcon" width="60" height="60"></img></p>').appendTo('#subtitle');
            }
            if (weatherIcon == 800) {
              $('<img src="http://openweathermap.org/img/w/01d.png" class="img-rounded" alt="weatherIcon" width="60" height="60"></img></p>').appendTo('#subtitle');
            }
            if (weatherIcon == 801) {
              $('<img src="http://openweathermap.org/img/w/02d.png" class="img-rounded" alt="weatherIcon" width="60" height="60"></img></p>').appendTo('#subtitle');
            }
            if (weatherIcon == 802) {
              $('<img src="http://openweathermap.org/img/w/03d.png" class="img-rounded" alt="weatherIcon" width="60" height="60"></img></p>').appendTo('#subtitle');
            }
            if (weatherIcon == 803 || weatherIcon == 804) {
              $('<img src="http://openweathermap.org/img/w/04d.png" class="img-rounded" alt="weatherIcon" width="60" height="60"></img></p>').appendTo('#subtitle');
            }
        };
      };
      return false;
    } else {
      $('#entry').attr('placeholder', 'Town can not be empty');
    }
    return false;
  });
  $('#btnReset').one("click", function () {
    location.reload();
  });
});