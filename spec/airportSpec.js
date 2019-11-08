'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('Airport functionality', function(){
    it('Raises error on no planes', function(){
    expect(airport.takeoff()).toEqual('NO PLANES');
    });

    it('Can takeoff', function(){
      airport.land(plane);
      airport.takeoff();
      expect(airport.planes.length).toEqual(0);
    })
    it('Can land', function(){
      airport.land(plane);
      expect(airport.planes.length).toEqual(1);
    });

    it('Has Max capacity', function(){
      for(var i = 0; i < 25; i++) {
        airport.land(plane);
      }
      expect(airport.planes.length).toEqual(20);
    });
  });
});
