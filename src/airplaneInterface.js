$(document).ready(function(){
  var airport = new Airport();
  var plane = new Plane();
  updatePlanes();

  $('#takeoff').on('click', function(){
    airport.takeoff();
    updatePlanes();
    airport.weatherChange();
  });

  $('#land').on('click', function(){
    airport.land(plane);
    updatePlanes();
    airport.weatherChange();
  });

  $('#cycleWeather').on('click', function(){
    airport.weatherChange();
    $('#currentweather').text(airport.checkWeather());
  });

  function updatePlanes() {
    $('#currentTotal').text(airport.planes.length);
    $('#currentWeather').text(airport.weather);
    warning();
    airport.weatherChange();
  };

  function warning() {
    if (airport.planes.length == airport.capacity) {
      $('#warning').text(airport.land(plane));
    } else if(airport.weather == 'hurricane' || airport.planes.length == 0){
      $('#warning').text(airport.takeoff());
    } else {
      $('#warning').text('');
    };
  };
});
