function Airport(){
  this.DEFAULT_CAPACITY = 20;
  this.capacity = this.DEFAULT_CAPACITY;
  this.planes = [];
  this.weather = 'clear';
  this.weatherOptions = ['clear', 'stormy', 'hurricane'];
};

Airport.prototype.takeoff = function(){
  if(this.planes.length == 0){
    return 'NO PLANES';
  } else if (this.weather == 'hurricane') {
    return "Can't take off";
  };
  this.planes.pop();
};

Airport.prototype.land = function(plane){
  if(this.planes.length >= this.capacity){
    return 'Airport is full';
  } else if (this.weather == 'hurricane') {
    return "Can't Land";
  };
  this.planes.push(plane);
};

Airport.prototype.checkWeather = function(){
  return this.weather;
};

Airport.prototype.weatherChange = function(){
  this.weather = this.weatherOptions[Math.floor(Math.random()*3)];
}
