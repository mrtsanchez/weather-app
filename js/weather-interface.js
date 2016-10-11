var Weather = require('./../js/weather.js').weatherModule;


var displayWeather = function(city, humidityData, temperatureData, weatherConditions) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%,  the temperature is " + temperatureData + " and there's " + weatherConditions + ".");
}

function changeBackground(weather) {
if (weather === "few clouds" || weather === "scattered clouds" || weather === "broken clouds") {
$("body").css("background-image", "url(https://hd.unsplash.com/photo-1465572089651-8fde36c892dd)");
} else if (weather === "clear sky") {
  $("body").css("background-image", "url(https://hd.unsplash.com/photo-1445210421366-993b1fb9d1ed)");
} else if (weather === "shower rain" || weather === "rain" || weather === "mist") {  $("body").css("background-image", "url(https://hd.unsplash.com/photo-1447584402565-2a5b35a7ea8a)");
} else if (weather === "snow"){
  $("body").css("background-image", "url(https://hd.unsplash.com/photo-1418985991508-e47386d96a71)");
} else {
  $("body").css("background-image", "url(https://hd.unsplash.com/photo-1457528877294-b48235bdaa68)");
}
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();

  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    var format = $("input:radio[name=format]:checked").val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayWeather, format);


  });
});
