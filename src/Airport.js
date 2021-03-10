'use strict';

class Airport {
  constructor(){
    this.hangar = []
  }

  land(plane){
    this.hangar.push(plane);
  }

  takeOff(plane){
    const index = this.hangar.indexOf(plane);
    if (index > -1) {
      this.hangar.splice(index, 1);
    }
    //add array pop to table
  }

  viewHangar(){
    return this.hangar;
  }

}