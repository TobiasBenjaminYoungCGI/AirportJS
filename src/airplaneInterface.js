$(document).ready(function(){
  var airport = new Airport();
  var plane = new Plane();
  updatePlanes();

  $('#takeoff').on('click', function(){
    airport.takeoff();
    updatePlanes();

  });

  $('#land').on('click', function(){
    airport.land(plane);
    updatePlanes();

  });

  $('#weathercheck').on('click', function(){
    $('#currentweather').text(airport.checkWeather());
  });

  $('#cycleWeather').on('click', function(){
    airport.weatherChange();
    $('#currentweather').text(airport.checkWeather());
  });

  function updatePlanes() {
    $('#currentTotal').text(airport.planes.length)
    warning();
    airport.weatherChange();
  };

  function warning() {
    if (airport.weather == 'hurricane' && airport.planes.length > 0) {
        $('#warning').text('Your plane just crashed over the pacific killing ' + Math.floor(Math.random()*200) + ' people');
    } else if (airport.planes.length == 0) {
        $('#warning').text(airport.takeoff());
    } else if (airport.planes.length == airport.capacity) {
      $('#warning').text('Airport FULL');
    } else {
      $('#warning').text('');
    }
  }
});
