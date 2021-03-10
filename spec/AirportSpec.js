'use strict';

describe ('Airport', function() {
  let airport;

  beforeEach(function() {
    airport = new Airport();
  })

  it('instructs a plane to land at an airport', function() {
    airport.land("plane")
    expect(airport.viewHangar()).toContain("plane");
    //add toContain notes
  })
  
  it('lets planes take off from airport and confirms they left', function() {
    airport.land("plane")
    expect(airport.viewHangar()).toContain("plane")
    airport.takeOff("plane")
    expect(airport.viewHangar()).not.toContain("plane")
  })

})
