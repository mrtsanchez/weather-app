var apiKey = require('./../.env').apiKey;

function Weather (){

};



Weather.prototype.getWeather = function(city, displayWeather, format) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayWeather(city, response.main.humidity, convertTemperature(response.main.temp, format), response.weather[0].description);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

function convertTemperature (temp, format){
  console.log(format);
  if (format === "F"){
    return Math.round(parseInt(temp) * (9/5) - 459.67)+" F";
  } else {
    return Math.round(parseInt(temp) -273.15)+" C";
  }
};

exports.weatherModule = Weather;
