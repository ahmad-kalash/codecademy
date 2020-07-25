import  * as module from './5-airplane';

function displayFuelCapacity() {
  module.aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  module.aircrafts.forEach(function(element) {
   console.log(element['name'] + ' meets staff requirements: ' + module.meetsStaffReqs(element['availableStaff'], module.flightReqs['requiredStaff']) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  module.aircrafts.forEach(function(element) {
   console.log(element['name'] + ' meets speed range requirements:' + module.meetsSpeedRangeReqs(element['maxSpeed'], element['minSpeed'], module.flightReqs['requiredSpeedRange']));
  });
}

displaySpeedRangeStatus();